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
  },
  "w3": {
    "name": "Week 3: Crystallographic Texture",
    "terms": [
      [
        "Crystallographic texture",
        "A non-random distribution of crystal orientations in a polycrystal; says nothing about grain shape"
      ],
      [
        "Random texture",
        "Every crystal orientation present in equal amounts; the polycrystal is isotropic"
      ],
      [
        "Preferred orientation",
        "A tendency for many grains to share nearly the same crystal orientation"
      ],
      [
        "Anisotropy",
        "Properties that depend on direction; single crystals are anisotropic (copper: 67 GPa along [100], 191 GPa along [111])"
      ],
      [
        "Polycrystal",
        "A solid made of many small single crystals (grains), each with its own lattice orientation"
      ],
      [
        "Grain",
        "One single-crystal region in a polycrystal, separated from its neighbours by grain boundaries"
      ],
      [
        "Earing",
        "Wavy rim on a deep-drawn cup caused by plastic anisotropy of a textured sheet"
      ],
      [
        "Rolling direction (RD)",
        "The direction the sheet is fed through the rolls; the long direction of the sheet"
      ],
      [
        "Transverse direction (TD)",
        "The in-plane direction across the width of a rolled sheet"
      ],
      [
        "Normal direction (ND)",
        "The direction perpendicular to the sheet surface, through its thickness"
      ],
      [
        "Thickness reduction",
        "Percentage by which rolling makes a sheet thinner: (t0 - t) / t0. Not the same as true strain"
      ],
      [
        "True strain",
        "ln(t/t0) for thickness; negative along ND in rolling. 20% reduction is -0.223"
      ],
      [
        "Plane strain",
        "Deformation with extension or compression in two directions and zero strain in the third; the strain state of rolling"
      ],
      [
        "Uniaxial loading",
        "Loading along one axis; the other two directions strain equally and oppositely, giving a fibre texture"
      ],
      [
        "Strain rate",
        "How fast strain accumulates; 10^-3 /s means 0.1% per second"
      ],
      [
        "Fibre texture",
        "A texture in which one crystal direction lines up with a sample direction while grains are free to rotate about it"
      ],
      [
        "(hkl)",
        "Round brackets: one specific plane"
      ],
      [
        "{hkl}",
        "Curly brackets: a family of symmetry-equivalent planes"
      ],
      [
        "[uvw]",
        "Square brackets: one specific direction"
      ],
      [
        "<uvw>",
        "Angle brackets: a family of symmetry-equivalent directions"
      ],
      [
        "Bar over an index",
        "A negative index, so (1-10) is the plane with indices 1, -1, 0"
      ],
      [
        "Parallel (||)",
        "\"Is parallel to\"; <111> || ND means the <111> direction points along the sheet normal"
      ],
      [
        "{hkl}<uvw> notation",
        "An orientation: plane {hkl} lies in the sheet (normal along ND) and direction <uvw> points along RD"
      ],
      [
        "Miller-Bravais indices",
        "Four-index notation (hkil) for hexagonal planes, with i = -(h+k); directions [uvtw] with t = -(u+v)"
      ],
      [
        "c-axis",
        "The vertical axis of a hexagonal crystal, perpendicular to the basal plane"
      ],
      [
        "a-axes",
        "The three equivalent in-plane axes of a hexagonal crystal, 120 degrees apart, with a1 + a2 + a3 = 0"
      ],
      [
        "<a> direction",
        "A direction along an a-axis, such as <11-20>; the main slip direction in hcp metals"
      ],
      [
        "<c+a> direction",
        "A direction with both c and a components, such as <11-23>; the only slip that can strain a crystal along c"
      ],
      [
        "c/a ratio",
        "Height of the hexagonal cell divided by its base edge; about 1.59 for Ti and Zr, ideal 1.633"
      ],
      [
        "Thermomechanical processing",
        "Shaping a material by combined deformation and heat treatment, for example hot rolling then annealing"
      ],
      [
        "Cold work",
        "Plastic deformation below the recrystallisation temperature; dislocations tangle and the metal hardens"
      ],
      [
        "Work hardening",
        "Metal gets stronger as deformation continues because dislocations multiply and tangle"
      ],
      [
        "Dislocation",
        "A line defect, like an extra half-plane of atoms, whose motion carries slip"
      ],
      [
        "Slip",
        "Shear of one part of a crystal over another on a slip plane along a slip direction; rotates the lattice gradually"
      ],
      [
        "Slip system",
        "A slip plane together with a slip direction lying in it"
      ],
      [
        "Independent slip systems",
        "A crystal needs five independent systems to change shape arbitrarily; hcp <a> slip gives only four"
      ],
      [
        "Twinning",
        "A shear that reorients a region of crystal into a mirror image of the parent, giving a sudden large rotation"
      ],
      [
        "Twin variant",
        "One of the equivalent twin orientations; six {10-12} planes give six variants in hcp"
      ],
      [
        "Tensile twin (85° <11-20>)",
        "The main twin in Ti and Zr: an 85° rotation about <11-20> on {10-12} planes, formed when the c-axis is stretched"
      ],
      [
        "Basal plane",
        "The {0001} plane of an hcp crystal, perpendicular to the c-axis"
      ],
      [
        "Prismatic plane",
        "A {10-10} plane of an hcp crystal, parallel to the c-axis"
      ],
      [
        "Pyramidal plane",
        "A {10-11} plane of an hcp crystal, inclined to the c-axis"
      ],
      [
        "Zirconium hydride",
        "Brittle compound ZrHx that precipitates as plates when dissolved hydrogen in Zr exceeds its solubility"
      ],
      [
        "Hydride orientation relationship",
        "(0001) of Zr parallel to (111) of the hydride, so plates lie close to the basal plane of the host grain"
      ],
      [
        "Fuel cladding",
        "The thin metal tube, usually a zirconium alloy, that holds nuclear fuel pellets and keeps fission products in"
      ],
      [
        "Pole",
        "The normal to a crystal plane, drawn out to the surface of the reference sphere"
      ],
      [
        "Pole figure",
        "A stereographic projection showing where the normals of one plane family point relative to the sample axes"
      ],
      [
        "Stereographic projection",
        "A map of the upper hemisphere onto a disc by projecting from the opposite pole; a pole at angle θ lands at R tan(θ/2)"
      ],
      [
        "Equal-area projection",
        "A projection that keeps areas true so pole figure intensities are fair; the stereographic one keeps angles instead"
      ],
      [
        "{0002} pole figure",
        "Shows basal plane normals (c-axes) in hcp metals; (0001) is extinct in diffraction so (0002) is measured"
      ],
      [
        "Sample symmetry",
        "Rolled sheets have mirror symmetry in RD, TD, ND, so one quarter of a pole figure is enough"
      ],
      [
        "Euler angles",
        "Three successive rotations (φ1, Φ, φ2) that fix a crystal orientation relative to the sample axes"
      ],
      [
        "Bunge convention",
        "Euler rotations about ND, then the rotated RD, then the rotated ND"
      ],
      [
        "Orientation matrix",
        "The 3x3 matrix g from the Euler angles; its columns are RD, TD, ND in crystal coordinates"
      ],
      [
        "Orientation space",
        "The 3D space with axes φ1, Φ, φ2; each point is one crystal orientation"
      ],
      [
        "Orientation distribution function (ODF)",
        "f(g): the density of grains at each orientation g in orientation space"
      ],
      [
        "Multiples of random (MRD)",
        "Units for ODF and pole figure intensity; 1 means the same density as a random texture"
      ],
      [
        "ODF section",
        "A 2D slice of the ODF at constant φ2, drawn with φ1 and Φ as the two axes"
      ],
      [
        "Cube component",
        "{001}<100> rolling texture component, Euler angles (0, 0, 0)"
      ],
      [
        "Goss component",
        "{110}<001> component, Euler angles (0, 45, 0); used in transformer steel; named after Norman Goss"
      ],
      [
        "Brass component",
        "{110}<-112> component, Euler angles (35, 45, 0); found in rolled brass"
      ],
      [
        "Copper component",
        "{112}<111> component, Euler angles about (90, 35, 45); found in rolled copper"
      ],
      [
        "Fibre (in Euler space)",
        "A line of orientations that all share one crystal direction parallel to one sample direction"
      ],
      [
        "α-fibre",
        "bcc fibre with <110> parallel to RD"
      ],
      [
        "γ-fibre",
        "bcc fibre with <111> parallel to ND; good for deep drawing of steel sheet"
      ],
      [
        "η-fibre",
        "bcc fibre with <001> parallel to RD, running from Cube to Goss"
      ],
      [
        "ε-fibre",
        "bcc fibre with <110> parallel to TD"
      ],
      [
        "β-quench",
        "Heating Ti or Zr into the bcc β range and cooling fast, so hcp α forms as thin plates with a near-random texture"
      ],
      [
        "α and β phases (Ti, Zr)",
        "α is the low-temperature hcp phase; β is the high-temperature bcc phase (about 865 C for Zr, 882 C for Ti)"
      ],
      [
        "Ti-6Al-4V",
        "The most common titanium alloy: about 6 wt% Al and 4 wt% V, an α+β alloy"
      ],
      [
        "Lamellar microstructure",
        "A microstructure of thin parallel plates, as in β-quenched Zr or Ti"
      ],
      [
        "Recrystallisation",
        "Nucleation and growth of new strain-free grains in a deformed material"
      ],
      [
        "Discontinuous recrystallisation",
        "Recrystallisation by nucleation of new grains that then grow into the deformed matrix"
      ],
      [
        "Bimodal grain structure",
        "A grain size distribution with two populations, for example large and small grains together"
      ],
      [
        "Misorientation",
        "The smallest rotation that takes one grain lattice onto its neighbour; low-angle boundaries are under about 15 degrees"
      ],
      [
        "Hard orientation",
        "A crystal orientation with a small Schmid factor, needing a high stress to yield; for hcp, load along c"
      ],
      [
        "Soft orientation",
        "A crystal orientation with a large Schmid factor that yields at low stress; for hcp, load perpendicular to c"
      ],
      [
        "Schmid factor",
        "cosφ cosλ, which converts applied stress to resolved shear stress on a slip system; at most 0.5"
      ],
      [
        "Critical resolved shear stress (CRSS)",
        "The resolved shear stress at which a slip system starts to operate"
      ],
      [
        "XRD pole figure",
        "Pole figure measured by tilting and rotating a sample in an X-ray beam at a fixed diffraction angle; averages over a large area"
      ],
      [
        "EBSD",
        "Electron backscatter diffraction: a scanning-electron-microscope technique that maps crystal orientation point by point"
      ],
      [
        "IPF map",
        "Inverse pole figure map: a colour map in which each pixel is coloured by its crystal direction along a chosen sample axis"
      ],
      [
        "CPFEM",
        "Crystal plasticity finite element modelling: simulates deformation grain by grain using slip and twinning laws"
      ]
    ]
  }
};
