# EG2036 · Order in Materials

Study site for EG2036 (Order in Materials) at Swansea University.

**Live site (once published):** https://ayquresh23.github.io/eg2036/

## Contents

- Week 1: Crystal Structures and Crystallography
  - types of solids, the interatomic energy well (thermal expansion, stiffness, melting), bonding types
  - lattice, motif, crystal structure, lattice vectors, primitive and non-primitive unit cells
  - 2D Bravais lattices, 3D crystal systems and Bravais lattices, crystal facets
- 7 inline SVG diagrams (generated in the site's dark theme)
- 5 interactive 3D / plotted simulations in `widgets/`
- 37 glossary terms with flashcard mode, formula sheet, 11 MCQ trap cards
- Later Order topics (directions and Miller indices, close packing, ionic structures, solid solutions) and the disorder topics will be added as they are taught

## Structure

```
index.html            page shell (loads study-site-core from jsDelivr)
css/diagrams.css      styling for SVG diagrams and embedded simulations
js/content-data.js    all site content
js/glossary-data.js   glossary terms
widgets/              five self-contained simulations (embedded as iframes)
```

The simulations resize themselves via `postMessage` (see the listener at the bottom of `index.html`) and pause rendering when off screen. Three.js, OrbitControls and Chart.js load from a CDN.

## Credits

The five simulations are based on animations by **Dr Ashley Willow** (Swansea University, EG-2036 lecturer). They have been restyled to match this site, one broken colour string was fixed, and the physics is unchanged. The lecture content (Week 1 2026) belongs to the lecturer, so check with them before making this repository public.

## Part of the MatSciEng hub

← [All Modules](https://ayquresh23.github.io)
