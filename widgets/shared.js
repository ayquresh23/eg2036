/* Shared helpers for the EG2036 interactive simulations.
   - createStage: three.js scene, camera, orbit controls, responsive resize
   - loop: render loop that pauses when the frame is off screen or the tab is hidden
   - chartDefaults: dark-theme Chart.js defaults
   - reports its own height to the parent page so the iframe fits its content */
window.SimKit = (function () {
  'use strict';

  // 63-atom face-centred cubic block (2 x 2 x 2 cells, atoms touching) used by the bond animations.
  const ORDERED = [[-1.6, -1.6, -1.6], [-1.6, -1.6, 0.0], [-1.6, -1.6, 1.6], [-1.6, -0.8, -0.8], [-1.6, -0.8, 0.8], [-1.6, 0.0, -1.6], [-1.6, 0.0, 0.0], [-1.6, 0.0, 1.6], [-1.6, 0.8, -0.8], [-1.6, 0.8, 0.8], [-1.6, 1.6, -1.6], [-1.6, 1.6, 0.0], [-1.6, 1.6, 1.6], [-0.8, -1.6, -0.8], [-0.8, -1.6, 0.8], [-0.8, -0.8, -1.6], [-0.8, -0.8, 0.0], [-0.8, -0.8, 1.6], [-0.8, 0.0, -0.8], [-0.8, 0.0, 0.8], [-0.8, 0.8, -1.6], [-0.8, 0.8, 0.0], [-0.8, 0.8, 1.6], [-0.8, 1.6, -0.8], [-0.8, 1.6, 0.8], [0.0, -1.6, -1.6], [0.0, -1.6, 0.0], [0.0, -1.6, 1.6], [0.0, -0.8, -0.8], [0.0, -0.8, 0.8], [0.0, 0.0, -1.6], [0.0, 0.0, 0.0], [0.0, 0.0, 1.6], [0.0, 0.8, -0.8], [0.0, 0.8, 0.8], [0.0, 1.6, -1.6], [0.0, 1.6, 0.0], [0.0, 1.6, 1.6], [0.8, -1.6, -0.8], [0.8, -1.6, 0.8], [0.8, -0.8, -1.6], [0.8, -0.8, 0.0], [0.8, -0.8, 1.6], [0.8, 0.0, -0.8], [0.8, 0.0, 0.8], [0.8, 0.8, -1.6], [0.8, 0.8, 0.0], [0.8, 0.8, 1.6], [0.8, 1.6, -0.8], [0.8, 1.6, 0.8], [1.6, -1.6, -1.6], [1.6, -1.6, 0.0], [1.6, -1.6, 1.6], [1.6, -0.8, -0.8], [1.6, -0.8, 0.8], [1.6, 0.0, -1.6], [1.6, 0.0, 0.0], [1.6, 0.0, 1.6], [1.6, 0.8, -0.8], [1.6, 0.8, 0.8], [1.6, 1.6, -1.6], [1.6, 1.6, 0.0], [1.6, 1.6, 1.6]];

  // Pause rendering while this frame is scrolled out of view.
  let visible = true;
  document.addEventListener('DOMContentLoaded', function () {
    try {
      new IntersectionObserver(function (es) { visible = es[es.length - 1].isIntersecting; }, { threshold: 0 }).observe(document.body);
    } catch (e) { /* older browsers: keep rendering */ }
  });

  function createStage(stageEl, opts) {
    opts = opts || {};
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(opts.fov || 45, 1, 0.1, 1000);
    const p = opts.camPos || [0, 5, 16];
    camera.position.set(p[0], p[1], p[2]);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.className = 'webgl';
    stageEl.insertBefore(renderer.domElement, stageEl.firstChild);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    if (opts.target) controls.target.set(opts.target[0], opts.target[1], opts.target[2]);
    controls.update();

    scene.add(new THREE.AmbientLight(0xffffff, opts.ambient == null ? 0.75 : opts.ambient));
    const dir = new THREE.DirectionalLight(0xffffff, 0.55);
    dir.position.set(10, 20, 15);
    scene.add(dir);

    // On narrow (portrait) stages, pull the camera back so the model is not cropped at the sides.
    let fitK = 1;
    function resize() {
      const w = Math.max(stageEl.clientWidth, 1), h = Math.max(stageEl.clientHeight, 1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const k = Math.min(1.8, Math.max(1, 0.95 / camera.aspect));
      if (Math.abs(k - fitK) > 0.001) {
        camera.position.sub(controls.target).multiplyScalar(k / fitK).add(controls.target);
        fitK = k;
        controls.update();
      }
    }
    resize();
    if (window.ResizeObserver) new ResizeObserver(resize).observe(stageEl);
    else window.addEventListener('resize', resize);

    return { scene, camera, renderer, controls, resize };
  }

  function loop(fn) {
    (function tick() {
      requestAnimationFrame(tick);
      if (!visible || document.hidden) return;
      fn();
    })();
  }

  function chartDefaults() {
    if (!window.Chart) return;
    Chart.defaults.color = '#9a9aa8';
    Chart.defaults.borderColor = '#2c2c36';
    Chart.defaults.font.family = "Inter, 'Segoe UI', system-ui, sans-serif";
  }

  function gridColor(zeroLine) {
    return function (ctx) {
      return zeroLine && ctx.tick && ctx.tick.value === 0 ? '#6a6a78' : '#22222a';
    };
  }

  // Tell the parent page how tall this simulation needs to be.
  function reportHeight() {
    const el = document.querySelector('.sim-root') || document.body;
    const h = Math.ceil(el.getBoundingClientRect().height) + 4;
    try { parent.postMessage({ type: 'sim-height', src: location.pathname.split('/').pop(), h: h }, '*'); } catch (e) {}
  }
  window.addEventListener('load', function () {
    reportHeight();
    const el = document.querySelector('.sim-root') || document.body;
    if (window.ResizeObserver) new ResizeObserver(reportHeight).observe(el);
    else window.addEventListener('resize', reportHeight);
  });

  return { ORDERED, createStage, loop, chartDefaults, gridColor };
})();
