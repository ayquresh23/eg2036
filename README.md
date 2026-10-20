# EG2036 · Order in Materials

Study site for EG2036 (Order in Materials) at Swansea University.

**Live site (once published):** https://ayquresh23.github.io/eg2036/

## Contents

- Week 1: Crystal Structures and Crystallography
  - types of solids, the interatomic energy well (thermal expansion, stiffness, melting), bonding types
  - lattice, motif, crystal structure, lattice vectors, primitive and non-primitive unit cells
  - 2D Bravais lattices, 3D crystal systems and Bravais lattices, crystal facets
- Week 2: Directions, Planes and Close Packing
  - recap of unit cells and the seven crystal systems (minimum symmetry), fractional coordinates
  - lattice directions [uvw] and Miller indices (hkl), directions and planes of a form
  - close packing in 2D and 3D (HCP, CCP/FCC, BCC), octahedral and tetrahedral voids
  - atomic packing factor derivations for simple cubic, BCC, FCC and HCP, worked examples and practice questions
- Week 3: Crystallographic Texture
  - why texture matters, a notation guide (brackets, bars, hexagonal four-index symbols), the Zr fuel cladding case study with hydrides explained, slip systems and twinning
  - sample axes (RD, TD, ND), plane strain in rolling vs uniaxial strain
  - pole figures, Bunge Euler angles, orientation distribution functions, bcc fibres
  - how textures are measured (XRD and EBSD), texture development in rolled Zr and Ti and in loaded Ti alloys, hard and soft orientations
  - 12 practice questions with worked answers
- Week 4: Densities and Interstitial Holes (Dr Willow's "Week 3 2026" slides)
  - count-then-divide: linear density, planar density and theoretical density, with worked examples for Al, Cu and Fe
  - octahedral and tetrahedral holes in FCC: positions, counts per cell, and size derivations (0.414 R, 0.225 R)
  - BCC holes (0.155 R, 0.291 R), carbon in ferrite vs austenite, slide errata, 8 practice questions
- Week 5: Solid Solutions, Covalent and Ionic Structures (Dr Willow's "Week 4-5 2026" slides, Lectures 7 and 8)
  - interstitial vs substitutional solid solutions, Hume-Rothery rules, the 8 - N rule, polymorphism (iron)
  - ionic structures: radius ratio with geometric proofs, Pauling's two rules, NaCl, CsCl, zinc blende, wurtzite, CaF2, CaTiO3, TiO worked example
  - a symbols guide, 16 worked examples and practice questions
- 39 inline SVG diagrams (generated in the site's dark theme)
- 7 interactive simulations in `widgets/` (5 3D / plotted, 1 pole-figure tool with cubic and hexagonal modes, 1 radius-ratio explorer)
- 206 glossary terms with flashcard mode, formula sheet (36 blocks), 60 MCQ trap cards
- The disorder topics will be added as they are taught

## Structure

```
index.html            page shell (loads study-site-core from jsDelivr)
css/diagrams.css      styling for SVG diagrams and embedded simulations
js/content-data.js    all site content
js/glossary-data.js   glossary terms
widgets/              seven self-contained simulations (embedded as iframes)
```

The simulations resize themselves via `postMessage` (see the listener at the bottom of `index.html`) and pause rendering when off screen. Three.js, OrbitControls and Chart.js load from a CDN.

## Credits

Five of the simulations are based on animations by **Dr Ashley Willow** (Swansea University, EG-2036 lecturer). They have been restyled to match this site, one broken colour string was fixed, and the physics is unchanged. The Week 3 pole-figure tool (`widgets/pole-figure.html`) and the Week 5 radius-ratio explorer (`widgets/radius-ratio.html`) are original to this site. The lecture content (Dr Willow's Weeks 1 to 5, 2026, shown here as Weeks 1, 2, 4 and 5, and the Week 3 Crystallographic Texture slides by Dr Leo Prakash) belongs to the lecturers, so check with them before making this repository public.

## Part of the MatSciEng hub

← [All Modules](https://ayquresh23.github.io)
