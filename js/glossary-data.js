/* EG2036 Glossary Data: all terms across all weeks */

const glossaryData = {
  "w1": {
    "name": "Week 1: Crystal Structures and Crystallography",
    "terms": [
      [
        "Crystalline solid",
        "A solid whose atoms, ions or molecules are arranged in a definite, repeating three-dimensional pattern"
      ],
      [
        "Single crystal",
        "A solid with one continuous ordered pattern across its whole volume; every atom is related to every equivalent atom by translation"
      ],
      [
        "Polycrystal",
        "A solid made of many small single crystals (grains) with different orientations"
      ],
      [
        "Grain",
        "One single-crystal region within a polycrystal, usually 100 nm to 100 µm across"
      ],
      [
        "Grain boundary",
        "The interface between two grains of different orientation"
      ],
      [
        "Nanocrystalline",
        "A polycrystal whose grains are smaller than about 10 nm"
      ],
      [
        "Amorphous solid",
        "A solid with no long-range order, only short-range order; examples are glass, plastics and amorphous silicon"
      ],
      [
        "Long-range order",
        "A regular pattern that repeats over many atomic dimensions, the defining feature of crystals"
      ],
      [
        "Short-range order",
        "Order only over a few atomic dimensions, such as sensible bond lengths and angles to nearest neighbours"
      ],
      [
        "Equilibrium bond length (r₀)",
        "The interatomic spacing at the bottom of the energy well, where attraction and repulsion balance and the net force is zero"
      ],
      [
        "Bond energy",
        "The depth of the energy well: the energy needed to separate two bonded atoms completely"
      ],
      [
        "Attractive term",
        "The part of the interatomic energy that pulls atoms together, written -A/rᵐ"
      ],
      [
        "Repulsive term",
        "The part of the interatomic energy that pushes atoms apart at short range, written B/rⁿ, with n larger than m"
      ],
      [
        "Thermal expansion",
        "The increase in average interatomic distance with temperature, caused by the asymmetry of the energy well"
      ],
      [
        "Young's modulus (E)",
        "A measure of stiffness, related to the curvature of the energy well at r₀ (E ≈ S₀/r₀)"
      ],
      [
        "Enthalpy of fusion",
        "The energy absorbed at the melting point to break down the ordered lattice, with little change in average spacing"
      ],
      [
        "Metallic bond",
        "Bonding by delocalised electrons shared among ion cores; non-directional, so metals pack densely"
      ],
      [
        "Ionic bond",
        "Electrostatic attraction between oppositely charged ions; large bond energy, non-directional"
      ],
      [
        "Covalent bond",
        "Bonding by shared electron pairs between atoms; directional, with a bond energy ranging from large (diamond) to small (bismuth)"
      ],
      [
        "Molecular bond (van der Waals)",
        "Weak bonding between molecules or polymer chains from dipole interactions; the smallest bond energy"
      ],
      [
        "Crystallography",
        "The experimental science of determining atomic arrangement in solids, usually from diffraction patterns"
      ],
      [
        "Lattice",
        "A periodic array of points in space in which every point has identical surroundings"
      ],
      [
        "Lattice point",
        "An infinitesimal point in a lattice; it need not lie at an atom's centre"
      ],
      [
        "Motif (basis)",
        "The group of atoms, ions or molecules associated with each lattice point"
      ],
      [
        "Crystal structure",
        "The periodic arrangement of atoms, described as lattice + motif"
      ],
      [
        "Lattice vector (R)",
        "A vector R = n₁a + n₂b (+ n₃c) joining any two lattice points, with integer n"
      ],
      [
        "Primitive vectors",
        "The basis vectors a, b (c in 3D) from which every lattice point is reached by integer steps; the choice is not unique"
      ],
      [
        "Unit cell",
        "The smallest component that reproduces the whole crystal by pure translation; chosen with short, near-perpendicular sides that show the full symmetry"
      ],
      [
        "Primitive cell",
        "A unit cell containing exactly one lattice point"
      ],
      [
        "Non-primitive cell",
        "A unit cell containing more than one lattice point"
      ],
      [
        "Bravais lattice",
        "A distinct lattice type defined by its translational and rotational symmetry: 5 in 2D and 14 in 3D"
      ],
      [
        "Crystal system",
        "One of 7 cell shapes in 3D, grouped by symmetry (the cell edges and angles)"
      ],
      [
        "Primitive (P) lattice",
        "A cell with lattice points at the corners only"
      ],
      [
        "Body-centred (I) lattice",
        "A cell with an extra lattice point at the cell centre"
      ],
      [
        "Face-centred (F) lattice",
        "A cell with an extra lattice point at the centre of every face"
      ],
      [
        "Side-centred (C) lattice",
        "A cell with an extra lattice point at the centre of one pair of opposite faces"
      ],
      [
        "Facet",
        "A flat face of a crystal or nanoparticle corresponding to a particular crystal plane"
      ]
    ]
  },
  "w2": {
    "name": "Week 2: Directions, Planes and Close Packing",
    "terms": [
      [
        "Fractional coordinates",
        "Atom positions written as (x, y, z), each a fraction of the lattice constant along a, b and c, measured from a corner origin"
      ],
      [
        "Lattice parameters",
        "The edge lengths a, b, c and angles α, β, γ that describe the shape of a unit cell"
      ],
      [
        "n-fold rotation axis",
        "An axis about which turning the crystal by 360°/n leaves it looking identical"
      ],
      [
        "Minimum symmetry",
        "The least symmetry a lattice must have to belong to a crystal system, for example four 3-fold axes for cubic"
      ],
      [
        "Lattice direction",
        "A direction in the crystal, given relative to the crystal axes as the ratio u : v : w and written [uvw]"
      ],
      [
        "[uvw]",
        "Notation for one lattice direction: smallest integers, square brackets, no commas, negatives with a bar"
      ],
      [
        "Direction family",
        "All directions made equivalent by the crystal symmetry, written in angle brackets; in cubic the 100 family has 6 members"
      ],
      [
        "Miller indices (hkl)",
        "Three integers naming a family of parallel planes: the reduced reciprocals of the plane's intercepts on a, b and c"
      ],
      [
        "Intercept",
        "The point where a plane meets a crystal axis, in units of the lattice parameter; infinity if the plane is parallel to the axis"
      ],
      [
        "Plane family {hkl}",
        "All planes made equivalent by the crystal symmetry, written with curly brackets; in cubic {100} is the six cube faces"
      ],
      [
        "Interplanar spacing",
        "The perpendicular distance between neighbouring planes of a family; in cubic d = a / √(h² + k² + l²)"
      ],
      [
        "Close-packed structure",
        "An arrangement of equal spheres with the highest possible density, coordination number 12 and APF 0.74"
      ],
      [
        "Packing efficiency (2D)",
        "The fraction of a plane covered by circles: 0.785 for square packing and 0.907 for hexagonal packing"
      ],
      [
        "Coordination number",
        "The number of nearest neighbours of an atom: 12 for FCC and HCP, 8 for BCC, 6 for simple cubic"
      ],
      [
        "Stacking sequence",
        "The order in which close-packed layers sit on one another, labelled A, B and C by their position"
      ],
      [
        "ABAB stacking",
        "Every second layer sits directly above the first; this gives hexagonal close-packed (HCP)"
      ],
      [
        "ABCABC stacking",
        "The third layer sits over the dips not used by B, repeating every three layers; this gives cubic close-packed (CCP = FCC)"
      ],
      [
        "Hexagonal close-packed (HCP)",
        "Close-packed structure with ABAB stacking; 6 atoms per hexagonal cell, CN 12, APF 0.74, ideal c/a ≈ 1.633"
      ],
      [
        "Cubic close-packed (CCP)",
        "Close-packed structure with ABC stacking; its unit cell is face-centred cubic"
      ],
      [
        "Face-centred cubic (FCC)",
        "Cubic cell with atoms at the corners and face centres; 4 atoms per cell, CN 12, APF 0.74"
      ],
      [
        "Body-centred cubic (BCC)",
        "Cubic cell with atoms at the corners and the body centre; 2 atoms per cell, CN 8, APF 0.68"
      ],
      [
        "Close-packed direction",
        "The direction along which atoms touch: the 110 family (face diagonals) in FCC and the 111 family (body diagonals) in BCC"
      ],
      [
        "Close-packed plane",
        "The most densely packed plane of atoms: the {111} planes in FCC, the basal planes in HCP"
      ],
      [
        "Octahedral void",
        "A gap surrounded by 6 atoms, about 0.414 r in radius; 1 per atom, 4 per FCC cell"
      ],
      [
        "Tetrahedral void",
        "A gap surrounded by 4 atoms, about 0.225 r in radius; 2 per atom, 8 per FCC cell"
      ],
      [
        "Interstitial site",
        "A void between host atoms where a small foreign atom can sit"
      ],
      [
        "Atomic packing factor (APF)",
        "The fraction of a unit cell's volume occupied by atoms, treated as hard spheres"
      ],
      [
        "Hard-sphere model",
        "Treating atoms as rigid touching spheres, used to relate lattice parameter to atomic radius"
      ],
      [
        "Atoms per unit cell",
        "Counted with corners = ⅛, edges = ¼, faces = ½, inside = 1: simple cubic 1, BCC 2, FCC 4, HCP 6"
      ],
      [
        "c/a ratio",
        "The height-to-width ratio of the hexagonal cell; ideal sphere stacking gives √(8/3) ≈ 1.633"
      ]
    ]
  }
};
