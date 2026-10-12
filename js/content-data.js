// EG2036 Study Site: content data
// Schema documented in study-site-core/js/render.js
window.SITE_CONFIG = {
  "slug": "eg2036",
  "topicIds": [
    "w1",
    "w2",
    "w3"
  ],
  "navOrder": [
    "home",
    "w1",
    "w2",
    "w3",
    "formulas",
    "glossary",
    "traps"
  ],
  "topicColors": {
    "w1": "#0ea5c6",
    "w2": "#f4a261",
    "w3": "#8855f5"
  },
  "topicLabels": {
    "w1": "Crystal Structures",
    "w2": "Directions, Planes, Packing",
    "w3": "Crystallographic Texture"
  }
};

window.SITE_CONTENT = {
  "home": {
    "tag": "Order in Materials · Swansea University",
    "title": "EG2036 Study Site",
    "subtitle": "How atoms arrange themselves in solids and why it matters: bonding, lattices, unit cells, crystal systems, directions and planes, close packing and packing factors, how crystal orientation (texture) builds up when metals are deformed, and later ionic structures and solid solutions. Built out week by week as lectures run, with interactive simulations for the ideas that are easier to see than to read.",
    "stats": [
      {
        "value": "3",
        "label": "Weeks built"
      },
      {
        "value": "6",
        "label": "Simulations"
      },
      {
        "value": "150",
        "label": "Terms"
      },
      {
        "value": "26",
        "label": "Formulas"
      },
      {
        "value": "41",
        "label": "Exam Traps"
      }
    ],
    "extra": [
      {
        "type": "raw",
        "html": "<h2>Assessment</h2>"
      },
      {
        "type": "raw",
        "html": "<div class=\"concept-box note\"><div class=\"concept-box-title\">Assessment (from the Week 1 lecture)</div><ul><li>Unseen 2.5 h exam, January 2027: <strong>35%</strong>. Two A4 sheets of notes allowed, both sides of both.</li><li>Online Canvas test on Order: <strong>7.5%</strong>, opens at the end of the Order lectures.</li><li>Section A is compulsory (order and disorder). Section B: pick 2 of 3, one all order, one all disorder, one 50:50.</li><li>Past exam questions for Order are in the Canvas Modules section.</li></ul></div>"
      },
      {
        "type": "raw",
        "html": "<h2>Quick reference</h2>"
      },
      {
        "type": "raw",
        "html": "<div class=\"card-grid\"><div class=\"topic-card\" onclick=\"showSection('formulas')\" style=\"--bar-color:#0ea5c6\"><div class=\"topic-num\">Reference</div><div class=\"topic-title\">📐 Formula Sheet</div><div class=\"topic-desc\">Every equation so far, with variables defined.</div></div><div class=\"topic-card\" onclick=\"showSection('glossary')\" style=\"--bar-color:#2fa15c\"><div class=\"topic-num\">Reference</div><div class=\"topic-title\">📚 Glossary</div><div class=\"topic-desc\">150 terms from Weeks 1 to 3. Search, filter, and flashcard mode.</div></div><div class=\"topic-card\" onclick=\"showSection('traps')\" style=\"--bar-color:#e04545\"><div class=\"topic-num\">Reference</div><div class=\"topic-title\">⚠️ MCQ Traps</div><div class=\"topic-desc\">Plausible-but-wrong claims the exam uses.</div></div></div>"
      }
    ]
  },
  "topics": [
    {
      "id": "w1",
      "numLabel": "Week 1",
      "title": "Crystal Structures and Crystallography",
      "subtitle": "Why solids order themselves, how bonding sets their properties, and the language (lattice, motif, unit cell, Bravais lattice) used to describe that order. Five interactive simulations and seven diagrams do most of the explaining.",
      "sections": [
        {
          "type": "toc",
          "title": "This week",
          "items": [
            {
              "href": "#w1-why",
              "label": "Why study crystal structures"
            },
            {
              "href": "#w1-solids",
              "label": "Types of solids: crystal, polycrystal, amorphous"
            },
            {
              "href": "#w1-well",
              "label": "The energy well: why atoms sit where they do"
            },
            {
              "href": "#w1-bonding",
              "label": "Bonding types and what they do to properties"
            },
            {
              "href": "#w1-uses",
              "label": "One curve, three properties: expansion, stiffness, melting"
            },
            {
              "href": "#w1-lattice",
              "label": "Lattice, motif and crystal structure"
            },
            {
              "href": "#w1-vectors",
              "label": "Lattice vectors"
            },
            {
              "href": "#w1-cells2d",
              "label": "Unit cells in 2D: primitive vs non-primitive"
            },
            {
              "href": "#w1-bravais2d",
              "label": "The five 2D Bravais lattices"
            },
            {
              "href": "#w1-3d",
              "label": "3D: 7 crystal systems, 14 Bravais lattices"
            },
            {
              "href": "#w1-planes",
              "label": "Why surfaces matter: crystal planes and facets"
            }
          ]
        },
        {
          "type": "h2",
          "id": "w1-why",
          "text": "Why Study Crystal Structures?"
        },
        {
          "type": "p",
          "text": "Most elements and compounds are solids at room temperature, and most solids are crystals: atoms stacked in a regular array. That array decides mechanical, electrical and chemical behaviour. Iron is the classic case. Its crystal structure changes when steel is heated, and heat treatment works by exploiting exactly that change.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Think of a solid as a crowd.</strong> A marching band in formation is a crystal: know where one person stands and you can predict everyone. A tightly packed festival crowd is an amorphous solid: neighbours are close, but there is no pattern. Everything this week is about describing the marching band precisely.</div></div>"
        },
        {
          "type": "p",
          "text": "There is a second reason that is easy to miss. Surface reactivity (corrosion, catalysis, semiconductor behaviour, batteries) depends on <em>which crystal face</em> is exposed, not just on which element it is. The last section of this week shows that with a simulation.",
          "class": ""
        },
        {
          "type": "h2",
          "id": "w1-solids",
          "text": "Types of Solids"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 262\" role=\"img\" aria-label=\"Single crystal, polycrystal and amorphous solid\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"sol-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"sol-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"sol-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><rect x=\"10\" y=\"38\" width=\"240\" height=\"190\" rx=\"8\" class=\"dg-frame\"/><text x=\"130\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Single crystal</text><text x=\"130\" y=\"250\" class=\"dg-t\" text-anchor=\"middle\">one repeating pattern throughout</text><rect x=\"270\" y=\"38\" width=\"240\" height=\"190\" rx=\"8\" class=\"dg-frame\"/><text x=\"390\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Polycrystal</text><text x=\"390\" y=\"250\" class=\"dg-t\" text-anchor=\"middle\">ordered grains meeting at boundaries</text><rect x=\"530\" y=\"38\" width=\"240\" height=\"190\" rx=\"8\" class=\"dg-frame\"/><text x=\"650\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Amorphous</text><text x=\"650\" y=\"250\" class=\"dg-t\" text-anchor=\"middle\">order over a few atoms only</text><circle cx=\"34\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"61.5\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"89\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"116.5\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"144\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"171.5\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"199\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"226.5\" cy=\"63\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"34\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"61.5\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"89\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"116.5\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"144\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"171.5\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"199\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"226.5\" cy=\"91\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"34\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"61.5\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"89\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"116.5\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"144\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"171.5\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"199\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"226.5\" cy=\"119\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"34\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"61.5\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"89\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"116.5\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"144\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"171.5\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"199\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"226.5\" cy=\"147\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"34\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"61.5\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"89\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"116.5\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"144\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"171.5\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"199\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"226.5\" cy=\"175\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"34\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"61.5\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"89\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"116.5\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"144\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"171.5\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"199\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><circle cx=\"226.5\" cy=\"203\" r=\"8\" class=\"dg-atomA\"/><clipPath id=\"sol-g0\"><polygon points=\"270,38 380,38 360,108 270,128\"/></clipPath><g clip-path=\"url(#sol-g0)\"><g transform=\"translate(320,78) rotate(0)\"><circle cx=\"-182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-182\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-156\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-130\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-104\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-78\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-52\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"-26\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"0\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"26\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"0\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"26\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"52\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"78\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"104\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"130\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"156\" r=\"7.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"182\" r=\"7.5\" class=\"dg-atomA\"/></g></g><clipPath id=\"sol-g1\"><polygon points=\"380,38 510,38 510,98 430,118 360,108\"/></clipPath><g clip-path=\"url(#sol-g1)\"><g transform=\"translate(438,80) rotate(24)\"><circle cx=\"-182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-182\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-156\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-130\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-104\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-78\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-52\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"-26\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"0\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"26\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"52\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"78\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"104\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"130\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"156\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"0\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"26\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"52\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"78\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"104\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"130\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"156\" r=\"7.5\" class=\"dg-atomG\"/><circle cx=\"182\" cy=\"182\" r=\"7.5\" class=\"dg-atomG\"/></g></g><clipPath id=\"sol-g2\"><polygon points=\"270,128 360,108 430,118 410,228 270,228\"/></clipPath><g clip-path=\"url(#sol-g2)\"><g transform=\"translate(348,162) rotate(-16)\"><circle cx=\"-182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-182\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-156\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-130\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-104\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-78\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-52\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"-26\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"0\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"26\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"52\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"78\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"104\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"130\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"156\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"0\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"26\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"52\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"78\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"104\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"130\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"156\" r=\"7.5\" class=\"dg-atomP\"/><circle cx=\"182\" cy=\"182\" r=\"7.5\" class=\"dg-atomP\"/></g></g><clipPath id=\"sol-g3\"><polygon points=\"430,118 510,98 510,228 410,228\"/></clipPath><g clip-path=\"url(#sol-g3)\"><g transform=\"translate(465,168) rotate(38)\"><circle cx=\"-182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-182\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-156\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-130\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-104\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-78\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-52\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"-26\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"0\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"26\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"52\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"78\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"104\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"130\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"156\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"-182\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"-156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"-130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"-104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"-78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"-52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"-26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"0\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"26\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"52\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"78\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"104\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"130\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"156\" r=\"7.5\" class=\"dg-atomB\"/><circle cx=\"182\" cy=\"182\" r=\"7.5\" class=\"dg-atomB\"/></g></g><polygon points=\"270,38 380,38 360,108 270,128\" class=\"dg-grain\"/><polygon points=\"380,38 510,38 510,98 430,118 360,108\" class=\"dg-grain\"/><polygon points=\"270,128 360,108 430,118 410,228 270,228\" class=\"dg-grain\"/><polygon points=\"430,118 510,98 510,228 410,228\" class=\"dg-grain\"/><line x1=\"639.9\" y1=\"142.7\" x2=\"662.6\" y2=\"124.5\" class=\"dg-bond\" /><line x1=\"639.9\" y1=\"142.7\" x2=\"622.8\" y2=\"125.4\" class=\"dg-bond\" /><line x1=\"639.9\" y1=\"142.7\" x2=\"618.6\" y2=\"163\" class=\"dg-bond\" /><line x1=\"639.9\" y1=\"142.7\" x2=\"653.5\" y2=\"169.2\" class=\"dg-bond\" /><line x1=\"739.9\" y1=\"127.4\" x2=\"722.8\" y2=\"142.7\" class=\"dg-bond\" /><line x1=\"583.1\" y1=\"134.9\" x2=\"559.5\" y2=\"154\" class=\"dg-bond\" /><line x1=\"583.1\" y1=\"134.9\" x2=\"598.4\" y2=\"117.1\" class=\"dg-bond\" /><line x1=\"677.5\" y1=\"180.5\" x2=\"682.6\" y2=\"151.7\" class=\"dg-bond\" /><line x1=\"677.5\" y1=\"180.5\" x2=\"653.5\" y2=\"169.2\" class=\"dg-bond\" /><line x1=\"677.5\" y1=\"180.5\" x2=\"701.8\" y2=\"178\" class=\"dg-bond\" /><line x1=\"564\" y1=\"101.2\" x2=\"584.3\" y2=\"91.2\" class=\"dg-bond\" /><line x1=\"564\" y1=\"101.2\" x2=\"550.4\" y2=\"127.2\" class=\"dg-bond\" /><line x1=\"564\" y1=\"101.2\" x2=\"544.1\" y2=\"86\" class=\"dg-bond\" /><line x1=\"563.2\" y1=\"183.2\" x2=\"559.5\" y2=\"154\" class=\"dg-bond\" /><line x1=\"563.2\" y1=\"183.2\" x2=\"584.4\" y2=\"170.6\" class=\"dg-bond\" /><line x1=\"563.2\" y1=\"183.2\" x2=\"565.3\" y2=\"212.3\" class=\"dg-bond\" /><line x1=\"691\" y1=\"58.8\" x2=\"713\" y2=\"80.8\" class=\"dg-bond\" /><line x1=\"691\" y1=\"58.8\" x2=\"689.1\" y2=\"84.3\" class=\"dg-bond\" /><line x1=\"752.2\" y1=\"208.3\" x2=\"735\" y2=\"193.1\" class=\"dg-bond\" /><line x1=\"752.2\" y1=\"208.3\" x2=\"722.1\" y2=\"212.4\" class=\"dg-bond\" /><line x1=\"577.4\" y1=\"54.4\" x2=\"605.3\" y2=\"63.4\" class=\"dg-bond\" /><line x1=\"577.4\" y1=\"54.4\" x2=\"552.4\" y2=\"61.8\" class=\"dg-bond\" /><line x1=\"656\" y1=\"61.6\" x2=\"633.3\" y2=\"68.8\" class=\"dg-bond\" /><line x1=\"584.3\" y1=\"91.2\" x2=\"610.8\" y2=\"89.2\" class=\"dg-bond\" /><line x1=\"584.3\" y1=\"91.2\" x2=\"598.4\" y2=\"117.1\" class=\"dg-bond\" /><line x1=\"550.4\" y1=\"127.2\" x2=\"559.5\" y2=\"154\" class=\"dg-bond\" /><line x1=\"637.4\" y1=\"188.5\" x2=\"608.5\" y2=\"195.3\" class=\"dg-bond\" /><line x1=\"637.4\" y1=\"188.5\" x2=\"618.6\" y2=\"163\" class=\"dg-bond\" /><line x1=\"637.4\" y1=\"188.5\" x2=\"653.5\" y2=\"169.2\" class=\"dg-bond\" /><line x1=\"637.4\" y1=\"188.5\" x2=\"655\" y2=\"203.8\" class=\"dg-bond\" /><line x1=\"641\" y1=\"97.1\" x2=\"610.8\" y2=\"89.2\" class=\"dg-bond\" /><line x1=\"641\" y1=\"97.1\" x2=\"633.3\" y2=\"68.8\" class=\"dg-bond\" /><line x1=\"641\" y1=\"97.1\" x2=\"670.5\" y2=\"99.5\" class=\"dg-bond\" /><line x1=\"722.1\" y1=\"166.7\" x2=\"748.4\" y2=\"174.8\" class=\"dg-bond\" /><line x1=\"722.1\" y1=\"166.7\" x2=\"735\" y2=\"193.1\" class=\"dg-bond\" /><line x1=\"722.1\" y1=\"166.7\" x2=\"722.8\" y2=\"142.7\" class=\"dg-bond\" /><line x1=\"722.1\" y1=\"166.7\" x2=\"701.8\" y2=\"178\" class=\"dg-bond\" /><line x1=\"610.8\" y1=\"89.2\" x2=\"605.3\" y2=\"63.4\" class=\"dg-bond\" /><line x1=\"610.8\" y1=\"89.2\" x2=\"633.3\" y2=\"68.8\" class=\"dg-bond\" /><line x1=\"610.8\" y1=\"89.2\" x2=\"598.4\" y2=\"117.1\" class=\"dg-bond\" /><line x1=\"605.3\" y1=\"63.4\" x2=\"633.3\" y2=\"68.8\" class=\"dg-bond\" /><line x1=\"706.5\" y1=\"116.9\" x2=\"722.8\" y2=\"142.7\" class=\"dg-bond\" /><line x1=\"544.1\" y1=\"86\" x2=\"552.4\" y2=\"61.8\" class=\"dg-bond\" /><line x1=\"559.5\" y1=\"154\" x2=\"584.4\" y2=\"170.6\" class=\"dg-bond\" /><line x1=\"748.4\" y1=\"174.8\" x2=\"735\" y2=\"193.1\" class=\"dg-bond\" /><line x1=\"713\" y1=\"80.8\" x2=\"738.5\" y2=\"85\" class=\"dg-bond\" /><line x1=\"713\" y1=\"80.8\" x2=\"729\" y2=\"58.7\" class=\"dg-bond\" /><line x1=\"713\" y1=\"80.8\" x2=\"689.1\" y2=\"84.3\" class=\"dg-bond\" /><line x1=\"662.6\" y1=\"124.5\" x2=\"670.5\" y2=\"99.5\" class=\"dg-bond\" /><line x1=\"608.5\" y1=\"195.3\" x2=\"590.2\" y2=\"213.7\" class=\"dg-bond\" /><line x1=\"565.3\" y1=\"212.3\" x2=\"590.2\" y2=\"213.7\" class=\"dg-bond\" /><line x1=\"622.8\" y1=\"125.4\" x2=\"598.4\" y2=\"117.1\" class=\"dg-bond\" /><line x1=\"700.8\" y1=\"204.3\" x2=\"722.1\" y2=\"212.4\" class=\"dg-bond\" /><line x1=\"700.8\" y1=\"204.3\" x2=\"701.8\" y2=\"178\" class=\"dg-bond\" /><line x1=\"700.8\" y1=\"204.3\" x2=\"679\" y2=\"212.9\" class=\"dg-bond\" /><line x1=\"670.5\" y1=\"99.5\" x2=\"689.1\" y2=\"84.3\" class=\"dg-bond\" /><line x1=\"738.5\" y1=\"85\" x2=\"729\" y2=\"58.7\" class=\"dg-bond\" /><line x1=\"735\" y1=\"193.1\" x2=\"722.1\" y2=\"212.4\" class=\"dg-bond\" /><line x1=\"729\" y1=\"58.7\" x2=\"751.8\" y2=\"55.7\" class=\"dg-bond\" /><line x1=\"655\" y1=\"203.8\" x2=\"679\" y2=\"212.9\" class=\"dg-bond\" /><circle cx=\"639.9\" cy=\"142.7\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"739.9\" cy=\"127.4\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"583.1\" cy=\"134.9\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"677.5\" cy=\"180.5\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"564\" cy=\"101.2\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"563.2\" cy=\"183.2\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"691\" cy=\"58.8\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"752.2\" cy=\"208.3\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"682.6\" cy=\"151.7\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"577.4\" cy=\"54.4\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"656\" cy=\"61.6\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"584.3\" cy=\"91.2\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"550.4\" cy=\"127.2\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"637.4\" cy=\"188.5\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"641\" cy=\"97.1\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"722.1\" cy=\"166.7\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"610.8\" cy=\"89.2\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"605.3\" cy=\"63.4\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"706.5\" cy=\"116.9\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"544.1\" cy=\"86\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"559.5\" cy=\"154\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"748.4\" cy=\"174.8\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"713\" cy=\"80.8\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"662.6\" cy=\"124.5\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"584.4\" cy=\"170.6\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"608.5\" cy=\"195.3\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"565.3\" cy=\"212.3\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"622.8\" cy=\"125.4\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"700.8\" cy=\"204.3\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"633.3\" cy=\"68.8\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"670.5\" cy=\"99.5\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"738.5\" cy=\"85\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"618.6\" cy=\"163\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"735\" cy=\"193.1\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"729\" cy=\"58.7\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"689.1\" cy=\"84.3\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"653.5\" cy=\"169.2\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"722.8\" cy=\"142.7\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"590.2\" cy=\"213.7\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"722.1\" cy=\"212.4\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"701.8\" cy=\"178\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"751.8\" cy=\"55.7\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"598.4\" cy=\"117.1\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"655\" cy=\"203.8\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"552.4\" cy=\"61.8\" r=\"7\" class=\"dg-atomR\"/><circle cx=\"679\" cy=\"212.9\" r=\"7\" class=\"dg-atomR\"/></svg><div class=\"diagram-caption\">Same atoms, three levels of order</div></div>"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Single crystal",
              "color": "#4a90e2",
              "text": "One ordered pattern across the <strong>whole</strong> piece. Every atom is related to every equivalent atom by pure translation, even at large scale. Example: a single pyrite crystal, silicon wafers."
            },
            {
              "title": "Polycrystal",
              "color": "#2fa15c",
              "text": "Many small single crystals (<strong>grains</strong>) with different orientations, separated by <strong>grain boundaries</strong>. Order inside each grain, none between them. Grains are usually 100 nm to 100 µm; below about 10 nm it is called <strong>nanocrystalline</strong>. Most engineering metals are polycrystals."
            },
            {
              "title": "Amorphous",
              "color": "#e63946",
              "text": "Atoms are randomly arranged with <strong>short-range order only</strong> (each atom has sensible neighbours) but no long-range order. Examples: glass, plastics, amorphous silicon (solar cells, thin-film transistors). Crystalline vs non-crystalline SiO<sub>2</sub> is the standard comparison."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "The key distinction",
          "html": "<p><strong>Long-range order</strong> is what separates crystal from amorphous. A polycrystal has long-range order <em>within each grain</em>, which is why it still counts as crystalline. Amorphous solids still have short-range order, so 'no order at all' is wrong.</p>"
        },
        {
          "type": "h2",
          "id": "w1-well",
          "text": "The Energy Well: Why Atoms Sit Where They Do"
        },
        {
          "type": "p",
          "text": "Two atoms feel two competing effects. At large separation they attract. As they get close their electron clouds and nuclei repel, and that repulsion rises much more steeply than the attraction. Adding the two gives a curve with a minimum. The atoms settle at the bottom, at the equilibrium spacing \\(r_0\\).",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>A marble in a bowl.</strong> The marble rests at the bottom (equilibrium bond length). The height of the rim above the bottom is how much energy you need to pull the atoms apart (bond energy). Push the marble up the steep side and it shoots back hard; nudge it up the shallow side and it drifts back gently. That lopsidedness explains thermal expansion in a moment.</div></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 720 400\" role=\"img\" aria-label=\"Annotated interatomic potential energy well\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ew-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"ew-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"ew-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><line x1=\"70\" y1=\"190\" x2=\"680\" y2=\"190\" class=\"dg-axis\" /><line x1=\"70\" y1=\"28\" x2=\"70\" y2=\"340\" class=\"dg-axis\" /><text x=\"680\" y=\"182\" class=\"dg-vl-mut\" text-anchor=\"end\">r</text><text x=\"62\" y=\"36\" class=\"dg-vl-mut\" text-anchor=\"end\">E</text><polyline points=\"74.3,79.1 77.1,129 79.9,169.7 82.8,202.7 85.6,229.3 88.4,250.5 91.3,267.3 94.1,280.4 97,290.4 99.8,297.9 102.6,303.2 105.5,306.8 108.3,308.9 111.1,309.9 114,309.9 116.8,309.1 119.7,307.7 122.5,305.8 125.3,303.5 128.2,300.9 131,298.1 133.8,295.1 136.7,292 139.5,288.8 142.3,285.6 145.2,282.4 148,279.2 150.9,276 153.7,272.9 156.5,269.8 159.4,266.8 162.2,263.9 165,261 167.9,258.3 170.7,255.6 173.6,253 176.4,250.5 179.2,248.1 182.1,245.8 184.9,243.6 187.7,241.4 190.6,239.4 193.4,237.4 196.3,235.5 199.1,233.7 201.9,231.9 204.8,230.3 207.6,228.7 210.4,227.1 213.3,225.6 216.1,224.2 219,222.9 221.8,221.6 224.6,220.4 227.5,219.2 230.3,218 233.1,217 236,215.9 238.8,214.9 241.7,214 244.5,213 247.3,212.2 250.2,211.3 253,210.5 255.8,209.8 258.7,209 261.5,208.3 264.3,207.6 267.2,207 270,206.4 272.9,205.8 275.7,205.2 278.5,204.7 281.4,204.1 284.2,203.6 287,203.1 289.9,202.7 292.7,202.2 295.6,201.8 298.4,201.4 301.2,201 304.1,200.6 306.9,200.3 309.7,199.9 312.6,199.6 315.4,199.2 318.3,198.9 321.1,198.6 323.9,198.3 326.8,198.1 329.6,197.8 332.4,197.6 335.3,197.3 338.1,197.1 341,196.8 343.8,196.6 346.6,196.4 349.5,196.2 352.3,196 355.1,195.8 358,195.6 360.8,195.5 363.7,195.3 366.5,195.1 369.3,195 372.2,194.8 375,194.7 377.8,194.5 380.7,194.4 383.5,194.3 386.3,194.1 389.2,194 392,193.9 394.9,193.8 397.7,193.7 400.5,193.6 403.4,193.5 406.2,193.4 409,193.3 411.9,193.2 414.7,193.1 417.6,193 420.4,192.9 423.2,192.8 426.1,192.7 428.9,192.7 431.7,192.6 434.6,192.5 437.4,192.5 440.3,192.4 443.1,192.3 445.9,192.3 448.8,192.2 451.6,192.1 454.4,192.1 457.3,192 460.1,192 463,191.9 465.8,191.9 468.6,191.8 471.5,191.8 474.3,191.7 477.1,191.7 480,191.6 482.8,191.6 485.7,191.6 488.5,191.5 491.3,191.5 494.2,191.4 497,191.4 499.8,191.4 502.7,191.3 505.5,191.3 508.3,191.3 511.2,191.2 514,191.2 516.9,191.2 519.7,191.1 522.5,191.1 525.4,191.1 528.2,191.1 531,191 533.9,191 536.7,191 539.6,191 542.4,190.9 545.2,190.9 548.1,190.9 550.9,190.9 553.7,190.9 556.6,190.8 559.4,190.8 562.3,190.8 565.1,190.8 567.9,190.8 570.8,190.7 573.6,190.7 576.4,190.7 579.3,190.7 582.1,190.7 585,190.7 587.8,190.7 590.6,190.6 593.5,190.6 596.3,190.6 599.1,190.6 602,190.6 604.8,190.6 607.7,190.6 610.5,190.5 613.3,190.5 616.2,190.5 619,190.5 621.8,190.5 624.7,190.5 627.5,190.5 630.3,190.5 633.2,190.5 636,190.5 638.9,190.4 641.7,190.4 644.5,190.4 647.4,190.4 650.2,190.4 653,190.4 655.9,190.4 658.7,190.4 661.6,190.4 664.4,190.4 667.2,190.4 670.1,190.4 672.9,190.3 675.7,190.3 678.6,190.3\" class=\"dg-curve\"/><line x1=\"112.6\" y1=\"190\" x2=\"112.6\" y2=\"346\" class=\"dg-dot-v\" /><text x=\"112.6\" y=\"364\" class=\"dg-vl-acc\" text-anchor=\"middle\">r₀</text><text x=\"112.6\" y=\"380\" class=\"dg-t\" text-anchor=\"middle\">equilibrium bond length</text><line x1=\"637.4\" y1=\"193\" x2=\"637.4\" y2=\"307\" class=\"dg-vec-amb\" marker-start=\"url(#ew-amb)\" marker-end=\"url(#ew-amb)\"/><line x1=\"112.6\" y1=\"310\" x2=\"631.4\" y2=\"310\" class=\"dg-dot-v\" /><text x=\"623.4\" y=\"292\" class=\"dg-tb-amb\" text-anchor=\"end\">well depth =</text><text x=\"623.4\" y=\"308\" class=\"dg-tb-amb\" text-anchor=\"end\">bond energy</text><text x=\"90.2\" y=\"66\" class=\"dg-tb-red\" text-anchor=\"start\">repulsion wins</text><text x=\"90.2\" y=\"82\" class=\"dg-t\" text-anchor=\"start\">(atoms too close)</text><text x=\"410.5\" y=\"223.6\" class=\"dg-tb-blue\" text-anchor=\"start\">attraction wins</text><text x=\"410.5\" y=\"239.6\" class=\"dg-t\" text-anchor=\"start\">(atoms too far apart)</text><line x1=\"88.4\" y1=\"250\" x2=\"177\" y2=\"250\" class=\"dg-route-acc\" /><circle cx=\"88.4\" cy=\"250\" r=\"4\" class=\"dg-lp-acc\"/><circle cx=\"177\" cy=\"250\" r=\"4\" class=\"dg-lp-acc\"/><circle cx=\"132.7\" cy=\"250\" r=\"6\" class=\"dg-atomR\"/><text x=\"189\" y=\"254\" class=\"dg-t\" text-anchor=\"start\">with heat the swing is lopsided:</text><text x=\"189\" y=\"270\" class=\"dg-tb-acc\" text-anchor=\"start\">average r drifts right (expansion)</text><line x1=\"132.7\" y1=\"258\" x2=\"132.7\" y2=\"280\" class=\"dg-dot-v\" /></svg><div class=\"diagram-caption\">Energy well for a pair of atoms: where the bond length, bond energy and thermal expansion come from</div></div>"
        },
        {
          "type": "formulablock",
          "name": "Total interatomic energy",
          "eqs": [
            "U(r) = -\\frac{A}{r^{m}} + \\frac{B}{r^{n}} \\qquad (n > m)"
          ],
          "vars": [
            {
              "symbol": "A/rᵐ",
              "desc": "attraction (dominates at large r)"
            },
            {
              "symbol": "B/rⁿ",
              "desc": "repulsion (dominates at small r)"
            },
            {
              "symbol": "n > m",
              "desc": "repulsion is steeper, which is what creates a minimum"
            }
          ],
          "note": "Equilibrium is where the slope is zero: \\(\\frac{dU}{dr}=0\\) at \\(r=r_0\\). The force is \\(F=-\\frac{dU}{dr}\\), so the force is zero at the bottom, attractive to the right of it and repulsive to the left."
        },
        {
          "type": "h3",
          "text": "Why dense, ordered packing wins"
        },
        {
          "type": "p",
          "text": "Every atom wants as many close neighbours at the bottom of the well as possible. A random, loose arrangement leaves many neighbours too far away (up the shallow side), so total energy is higher. A dense ordered arrangement puts most neighbours near \\(r_0\\), so total energy is lower. That is why <strong>dense, ordered structures tend to have lower energy</strong>, and why many solids crystallise.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 1 of 5</span><iframe data-src=\"widgets/bonding-energy.html\" data-sim=\"bonding-energy.html\" title=\"Bond energy and packing\" style=\"height:640px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>A block of atoms in 3D (drag to rotate) and the energy curve underneath. The slider moves from loose random packing, to a crystal, to over-compressed. The two checkboxes switch the attractive and repulsive parts of the curve on and off.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Start at the far left and note the average bond length and energy in the box.</li><li>Slide to the crystalline position: the bond length should land at \\(r_0\\) and the energy at its minimum.</li><li>Keep sliding: the energy shoots up. That is repulsion.</li><li>Untick 'Repulsive' and see there would be no minimum at all.</li></ul></div><div><h5>Why it matters</h5><p>It shows <em>why</em> ordered packing is favoured, and the total curve as a sum of two competing terms. Exam questions ask you to sketch this curve and label \\(r_0\\) and the bond energy.</p></div></div>"
        },
        {
          "type": "h2",
          "id": "w1-bonding",
          "text": "Bonding Types and What They Do to Properties"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Bond type</th><th>Bond energy</th><th>Directional?</th><th>Typical materials</th></tr></thead><tbody><tr><td>Ionic</td><td>Large</td><td>No</td><td>Ceramics (NaCl, MgO)</td></tr><tr><td>Covalent</td><td>Variable: large (diamond) to small (bismuth)</td><td>Yes</td><td>Semiconductors, ceramics, polymer backbones</td></tr><tr><td>Metallic</td><td>Variable: large (tungsten) to small (mercury)</td><td>No</td><td>Metals, mostly BCC, FCC or HCP</td></tr><tr><td>Molecular (van der Waals)</td><td>Smallest</td><td>Weak, direction varies</td><td>Between polymer chains, between molecules</td></tr></tbody></table></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Metallic bonding is a sea of shared electrons</strong> with positive ion cores floating in it. Because the electrons can flow around when ions shift, metals bend instead of shattering (malleable, ductile), conduct well, and reflect light (lustrous). And because the bond has <em>no preferred direction</em>, metal atoms just pack as densely as they can, which is why metals are so often close-packed.</div></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Group</th><th>Bond energy</th><th>Melting point T<sub>m</sub></th><th>Stiffness E</th><th>Thermal expansion α</th></tr></thead><tbody><tr><td>Ceramics (ionic, covalent)</td><td>Large</td><td>Large</td><td>Large</td><td>Small</td></tr><tr><td>Metals (metallic)</td><td>Variable</td><td>Moderate</td><td>Moderate</td><td>Moderate</td></tr><tr><td>Polymers (covalent + molecular)</td><td>Small between chains</td><td>Small</td><td>Small</td><td>Large</td></tr></tbody></table></div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Read the pattern",
          "html": "<p>The four columns move together because they all come from the same thing: the <strong>depth and shape of the energy well</strong>. Deep well: high T<sub>m</sub>, high E, low α. Shallow well: the reverse. The next section makes that link visible.</p>"
        },
        {
          "type": "h2",
          "id": "w1-uses",
          "text": "One Curve, Three Properties"
        },
        {
          "type": "p",
          "text": "The lecturer's aside on potential energy diagrams is one of the most examinable ideas this week, because a single curve explains thermal expansion, Young's modulus and melting. Here they are one at a time.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "1. Thermal expansion"
        },
        {
          "type": "p",
          "text": "Heating gives atoms vibrational energy, so they swing back and forth around \\(r_0\\). Because the well is <strong>asymmetric</strong> (steep on the squashed side, shallow on the stretched side), they can stretch further than they can compress. The <em>average</em> spacing therefore drifts outward as temperature rises. The bond does not get weaker and the well does not move. The curve is simply lopsided.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 2 of 5</span><iframe data-src=\"widgets/thermal-expansion.html\" data-sim=\"thermal-expansion.html\" title=\"Thermal expansion and bond dissociation\" style=\"height:640px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>The energy well with a marker for the atom pair's total energy. The horizontal line is the range of spacings the atoms swing through, and the dot is their average.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Raise the temperature slowly and watch the swing range grow.</li><li>Compare the distance to the left and right ends of the line: they are unequal.</li><li>Watch the average dot slide right.</li><li>Keep going until the bond breaks.</li></ul></div><div><h5>Why it matters</h5><p>This is the answer to 'why do solids expand when heated?'. If a symmetric (parabolic) well were used, the average would stay at \\(r_0\\) and there would be no expansion at all. <strong>Caveat:</strong> this simplified model does not include melting, and its temperatures are on an illustrative scale.</p></div></div>"
        },
        {
          "type": "h3",
          "text": "2. Young's modulus (stiffness)"
        },
        {
          "type": "p",
          "text": "Stretching a solid slightly is like sliding up the well a small distance. The <strong>curvature</strong> at the bottom (how sharply the bowl bends) sets how strongly the atoms pull back, which is the stiffness. A deep, narrow well is stiff. A shallow, wide well is soft.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Stiffness from the well",
          "eqs": [
            "S_0 = \\left.\\frac{d^{2}U}{dr^{2}}\\right|_{r_0} \\qquad E \\approx \\frac{S_0}{r_0}"
          ],
          "note": "Steeper curvature means a larger S<sub>0</sub> and a higher Young's modulus E. For the simulation's reduced well \\(U=r^{-12}-2r^{-6}\\) the curvature at \\(r_0=1\\) works out to 72ε, which is a good check on the slope and curvature plots."
        },
        {
          "type": "raw",
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 3 of 5</span><iframe data-src=\"widgets/modulus-stiffness.html\" data-sim=\"modulus-stiffness.html\" title=\"Potential energy, slope and curvature\" style=\"height:720px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>Three linked plots for the same well: energy (top), slope, which is minus the force (middle), and curvature (bottom). The slider changes the bond strength (well depth).</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Make the well deep, then shallow, and watch the curvature value at the bottom change.</li><li>Find where the slope crosses zero: that is \\(r_0\\).</li><li>Notice the average spacing drifts more for the shallow well, at the same temperature.</li></ul></div><div><h5>Why it matters</h5><p>One slider ties three ideas together: deeper well means stiffer (higher E) <em>and</em> less thermal expansion. That is exactly the ceramics-versus-polymers row in the bonding table above.</p></div></div>"
        },
        {
          "type": "h3",
          "text": "3. Melting and boiling"
        },
        {
          "type": "p",
          "text": "In a solid the atoms stay at the bottom of the well. At the melting point, added heat stops raising the spacing smoothly and instead goes into breaking the ordered lattice. That energy is the <strong>enthalpy of fusion</strong>. Above the boiling point the bonds are overcome altogether. A deeper well needs more energy to reach either point, so <strong>deep well means high T<sub>m</sub></strong>.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 4 of 5</span><iframe data-src=\"widgets/phase-change.html\" data-sim=\"phase-change.html\" title=\"Phase changes with NaCl transition temperatures\" style=\"height:680px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>The energy well again, but now with temperature marked at NaCl's melting point (1074 K) and boiling point (1738 K), and a bar showing energy going into the enthalpy of fusion.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Sweep the temperature from 0 K upward.</li><li>Watch what happens to the average spacing at 1074 K: it barely changes while the fusion bar fills.</li><li>Continue past 1738 K.</li></ul></div><div><h5>Why it matters</h5><p>It shows that a phase change is a <em>step</em> in the energy budget, not a smooth continuation of thermal expansion. <strong>Caveat:</strong> this is one generic well scaled to NaCl's temperatures, an illustration and not a real NaCl simulation.</p></div></div>"
        },
        {
          "type": "h2",
          "id": "w1-lattice",
          "text": "Lattice, Motif and Crystal Structure"
        },
        {
          "type": "p",
          "text": "Crystallography separates the <em>pattern</em> from the <em>thing being repeated</em>. These are two different ideas, and mixing them up is the most common first-week error.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Lattice",
              "color": "#f4a261",
              "text": "A periodic array of <strong>points</strong> in space where every point has identical surroundings. It is pure geometry."
            },
            {
              "title": "Motif (basis)",
              "color": "#4a90e2",
              "text": "The group of atoms, ions or molecules attached to <strong>each</strong> lattice point. It is the physical stuff."
            },
            {
              "title": "Crystal structure",
              "color": "#0ea5c6",
              "text": "Lattice + motif. Same lattice with a different motif gives a different crystal."
            }
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 800 270\" role=\"img\" aria-label=\"Lattice plus motif gives the crystal structure\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"lm-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"lm-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"lm-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><rect x=\"8\" y=\"34\" width=\"236\" height=\"200\" rx=\"8\" class=\"dg-frame\"/><rect x=\"282\" y=\"34\" width=\"236\" height=\"200\" rx=\"8\" class=\"dg-frame\"/><rect x=\"556\" y=\"34\" width=\"236\" height=\"200\" rx=\"8\" class=\"dg-frame\"/><text x=\"126\" y=\"22\" class=\"dg-tb\" text-anchor=\"middle\">Lattice: points only</text><text x=\"400\" y=\"22\" class=\"dg-tb\" text-anchor=\"middle\">Motif: what sits on each point</text><text x=\"674\" y=\"22\" class=\"dg-tb\" text-anchor=\"middle\">Crystal structure</text><text x=\"263\" y=\"144\" class=\"dg-op\" text-anchor=\"middle\">+</text><text x=\"537\" y=\"144\" class=\"dg-op\" text-anchor=\"middle\">=</text><circle cx=\"52\" cy=\"64\" r=\"5\" class=\"dg-lp\"/><circle cx=\"98\" cy=\"64\" r=\"5\" class=\"dg-lp\"/><circle cx=\"144\" cy=\"64\" r=\"5\" class=\"dg-lp\"/><circle cx=\"190\" cy=\"64\" r=\"5\" class=\"dg-lp\"/><circle cx=\"52\" cy=\"110\" r=\"5\" class=\"dg-lp\"/><circle cx=\"98\" cy=\"110\" r=\"5\" class=\"dg-lp\"/><circle cx=\"144\" cy=\"110\" r=\"5\" class=\"dg-lp\"/><circle cx=\"190\" cy=\"110\" r=\"5\" class=\"dg-lp\"/><circle cx=\"52\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"98\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"144\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"190\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"52\" cy=\"202\" r=\"5\" class=\"dg-lp\"/><circle cx=\"98\" cy=\"202\" r=\"5\" class=\"dg-lp\"/><circle cx=\"144\" cy=\"202\" r=\"5\" class=\"dg-lp\"/><circle cx=\"190\" cy=\"202\" r=\"5\" class=\"dg-lp\"/><line x1=\"373.6\" y1=\"143.6\" x2=\"430.8\" y2=\"106.2\" class=\"dg-bondthick\" /><circle cx=\"373.6\" cy=\"143.6\" r=\"28.6\" class=\"dg-atomA\"/><circle cx=\"430.8\" cy=\"106.2\" r=\"18.7\" class=\"dg-atomR\"/><line x1=\"395\" y1=\"126\" x2=\"405\" y2=\"126\" class=\"dg-lpmark\" /><line x1=\"400\" y1=\"121\" x2=\"400\" y2=\"131\" class=\"dg-lpmark\" /><text x=\"400\" y=\"222\" class=\"dg-t\" text-anchor=\"middle\">one A atom + one B atom</text><line x1=\"588\" y1=\"72\" x2=\"614\" y2=\"55\" class=\"dg-bondthick\" /><circle cx=\"588\" cy=\"72\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"614\" cy=\"55\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"595\" y1=\"64\" x2=\"605\" y2=\"64\" class=\"dg-lpmark\" /><line x1=\"600\" y1=\"59\" x2=\"600\" y2=\"69\" class=\"dg-lpmark\" /><line x1=\"634\" y1=\"72\" x2=\"660\" y2=\"55\" class=\"dg-bondthick\" /><circle cx=\"634\" cy=\"72\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"660\" cy=\"55\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"641\" y1=\"64\" x2=\"651\" y2=\"64\" class=\"dg-lpmark\" /><line x1=\"646\" y1=\"59\" x2=\"646\" y2=\"69\" class=\"dg-lpmark\" /><line x1=\"680\" y1=\"72\" x2=\"706\" y2=\"55\" class=\"dg-bondthick\" /><circle cx=\"680\" cy=\"72\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"706\" cy=\"55\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"687\" y1=\"64\" x2=\"697\" y2=\"64\" class=\"dg-lpmark\" /><line x1=\"692\" y1=\"59\" x2=\"692\" y2=\"69\" class=\"dg-lpmark\" /><line x1=\"726\" y1=\"72\" x2=\"752\" y2=\"55\" class=\"dg-bondthick\" /><circle cx=\"726\" cy=\"72\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"752\" cy=\"55\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"733\" y1=\"64\" x2=\"743\" y2=\"64\" class=\"dg-lpmark\" /><line x1=\"738\" y1=\"59\" x2=\"738\" y2=\"69\" class=\"dg-lpmark\" /><line x1=\"588\" y1=\"118\" x2=\"614\" y2=\"101\" class=\"dg-bondthick\" /><circle cx=\"588\" cy=\"118\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"614\" cy=\"101\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"595\" y1=\"110\" x2=\"605\" y2=\"110\" class=\"dg-lpmark\" /><line x1=\"600\" y1=\"105\" x2=\"600\" y2=\"115\" class=\"dg-lpmark\" /><line x1=\"634\" y1=\"118\" x2=\"660\" y2=\"101\" class=\"dg-bondthick\" /><circle cx=\"634\" cy=\"118\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"660\" cy=\"101\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"641\" y1=\"110\" x2=\"651\" y2=\"110\" class=\"dg-lpmark\" /><line x1=\"646\" y1=\"105\" x2=\"646\" y2=\"115\" class=\"dg-lpmark\" /><line x1=\"680\" y1=\"118\" x2=\"706\" y2=\"101\" class=\"dg-bondthick\" /><circle cx=\"680\" cy=\"118\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"706\" cy=\"101\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"687\" y1=\"110\" x2=\"697\" y2=\"110\" class=\"dg-lpmark\" /><line x1=\"692\" y1=\"105\" x2=\"692\" y2=\"115\" class=\"dg-lpmark\" /><line x1=\"726\" y1=\"118\" x2=\"752\" y2=\"101\" class=\"dg-bondthick\" /><circle cx=\"726\" cy=\"118\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"752\" cy=\"101\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"733\" y1=\"110\" x2=\"743\" y2=\"110\" class=\"dg-lpmark\" /><line x1=\"738\" y1=\"105\" x2=\"738\" y2=\"115\" class=\"dg-lpmark\" /><line x1=\"588\" y1=\"164\" x2=\"614\" y2=\"147\" class=\"dg-bondthick\" /><circle cx=\"588\" cy=\"164\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"614\" cy=\"147\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"595\" y1=\"156\" x2=\"605\" y2=\"156\" class=\"dg-lpmark\" /><line x1=\"600\" y1=\"151\" x2=\"600\" y2=\"161\" class=\"dg-lpmark\" /><line x1=\"634\" y1=\"164\" x2=\"660\" y2=\"147\" class=\"dg-bondthick\" /><circle cx=\"634\" cy=\"164\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"660\" cy=\"147\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"641\" y1=\"156\" x2=\"651\" y2=\"156\" class=\"dg-lpmark\" /><line x1=\"646\" y1=\"151\" x2=\"646\" y2=\"161\" class=\"dg-lpmark\" /><line x1=\"680\" y1=\"164\" x2=\"706\" y2=\"147\" class=\"dg-bondthick\" /><circle cx=\"680\" cy=\"164\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"706\" cy=\"147\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"687\" y1=\"156\" x2=\"697\" y2=\"156\" class=\"dg-lpmark\" /><line x1=\"692\" y1=\"151\" x2=\"692\" y2=\"161\" class=\"dg-lpmark\" /><line x1=\"726\" y1=\"164\" x2=\"752\" y2=\"147\" class=\"dg-bondthick\" /><circle cx=\"726\" cy=\"164\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"752\" cy=\"147\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"733\" y1=\"156\" x2=\"743\" y2=\"156\" class=\"dg-lpmark\" /><line x1=\"738\" y1=\"151\" x2=\"738\" y2=\"161\" class=\"dg-lpmark\" /><line x1=\"588\" y1=\"210\" x2=\"614\" y2=\"193\" class=\"dg-bondthick\" /><circle cx=\"588\" cy=\"210\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"614\" cy=\"193\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"595\" y1=\"202\" x2=\"605\" y2=\"202\" class=\"dg-lpmark\" /><line x1=\"600\" y1=\"197\" x2=\"600\" y2=\"207\" class=\"dg-lpmark\" /><line x1=\"634\" y1=\"210\" x2=\"660\" y2=\"193\" class=\"dg-bondthick\" /><circle cx=\"634\" cy=\"210\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"660\" cy=\"193\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"641\" y1=\"202\" x2=\"651\" y2=\"202\" class=\"dg-lpmark\" /><line x1=\"646\" y1=\"197\" x2=\"646\" y2=\"207\" class=\"dg-lpmark\" /><line x1=\"680\" y1=\"210\" x2=\"706\" y2=\"193\" class=\"dg-bondthick\" /><circle cx=\"680\" cy=\"210\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"706\" cy=\"193\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"687\" y1=\"202\" x2=\"697\" y2=\"202\" class=\"dg-lpmark\" /><line x1=\"692\" y1=\"197\" x2=\"692\" y2=\"207\" class=\"dg-lpmark\" /><line x1=\"726\" y1=\"210\" x2=\"752\" y2=\"193\" class=\"dg-bondthick\" /><circle cx=\"726\" cy=\"210\" r=\"13\" class=\"dg-atomA\"/><circle cx=\"752\" cy=\"193\" r=\"8.5\" class=\"dg-atomR\"/><line x1=\"733\" y1=\"202\" x2=\"743\" y2=\"202\" class=\"dg-lpmark\" /><line x1=\"738\" y1=\"197\" x2=\"738\" y2=\"207\" class=\"dg-lpmark\" /><text x=\"400\" y=\"262\" class=\"dg-t\" text-anchor=\"middle\">The small crosses are lattice points. They sit between the atoms, not on an atom centre.</text></svg><div class=\"diagram-caption\">Crystal structure = lattice + motif</div></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Wallpaper.</strong> The lattice is the invisible grid of repeat positions. The motif is the flower printed at each position. The pattern you see is the crystal structure. You can change the flower without changing the grid, or the grid without changing the flower.</div></div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Do not mix up atoms and lattice points",
          "html": "<ul><li>Lattice points are <strong>infinitesimal points</strong>. Atoms are physical objects with size.</li><li>A lattice point does <strong>not</strong> have to sit at an atom's centre. In the diagram it sits between the two atoms of the motif.</li><li>A motif can be one atom, several atoms, or a whole molecule.</li></ul>"
        },
        {
          "type": "h2",
          "id": "w1-vectors",
          "text": "Lattice Vectors"
        },
        {
          "type": "p",
          "text": "Pick any lattice point as the origin. Every other lattice point can be reached from it by whole-number steps along two basis vectors (three in 3D). That single statement defines a lattice mathematically.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Lattice (translation) vector",
          "eqs": [
            "\\mathbf{R} = n_1\\mathbf{a} + n_2\\mathbf{b} \\qquad \\text{(3D: } + n_3\\mathbf{c}\\text{)}"
          ],
          "vars": [
            {
              "symbol": "a, b, c",
              "desc": "primitive (basis) vectors"
            },
            {
              "symbol": "n₁, n₂, n₃",
              "desc": "integers (positive, negative or zero)"
            }
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 640 360\" role=\"img\" aria-label=\"Lattice vectors a and b and a translation vector R\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"lv-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"lv-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"lv-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><circle cx=\"52\" cy=\"244\" r=\"5\" class=\"dg-lp\"/><circle cx=\"86\" cy=\"166\" r=\"5\" class=\"dg-lp\"/><circle cx=\"120\" cy=\"88\" r=\"5\" class=\"dg-lp\"/><circle cx=\"110\" cy=\"312\" r=\"5\" class=\"dg-lp\"/><circle cx=\"144\" cy=\"234\" r=\"5\" class=\"dg-lp\"/><circle cx=\"178\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"212\" cy=\"78\" r=\"5\" class=\"dg-lp\"/><circle cx=\"202\" cy=\"302\" r=\"5\" class=\"dg-lp\"/><circle cx=\"236\" cy=\"224\" r=\"5\" class=\"dg-lp\"/><circle cx=\"270\" cy=\"146\" r=\"5\" class=\"dg-lp\"/><circle cx=\"304\" cy=\"68\" r=\"5\" class=\"dg-lp\"/><circle cx=\"294\" cy=\"292\" r=\"5\" class=\"dg-lp\"/><circle cx=\"328\" cy=\"214\" r=\"5\" class=\"dg-lp\"/><circle cx=\"362\" cy=\"136\" r=\"5\" class=\"dg-lp\"/><circle cx=\"396\" cy=\"58\" r=\"5\" class=\"dg-lp\"/><circle cx=\"386\" cy=\"282\" r=\"5\" class=\"dg-lp\"/><circle cx=\"420\" cy=\"204\" r=\"5\" class=\"dg-lp\"/><circle cx=\"454\" cy=\"126\" r=\"5\" class=\"dg-lp\"/><circle cx=\"488\" cy=\"48\" r=\"5\" class=\"dg-lp\"/><circle cx=\"478\" cy=\"272\" r=\"5\" class=\"dg-lp\"/><circle cx=\"512\" cy=\"194\" r=\"5\" class=\"dg-lp\"/><circle cx=\"546\" cy=\"116\" r=\"5\" class=\"dg-lp\"/><circle cx=\"580\" cy=\"38\" r=\"5\" class=\"dg-lp\"/><circle cx=\"570\" cy=\"262\" r=\"5\" class=\"dg-lp\"/><circle cx=\"604\" cy=\"184\" r=\"5\" class=\"dg-lp\"/><line x1=\"110\" y1=\"312\" x2=\"294\" y2=\"292\" class=\"dg-route\" /><line x1=\"294\" y1=\"292\" x2=\"328\" y2=\"214\" class=\"dg-route\" /><line x1=\"110\" y1=\"312\" x2=\"198\" y2=\"302\" class=\"dg-vec-amb\" marker-end=\"url(#lv-amb)\"/><line x1=\"110\" y1=\"312\" x2=\"143\" y2=\"238\" class=\"dg-vec-amb\" marker-end=\"url(#lv-amb)\"/><line x1=\"110\" y1=\"312\" x2=\"324\" y2=\"218\" class=\"dg-vec-acc\" marker-end=\"url(#lv-acc)\"/><circle cx=\"110\" cy=\"312\" r=\"6.5\" class=\"dg-lp-o\"/><circle cx=\"328\" cy=\"214\" r=\"6.5\" class=\"dg-lp-acc\"/><text x=\"98\" y=\"334\" class=\"dg-t\" text-anchor=\"end\">origin</text><text x=\"156\" y=\"329\" class=\"dg-vl-amb\" text-anchor=\"middle\">a</text><text x=\"128\" y=\"273\" class=\"dg-vl-amb\" text-anchor=\"end\">b</text><text x=\"312\" y=\"180\" class=\"dg-vl-acc\" text-anchor=\"end\">R = 2a + b</text><text x=\"312\" y=\"199\" class=\"dg-t\" text-anchor=\"end\">(n₁ = 2, n₂ = 1)</text><text x=\"380\" y=\"346\" class=\"dg-t\" text-anchor=\"middle\">Dashed path: two steps along a, then one along b</text></svg><div class=\"diagram-caption\">Any lattice point is reached from the origin by whole-number steps along a and b</div></div>"
        },
        {
          "type": "p",
          "text": "The choice of primitive vectors is <strong>not unique</strong>. Slide 28 of the lecture asks what \\(n_1\\) and \\(n_2\\) become when you pick different vectors: the point stays where it is, so the integers change to compensate. Practise this by choosing a second pair of vectors on the diagram and re-counting the steps.",
          "class": ""
        },
        {
          "type": "h2",
          "id": "w1-cells2d",
          "text": "Unit Cells in 2D"
        },
        {
          "type": "p",
          "text": "A <strong>unit cell</strong> is the smallest piece that, stacked with pure translation, rebuilds the whole crystal. There are infinitely many valid choices for the same lattice. By convention you pick one with the <strong>shortest sides, as close to perpendicular as possible, that still shows the full symmetry</strong> of the structure.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 720 340\" role=\"img\" aria-label=\"Primitive and non-primitive unit cells on one 2D lattice\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"uc-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"uc-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"uc-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><circle cx=\"50\" cy=\"300\" r=\"5\" class=\"dg-lp\"/><circle cx=\"106\" cy=\"264\" r=\"5\" class=\"dg-lp\"/><circle cx=\"50\" cy=\"228\" r=\"5\" class=\"dg-lp\"/><circle cx=\"106\" cy=\"192\" r=\"5\" class=\"dg-lp\"/><circle cx=\"50\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"106\" cy=\"120\" r=\"5\" class=\"dg-lp\"/><circle cx=\"50\" cy=\"84\" r=\"5\" class=\"dg-lp\"/><circle cx=\"162\" cy=\"300\" r=\"5\" class=\"dg-lp\"/><circle cx=\"218\" cy=\"264\" r=\"5\" class=\"dg-lp\"/><circle cx=\"162\" cy=\"228\" r=\"5\" class=\"dg-lp\"/><circle cx=\"218\" cy=\"192\" r=\"5\" class=\"dg-lp\"/><circle cx=\"162\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"218\" cy=\"120\" r=\"5\" class=\"dg-lp\"/><circle cx=\"162\" cy=\"84\" r=\"5\" class=\"dg-lp\"/><circle cx=\"274\" cy=\"300\" r=\"5\" class=\"dg-lp\"/><circle cx=\"330\" cy=\"264\" r=\"5\" class=\"dg-lp\"/><circle cx=\"274\" cy=\"228\" r=\"5\" class=\"dg-lp\"/><circle cx=\"330\" cy=\"192\" r=\"5\" class=\"dg-lp\"/><circle cx=\"274\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"330\" cy=\"120\" r=\"5\" class=\"dg-lp\"/><circle cx=\"274\" cy=\"84\" r=\"5\" class=\"dg-lp\"/><circle cx=\"386\" cy=\"300\" r=\"5\" class=\"dg-lp\"/><circle cx=\"442\" cy=\"264\" r=\"5\" class=\"dg-lp\"/><circle cx=\"386\" cy=\"228\" r=\"5\" class=\"dg-lp\"/><circle cx=\"442\" cy=\"192\" r=\"5\" class=\"dg-lp\"/><circle cx=\"386\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"442\" cy=\"120\" r=\"5\" class=\"dg-lp\"/><circle cx=\"386\" cy=\"84\" r=\"5\" class=\"dg-lp\"/><circle cx=\"498\" cy=\"300\" r=\"5\" class=\"dg-lp\"/><circle cx=\"554\" cy=\"264\" r=\"5\" class=\"dg-lp\"/><circle cx=\"498\" cy=\"228\" r=\"5\" class=\"dg-lp\"/><circle cx=\"554\" cy=\"192\" r=\"5\" class=\"dg-lp\"/><circle cx=\"498\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"554\" cy=\"120\" r=\"5\" class=\"dg-lp\"/><circle cx=\"498\" cy=\"84\" r=\"5\" class=\"dg-lp\"/><circle cx=\"610\" cy=\"300\" r=\"5\" class=\"dg-lp\"/><circle cx=\"610\" cy=\"228\" r=\"5\" class=\"dg-lp\"/><circle cx=\"610\" cy=\"156\" r=\"5\" class=\"dg-lp\"/><circle cx=\"610\" cy=\"84\" r=\"5\" class=\"dg-lp\"/><rect x=\"162\" y=\"228\" width=\"112\" height=\"72\" class=\"dg-cell-amb\"/><polygon points=\"386,300 442,264 386,228 330,264\" class=\"dg-cell-acc\"/><circle cx=\"162\" cy=\"300\" r=\"5.5\" class=\"dg-lp-amb\"/><circle cx=\"274\" cy=\"300\" r=\"5.5\" class=\"dg-lp-amb\"/><circle cx=\"162\" cy=\"228\" r=\"5.5\" class=\"dg-lp-amb\"/><circle cx=\"274\" cy=\"228\" r=\"5.5\" class=\"dg-lp-amb\"/><circle cx=\"218\" cy=\"264\" r=\"5.5\" class=\"dg-lp-amb\"/><circle cx=\"386\" cy=\"300\" r=\"5.5\" class=\"dg-lp-acc\"/><circle cx=\"386\" cy=\"228\" r=\"5.5\" class=\"dg-lp-acc\"/><circle cx=\"442\" cy=\"264\" r=\"5.5\" class=\"dg-lp-acc\"/><circle cx=\"330\" cy=\"264\" r=\"5.5\" class=\"dg-lp-acc\"/><text x=\"218\" y=\"22\" class=\"dg-tb-amb\" text-anchor=\"middle\">Non-primitive cell</text><text x=\"218\" y=\"40\" class=\"dg-t\" text-anchor=\"middle\">2 points: 4 corners × ¼ + 1 centre</text><text x=\"442\" y=\"22\" class=\"dg-tb-acc\" text-anchor=\"middle\">Primitive cell</text><text x=\"442\" y=\"40\" class=\"dg-t\" text-anchor=\"middle\">1 point: 4 corners × ¼</text></svg><div class=\"diagram-caption\">Same lattice, two valid unit cells: count the points</div></div>"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Primitive cell",
              "color": "#0ea5c6",
              "text": "Exactly <strong>one</strong> lattice point per cell. Many different shapes qualify, all with the same area."
            },
            {
              "title": "Non-primitive cell",
              "color": "#f4a261",
              "text": "<strong>More than one</strong> lattice point per cell. Chosen when it shows the symmetry better (a rectangle rather than a slanted rhombus)."
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Counting lattice points per cell",
          "eqs": [
            "N_{2D} = \\frac{N_{corner}}{4} + \\frac{N_{edge}}{2} + N_{inside}"
          ],
          "note": "Each corner is shared between 4 cells, each edge point between 2, and an interior point belongs to one cell only. Check with the diagram: the rectangle has 4 corners ¼ + 1 centre = 2."
        },
        {
          "type": "example",
          "label": "Worked example: count the points",
          "q": "A rectangular cell has a lattice point at each corner and one at the centre. How many lattice points does it contain, and is it primitive?",
          "steps": [
            "Corners: \\(4\\times\\frac{1}{4}=1\\)",
            "Centre point: fully inside, so \\(1\\)",
            "Total \\(1+1=2\\)"
          ],
          "answer": "2 lattice points, so it is <strong>non-primitive</strong> (a primitive cell would have exactly 1)."
        },
        {
          "type": "h2",
          "id": "w1-bravais2d",
          "text": "The Five 2D Bravais Lattices"
        },
        {
          "type": "p",
          "text": "Lattices are classified by their symmetry (rotations and mirrors). In 2D that gives exactly five distinct types, called Bravais lattices.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 800 262\" role=\"img\" aria-label=\"The five 2D Bravais lattices\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"b2-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"b2-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"b2-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><rect x=\"6\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\" class=\"dg-frame\"/><text x=\"82\" y=\"20\" class=\"dg-tb\" text-anchor=\"middle\">Oblique</text><clipPath id=\"b2-c0\"><rect x=\"6\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\"/></clipPath><g clip-path=\"url(#b2-c0)\"><polygon points=\"27.6,145.2 67.6,145.2 82,110 42,110\" class=\"dg-cell-acc\"/><circle cx=\"27.6\" cy=\"145.2\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"42\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"56.4\" cy=\"74.8\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"67.6\" cy=\"145.2\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"82\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"96.4\" cy=\"74.8\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"107.6\" cy=\"145.2\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"122\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"136.4\" cy=\"74.8\" r=\"4.2\" class=\"dg-lp\"/></g><text x=\"82\" y=\"212\" class=\"dg-t\" text-anchor=\"middle\">a ≠ b, γ ≠ 90°</text><text x=\"82\" y=\"230\" class=\"dg-tb-amb\" text-anchor=\"middle\">lowest symmetry</text><rect x=\"164\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\" class=\"dg-frame\"/><text x=\"240\" y=\"20\" class=\"dg-tb\" text-anchor=\"middle\">Rectangular</text><clipPath id=\"b2-c1\"><rect x=\"164\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\"/></clipPath><g clip-path=\"url(#b2-c1)\"><polygon points=\"193.6,143.6 240,143.6 240,110 193.6,110\" class=\"dg-cell-acc\"/><circle cx=\"193.6\" cy=\"143.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"193.6\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"193.6\" cy=\"76.4\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"240\" cy=\"143.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"240\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"240\" cy=\"76.4\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"286.4\" cy=\"143.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"286.4\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"286.4\" cy=\"76.4\" r=\"4.2\" class=\"dg-lp\"/></g><text x=\"240\" y=\"212\" class=\"dg-t\" text-anchor=\"middle\">a ≠ b, γ = 90°</text><text x=\"240\" y=\"230\" class=\"dg-tb-amb\" text-anchor=\"middle\">mirror lines</text><rect x=\"322\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\" class=\"dg-frame\"/><text x=\"398\" y=\"20\" class=\"dg-tb\" text-anchor=\"middle\">Centred rectangular</text><clipPath id=\"b2-c2\"><rect x=\"322\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\"/></clipPath><g clip-path=\"url(#b2-c2)\"><polygon points=\"351.6,143.6 398,143.6 398,110 351.6,110\" class=\"dg-cell-acc\"/><circle cx=\"351.6\" cy=\"143.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"374.8\" cy=\"126.8\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"351.6\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"374.8\" cy=\"93.2\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"351.6\" cy=\"76.4\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"398\" cy=\"143.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"421.2\" cy=\"126.8\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"398\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"421.2\" cy=\"93.2\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"398\" cy=\"76.4\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"444.4\" cy=\"143.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"444.4\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"444.4\" cy=\"76.4\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"374.8\" cy=\"126.8\" r=\"4.6\" class=\"dg-lp-acc\"/></g><text x=\"398\" y=\"212\" class=\"dg-t\" text-anchor=\"middle\">a ≠ b, γ = 90°</text><text x=\"398\" y=\"230\" class=\"dg-tb-amb\" text-anchor=\"middle\">mirror lines</text><rect x=\"480\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\" class=\"dg-frame\"/><text x=\"556\" y=\"20\" class=\"dg-tb\" text-anchor=\"middle\">Square</text><clipPath id=\"b2-c3\"><rect x=\"480\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\"/></clipPath><g clip-path=\"url(#b2-c3)\"><polygon points=\"516,150 556,150 556,110 516,110\" class=\"dg-cell-acc\"/><circle cx=\"516\" cy=\"150\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"516\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"516\" cy=\"70\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"556\" cy=\"150\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"556\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"556\" cy=\"70\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"596\" cy=\"150\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"596\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"596\" cy=\"70\" r=\"4.2\" class=\"dg-lp\"/></g><text x=\"556\" y=\"212\" class=\"dg-t\" text-anchor=\"middle\">a = b, γ = 90°</text><text x=\"556\" y=\"230\" class=\"dg-tb-amb\" text-anchor=\"middle\">4-fold rotation</text><rect x=\"638\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\" class=\"dg-frame\"/><text x=\"714\" y=\"20\" class=\"dg-tb\" text-anchor=\"middle\">Hexagonal</text><clipPath id=\"b2-c4\"><rect x=\"638\" y=\"30\" width=\"152\" height=\"160\" rx=\"8\"/></clipPath><g clip-path=\"url(#b2-c4)\"><polygon points=\"694,144.6 734,144.6 714,110 674,110\" class=\"dg-cell-acc\"/><circle cx=\"694\" cy=\"144.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"674\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"654\" cy=\"75.4\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"734\" cy=\"144.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"714\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"694\" cy=\"75.4\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"774\" cy=\"144.6\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"754\" cy=\"110\" r=\"4.2\" class=\"dg-lp\"/><circle cx=\"734\" cy=\"75.4\" r=\"4.2\" class=\"dg-lp\"/></g><text x=\"714\" y=\"212\" class=\"dg-t\" text-anchor=\"middle\">a = b, γ = 120°</text><text x=\"714\" y=\"230\" class=\"dg-tb-amb\" text-anchor=\"middle\">3-fold and 6-fold</text><text x=\"400\" y=\"254\" class=\"dg-t\" text-anchor=\"middle\">Highlighted cell = the conventional cell. The centred rectangular one has an extra point in the middle.</text></svg><div class=\"diagram-caption\">Five 2D Bravais lattices, sorted by symmetry</div></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Lattice</th><th>Cell</th><th>Symmetry</th></tr></thead><tbody><tr><td>Oblique</td><td>a ≠ b, γ ≠ 90°</td><td>Lowest symmetry (the lecture lists 'none'; strictly it still has 2-fold rotation)</td></tr><tr><td>Rectangular</td><td>a ≠ b, γ = 90°</td><td>Mirror lines</td></tr><tr><td>Centred rectangular</td><td>a ≠ b, γ = 90°, extra point at centre</td><td>Mirror lines</td></tr><tr><td>Square</td><td>a = b, γ = 90°</td><td>4-fold rotation</td></tr><tr><td>Hexagonal</td><td>a = b, γ = 120°</td><td>3-fold and 6-fold rotation</td></tr></tbody></table></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Why does centred rectangular count as its own lattice?</strong> You cannot get it by stretching any of the other four, because the extra centre point breaks the pattern of the plain rectangle. Its true primitive cell is a slanted rhombus that hides the mirror symmetry, so the rectangular (non-primitive) cell is used instead.</div></div>"
        },
        {
          "type": "h2",
          "id": "w1-3d",
          "text": "3D: Seven Crystal Systems, Fourteen Bravais Lattices"
        },
        {
          "type": "p",
          "text": "In 3D you need three vectors, so the cell is a parallelepiped with edges \\(a, b, c\\) and angles \\(\\alpha, \\beta, \\gamma\\). Sorting by symmetry gives <strong>7 crystal systems</strong> (the cell shapes). Adding centring possibilities to those shapes gives <strong>14 Bravais lattices</strong>.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Symbol</th><th>Name</th><th>Extra lattice points</th></tr></thead><tbody><tr><td>P</td><td>Primitive</td><td>None, only corners</td></tr><tr><td>I</td><td>Body-centred</td><td>One at the cell centre</td></tr><tr><td>F</td><td>Face-centred</td><td>One at the centre of each of the 6 faces</td></tr><tr><td>C</td><td>Side (base) centred</td><td>One at the centre of one pair of opposite faces</td></tr></tbody></table></div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Do not confuse the two numbers",
          "html": "<p><strong>7 crystal systems x centring options = 14 Bravais lattices.</strong> Not every centring is allowed in every system: for example cubic has only P, I and F, and there is no C-centred cubic. The lecture does not ask you to derive which are allowed, but you should know 7 and 14 and what P, I, F and C mean.</p>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 800 330\" role=\"img\" aria-label=\"Primitive, body-centred and face-centred cubic cells with lattice point counts\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"cc-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"cc-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"cc-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><line x1=\"34\" y1=\"240\" x2=\"154\" y2=\"240\" class=\"dg-edge\" /><line x1=\"34\" y1=\"240\" x2=\"34\" y2=\"120\" class=\"dg-edge\" /><line x1=\"34\" y1=\"240\" x2=\"86\" y2=\"200\" class=\"dg-edge-h\" /><line x1=\"86\" y1=\"200\" x2=\"206\" y2=\"200\" class=\"dg-edge-h\" /><line x1=\"86\" y1=\"200\" x2=\"86\" y2=\"80\" class=\"dg-edge-h\" /><line x1=\"34\" y1=\"120\" x2=\"154\" y2=\"120\" class=\"dg-edge\" /><line x1=\"34\" y1=\"120\" x2=\"86\" y2=\"80\" class=\"dg-edge\" /><line x1=\"86\" y1=\"80\" x2=\"206\" y2=\"80\" class=\"dg-edge\" /><line x1=\"154\" y1=\"240\" x2=\"154\" y2=\"120\" class=\"dg-edge\" /><line x1=\"154\" y1=\"240\" x2=\"206\" y2=\"200\" class=\"dg-edge\" /><line x1=\"206\" y1=\"200\" x2=\"206\" y2=\"80\" class=\"dg-edge\" /><line x1=\"154\" y1=\"120\" x2=\"206\" y2=\"80\" class=\"dg-edge\" /><circle cx=\"34\" cy=\"240\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"86\" cy=\"200\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"34\" cy=\"120\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"86\" cy=\"80\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"154\" cy=\"240\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"206\" cy=\"200\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"154\" cy=\"120\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"206\" cy=\"80\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><text x=\"120\" y=\"276\" class=\"dg-tb\" text-anchor=\"middle\">Primitive cubic (P)</text><text x=\"120\" y=\"296\" class=\"dg-t\" text-anchor=\"middle\">8 × ⅛ = 1 point</text><line x1=\"296\" y1=\"240\" x2=\"416\" y2=\"240\" class=\"dg-edge\" /><line x1=\"296\" y1=\"240\" x2=\"296\" y2=\"120\" class=\"dg-edge\" /><line x1=\"296\" y1=\"240\" x2=\"348\" y2=\"200\" class=\"dg-edge-h\" /><line x1=\"348\" y1=\"200\" x2=\"468\" y2=\"200\" class=\"dg-edge-h\" /><line x1=\"348\" y1=\"200\" x2=\"348\" y2=\"80\" class=\"dg-edge-h\" /><line x1=\"296\" y1=\"120\" x2=\"416\" y2=\"120\" class=\"dg-edge\" /><line x1=\"296\" y1=\"120\" x2=\"348\" y2=\"80\" class=\"dg-edge\" /><line x1=\"348\" y1=\"80\" x2=\"468\" y2=\"80\" class=\"dg-edge\" /><line x1=\"416\" y1=\"240\" x2=\"416\" y2=\"120\" class=\"dg-edge\" /><line x1=\"416\" y1=\"240\" x2=\"468\" y2=\"200\" class=\"dg-edge\" /><line x1=\"468\" y1=\"200\" x2=\"468\" y2=\"80\" class=\"dg-edge\" /><line x1=\"416\" y1=\"120\" x2=\"468\" y2=\"80\" class=\"dg-edge\" /><circle cx=\"296\" cy=\"240\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"348\" cy=\"200\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"296\" cy=\"120\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"348\" cy=\"80\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"416\" cy=\"240\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"468\" cy=\"200\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"416\" cy=\"120\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"468\" cy=\"80\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"382\" cy=\"160\" r=\"8\" class=\"dg-atomR\"/><text x=\"382\" y=\"276\" class=\"dg-tb\" text-anchor=\"middle\">Body-centred cubic (I)</text><text x=\"382\" y=\"296\" class=\"dg-t\" text-anchor=\"middle\">8 × ⅛ + 1 = 2 points</text><line x1=\"558\" y1=\"240\" x2=\"678\" y2=\"240\" class=\"dg-edge\" /><line x1=\"558\" y1=\"240\" x2=\"558\" y2=\"120\" class=\"dg-edge\" /><line x1=\"558\" y1=\"240\" x2=\"610\" y2=\"200\" class=\"dg-edge-h\" /><line x1=\"610\" y1=\"200\" x2=\"730\" y2=\"200\" class=\"dg-edge-h\" /><line x1=\"610\" y1=\"200\" x2=\"610\" y2=\"80\" class=\"dg-edge-h\" /><line x1=\"558\" y1=\"120\" x2=\"678\" y2=\"120\" class=\"dg-edge\" /><line x1=\"558\" y1=\"120\" x2=\"610\" y2=\"80\" class=\"dg-edge\" /><line x1=\"610\" y1=\"80\" x2=\"730\" y2=\"80\" class=\"dg-edge\" /><line x1=\"678\" y1=\"240\" x2=\"678\" y2=\"120\" class=\"dg-edge\" /><line x1=\"678\" y1=\"240\" x2=\"730\" y2=\"200\" class=\"dg-edge\" /><line x1=\"730\" y1=\"200\" x2=\"730\" y2=\"80\" class=\"dg-edge\" /><line x1=\"678\" y1=\"120\" x2=\"730\" y2=\"80\" class=\"dg-edge\" /><circle cx=\"558\" cy=\"240\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"610\" cy=\"200\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"558\" cy=\"120\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"610\" cy=\"80\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"678\" cy=\"240\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"730\" cy=\"200\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"678\" cy=\"120\" r=\"6.2\" class=\"dg-atomA\"/><circle cx=\"730\" cy=\"80\" r=\"6.2\" class=\"dg-atomA dg-dim\"/><circle cx=\"618\" cy=\"180\" r=\"6.2\" class=\"dg-atomG\"/><circle cx=\"670\" cy=\"140\" r=\"6.2\" class=\"dg-atomG dg-dim\"/><circle cx=\"584\" cy=\"160\" r=\"6.2\" class=\"dg-atomG\"/><circle cx=\"704\" cy=\"160\" r=\"6.2\" class=\"dg-atomG\"/><circle cx=\"644\" cy=\"100\" r=\"6.2\" class=\"dg-atomG\"/><circle cx=\"644\" cy=\"220\" r=\"6.2\" class=\"dg-atomG\"/><text x=\"644\" y=\"276\" class=\"dg-tb\" text-anchor=\"middle\">Face-centred cubic (F)</text><text x=\"644\" y=\"296\" class=\"dg-t\" text-anchor=\"middle\">8 × ⅛ + 6 × ½ = 4 points</text><g transform=\"translate(160,18)\"><circle cx=\"0\" cy=\"0\" r=\"5.5\" class=\"dg-atomA\"/><text x=\"10\" y=\"4\" class=\"dg-t\" text-anchor=\"start\">corner: shared by 8 cells (⅛)</text><circle cx=\"206\" cy=\"0\" r=\"5.5\" class=\"dg-atomG\"/><text x=\"216\" y=\"4\" class=\"dg-t\" text-anchor=\"start\">face: shared by 2 (½)</text><circle cx=\"376\" cy=\"0\" r=\"5.5\" class=\"dg-atomR\"/><text x=\"386\" y=\"4\" class=\"dg-t\" text-anchor=\"start\">body: inside one cell (1)</text></g></svg><div class=\"diagram-caption\">Counting lattice points per cell: corners, faces and the body are shared differently</div></div>"
        },
        {
          "type": "formulablock",
          "name": "Counting lattice points per cell (3D)",
          "eqs": [
            "N = \\frac{N_{corner}}{8} + \\frac{N_{face}}{2} + N_{body}"
          ],
          "note": "A corner is shared by 8 cells, a face point by 2, and a body point belongs to one. Primitive cubic: 1. Body-centred cubic: 2. Face-centred cubic: 4."
        },
        {
          "type": "example",
          "label": "Worked example: lattice points in a face-centred cubic cell",
          "q": "How many lattice points belong to one conventional FCC unit cell?",
          "steps": [
            "8 corners, each shared by 8 cells: \\(8\\times\\frac{1}{8}=1\\)",
            "6 face-centres, each shared by 2 cells: \\(6\\times\\frac{1}{2}=3\\)",
            "No body-centre point"
          ],
          "answer": "\\(1+3=4\\) lattice points. FCC's conventional cell is <strong>non-primitive</strong>."
        },
        {
          "type": "p",
          "text": "Metals mostly crystallise as BCC, FCC or HCP. Note that HCP is a <em>structure</em> (a lattice with a two-atom motif), not one of the 14 Bravais lattices. You will meet all three properly in the close-packing topic later.",
          "class": ""
        },
        {
          "type": "h2",
          "id": "w1-planes",
          "text": "Why Surfaces Matter: Crystal Planes and Facets"
        },
        {
          "type": "p",
          "text": "Cut a crystal along different planes and the exposed surface looks different: some are flat and densely populated with atoms, others are rougher with more gaps and exposed steps. Reactivity, corrosion, catalytic activity and semiconductor behaviour all depend on which faces show. Nanoparticle shape control is the practice of favouring one facet over another.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 5 of 5</span><iframe data-src=\"widgets/crystal-planes.html\" data-sim=\"crystal-planes.html\" title=\"Crystal planes and nanoparticle facets\" style=\"height:700px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>A simple cubic block of atoms with a highlighted plane through it. The three buttons choose which plane is cut, and the readout shows how many atoms fall on that plane per unit area.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Switch between (100), (110) and (111) and watch the atom density readout.</li><li>Use 'Play assembly' to see the facet build up.</li><li>Toggle the atom size between space-filling and reduced to see the gaps.</li><li>Rotate the block to look straight at each plane.</li></ul></div><div><h5>Why it matters</h5><p>It makes surface structure concrete: different cuts expose different atom arrangements and densities. The numbers in brackets are Miller indices, which get their own topic later, so treat them as labels for now. <strong>Careful:</strong> the simulation uses a simple cubic lattice, where (100) is densest. In FCC metals it is (111) that is the densest plane, so do not carry the ordering over.</p></div></div>"
        },
        {
          "type": "h2",
          "id": "",
          "text": "Week 1 essentials"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Quick recap",
          "html": "<ul><li>Crystalline = long-range order. Polycrystal = many ordered grains. Amorphous = short-range order only.</li><li>Energy well: attraction + repulsion. Bottom = r<sub>0</sub>. Depth = bond energy. Curvature = stiffness. Asymmetry = thermal expansion.</li><li>Deep well means high T<sub>m</sub>, high E, low α (ceramics). Shallow well means the reverse (polymers).</li><li>Metallic bonding is non-directional, so metals pack densely (BCC, FCC, HCP).</li><li>Lattice = points. Motif = atoms on each point. Crystal = lattice + motif. Lattice points are not atoms.</li><li>\\(\\mathbf R=n_1\\mathbf a+n_2\\mathbf b\\,(+n_3\\mathbf c)\\) with integer n. Primitive vectors are not unique.</li><li>Primitive cell = 1 lattice point. Non-primitive = more than 1.</li><li>2D: 5 Bravais lattices (oblique, rectangular, centred rectangular, square, hexagonal).</li><li>3D: 7 crystal systems, 14 Bravais lattices, cell types P, I, F, C.</li><li>Points per cubic cell: P = 1, I = 2, F = 4.</li></ul>"
        }
      ],
      "essentialsTitle": null,
      "essentialsHeading": null,
      "essentials": null,
      "desc": "Solid types, the interatomic energy well (expansion, stiffness, melting), bonding, lattices, motifs, unit cells, 2D and 3D Bravais lattices, and crystal facets.",
      "difficulty": "Medium",
      "readTime": "35 min",
      "color": "#0ea5c6"
    },
    {
      "id": "w2",
      "numLabel": "Week 2",
      "title": "Directions, Planes and Close Packing",
      "subtitle": "The notation for pointing at things inside a crystal (fractional coordinates, [uvw] directions, (hkl) Miller planes), then why metals pack the way they do (HCP, FCC, BCC) and how to calculate how full each unit cell is.",
      "sections": [
        {
          "type": "toc",
          "title": "This week",
          "items": [
            {
              "href": "#w2-recap",
              "label": "Recap: the unit cell and the seven crystal systems"
            },
            {
              "href": "#w2-frac",
              "label": "Fractional coordinates: where the atoms sit"
            },
            {
              "href": "#w2-dirs",
              "label": "Lattice directions [uvw]"
            },
            {
              "href": "#w2-miller",
              "label": "Miller indices (hkl): naming planes"
            },
            {
              "href": "#w2-close",
              "label": "Close packing: why metals pile up like oranges"
            },
            {
              "href": "#w2-apf",
              "label": "Atomic packing factor: FCC, BCC and HCP"
            },
            {
              "href": "#w2-why",
              "label": "Why any of this matters"
            },
            {
              "href": "#w2-practice",
              "label": "Test yourself"
            }
          ]
        },
        {
          "type": "h2",
          "id": "w2-recap",
          "text": "Recap: The Unit Cell and the Seven Crystal Systems"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">🧱</span><div class=\"analogy-text\"><strong>Think of a tiled floor.</strong> You never describe every tile. You describe one tile and say \"repeat it by sliding, never turning or flipping\". The unit cell is that tile in 3D, and the whole crystal is built from it by translation alone.</div></div>"
        },
        {
          "type": "p",
          "text": "The unit cell is the smallest block that rebuilds the whole crystal by <strong>translation only</strong>. It has to carry the full symmetry of the crystal, so it contains everything needed to reproduce the structure. Its shape is set by six <strong>lattice parameters</strong>: the edge lengths a, b, c and the angles α, β, γ.",
          "class": ""
        },
        {
          "type": "p",
          "text": "The seven crystal systems are not defined by what the box looks like. They are defined by the <strong>minimum symmetry</strong> the lattice must have. An <em>n</em>-fold rotation axis means turning the crystal by 360°/<em>n</em> leaves it looking identical.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Crystal system</th><th>Minimum symmetry</th></tr></thead><tbody><tr><td>Cubic</td><td>Four 3-fold axes (along the body diagonals of the cube)</td></tr><tr><td>Tetragonal</td><td>One 4-fold axis (along c)</td></tr><tr><td>Orthorhombic</td><td>Three 2-fold axes (along a, b and c)</td></tr><tr><td>Monoclinic</td><td>One 2-fold axis (along b)</td></tr><tr><td>Triclinic</td><td>None</td></tr><tr><td>Trigonal</td><td>One 3-fold axis (along a body diagonal)</td></tr><tr><td>Hexagonal</td><td>One 6-fold axis (along c)</td></tr></tbody></table></div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "The trap",
          "html": "<p>A cell that <em>looks</em> like a cube is not automatically cubic. Stretch a cube along c and the four body-diagonal 3-fold axes are gone, so it is tetragonal. The system is decided by symmetry, not by eyeballing the box.</p>"
        },
        {
          "type": "h2",
          "id": "w2-frac",
          "text": "Fractional Coordinates: Where the Atoms Sit"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">🎬</span><div class=\"analogy-text\"><strong>Think of a cinema seat.</strong> Saying \"halfway along the row and a third of the way back\" works in a small screening room and in an IMAX. You are giving the position as a fraction of the room, not in metres. Fractional coordinates do the same for a unit cell.</div></div>"
        },
        {
          "type": "p",
          "text": "Atom positions are written as a triple (x, y, z), where each number is a <strong>fraction of the lattice constant</strong> along a, b and c, measured from a corner origin. Using the lattice constants as the unit means the description is independent of the cell size and works for non-cubic cells where a, b and c differ.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Structure</th><th>Atom positions in the conventional cell</th></tr></thead><tbody><tr><td>Simple cubic</td><td>(0, 0, 0)</td></tr><tr><td>BCC</td><td>(0, 0, 0) and (½, ½, ½)</td></tr><tr><td>FCC</td><td>(0, 0, 0), (½, ½, 0), (½, 0, ½), (0, ½, ½)</td></tr></tbody></table></div>"
        },
        {
          "type": "p",
          "text": "The FCC list is the four <em>distinct</em> positions per cell: one corner (all eight corners are equivalent by translation) plus the three face-centre types. This matches the 4 atoms per cell counted later.",
          "class": ""
        },
        {
          "type": "h2",
          "id": "w2-dirs",
          "text": "Lattice Directions [uvw]"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">🧭</span><div class=\"analogy-text\"><strong>Think of a compass bearing.</strong> \"North-east\" describes a way of travelling, not a place. A crystal direction works the same way. It matters because metals deform by atoms slipping along particular directions, and an electron beam in a microscope is aimed along one.</div></div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "The algorithm",
          "html": "<ol><li>Slide the vector so it passes through the origin of the unit cell.</li><li>Read its projections on a, b and c, in units of a, b and c.</li><li>Clear fractions and reduce to the <strong>smallest integers</strong>.</li><li>Write in <strong>square brackets with no commas</strong>: [uvw]. Negatives get a bar over the number, for example [<span class=\"bar\">1</span>11].</li></ol>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 270\" role=\"img\" aria-label=\"Three directions drawn from the origin of a unit cube: [201], [121] and [111]\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"dr-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"dr-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker></defs><line x1=\"52\" y1=\"212\" x2=\"52\" y2=\"104\" class=\"dg-edge\"/><line x1=\"52\" y1=\"212\" x2=\"160\" y2=\"212\" class=\"dg-edge\"/><line x1=\"52\" y1=\"212\" x2=\"96\" y2=\"180\" class=\"dg-edge-h\"/><line x1=\"52\" y1=\"104\" x2=\"160\" y2=\"104\" class=\"dg-edge\"/><line x1=\"52\" y1=\"104\" x2=\"96\" y2=\"72\" class=\"dg-edge\"/><line x1=\"160\" y1=\"212\" x2=\"160\" y2=\"104\" class=\"dg-edge\"/><line x1=\"160\" y1=\"212\" x2=\"204\" y2=\"180\" class=\"dg-edge\"/><line x1=\"160\" y1=\"104\" x2=\"204\" y2=\"72\" class=\"dg-edge\"/><line x1=\"96\" y1=\"180\" x2=\"96\" y2=\"72\" class=\"dg-edge-h\"/><line x1=\"96\" y1=\"180\" x2=\"204\" y2=\"180\" class=\"dg-edge-h\"/><line x1=\"96\" y1=\"72\" x2=\"204\" y2=\"72\" class=\"dg-edge\"/><line x1=\"204\" y1=\"180\" x2=\"204\" y2=\"72\" class=\"dg-edge\"/><line x1=\"52\" y1=\"212\" x2=\"33.5\" y2=\"225.4\" class=\"dg-axis\"/><text x=\"25.5\" y=\"234.4\" class=\"dg-tb\" text-anchor=\"middle\">a</text><line x1=\"160\" y1=\"212\" x2=\"201\" y2=\"212\" class=\"dg-axis\"/><text x=\"210\" y=\"216\" class=\"dg-tb\" text-anchor=\"middle\">b</text><line x1=\"52\" y1=\"104\" x2=\"52\" y2=\"63\" class=\"dg-axis\"/><text x=\"52\" y=\"55\" class=\"dg-tb\" text-anchor=\"middle\">c</text><line x1=\"52\" y1=\"212\" x2=\"96\" y2=\"126\" class=\"dg-vec-amb\" marker-end=\"url(#dr-amb)\"/><circle cx=\"52\" cy=\"212\" r=\"4.5\" class=\"dg-lp-o\"/><text x=\"128\" y=\"26\" class=\"dg-vl-amb\" text-anchor=\"middle\">[201]</text><text x=\"128\" y=\"256\" class=\"dg-t\" text-anchor=\"middle\">(1, 0, ½) × 2 = (2, 0, 1)</text><line x1=\"312\" y1=\"212\" x2=\"312\" y2=\"104\" class=\"dg-edge\"/><line x1=\"312\" y1=\"212\" x2=\"420\" y2=\"212\" class=\"dg-edge\"/><line x1=\"312\" y1=\"212\" x2=\"356\" y2=\"180\" class=\"dg-edge-h\"/><line x1=\"312\" y1=\"104\" x2=\"420\" y2=\"104\" class=\"dg-edge\"/><line x1=\"312\" y1=\"104\" x2=\"356\" y2=\"72\" class=\"dg-edge\"/><line x1=\"420\" y1=\"212\" x2=\"420\" y2=\"104\" class=\"dg-edge\"/><line x1=\"420\" y1=\"212\" x2=\"464\" y2=\"180\" class=\"dg-edge\"/><line x1=\"420\" y1=\"104\" x2=\"464\" y2=\"72\" class=\"dg-edge\"/><line x1=\"356\" y1=\"180\" x2=\"356\" y2=\"72\" class=\"dg-edge-h\"/><line x1=\"356\" y1=\"180\" x2=\"464\" y2=\"180\" class=\"dg-edge-h\"/><line x1=\"356\" y1=\"72\" x2=\"464\" y2=\"72\" class=\"dg-edge\"/><line x1=\"464\" y1=\"180\" x2=\"464\" y2=\"72\" class=\"dg-edge\"/><line x1=\"312\" y1=\"212\" x2=\"293.5\" y2=\"225.4\" class=\"dg-axis\"/><text x=\"285.5\" y=\"234.4\" class=\"dg-tb\" text-anchor=\"middle\">a</text><line x1=\"420\" y1=\"212\" x2=\"461\" y2=\"212\" class=\"dg-axis\"/><text x=\"470\" y=\"216\" class=\"dg-tb\" text-anchor=\"middle\">b</text><line x1=\"312\" y1=\"104\" x2=\"312\" y2=\"63\" class=\"dg-axis\"/><text x=\"312\" y=\"55\" class=\"dg-tb\" text-anchor=\"middle\">c</text><line x1=\"312\" y1=\"212\" x2=\"442\" y2=\"142\" class=\"dg-vec-acc\" marker-end=\"url(#dr-acc)\"/><circle cx=\"312\" cy=\"212\" r=\"4.5\" class=\"dg-lp-o\"/><text x=\"388\" y=\"26\" class=\"dg-vl-acc\" text-anchor=\"middle\">[121]</text><text x=\"388\" y=\"256\" class=\"dg-t\" text-anchor=\"middle\">(½, 1, ½) × 2 = (1, 2, 1)</text><line x1=\"572\" y1=\"212\" x2=\"572\" y2=\"104\" class=\"dg-edge\"/><line x1=\"572\" y1=\"212\" x2=\"680\" y2=\"212\" class=\"dg-edge\"/><line x1=\"572\" y1=\"212\" x2=\"616\" y2=\"180\" class=\"dg-edge-h\"/><line x1=\"572\" y1=\"104\" x2=\"680\" y2=\"104\" class=\"dg-edge\"/><line x1=\"572\" y1=\"104\" x2=\"616\" y2=\"72\" class=\"dg-edge\"/><line x1=\"680\" y1=\"212\" x2=\"680\" y2=\"104\" class=\"dg-edge\"/><line x1=\"680\" y1=\"212\" x2=\"724\" y2=\"180\" class=\"dg-edge\"/><line x1=\"680\" y1=\"104\" x2=\"724\" y2=\"72\" class=\"dg-edge\"/><line x1=\"616\" y1=\"180\" x2=\"616\" y2=\"72\" class=\"dg-edge-h\"/><line x1=\"616\" y1=\"180\" x2=\"724\" y2=\"180\" class=\"dg-edge-h\"/><line x1=\"616\" y1=\"72\" x2=\"724\" y2=\"72\" class=\"dg-edge\"/><line x1=\"724\" y1=\"180\" x2=\"724\" y2=\"72\" class=\"dg-edge\"/><line x1=\"572\" y1=\"212\" x2=\"553.5\" y2=\"225.4\" class=\"dg-axis\"/><text x=\"545.5\" y=\"234.4\" class=\"dg-tb\" text-anchor=\"middle\">a</text><line x1=\"680\" y1=\"212\" x2=\"721\" y2=\"212\" class=\"dg-axis\"/><text x=\"730\" y=\"216\" class=\"dg-tb\" text-anchor=\"middle\">b</text><line x1=\"572\" y1=\"104\" x2=\"572\" y2=\"63\" class=\"dg-axis\"/><text x=\"572\" y=\"55\" class=\"dg-tb\" text-anchor=\"middle\">c</text><line x1=\"572\" y1=\"212\" x2=\"724\" y2=\"72\" class=\"dg-vec-amb\" marker-end=\"url(#dr-amb)\"/><circle cx=\"572\" cy=\"212\" r=\"4.5\" class=\"dg-lp-o\"/><text x=\"648\" y=\"26\" class=\"dg-vl-amb\" text-anchor=\"middle\">[111]</text><text x=\"648\" y=\"256\" class=\"dg-t\" text-anchor=\"middle\">body diagonal, (1, 1, 1)</text></svg></div>"
        },
        {
          "type": "example",
          "label": "Worked example: with fractions",
          "q": "A vector runs from the origin to the point (1, 0, ½). What is its direction?",
          "steps": [
            "Projections: \\(1,\\ 0,\\ \\tfrac12\\)",
            "Clear the fraction by multiplying by 2: \\(2,\\ 0,\\ 1\\)"
          ],
          "answer": "The direction is <strong>[201]</strong>."
        },
        {
          "type": "example",
          "label": "Worked example: reading from a diagram",
          "q": "A vector ends at x = a/2, y = b, z = 0. What is its direction?",
          "steps": [
            "In units of a, b, c: \\(\\tfrac12,\\ 1,\\ 0\\)",
            "Multiply by 2: \\(1,\\ 2,\\ 0\\)"
          ],
          "answer": "The direction is <strong>[120]</strong>."
        },
        {
          "type": "formulablock",
          "name": "Direction between two points",
          "eqs": [
            "[\\,u\\,v\\,w\\,] = [\\,x_2-x_1,\\ \\ y_2-y_1,\\ \\ z_2-z_1\\,] \\quad \\text{(then reduce)}"
          ],
          "vars": [
            {
              "symbol": "(x₁, y₁, z₁)",
              "desc": "tail of the vector"
            },
            {
              "symbol": "(x₂, y₂, z₂)",
              "desc": "head of the vector"
            }
          ],
          "note": "Always head minus tail, in fractional coordinates, then reduce to the smallest integers."
        },
        {
          "type": "example",
          "label": "Worked example: not starting at the origin",
          "q": "A line runs from (½, 0, 0) to (1, 1, ½). What is its direction?",
          "steps": [
            "Head minus tail: \\((1-\\tfrac12,\\ 1-0,\\ \\tfrac12-0)=(\\tfrac12,\\ 1,\\ \\tfrac12)\\)",
            "Multiply by 2: \\((1,\\ 2,\\ 1)\\)"
          ],
          "answer": "The direction is <strong>[121]</strong>."
        },
        {
          "type": "h3",
          "text": "Directions of a form: &lt;uvw&gt;"
        },
        {
          "type": "p",
          "text": "Directions that symmetry makes physically identical are grouped as a <strong>family</strong> with angle brackets, &lt;uvw&gt;. The number of members depends on the crystal system, because it is the symmetry that decides what counts as equivalent.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Family (cubic)</th><th>Members</th><th>Where it is</th></tr></thead><tbody><tr><td>&lt;100&gt;</td><td>6</td><td>The cube edges, both ways along a, b and c</td></tr><tr><td>&lt;110&gt;</td><td>12</td><td>The face diagonals</td></tr><tr><td>&lt;111&gt;</td><td>8</td><td>The body diagonals</td></tr></tbody></table></div>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Same indices, different family size",
          "html": "<p>In a <strong>tetragonal</strong> crystal [100] and [010] are equivalent but [001] is not, because c is a different length. So &lt;100&gt; has 4 members there, not 6. Never assume cubic counts apply to other systems.</p>"
        },
        {
          "type": "h2",
          "id": "w2-miller",
          "text": "Miller Indices (hkl): Naming Planes"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">🧀</span><div class=\"analogy-text\"><strong>Think of slicing a block of cheese.</strong> What matters is the <em>angle</em> of the cut, and any parallel slice is the same cut. Miller indices record the orientation of a plane, not where it sits. That orientation decides where a crystal cleaves, how it grows, and how reactive its surface is.</div></div>"
        },
        {
          "type": "p",
          "text": "A set of parallel planes passes through every lattice point, so one label covers the whole family. The plane (hkl) cuts the axes at <strong>a/h, b/k and c/l</strong>. In other words, the Miller index is the <em>reciprocal</em> of the intercept.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "The algorithm",
          "html": "<ol><li>Find the <strong>intercepts</strong> of the plane on a, b and c, in units of a, b and c.</li><li>Take the <strong>reciprocals</strong>.</li><li>Clear fractions and reduce to the <strong>smallest integers</strong>.</li><li>Write in <strong>round brackets, no commas</strong>: (hkl). Negatives get a bar. If an index has two digits, separate with commas, for example (10,1,1).</li></ol>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 252\" role=\"img\" aria-label=\"Four planes in a unit cube: (100), (110), (111) and (210), with their axis intercepts\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"68,168 160,168 160,76 68,76\" class=\"dg-cell-acc\"/><line x1=\"30\" y1=\"196\" x2=\"30\" y2=\"104\" class=\"dg-edge\"/><line x1=\"30\" y1=\"196\" x2=\"122\" y2=\"196\" class=\"dg-edge\"/><line x1=\"30\" y1=\"196\" x2=\"68\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"30\" y1=\"104\" x2=\"122\" y2=\"104\" class=\"dg-edge\"/><line x1=\"30\" y1=\"104\" x2=\"68\" y2=\"76\" class=\"dg-edge\"/><line x1=\"122\" y1=\"196\" x2=\"122\" y2=\"104\" class=\"dg-edge\"/><line x1=\"122\" y1=\"196\" x2=\"160\" y2=\"168\" class=\"dg-edge\"/><line x1=\"122\" y1=\"104\" x2=\"160\" y2=\"76\" class=\"dg-edge\"/><line x1=\"68\" y1=\"168\" x2=\"68\" y2=\"76\" class=\"dg-edge-h\"/><line x1=\"68\" y1=\"168\" x2=\"160\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"68\" y1=\"76\" x2=\"160\" y2=\"76\" class=\"dg-edge\"/><line x1=\"160\" y1=\"168\" x2=\"160\" y2=\"76\" class=\"dg-edge\"/><line x1=\"30\" y1=\"196\" x2=\"14\" y2=\"207.8\" class=\"dg-axis\"/><text x=\"6\" y=\"216.8\" class=\"dg-tb\" text-anchor=\"middle\">a</text><line x1=\"122\" y1=\"196\" x2=\"157\" y2=\"196\" class=\"dg-axis\"/><text x=\"166\" y=\"200\" class=\"dg-tb\" text-anchor=\"middle\">b</text><line x1=\"30\" y1=\"104\" x2=\"30\" y2=\"69\" class=\"dg-axis\"/><text x=\"30\" y=\"61\" class=\"dg-tb\" text-anchor=\"middle\">c</text><circle cx=\"68\" cy=\"168\" r=\"4\" class=\"dg-lp-amb\"/><text x=\"96\" y=\"26\" class=\"dg-vl-acc\" text-anchor=\"middle\">(100)</text><text x=\"96\" y=\"240\" class=\"dg-t\" text-anchor=\"middle\">intercepts 1, ∞, ∞</text><polygon points=\"263,168 317,196 317,104 263,76\" class=\"dg-cell-acc\"/><line x1=\"225\" y1=\"196\" x2=\"225\" y2=\"104\" class=\"dg-edge\"/><line x1=\"225\" y1=\"196\" x2=\"317\" y2=\"196\" class=\"dg-edge\"/><line x1=\"225\" y1=\"196\" x2=\"263\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"225\" y1=\"104\" x2=\"317\" y2=\"104\" class=\"dg-edge\"/><line x1=\"225\" y1=\"104\" x2=\"263\" y2=\"76\" class=\"dg-edge\"/><line x1=\"317\" y1=\"196\" x2=\"317\" y2=\"104\" class=\"dg-edge\"/><line x1=\"317\" y1=\"196\" x2=\"355\" y2=\"168\" class=\"dg-edge\"/><line x1=\"317\" y1=\"104\" x2=\"355\" y2=\"76\" class=\"dg-edge\"/><line x1=\"263\" y1=\"168\" x2=\"263\" y2=\"76\" class=\"dg-edge-h\"/><line x1=\"263\" y1=\"168\" x2=\"355\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"263\" y1=\"76\" x2=\"355\" y2=\"76\" class=\"dg-edge\"/><line x1=\"355\" y1=\"168\" x2=\"355\" y2=\"76\" class=\"dg-edge\"/><line x1=\"225\" y1=\"196\" x2=\"209\" y2=\"207.8\" class=\"dg-axis\"/><text x=\"201\" y=\"216.8\" class=\"dg-tb\" text-anchor=\"middle\">a</text><line x1=\"317\" y1=\"196\" x2=\"352\" y2=\"196\" class=\"dg-axis\"/><text x=\"361\" y=\"200\" class=\"dg-tb\" text-anchor=\"middle\">b</text><line x1=\"225\" y1=\"104\" x2=\"225\" y2=\"69\" class=\"dg-axis\"/><text x=\"225\" y=\"61\" class=\"dg-tb\" text-anchor=\"middle\">c</text><circle cx=\"263\" cy=\"168\" r=\"4\" class=\"dg-lp-amb\"/><circle cx=\"317\" cy=\"196\" r=\"4\" class=\"dg-lp-amb\"/><text x=\"291\" y=\"26\" class=\"dg-vl-acc\" text-anchor=\"middle\">(110)</text><text x=\"291\" y=\"240\" class=\"dg-t\" text-anchor=\"middle\">intercepts 1, 1, ∞</text><polygon points=\"458,168 512,196 420,104\" class=\"dg-cell-acc\"/><line x1=\"420\" y1=\"196\" x2=\"420\" y2=\"104\" class=\"dg-edge\"/><line x1=\"420\" y1=\"196\" x2=\"512\" y2=\"196\" class=\"dg-edge\"/><line x1=\"420\" y1=\"196\" x2=\"458\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"420\" y1=\"104\" x2=\"512\" y2=\"104\" class=\"dg-edge\"/><line x1=\"420\" y1=\"104\" x2=\"458\" y2=\"76\" class=\"dg-edge\"/><line x1=\"512\" y1=\"196\" x2=\"512\" y2=\"104\" class=\"dg-edge\"/><line x1=\"512\" y1=\"196\" x2=\"550\" y2=\"168\" class=\"dg-edge\"/><line x1=\"512\" y1=\"104\" x2=\"550\" y2=\"76\" class=\"dg-edge\"/><line x1=\"458\" y1=\"168\" x2=\"458\" y2=\"76\" class=\"dg-edge-h\"/><line x1=\"458\" y1=\"168\" x2=\"550\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"458\" y1=\"76\" x2=\"550\" y2=\"76\" class=\"dg-edge\"/><line x1=\"550\" y1=\"168\" x2=\"550\" y2=\"76\" class=\"dg-edge\"/><line x1=\"420\" y1=\"196\" x2=\"404\" y2=\"207.8\" class=\"dg-axis\"/><text x=\"396\" y=\"216.8\" class=\"dg-tb\" text-anchor=\"middle\">a</text><line x1=\"512\" y1=\"196\" x2=\"547\" y2=\"196\" class=\"dg-axis\"/><text x=\"556\" y=\"200\" class=\"dg-tb\" text-anchor=\"middle\">b</text><line x1=\"420\" y1=\"104\" x2=\"420\" y2=\"69\" class=\"dg-axis\"/><text x=\"420\" y=\"61\" class=\"dg-tb\" text-anchor=\"middle\">c</text><circle cx=\"458\" cy=\"168\" r=\"4\" class=\"dg-lp-amb\"/><circle cx=\"512\" cy=\"196\" r=\"4\" class=\"dg-lp-amb\"/><circle cx=\"420\" cy=\"104\" r=\"4\" class=\"dg-lp-amb\"/><text x=\"486\" y=\"26\" class=\"dg-vl-acc\" text-anchor=\"middle\">(111)</text><text x=\"486\" y=\"240\" class=\"dg-t\" text-anchor=\"middle\">intercepts 1, 1, 1</text><polygon points=\"634,182 707,196 707,104 634,90\" class=\"dg-cell-acc\"/><line x1=\"615\" y1=\"196\" x2=\"615\" y2=\"104\" class=\"dg-edge\"/><line x1=\"615\" y1=\"196\" x2=\"707\" y2=\"196\" class=\"dg-edge\"/><line x1=\"615\" y1=\"196\" x2=\"653\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"615\" y1=\"104\" x2=\"707\" y2=\"104\" class=\"dg-edge\"/><line x1=\"615\" y1=\"104\" x2=\"653\" y2=\"76\" class=\"dg-edge\"/><line x1=\"707\" y1=\"196\" x2=\"707\" y2=\"104\" class=\"dg-edge\"/><line x1=\"707\" y1=\"196\" x2=\"745\" y2=\"168\" class=\"dg-edge\"/><line x1=\"707\" y1=\"104\" x2=\"745\" y2=\"76\" class=\"dg-edge\"/><line x1=\"653\" y1=\"168\" x2=\"653\" y2=\"76\" class=\"dg-edge-h\"/><line x1=\"653\" y1=\"168\" x2=\"745\" y2=\"168\" class=\"dg-edge-h\"/><line x1=\"653\" y1=\"76\" x2=\"745\" y2=\"76\" class=\"dg-edge\"/><line x1=\"745\" y1=\"168\" x2=\"745\" y2=\"76\" class=\"dg-edge\"/><line x1=\"615\" y1=\"196\" x2=\"599\" y2=\"207.8\" class=\"dg-axis\"/><text x=\"591\" y=\"216.8\" class=\"dg-tb\" text-anchor=\"middle\">a</text><line x1=\"707\" y1=\"196\" x2=\"742\" y2=\"196\" class=\"dg-axis\"/><text x=\"751\" y=\"200\" class=\"dg-tb\" text-anchor=\"middle\">b</text><line x1=\"615\" y1=\"104\" x2=\"615\" y2=\"69\" class=\"dg-axis\"/><text x=\"615\" y=\"61\" class=\"dg-tb\" text-anchor=\"middle\">c</text><circle cx=\"634\" cy=\"182\" r=\"4\" class=\"dg-lp-amb\"/><circle cx=\"707\" cy=\"196\" r=\"4\" class=\"dg-lp-amb\"/><text x=\"681\" y=\"26\" class=\"dg-vl-acc\" text-anchor=\"middle\">(210)</text><text x=\"681\" y=\"240\" class=\"dg-t\" text-anchor=\"middle\">intercepts ½, 1, ∞</text></svg></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Intercepts (a, b, c)</th><th>Reciprocals</th><th>Miller index</th></tr></thead><tbody><tr><td>1, ∞, ∞</td><td>1, 0, 0</td><td>(100)</td></tr><tr><td>1, 1, ∞</td><td>1, 1, 0</td><td>(110)</td></tr><tr><td>1, 1, 1</td><td>1, 1, 1</td><td>(111)</td></tr><tr><td>½, 1, ∞</td><td>2, 1, 0</td><td>(210)</td></tr><tr><td>⅓, ⅕, ∞</td><td>3, 5, 0</td><td>(350)</td></tr><tr><td>⅓, ⅕, 1</td><td>3, 5, 1</td><td>(351)</td></tr><tr><td>-1, 1, ∞</td><td><span class=\"bar\">1</span>, 1, 0</td><td>(<span class=\"bar\">1</span>10)</td></tr></tbody></table></div>"
        },
        {
          "type": "h3",
          "text": "Why reciprocals?"
        },
        {
          "type": "p",
          "text": "A plane parallel to an axis meets it at infinity. Taking the reciprocal turns that awkward ∞ into a clean <strong>0</strong>. It also makes the index track plane spacing: bigger indices mean planes packed closer together. In the cubic system the spacing between neighbouring (hkl) planes is",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Plane spacing (cubic only)",
          "eqs": [
            "d_{hkl}=\\frac{a}{\\sqrt{h^{2}+k^{2}+l^{2}}}"
          ],
          "vars": [
            {
              "symbol": "a",
              "desc": "cubic lattice parameter"
            },
            {
              "symbol": "h, k, l",
              "desc": "Miller indices of the plane family"
            }
          ],
          "note": "So (110) planes are spaced \\(a/\\sqrt2\\) apart, closer than (100) planes at \\(a\\). This result is not on the Week 2 slides, so treat it as extra context unless the lecturer covers it."
        },
        {
          "type": "h3",
          "text": "Rules to remember"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Reading an index at a glance",
          "html": "<ul><li><strong>A zero means parallel.</strong> (0kl) is parallel to a, (h0l) to b, (hk0) to c.</li><li><strong>A small index means nearly parallel</strong> to that axis.</li><li><strong>Parallel planes share the same indices.</strong> Miller indices give orientation, not position.</li><li>If the plane passes through the origin, you cannot take a reciprocal of 0. Shift the origin, or use a parallel plane.</li><li>Negative intercepts give a bar: intercept -1 on a gives <span class=\"bar\">1</span>.</li></ul>"
        },
        {
          "type": "p",
          "text": "The lecture shows the series (010), (110), (210), (310), (510), (10,1,0). Reading them off: (010) is parallel to a. As h grows against k = 1, the a-intercept 1/h shrinks towards the origin and the plane swings round until (10,1,0) is nearly parallel to b, almost a (100) plane. The small index is the axis the plane is nearly parallel to.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Planes of a form: {hkl}"
        },
        {
          "type": "p",
          "text": "Curly brackets group symmetry-equivalent planes. In the cubic system {100} is the six faces of the cube (three pairs). In the <strong>tetragonal</strong> system the same label covers four planes of the {100} type but only two of the {001} type, because c is different. As with directions, the grouping depends on the crystal system.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Drawing a plane from its index"
        },
        {
          "type": "p",
          "text": "Reverse the algorithm. Take reciprocals to get intercepts, mark them on the axes, and join the marks. Where an intercept is ∞ draw lines parallel to that axis out to the cell edge.",
          "class": ""
        },
        {
          "type": "example",
          "label": "Worked example: draw (351)",
          "q": "Find the intercepts of (351) so you can draw it.",
          "steps": [
            "Reciprocals of the indices: \\(\\tfrac13,\\ \\tfrac15,\\ 1\\)",
            "Mark ⅓ along a, ⅕ along b and 1 along c, then join the three points."
          ],
          "answer": "Intercepts are <strong>a = ⅓, b = ⅕, c = 1</strong>. If the third index were 0, as in (350), the c intercept is infinite and the plane is parallel to c."
        },
        {
          "type": "example",
          "label": "Practice: the intercepts of three more planes",
          "q": "Give the intercepts of (251), (114) and (10,1,1).",
          "steps": [
            "(251): \\(\\tfrac12,\\ \\tfrac15,\\ 1\\)",
            "(114): \\(1,\\ 1,\\ \\tfrac14\\)",
            "(10,1,1): \\(\\tfrac1{10},\\ 1,\\ 1\\)"
          ],
          "answer": "Then draw each in a unit cell and check it with the unit cell tool on Canvas."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Direction vs plane: do not mix them up",
          "html": "<p>[hkl] with square brackets is a <strong>direction</strong>, (hkl) with round brackets is a <strong>plane</strong>. In cubic crystals only, the direction [hkl] is perpendicular to the plane (hkl). In other crystal systems that is not true.</p>"
        },
        {
          "type": "h2",
          "id": "w2-close",
          "text": "Close Packing: Why Metals Pile Up Like Oranges"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">🍊</span><div class=\"analogy-text\"><strong>Think of oranges stacked at a market stall.</strong> The stable stack puts each orange in the dip between three below it, because that is the densest way to pack equal spheres. Metals do the same. Usually only one element is present, so every atom is the same size. Metallic bonding is non-directional, so nothing forces a loose open arrangement. And short nearest-neighbour distances lower the bond energy.</div></div>"
        },
        {
          "type": "h3",
          "text": "Start in 2D"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 262\" role=\"img\" aria-label=\"Square packing of circles (0.785) versus hexagonal packing (0.907) with the repeat cell highlighted\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"38\" width=\"360\" height=\"212\" rx=\"8\" class=\"dg-frame\"/><text x=\"190\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Square packing</text><circle cx=\"133\" cy=\"70\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"133\" cy=\"108\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"133\" cy=\"146\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"133\" cy=\"184\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"171\" cy=\"70\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"171\" cy=\"108\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"171\" cy=\"146\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"171\" cy=\"184\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"209\" cy=\"70\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"209\" cy=\"108\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"209\" cy=\"146\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"209\" cy=\"184\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"247\" cy=\"70\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"247\" cy=\"108\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"247\" cy=\"146\" r=\"19\" class=\"dg-atomA dg-dim\"/><circle cx=\"247\" cy=\"184\" r=\"19\" class=\"dg-atomA dg-dim\"/><polygon points=\"171,108 209,108 209,146 171,146\" class=\"dg-cell-amb\"/><circle cx=\"171\" cy=\"108\" r=\"19\" class=\"dg-atomA\"/><circle cx=\"209\" cy=\"108\" r=\"19\" class=\"dg-atomA\"/><circle cx=\"209\" cy=\"146\" r=\"19\" class=\"dg-atomA\"/><circle cx=\"171\" cy=\"146\" r=\"19\" class=\"dg-atomA\"/><text x=\"190\" y=\"236\" class=\"dg-t\" text-anchor=\"middle\">4 neighbours · efficiency π/4 = 0.785</text><rect x=\"400\" y=\"38\" width=\"370\" height=\"212\" rx=\"8\" class=\"dg-frame\"/><text x=\"585\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Hexagonal packing</text><circle cx=\"518\" cy=\"70\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"556\" cy=\"70\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"594\" cy=\"70\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"632\" cy=\"70\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"537\" cy=\"102.9\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"575\" cy=\"102.9\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"613\" cy=\"102.9\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"651\" cy=\"102.9\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"518\" cy=\"135.8\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"556\" cy=\"135.8\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"594\" cy=\"135.8\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"632\" cy=\"135.8\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"537\" cy=\"168.7\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"575\" cy=\"168.7\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"613\" cy=\"168.7\" r=\"19\" class=\"dg-atomG dg-dim\"/><circle cx=\"651\" cy=\"168.7\" r=\"19\" class=\"dg-atomG dg-dim\"/><polygon points=\"556,102.9 594,102.9 613,135.8 575,135.8\" class=\"dg-cell-amb\"/><circle cx=\"556\" cy=\"102.9\" r=\"19\" class=\"dg-atomG\"/><circle cx=\"594\" cy=\"102.9\" r=\"19\" class=\"dg-atomG\"/><circle cx=\"613\" cy=\"135.8\" r=\"19\" class=\"dg-atomG\"/><circle cx=\"575\" cy=\"135.8\" r=\"19\" class=\"dg-atomG\"/><text x=\"585\" y=\"236\" class=\"dg-t\" text-anchor=\"middle\">6 neighbours · efficiency π/(2√3) = 0.907</text></svg></div>"
        },
        {
          "type": "formulablock",
          "name": "2D packing efficiency",
          "eqs": [
            "\\text{square: } \\frac{\\pi r^{2}}{(2r)^{2}} = 0.785 \\qquad \\text{hexagonal: } \\frac{\\pi r^{2}}{2\\sqrt3\\,r^{2}} = 0.907"
          ],
          "vars": [
            {
              "symbol": "r",
              "desc": "circle radius"
            },
            {
              "symbol": "2√3 r²",
              "desc": "area of the hexagonal rhombus cell: base 2r times height 2r·sin 60° = √3 r"
            }
          ],
          "note": "Each cell holds exactly one circle: four quarter-circles in the square, and two 60° sectors plus two 120° sectors in the rhombus."
        },
        {
          "type": "h3",
          "text": "Then stack the layers in 3D"
        },
        {
          "type": "p",
          "text": "Take a hexagonally packed layer A. A second layer B sits in half of the dips of A. The third layer then has a choice, and that choice makes two different crystals.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 262\" role=\"img\" aria-label=\"Schematic side view of ABAB and ABCABC stacking of close-packed layers\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"38\" width=\"372\" height=\"212\" rx=\"8\" class=\"dg-frame\"/><text x=\"202\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">ABAB…  hexagonal close-packed</text><text x=\"28\" y=\"219\" class=\"dg-tb-blue\" text-anchor=\"middle\">A</text><circle cx=\"52\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"84.4\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"116.8\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"149.2\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"181.6\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"214\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"246.4\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"278.8\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><text x=\"28\" y=\"189\" class=\"dg-tb-acc\" text-anchor=\"middle\">B</text><circle cx=\"64\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"96.4\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"128.8\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"161.2\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"193.6\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"226\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"258.4\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"290.8\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><text x=\"28\" y=\"159\" class=\"dg-tb-blue\" text-anchor=\"middle\">A</text><circle cx=\"52\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"84.4\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"116.8\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"149.2\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"181.6\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"214\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"246.4\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"278.8\" cy=\"154\" r=\"12\" class=\"dg-atomA\"/><text x=\"28\" y=\"129\" class=\"dg-tb-acc\" text-anchor=\"middle\">B</text><circle cx=\"64\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"96.4\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"128.8\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"161.2\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"193.6\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"226\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"258.4\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"290.8\" cy=\"124\" r=\"12\" class=\"dg-atomG\"/><text x=\"202\" y=\"244\" class=\"dg-t\" text-anchor=\"middle\">third layer sits directly over the first</text><rect x=\"396\" y=\"38\" width=\"372\" height=\"212\" rx=\"8\" class=\"dg-frame\"/><text x=\"582\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">ABCABC…  cubic close-packed</text><text x=\"408\" y=\"219\" class=\"dg-tb-blue\" text-anchor=\"middle\">A</text><circle cx=\"432\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"464.4\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"496.8\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"529.2\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"561.6\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"594\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"626.4\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"658.8\" cy=\"214\" r=\"12\" class=\"dg-atomA\"/><text x=\"408\" y=\"189\" class=\"dg-tb-acc\" text-anchor=\"middle\">B</text><circle cx=\"444\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"476.4\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"508.8\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"541.2\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"573.6\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"606\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"638.4\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><circle cx=\"670.8\" cy=\"184\" r=\"12\" class=\"dg-atomG\"/><text x=\"408\" y=\"159\" class=\"dg-tb-amb\" text-anchor=\"middle\">C</text><circle cx=\"456\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><circle cx=\"488.4\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><circle cx=\"520.8\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><circle cx=\"553.2\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><circle cx=\"585.6\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><circle cx=\"618\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><circle cx=\"650.4\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><circle cx=\"682.8\" cy=\"154\" r=\"12\" class=\"dg-atomB\"/><text x=\"408\" y=\"129\" class=\"dg-tb-blue\" text-anchor=\"middle\">A</text><circle cx=\"432\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"464.4\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"496.8\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"529.2\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"561.6\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"594\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"626.4\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><circle cx=\"658.8\" cy=\"124\" r=\"12\" class=\"dg-atomA\"/><text x=\"582\" y=\"244\" class=\"dg-t\" text-anchor=\"middle\">third layer sits over the remaining hollows (C)</text></svg></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th></th><th>HCP</th><th>CCP (the FCC cell)</th></tr></thead><tbody><tr><td>Stacking</td><td>ABAB…</td><td>ABCABC…</td></tr><tr><td>Third layer</td><td>directly over the first (A)</td><td>over the other set of dips (C)</td></tr><tr><td>Coordination number</td><td>12</td><td>12</td></tr><tr><td>APF</td><td>0.74</td><td>0.74</td></tr><tr><td>Close-packed planes</td><td>the basal planes</td><td>the {111} planes of the FCC cell</td></tr></tbody></table></div>"
        },
        {
          "type": "p",
          "text": "Coordination number 12 comes from 6 neighbours in the same layer, 3 in the layer above and 3 below. Both stackings pack equal spheres as densely as is possible.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "The FCC trap",
          "html": "<p>The unit cell of a cubic close-packed arrangement is the familiar <strong>face-centred cubic</strong> cell, with atoms at the corners and face centres. But the <em>faces</em> of that cell are not the close-packed layers. The close-packed layers lie parallel to the <strong>{111}</strong> planes, slicing diagonally through the cube. This is why the link between ccp and fcc is not obvious from the cell alone.</p>"
        },
        {
          "type": "h3",
          "text": "Voids between the atoms"
        },
        {
          "type": "p",
          "text": "Packed spheres leave gaps, and the shape of the gap matters later when small atoms sit inside a metal (interstitial solid solutions).",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Void</th><th>Surrounded by</th><th>Size (as fraction of atom radius r)</th><th>Per atom</th><th>Per FCC cell</th></tr></thead><tbody><tr><td>Octahedral</td><td>6 atoms</td><td>about 0.414 r</td><td>1</td><td>4</td></tr><tr><td>Tetrahedral</td><td>4 atoms</td><td>about 0.225 r</td><td>2</td><td>8</td></tr></tbody></table></div>"
        },
        {
          "type": "p",
          "text": "The lecture task is to build ABAB and ABCABC with the coloured spheres, locate both kinds of void, and draw the 2D projection of each stacking. Do it physically if you can. It is hard to see the voids from a drawing alone.",
          "class": ""
        },
        {
          "type": "h2",
          "id": "w2-apf",
          "text": "Atomic Packing Factor: FCC, BCC and HCP"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">🧳</span><div class=\"analogy-text\"><strong>Think of packing a suitcase.</strong> The APF is the fraction of the suitcase that is actually clothes rather than air. For crystals the clothes are hard spheres, and the suitcase is the unit cell.</div></div>"
        },
        {
          "type": "formulablock",
          "name": "Atomic packing factor",
          "eqs": [
            "\\mathrm{APF}=\\frac{\\text{(atoms per cell)}\\times\\frac43\\pi r^{3}}{V_{\\text{cell}}}"
          ],
          "vars": [
            {
              "symbol": "r",
              "desc": "atomic radius (hard-sphere model)"
            },
            {
              "symbol": "V_cell",
              "desc": "unit cell volume, a³ for a cube"
            }
          ],
          "note": "Count atoms with corners = ⅛, face centres = ½, body centre = 1. Then use geometry to find where the spheres touch, which gives a in terms of r."
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 262\" role=\"img\" aria-label=\"Atoms touching along the face diagonal in FCC and along the body diagonal in BCC\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"tc-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><clipPath id=\"tc-f\"><rect x=\"125\" y=\"56\" width=\"150\" height=\"150\"/></clipPath><clipPath id=\"tc-b\"><rect x=\"468\" y=\"56\" width=\"184\" height=\"130\"/></clipPath></defs><text x=\"200\" y=\"26\" class=\"dg-tb\" text-anchor=\"middle\">FCC: touch along the face diagonal</text><rect x=\"125\" y=\"56\" width=\"150\" height=\"150\" class=\"dg-cell-acc\"/><g clip-path=\"url(#tc-f)\"><circle cx=\"125\" cy=\"56\" r=\"53\" class=\"dg-atomA\" fill-opacity=\"0.78\"/><circle cx=\"275\" cy=\"56\" r=\"53\" class=\"dg-atomA\" fill-opacity=\"0.78\"/><circle cx=\"125\" cy=\"206\" r=\"53\" class=\"dg-atomA\" fill-opacity=\"0.78\"/><circle cx=\"275\" cy=\"206\" r=\"53\" class=\"dg-atomA\" fill-opacity=\"0.78\"/><circle cx=\"200\" cy=\"131\" r=\"53\" class=\"dg-atomA\" fill-opacity=\"0.78\"/></g><rect x=\"125\" y=\"56\" width=\"150\" height=\"150\" class=\"dg-edge\" fill=\"none\"/><line x1=\"125\" y1=\"206\" x2=\"275\" y2=\"56\" class=\"dg-route-acc\" stroke-dasharray=\"6 4\"/><text x=\"200\" y=\"232\" class=\"dg-vl-acc\" text-anchor=\"middle\">4r = a√2</text><text x=\"200\" y=\"252\" class=\"dg-t\" text-anchor=\"middle\">APF = 0.74</text><text x=\"560\" y=\"26\" class=\"dg-tb\" text-anchor=\"middle\">BCC: touch along the body diagonal</text><rect x=\"468\" y=\"56\" width=\"183.8\" height=\"130\" class=\"dg-cell-amb\"/><g clip-path=\"url(#tc-b)\"><circle cx=\"468\" cy=\"56\" r=\"56.3\" class=\"dg-atomB\" fill-opacity=\"0.78\"/><circle cx=\"651.8\" cy=\"56\" r=\"56.3\" class=\"dg-atomB\" fill-opacity=\"0.78\"/><circle cx=\"468\" cy=\"186\" r=\"56.3\" class=\"dg-atomB\" fill-opacity=\"0.78\"/><circle cx=\"651.8\" cy=\"186\" r=\"56.3\" class=\"dg-atomB\" fill-opacity=\"0.78\"/><circle cx=\"559.9\" cy=\"121\" r=\"56.3\" class=\"dg-atomB\" fill-opacity=\"0.78\"/></g><rect x=\"468\" y=\"56\" width=\"183.8\" height=\"130\" class=\"dg-edge\" fill=\"none\"/><line x1=\"468\" y1=\"186\" x2=\"651.8\" y2=\"56\" class=\"dg-route-acc\" stroke-dasharray=\"6 4\"/><text x=\"560\" y=\"212\" class=\"dg-vl-amb\" text-anchor=\"middle\">4r = a√3</text><text x=\"560\" y=\"232\" class=\"dg-t\" text-anchor=\"middle\">APF = 0.68</text><text x=\"560\" y=\"252\" class=\"dg-t\" text-anchor=\"middle\">(cut through the cell along a body diagonal)</text></svg></div>"
        },
        {
          "type": "h3",
          "text": "FCC"
        },
        {
          "type": "p",
          "text": "Atoms per cell: \\(8\\times\\tfrac18+6\\times\\tfrac12=4\\). They touch along the face diagonal, which is \\(4r\\) long (a corner atom, a whole face-centre atom, and a corner atom) and also \\(a\\sqrt2\\).",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "FCC packing factor",
          "eqs": [
            "4r=\\sqrt2\\,a \\;\\Rightarrow\\; a=2\\sqrt2\\,r",
            "\\mathrm{APF}=\\frac{4\\cdot\\frac43\\pi r^{3}}{(2\\sqrt2\\,r)^{3}}=\\frac{\\pi}{3\\sqrt2}=0.74"
          ],
          "vars": [
            {
              "symbol": "Z",
              "desc": "4 atoms per cell"
            },
            {
              "symbol": "CN",
              "desc": "12"
            },
            {
              "symbol": "close-packed direction",
              "desc": "&lt;110&gt; (face diagonals)"
            }
          ]
        },
        {
          "type": "h3",
          "text": "BCC"
        },
        {
          "type": "p",
          "text": "Atoms per cell: \\(1+8\\times\\tfrac18=2\\). They touch along the body diagonal, which is \\(4r\\) long and also \\(a\\sqrt3\\). Not close-packed, so coordination is only 8.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "BCC packing factor",
          "eqs": [
            "4r=\\sqrt3\\,a \\;\\Rightarrow\\; a=\\frac{4r}{\\sqrt3}",
            "\\mathrm{APF}=\\frac{2\\cdot\\frac43\\pi r^{3}}{\\left(4r/\\sqrt3\\right)^{3}}=\\frac{\\sqrt3\\,\\pi}{8}=0.68"
          ],
          "vars": [
            {
              "symbol": "Z",
              "desc": "2 atoms per cell"
            },
            {
              "symbol": "CN",
              "desc": "8"
            },
            {
              "symbol": "close-packed direction",
              "desc": "&lt;111&gt; (body diagonals)"
            }
          ]
        },
        {
          "type": "h3",
          "text": "HCP and the summary"
        },
        {
          "type": "p",
          "text": "The HCP unit cell is a hexagonal prism holding 6 atoms. With ideal sphere stacking the height-to-width ratio is \\(c/a=\\sqrt{8/3}\\approx1.633\\), and it reaches the same APF as FCC, 0.74.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Structure</th><th>Atoms per cell</th><th>Atoms touch along</th><th>Coordination</th><th>APF</th></tr></thead><tbody><tr><td>Simple cubic</td><td>1</td><td>cell edge, a = 2r</td><td>6</td><td>0.52</td></tr><tr><td>BCC</td><td>2</td><td>body diagonal, √3·a = 4r</td><td>8</td><td>0.68</td></tr><tr><td>FCC</td><td>4</td><td>face diagonal, √2·a = 4r</td><td>12</td><td>0.74</td></tr><tr><td>HCP</td><td>6</td><td>in the basal plane, a = 2r</td><td>12</td><td>0.74</td></tr></tbody></table></div>"
        },
        {
          "type": "example",
          "label": "Worked example: lattice parameter from radius",
          "q": "Copper is FCC with atomic radius 0.128 nm. Find its lattice parameter. Then do the same for BCC iron, r = 0.124 nm.",
          "steps": [
            "FCC: \\(a=2\\sqrt2\\,r=2\\sqrt2\\times0.128=0.362\\) nm",
            "BCC: \\(a=\\dfrac{4r}{\\sqrt3}=\\dfrac{4\\times0.124}{\\sqrt3}=0.286\\) nm"
          ],
          "answer": "Copper <strong>a ≈ 0.362 nm</strong>; BCC iron <strong>a ≈ 0.286 nm</strong>. Both agree with measured values, which shows the hard-sphere picture works."
        },
        {
          "type": "example",
          "label": "Worked example: derive the simple cubic APF",
          "q": "Atoms touch along the cube edge, so a = 2r. What is the APF?",
          "steps": [
            "One atom per cell: \\(8\\times\\tfrac18=1\\)",
            "\\(\\mathrm{APF}=\\dfrac{\\frac43\\pi r^{3}}{(2r)^{3}}=\\dfrac{\\pi}{6}\\)"
          ],
          "answer": "APF = <strong>0.52</strong>. This is why simple cubic is almost never seen in metals: half the volume is empty."
        },
        {
          "type": "h2",
          "id": "w2-why",
          "text": "Why Any of This Matters"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Ductility",
              "color": "#2fa15c",
              "text": "FCC metals (copper, aluminium, gold) slip easily on the close-packed {111} planes along &lt;110&gt; directions, and there are 12 such combinations. That is why they are so ductile. This is the direction and plane notation doing real work."
            },
            {
              "title": "Steel",
              "color": "#e63946",
              "text": "Iron is BCC at room temperature and changes to FCC above about 912 °C. FCC iron has bigger octahedral voids (about 0.414 r), so it can dissolve far more carbon (up to about 2 wt%) than BCC iron (about 0.02 wt%). That gap is the basis of heat treatment."
            },
            {
              "title": "Surfaces",
              "color": "#4a90e2",
              "text": "Different planes expose different arrangements of atoms. Which {hkl} faces a nanoparticle shows controls how reactive it is, which is why Miller indices appear in catalysis and corrosion."
            }
          ]
        },
        {
          "type": "h2",
          "id": "w2-practice",
          "text": "Test Yourself"
        },
        {
          "type": "p",
          "text": "Try each question on paper first, then reveal the answer.",
          "class": ""
        },
        {
          "type": "example",
          "label": "Q1",
          "q": "A vector runs from (0, ½, 0) to (1, 1, ½). What is its direction?",
          "steps": [
            "Head minus tail: \\((1,\\ \\tfrac12,\\ \\tfrac12)\\)",
            "Multiply by 2 to clear fractions."
          ],
          "answer": "<strong>[221]</strong>"
        },
        {
          "type": "example",
          "label": "Q2",
          "q": "A plane has intercepts ½, ⅓ and ∞. What are its Miller indices?",
          "steps": [
            "Reciprocals: \\(2,\\ 3,\\ 0\\)"
          ],
          "answer": "<strong>(230)</strong>"
        },
        {
          "type": "example",
          "label": "Q3",
          "q": "Why are the faces of the FCC cell not the close-packed layers?",
          "steps": [
            "The close-packed layers are hexagonally packed sheets.",
            "The cell faces are square-packed."
          ],
          "answer": "Square-packed layers (APF in 2D 0.785) are less dense than hexagonal ones (0.907). The hexagonal sheets lie parallel to the <strong>{111}</strong> planes."
        },
        {
          "type": "example",
          "label": "Q4",
          "q": "How many octahedral and tetrahedral voids are in one FCC cell?",
          "steps": [
            "Per atom there is 1 octahedral and 2 tetrahedral void.",
            "An FCC cell holds 4 atoms."
          ],
          "answer": "<strong>4 octahedral and 8 tetrahedral</strong>."
        },
        {
          "type": "example",
          "label": "Q5",
          "q": "Derive the APF of BCC from scratch.",
          "steps": [
            "Count atoms, then find where they touch."
          ],
          "answer": "2 atoms per cell; \\(4r=\\sqrt3\\,a\\); \\(\\mathrm{APF}=2\\cdot\\frac43\\pi r^3\\,/\\,(4r/\\sqrt3)^3=\\sqrt3\\pi/8=\\) <strong>0.68</strong>."
        },
        {
          "type": "h2",
          "id": "",
          "text": "Week 2 essentials"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Quick recap",
          "html": "<ul><li>Unit cell = smallest block that rebuilds the crystal by translation. Crystal system = minimum symmetry, not the look of the box.</li><li>Fractional coordinates (x, y, z) are fractions of a, b, c from a corner origin.</li><li>Direction [uvw]: head minus tail, clear fractions, smallest integers, square brackets. Family &lt;uvw&gt;.</li><li>Plane (hkl): intercepts, reciprocals, clear fractions, round brackets. Zero means parallel. Family {hkl}.</li><li>Parallel planes share indices. Family sizes depend on the crystal system.</li><li>Close packing: hexagonal beats square in 2D (0.907 vs 0.785). 3D stacking: ABAB = HCP, ABC = CCP = FCC. Both CN 12, APF 0.74.</li><li>FCC close-packed layers are the {111} planes, not the cell faces.</li><li>Voids per atom: 1 octahedral, 2 tetrahedral. FCC cell: 4 and 8.</li><li>FCC: 4 atoms, \\(4r=\\sqrt2a\\), APF 0.74. BCC: 2 atoms, \\(4r=\\sqrt3a\\), APF 0.68. HCP: 6 atoms, c/a ≈ 1.633, APF 0.74.</li></ul>"
        }
      ],
      "essentialsTitle": null,
      "essentialsHeading": null,
      "essentials": null,
      "desc": "Fractional coordinates, lattice directions, Miller indices, planes and directions of a form, close packing in 2D and 3D, HCP, FCC and BCC, and atomic packing factor.",
      "difficulty": "Medium",
      "readTime": "40 min",
      "color": "#f4a261"
    },
    {
      "id": "w3",
      "numLabel": "Week 3",
      "title": "Crystallographic Texture",
      "subtitle": "Why a polycrystal is rarely isotropic and what \"texture\" actually means, with the notation (brackets, bars, hexagonal four-index symbols) explained from scratch. How slip and twinning turn grains as metal is deformed, why zirconium hydrides care about it, and how texture is drawn and described: pole figures, Euler angles, ODFs and fibres. Worked examples, practice questions and an interactive pole-figure tool for cubic and hexagonal crystals.",
      "sections": [
        {
          "type": "toc",
          "title": "This week",
          "items": [
            {
              "href": "#w3-why",
              "label": "Why texture matters"
            },
            {
              "href": "#w3-notation",
              "label": "Notation survival guide (brackets, bars, hexagonal indices)"
            },
            {
              "href": "#w3-zr",
              "label": "Case study: zirconium, reactors and hydrides"
            },
            {
              "href": "#w3-mech",
              "label": "Where texture comes from: slip, twinning and lattice rotation"
            },
            {
              "href": "#w3-axes",
              "label": "Sample axes and strain: rolling vs uniaxial loading"
            },
            {
              "href": "#w3-pf",
              "label": "Pole figures"
            },
            {
              "href": "#w3-euler",
              "label": "Euler angles and orientation space"
            },
            {
              "href": "#w3-odf",
              "label": "ODFs and fibre textures"
            },
            {
              "href": "#w3-sim",
              "label": "Interactive: Euler angles to pole figure"
            },
            {
              "href": "#w3-measure",
              "label": "How textures are measured (XRD and EBSD)"
            },
            {
              "href": "#w3-roll",
              "label": "Texture development during rolling (Zr and Ti)"
            },
            {
              "href": "#w3-load",
              "label": "Texture development during loading (Ti alloys)"
            },
            {
              "href": "#w3-hardsoft",
              "label": "Hard and soft orientations"
            },
            {
              "href": "#w3-practice",
              "label": "Test yourself"
            }
          ]
        },
        {
          "type": "h2",
          "id": "w3-why",
          "text": "Why Study Texture?"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>A bag of rice versus a bundle of spaghetti.</strong> Pour out a bag of rice and the grains point every which way, so the pile behaves the same whichever direction you push it. Lay dry spaghetti in a bundle and every strand points the same way: it is far stiffer to bend or snap across the strands than to stretch along them. Same material, different arrangement. In a metal the strands are crystal grains, and what points is the crystal lattice. That arrangement is the <strong>texture</strong>.</div></div>"
        },
        {
          "type": "h3",
          "text": "Step 1: a single crystal is not the same in every direction"
        },
        {
          "type": "p",
          "text": "A crystal is a repeating pattern of atoms, and the pattern looks different along different directions. Pull along one direction and you stretch bonds head-on. Pull along another and you are shearing and bending them. So single crystals are <strong>anisotropic</strong>: their properties depend on direction. A real number: for a single crystal of copper, Young's modulus (stiffness) is about <strong>67 GPa</strong> along \\([100]\\) but about <strong>191 GPa</strong> along \\([111]\\). That is nearly a factor of three, in one piece of one pure metal.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Step 2: a polycrystal is a crowd of crystals"
        },
        {
          "type": "p",
          "text": "Ordinary metal is a <strong>polycrystal</strong>: millions of tiny single crystals (<strong>grains</strong>) packed together, each with its own lattice orientation. If the orientations are completely random, every direction you test passes through a fair mix of stiff and soft grains and the average is the same everywhere. Copper's polycrystal modulus of roughly 110 to 130 GPa is that average, and it is why a random polycrystal behaves <strong>isotropically</strong> (the same in all directions).",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 332\" role=\"img\" aria-label=\"Two polycrystals with the same grain structure, one with random orientations and one with a preferred orientation\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><rect x=\"10\" y=\"38\" width=\"370\" height=\"264\" rx=\"8\" class=\"dg-frame\"/><text x=\"195\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Random texture</text><text x=\"195\" y=\"322\" class=\"dg-t\" text-anchor=\"middle\">every orientation equally likely</text><polygon points=\"73.2,61.5 73.2,90.6 48,105.1 22.8,90.6 22.8,61.5 48,46.9\" fill=\"hsla(251.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(48 76) rotate(21.5)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"125.2,61.5 125.2,90.6 100,105.1 74.8,90.6 74.8,61.5 100,46.9\" fill=\"hsla(397.3,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(100 76) rotate(82.2)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"177.1,61.5 177.1,90.6 151.9,105.1 126.7,90.6 126.7,61.5 151.9,46.9\" fill=\"hsla(332.3,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(151.9 76) rotate(55.1)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"229.1,61.5 229.1,90.6 203.9,105.1 178.7,90.6 178.7,61.5 203.9,46.9\" fill=\"hsla(400.2,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(203.9 76) rotate(83.4)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"281,61.5 281,90.6 255.8,105.1 230.6,90.6 230.6,61.5 255.8,46.9\" fill=\"hsla(210.7,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(255.8 76) rotate(4.4)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"333,61.5 333,90.6 307.8,105.1 282.6,90.6 282.6,61.5 307.8,46.9\" fill=\"hsla(384.8,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(307.8 76) rotate(77)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"99.2,106.5 99.2,135.6 74,150.1 48.8,135.6 48.8,106.5 74,91.9\" fill=\"hsla(278,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(74 121) rotate(32.5)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"151.1,106.5 151.1,135.6 125.9,150.1 100.7,135.6 100.7,106.5 125.9,91.9\" fill=\"hsla(211.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(125.9 121) rotate(4.8)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"203.1,106.5 203.1,135.6 177.9,150.1 152.7,135.6 152.7,106.5 177.9,91.9\" fill=\"hsla(214.9,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(177.9 121) rotate(6.2)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"255.1,106.5 255.1,135.6 229.9,150.1 204.7,135.6 204.7,106.5 229.9,91.9\" fill=\"hsla(412.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(229.9 121) rotate(88.6)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"307,106.5 307,135.6 281.8,150.1 256.6,135.6 256.6,106.5 281.8,91.9\" fill=\"hsla(410.1,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(281.8 121) rotate(87.6)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"359,106.5 359,135.6 333.8,150.1 308.6,135.6 308.6,106.5 333.8,91.9\" fill=\"hsla(314.8,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(333.8 121) rotate(47.8)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"73.2,151.5 73.2,180.6 48,195.1 22.8,180.6 22.8,151.5 48,136.9\" fill=\"hsla(297.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(48 166) rotate(40.7)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"125.2,151.5 125.2,180.6 100,195.1 74.8,180.6 74.8,151.5 100,136.9\" fill=\"hsla(318.3,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(100 166) rotate(49.3)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"177.1,151.5 177.1,180.6 151.9,195.1 126.7,180.6 126.7,151.5 151.9,136.9\" fill=\"hsla(330.7,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(151.9 166) rotate(54.5)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"229.1,151.5 229.1,180.6 203.9,195.1 178.7,180.6 178.7,151.5 203.9,136.9\" fill=\"hsla(367.9,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(203.9 166) rotate(70)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"281,151.5 281,180.6 255.8,195.1 230.6,180.6 230.6,151.5 255.8,136.9\" fill=\"hsla(368.4,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(255.8 166) rotate(70.2)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"333,151.5 333,180.6 307.8,195.1 282.6,180.6 282.6,151.5 307.8,136.9\" fill=\"hsla(290.3,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(307.8 166) rotate(37.6)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"99.2,196.5 99.2,225.6 74,240.1 48.8,225.6 48.8,196.5 74,181.9\" fill=\"hsla(302.4,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(74 211) rotate(42.7)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"151.1,196.5 151.1,225.6 125.9,240.1 100.7,225.6 100.7,196.5 125.9,181.9\" fill=\"hsla(384.1,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(125.9 211) rotate(76.7)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"203.1,196.5 203.1,225.6 177.9,240.1 152.7,225.6 152.7,196.5 177.9,181.9\" fill=\"hsla(278.3,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(177.9 211) rotate(32.6)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"255.1,196.5 255.1,225.6 229.9,240.1 204.7,225.6 204.7,196.5 229.9,181.9\" fill=\"hsla(304,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(229.9 211) rotate(43.3)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"307,196.5 307,225.6 281.8,240.1 256.6,225.6 256.6,196.5 281.8,181.9\" fill=\"hsla(219.9,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(281.8 211) rotate(8.3)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"359,196.5 359,225.6 333.8,240.1 308.6,225.6 308.6,196.5 333.8,181.9\" fill=\"hsla(361.8,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(333.8 211) rotate(67.4)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"73.2,241.5 73.2,270.6 48,285.1 22.8,270.6 22.8,241.5 48,226.9\" fill=\"hsla(380.2,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(48 256) rotate(75.1)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"125.2,241.5 125.2,270.6 100,285.1 74.8,270.6 74.8,241.5 100,226.9\" fill=\"hsla(277.4,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(100 256) rotate(32.2)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"177.1,241.5 177.1,270.6 151.9,285.1 126.7,270.6 126.7,241.5 151.9,226.9\" fill=\"hsla(238.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(151.9 256) rotate(16.1)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"229.1,241.5 229.1,270.6 203.9,285.1 178.7,270.6 178.7,241.5 203.9,226.9\" fill=\"hsla(412.1,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(203.9 256) rotate(88.4)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"281,241.5 281,270.6 255.8,285.1 230.6,270.6 230.6,241.5 255.8,226.9\" fill=\"hsla(226.4,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(255.8 256) rotate(11)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"333,241.5 333,270.6 307.8,285.1 282.6,270.6 282.6,241.5 307.8,226.9\" fill=\"hsla(298.2,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(307.8 256) rotate(40.9)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><rect x=\"400\" y=\"38\" width=\"370\" height=\"264\" rx=\"8\" class=\"dg-frame\"/><text x=\"585\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Textured</text><text x=\"585\" y=\"322\" class=\"dg-t\" text-anchor=\"middle\">most grains share nearly one orientation</text><polygon points=\"463.2,61.5 463.2,90.6 438,105.1 412.8,90.6 412.8,61.5 438,46.9\" fill=\"hsla(210.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(438 76) rotate(4.4)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"515.2,61.5 515.2,90.6 490,105.1 464.8,90.6 464.8,61.5 490,46.9\" fill=\"hsla(211.7,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(490 76) rotate(4.9)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"567.1,61.5 567.1,90.6 541.9,105.1 516.7,90.6 516.7,61.5 541.9,46.9\" fill=\"hsla(214.2,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(541.9 76) rotate(5.9)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"619.1,61.5 619.1,90.6 593.9,105.1 568.7,90.6 568.7,61.5 593.9,46.9\" fill=\"hsla(204.9,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(593.9 76) rotate(2.1)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"671,61.5 671,90.6 645.8,105.1 620.6,90.6 620.6,61.5 645.8,46.9\" fill=\"hsla(226.4,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(645.8 76) rotate(11)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"723,61.5 723,90.6 697.8,105.1 672.6,90.6 672.6,61.5 697.8,46.9\" fill=\"hsla(230.8,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(697.8 76) rotate(12.9)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"489.2,106.5 489.2,135.6 464,150.1 438.8,135.6 438.8,106.5 464,91.9\" fill=\"hsla(205.3,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(464 121) rotate(2.2)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"541.1,106.5 541.1,135.6 515.9,150.1 490.7,135.6 490.7,106.5 515.9,91.9\" fill=\"hsla(226.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(515.9 121) rotate(11)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"593.1,106.5 593.1,135.6 567.9,150.1 542.7,135.6 542.7,106.5 567.9,91.9\" fill=\"hsla(205.9,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(567.9 121) rotate(2.5)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"645.1,106.5 645.1,135.6 619.9,150.1 594.7,135.6 594.7,106.5 619.9,91.9\" fill=\"hsla(209.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(619.9 121) rotate(4)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"697,106.5 697,135.6 671.8,150.1 646.6,135.6 646.6,106.5 671.8,91.9\" fill=\"hsla(228.9,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(671.8 121) rotate(12)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"749,106.5 749,135.6 723.8,150.1 698.6,135.6 698.6,106.5 723.8,91.9\" fill=\"hsla(211.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(723.8 121) rotate(4.8)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"463.2,151.5 463.2,180.6 438,195.1 412.8,180.6 412.8,151.5 438,136.9\" fill=\"hsla(214.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(438 166) rotate(6)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"515.2,151.5 515.2,180.6 490,195.1 464.8,180.6 464.8,151.5 490,136.9\" fill=\"hsla(214.3,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(490 166) rotate(6)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"567.1,151.5 567.1,180.6 541.9,195.1 516.7,180.6 516.7,151.5 541.9,136.9\" fill=\"hsla(219.8,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(541.9 166) rotate(8.3)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"619.1,151.5 619.1,180.6 593.9,195.1 568.7,180.6 568.7,151.5 593.9,136.9\" fill=\"hsla(224,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(593.9 166) rotate(10)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"671,151.5 671,180.6 645.8,195.1 620.6,180.6 620.6,151.5 645.8,136.9\" fill=\"hsla(215.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(645.8 166) rotate(6.5)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"723,151.5 723,180.6 697.8,195.1 672.6,180.6 672.6,151.5 697.8,136.9\" fill=\"hsla(218.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(697.8 166) rotate(7.7)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"489.2,196.5 489.2,225.6 464,240.1 438.8,225.6 438.8,196.5 464,181.9\" fill=\"hsla(224.9,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(464 211) rotate(10.4)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"541.1,196.5 541.1,225.6 515.9,240.1 490.7,225.6 490.7,196.5 515.9,181.9\" fill=\"hsla(215.8,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(515.9 211) rotate(6.6)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"593.1,196.5 593.1,225.6 567.9,240.1 542.7,225.6 542.7,196.5 567.9,181.9\" fill=\"hsla(206.7,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(567.9 211) rotate(2.8)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"645.1,196.5 645.1,225.6 619.9,240.1 594.7,225.6 594.7,196.5 619.9,181.9\" fill=\"hsla(227,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(619.9 211) rotate(11.3)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"697,196.5 697,225.6 671.8,240.1 646.6,225.6 646.6,196.5 671.8,181.9\" fill=\"hsla(228.4,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(671.8 211) rotate(11.8)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"749,196.5 749,225.6 723.8,240.1 698.6,225.6 698.6,196.5 723.8,181.9\" fill=\"hsla(203.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(723.8 211) rotate(1.5)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"463.2,241.5 463.2,270.6 438,285.1 412.8,270.6 412.8,241.5 438,226.9\" fill=\"hsla(212.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(438 256) rotate(5.3)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"515.2,241.5 515.2,270.6 490,285.1 464.8,270.6 464.8,241.5 490,226.9\" fill=\"hsla(206.6,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(490 256) rotate(2.8)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"567.1,241.5 567.1,270.6 541.9,285.1 516.7,270.6 516.7,241.5 541.9,226.9\" fill=\"hsla(221.8,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(541.9 256) rotate(9.1)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"619.1,241.5 619.1,270.6 593.9,285.1 568.7,270.6 568.7,241.5 593.9,226.9\" fill=\"hsla(204.1,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(593.9 256) rotate(1.7)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"671,241.5 671,270.6 645.8,285.1 620.6,270.6 620.6,241.5 645.8,226.9\" fill=\"hsla(214.5,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(645.8 256) rotate(6.1)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g><polygon points=\"723,241.5 723,270.6 697.8,285.1 672.6,270.6 672.6,241.5 697.8,226.9\" fill=\"hsla(233.4,60%,48%,0.55)\" stroke=\"#e6e6ee\" stroke-width=\"1.2\"/><g transform=\"translate(697.8 256) rotate(13.9)\"><rect x=\"-11\" y=\"-11\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#f0f0f5\" stroke-width=\"1.6\"/><line x1=\"0\" y1=\"0\" x2=\"11\" y2=\"0\" stroke=\"#f4a261\" stroke-width=\"2.4\"/></g></svg><div class=\"diagram-caption\">Each hexagon is a grain. The square and orange tick show how its crystal axes are turned. Colour tracks that angle.</div></div>"
        },
        {
          "type": "h3",
          "text": "Step 3: processing destroys the randomness"
        },
        {
          "type": "p",
          "text": "Rolling, forging, drawing, extruding, casting, annealing and even service loading all push grains to turn in biased ways. The result is a <strong>non-random</strong> distribution of orientations: more grains pointing some ways than others. The stiff-and-soft cancellation no longer works, and the bulk material becomes anisotropic again even though it is still \"many grains\". That bias is the texture.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Definition",
          "html": "<p><strong>Crystallographic texture</strong> is a non-random distribution of crystal orientations in a polycrystal.</p><p><strong>Texture is not grain shape.</strong> Grain shape and size describe the outline of each grain. Texture describes which way the atomic lattice inside each grain points. A sample can have round, equal-sized grains and be strongly textured, or have long flat grains and almost no texture.</p>"
        },
        {
          "type": "h3",
          "text": "Where it bites in practice"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "Drink cans and earing",
              "color": "#e63946",
              "text": "A cup deep-drawn from rolled aluminium sheet comes out with a wavy rim, called <strong>earing</strong>. The sheet flows more easily in some in-plane directions than others, because the grains are textured, so the rim ends up taller in some places. Cube-type textures tend to give ears at 0° and 90° to the rolling direction, and rolling-type textures tend to give them at 45°. The waste trimmed off is money lost on every can."
            },
            {
              "title": "Transformer steel (on purpose)",
              "color": "#2fa15c",
              "text": "Transformer cores are made of iron-silicon steel with a strong <strong>Goss texture</strong>. In iron the easiest direction to magnetise is \\(\\langle001\\rangle\\), and the Goss texture lines that direction up along the rolling direction, so the core wastes less energy as the magnetic field reverses."
            },
            {
              "title": "Jet engine turbine blades",
              "color": "#0ea5c6",
              "text": "The extreme case: a blade is grown as one <strong>single crystal</strong> with \\(\\langle001\\rangle\\) along its length. It removes grain boundaries, which are where metals creep under heat, and \\(\\langle001\\rangle\\) is the direction in which these nickel alloys are least stiff, which helps them tolerate thermal stress."
            },
            {
              "title": "Titanium plate stiffness",
              "color": "#4a90e2",
              "text": "Titanium's single-crystal Young's modulus changes by about <strong>40%</strong> between loading along the c-axis and across it (the lecture plot runs from about 145 to 100 GPa). In a randomly oriented polycrystal that averages out. In a rolled titanium plate it does not, so the plate can be stiffer in one direction than another."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Why the lecture calls these \"open problems\""
        },
        {
          "type": "p",
          "text": "The lecturer ends the motivation with five questions that nobody can yet fully answer. They are not exam content, but each is a real research area, so here is what each one is asking:",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>Annealing textures.</strong> Heating a deformed metal makes new strain-free grains (recrystallisation). Why does this sometimes produce a sharp cube texture in fcc metals, or the Goss texture in bcc steels? The new grains seem to pick their orientations non-randomly, and the reason is still debated.",
            "<strong>Large ceramic crystals.</strong> Can abnormal grain growth (a few grains swallowing all the others) be controlled well enough to make big oriented ceramic crystals on demand?",
            "<strong>Grain break-up.</strong> When a metal is deformed, one grain can split into regions with different orientations. Why, and how?",
            "<strong>3D microstructure.</strong> Experiments mostly show a flat slice. How do we build faithful 3D computer models of the whole grain structure?",
            "<strong>Grain-boundary properties.</strong> A grain boundary is the interface between two crystals. How its behaviour depends on the misorientation across it is needed for any realistic simulation."
          ]
        },
        {
          "type": "h2",
          "id": "w3-notation",
          "text": "Notation Survival Guide"
        },
        {
          "type": "p",
          "text": "Texture notes are packed with brackets, bars and Greek letters. None of it is decoration: each bracket type means something specific, and mixing them up is the most common way to lose marks. Read this section once now and come back to it whenever a slide looks like code.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "The four brackets (all crystal systems)"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Written</th><th>Name</th><th>Meaning</th><th>Example and how to say it</th></tr></thead><tbody><tr><td>\\((hkl)\\)</td><td>Round brackets</td><td>One specific plane</td><td>\\((111)\\): \"the one-one-one plane\"</td></tr><tr><td>\\(\\{hkl\\}\\)</td><td>Curly brackets</td><td>A plane <strong>family</strong>: that plane plus every plane the crystal symmetry makes equivalent</td><td>\\(\\{100\\}\\) in a cubic crystal = \\((100),(010),(001)\\) and their negatives, 3 distinct planes</td></tr><tr><td>\\([uvw]\\)</td><td>Square brackets</td><td>One specific direction</td><td>\\([110]\\): the direction that goes 1 along x, 1 along y, 0 along z</td></tr><tr><td>\\(\\langle uvw\\rangle\\)</td><td>Angle brackets</td><td>A direction <strong>family</strong>: that direction plus every symmetry-equivalent one</td><td>\\(\\langle100\\rangle\\) in cubic = the 6 directions \\(\\pm x,\\pm y,\\pm z\\)</td></tr></tbody></table></div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Memory trick",
          "html": "<p>Round and square are <strong>specific</strong> (one plane, one direction). Curly and angle are <strong>families</strong> (every equivalent version). Planes use round and curly; directions use square and angle.</p>"
        },
        {
          "type": "h3",
          "text": "Other symbols you will meet"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Symbol</th><th>Meaning</th></tr></thead><tbody><tr><td>\\(\\bar1\\) (a bar over a number)</td><td>A negative index. \\((1\\bar10)\\) is the plane \\((1,-1,0)\\). On this site you will see both the bar and a minus sign, for example \\(\\{10\\bar12\\}\\) is also written \\(\\{10\\text{-}12\\}\\).</td></tr><tr><td>\\(\\parallel\\)</td><td>\"Is parallel to\". \\(\\langle111\\rangle\\parallel\\) ND reads \"the \\(\\langle111\\rangle\\) direction points along the sheet normal\".</td></tr><tr><td>\\(\\perp\\)</td><td>\"Is perpendicular to\".</td></tr><tr><td>\\(\\{hkl\\}\\langle uvw\\rangle\\)</td><td>An orientation, said as \"plane over direction\": the plane \\(\\{hkl\\}\\) lies parallel to the sheet surface (its normal is ND) and the direction \\(\\langle uvw\\rangle\\) points along RD. Some slides write it the other way round, \\(\\langle uvw\\rangle\\{hkl\\}\\); same meaning.</td></tr><tr><td>RD, TD, ND</td><td>Rolling, Transverse and Normal directions of a sheet (see the axes section). Texture is always stated relative to these.</td></tr><tr><td>\\((\\varphi_1,\\Phi,\\varphi_2)\\)</td><td>Euler angles: three rotation angles that pin down one crystal orientation (Euler section below).</td></tr><tr><td>wt%</td><td>Weight percent. Ti-6Al-4V is titanium with about 6 wt% aluminium and 4 wt% vanadium.</td></tr><tr><td>\\(10^{-3}\\,\\mathrm{s}^{-1}\\)</td><td>A strain rate: strain changes by 0.001 every second, i.e. 0.1% per second, so 10% strain takes about 100 s. Slow and steady, not an impact.</td></tr><tr><td>\\(c/a\\)</td><td>The ratio of the hexagonal cell height (c) to its base edge (a). About 1.59 for titanium and zirconium; the \"ideal\" value for touching spheres is 1.633.</td></tr></tbody></table></div>"
        },
        {
          "type": "h3",
          "text": "Hexagonal (hcp) metals need four indices"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Why four numbers for a three-dimensional crystal?</strong> A honeycomb has six-fold symmetry, but two axes at 120° only describe it awkwardly. Imagine naming the six sides of a honeycomb cell using just two directions: the six equivalent walls would get unrelated-looking names. Add a third axis that is really just the sum of the other two (with a minus sign) and the six walls get names that visibly cycle into one another. That redundant third axis is the whole point of four-index notation.</div></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 352\" role=\"img\" aria-label=\"Hexagonal crystal: the three a-axes seen from above, and the basal, prismatic and pyramidal planes\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"hx-r\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-red\"/></marker><marker id=\"hx-a\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"4.5\" markerHeight=\"4.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"hx-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"hx-acc2\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"250\" height=\"332\" rx=\"8\" class=\"dg-frame\"/><text x=\"135\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">Looking down the c-axis</text><polygon points=\"201,140 168,82.8 102,82.8 69,140 102,197.2 168,197.2\" fill=\"rgba(14,165,198,.10)\" stroke=\"#6a6a78\" stroke-width=\"1.6\"/><line x1=\"135\" y1=\"140\" x2=\"219\" y2=\"140\" stroke=\"#e63946\" stroke-width=\"3\" marker-end=\"url(#hx-a)\"/><text x=\"235\" y=\"144\" class=\"dg-vl-acc\" text-anchor=\"middle\" fill=\"#e63946\" style=\"fill:#e63946\">a<tspan dy=\"3\" font-size=\"10\">1</tspan></text><line x1=\"135\" y1=\"140\" x2=\"93\" y2=\"67.3\" stroke=\"#2fa15c\" stroke-width=\"3\" marker-end=\"url(#hx-a)\"/><text x=\"85\" y=\"57.4\" class=\"dg-vl-acc\" text-anchor=\"middle\" fill=\"#2fa15c\" style=\"fill:#2fa15c\">a<tspan dy=\"3\" font-size=\"10\">2</tspan></text><line x1=\"135\" y1=\"140\" x2=\"93\" y2=\"212.7\" stroke=\"#f4a261\" stroke-width=\"3\" marker-end=\"url(#hx-a)\"/><text x=\"85\" y=\"230.6\" class=\"dg-vl-acc\" text-anchor=\"middle\" fill=\"#f4a261\" style=\"fill:#f4a261\">a<tspan dy=\"3\" font-size=\"10\">3</tspan></text><circle cx=\"135\" cy=\"140\" r=\"5\" fill=\"#4a90e2\"/><circle cx=\"135\" cy=\"140\" r=\"10\" fill=\"none\" stroke=\"#4a90e2\" stroke-width=\"1.5\"/><text x=\"151\" y=\"162\" class=\"dg-tb-blue\" text-anchor=\"start\">c (out of page)</text><text x=\"135\" y=\"272\" class=\"dg-tb\" text-anchor=\"middle\">Three equivalent a-axes, 120&#176; apart</text><text x=\"135\" y=\"292\" class=\"dg-t\" text-anchor=\"middle\">a<tspan dy=\"3\" font-size=\"10\">1</tspan><tspan dy=\"-3\"> + a</tspan><tspan dy=\"3\" font-size=\"10\">2</tspan><tspan dy=\"-3\"> + a</tspan><tspan dy=\"3\" font-size=\"10\">3</tspan><tspan dy=\"-3\"> = 0</tspan></text><text x=\"135\" y=\"314\" class=\"dg-t\" text-anchor=\"middle\">Planes (hkil): the extra index is</text><text x=\"135\" y=\"332\" class=\"dg-tb-acc\" text-anchor=\"middle\">always i = &#8722;(h + k)</text><rect x=\"270\" y=\"10\" width=\"150\" height=\"332\" rx=\"8\" class=\"dg-frame\"/><text x=\"345\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">(0001)</text><line x1=\"389\" y1=\"112\" x2=\"389\" y2=\"216\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"367\" y1=\"125\" x2=\"367\" y2=\"229\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"323\" y1=\"125\" x2=\"323\" y2=\"229\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"301\" y1=\"112\" x2=\"301\" y2=\"216\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"323\" y1=\"99\" x2=\"323\" y2=\"203\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"367\" y1=\"99\" x2=\"367\" y2=\"203\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><polygon points=\"389,216 367,229 323,229 301,216 323,203 367,203\" fill=\"rgba(20,20,28,.4)\" stroke=\"#c9c9d6\" stroke-width=\"1.5\"/><polygon points=\"389,112 367,125 323,125 301,112 323,99 367,99\" fill=\"rgba(244,162,97,.55)\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"345\" y1=\"240\" x2=\"345\" y2=\"74\" stroke=\"#4a90e2\" stroke-width=\"2\" marker-end=\"url(#hx-acc2)\" opacity=\".8\"/><text x=\"353\" y=\"82\" class=\"dg-vl-acc\" text-anchor=\"start\">c</text><text x=\"345\" y=\"262\" class=\"dg-tb\" text-anchor=\"middle\">basal plane</text><text x=\"345\" y=\"282\" class=\"dg-t\" text-anchor=\"middle\">top and bottom faces</text><rect x=\"435\" y=\"10\" width=\"150\" height=\"332\" rx=\"8\" class=\"dg-frame\"/><text x=\"510\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">(10&#8722;10)</text><line x1=\"554\" y1=\"112\" x2=\"554\" y2=\"216\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"532\" y1=\"125\" x2=\"532\" y2=\"229\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"488\" y1=\"125\" x2=\"488\" y2=\"229\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"466\" y1=\"112\" x2=\"466\" y2=\"216\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"488\" y1=\"99\" x2=\"488\" y2=\"203\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"532\" y1=\"99\" x2=\"532\" y2=\"203\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><polygon points=\"554,216 532,229 488,229 466,216 488,203 532,203\" fill=\"rgba(20,20,28,.4)\" stroke=\"#c9c9d6\" stroke-width=\"1.5\"/><polygon points=\"554,112 532,125 488,125 466,112 488,99 532,99\" fill=\"rgba(14,165,198,.12)\" stroke=\"#c9c9d6\" stroke-width=\"1.5\"/><polygon points=\"532,125 488,125 488,229 532,229\" fill=\"rgba(230,57,70,.5)\" stroke=\"#e63946\" stroke-width=\"2\"/><line x1=\"510\" y1=\"240\" x2=\"510\" y2=\"74\" stroke=\"#4a90e2\" stroke-width=\"2\" marker-end=\"url(#hx-acc2)\" opacity=\".8\"/><text x=\"518\" y=\"82\" class=\"dg-vl-acc\" text-anchor=\"start\">c</text><text x=\"510\" y=\"262\" class=\"dg-tb\" text-anchor=\"middle\">prismatic plane</text><text x=\"510\" y=\"282\" class=\"dg-t\" text-anchor=\"middle\">a side face</text><rect x=\"600\" y=\"10\" width=\"150\" height=\"332\" rx=\"8\" class=\"dg-frame\"/><text x=\"675\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">(10&#8722;11)</text><line x1=\"719\" y1=\"112\" x2=\"719\" y2=\"216\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"697\" y1=\"125\" x2=\"697\" y2=\"229\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"653\" y1=\"125\" x2=\"653\" y2=\"229\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"0\"/><line x1=\"631\" y1=\"112\" x2=\"631\" y2=\"216\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"653\" y1=\"99\" x2=\"653\" y2=\"203\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><line x1=\"697\" y1=\"99\" x2=\"697\" y2=\"203\" stroke=\"#6a6a78\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><polygon points=\"719,216 697,229 653,229 631,216 653,203 697,203\" fill=\"rgba(20,20,28,.4)\" stroke=\"#c9c9d6\" stroke-width=\"1.5\"/><polygon points=\"719,112 697,125 653,125 631,112 653,99 697,99\" fill=\"rgba(14,165,198,.12)\" stroke=\"#c9c9d6\" stroke-width=\"1.5\"/><polygon points=\"653,229 697,229 675,112\" fill=\"rgba(136,85,245,.55)\" stroke=\"#8855f5\" stroke-width=\"2\"/><circle cx=\"675\" cy=\"112\" r=\"3.5\" fill=\"#f0f0f5\"/><line x1=\"675\" y1=\"240\" x2=\"675\" y2=\"74\" stroke=\"#4a90e2\" stroke-width=\"2\" marker-end=\"url(#hx-acc2)\" opacity=\".8\"/><text x=\"683\" y=\"82\" class=\"dg-vl-acc\" text-anchor=\"start\">c</text><text x=\"675\" y=\"262\" class=\"dg-tb\" text-anchor=\"middle\">pyramidal plane</text><text x=\"675\" y=\"282\" class=\"dg-t\" text-anchor=\"middle\">tilted, crosses c</text><text x=\"675\" y=\"306\" class=\"dg-t\" text-anchor=\"middle\">parallel to one a-axis,</text><text x=\"675\" y=\"322\" class=\"dg-t\" text-anchor=\"middle\">cuts a, a and c</text><text x=\"345\" y=\"306\" class=\"dg-t\" text-anchor=\"middle\">normal is along c</text><text x=\"510\" y=\"306\" class=\"dg-t\" text-anchor=\"middle\">parallel to c</text><text x=\"640\" y=\"24\" class=\"dg-t\"></text></svg><div class=\"diagram-caption\">Directions of the type &lt;11&#8722;20&gt; run along an a-axis, inside the basal plane. The lecture slip systems use these three plane types.</div></div>"
        },
        {
          "type": "p",
          "text": "<strong>The setup.</strong> A hexagonal crystal has the vertical <strong>c-axis</strong> and, in the flat basal plane, <strong>three</strong> equivalent a-axes \\(a_1,a_2,a_3\\) at 120° to one another. Only two are independent, because \\(a_1+a_2+a_3=0\\). The notation keeps all three anyway.",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>Planes are written \\((hkil)\\)</strong> with the rule \\(\\boxed{i=-(h+k)}\\). Always. The \\(i\\) index is redundant, so it is a free error check: if your four numbers do not satisfy \\(h+k+i=0\\), you have made a mistake. Check: \\((10\\bar10)\\) has \\(h+k+i=1+0-1=0\\). ✓ And \\((10\\bar11)\\): \\(1+0-1=0\\) ✓.",
            "<strong>Directions are written \\([uvtw]\\)</strong> with \\(t=-(u+v)\\). Example: \\([11\\bar20]\\): \\(t=-(1+1)=-2\\). ✓",
            "<strong>The last index (\\(l\\) or \\(w\\)) is the c-axis index.</strong> A plane with \\(l=0\\), such as \\((10\\bar10)\\), never changes along c, so it stands upright, parallel to the c-axis."
          ]
        },
        {
          "type": "h3",
          "text": "The three plane types you must recognise in hcp"
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Name</th><th>Indices</th><th>Relation to the c-axis</th><th>Where it appears this week</th></tr></thead><tbody><tr><td>Basal</td><td>\\(\\{0001\\}\\)</td><td>Flat top and bottom faces of the hexagonal prism. The plane normal <strong>is</strong> the c-axis.</td><td>Pole figures show c-axes as basal poles; basal slip</td></tr><tr><td>Prismatic</td><td>\\(\\{10\\bar10\\}\\)</td><td>Vertical side faces. Parallel to c.</td><td>Prismatic slip, the easiest slip mode in Ti and Zr</td></tr><tr><td>Pyramidal</td><td>\\(\\{10\\bar11\\}\\) (also \\(\\{10\\bar12\\}\\))</td><td>Tilted faces that cut through the c-axis.</td><td>Pyramidal slip; \\(\\{10\\bar12\\}\\) is the twin plane</td></tr></tbody></table></div>"
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Which directions are which",
          "html": "<p>\\(\\langle11\\bar20\\rangle\\) is an <strong>a-type direction</strong>: it points along an a-axis, inside the basal plane, along the shortest and most tightly packed row of atoms. This is the main slip direction in Ti and Zr. A direction with both a-type and c-type parts, such as \\(\\langle11\\bar23\\rangle\\), is called a <strong>\\(\\langle c+a\\rangle\\) direction</strong>: it tilts out of the basal plane. Slip along it is much harder, but it is the only slip that can stretch the crystal along c.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Why the slides say {0002} when they mean {0001}",
          "html": "<p>Pole figures of hcp metals are labelled \\(\\{0002\\}\\) but show the <strong>basal plane normals</strong>, exactly as \\(\\{0001\\}\\) would. The reason is experimental: in X-ray diffraction the hcp \\((0001)\\) reflection cancels out (the two atoms in each hcp cell scatter exactly out of phase), so the first one you can measure is the second-order \\((0002)\\). The planes are the same planes, so the normals, and therefore the pole figure, are identical. Read \\(\\{0002\\}\\) as \"where do the c-axes point\".</p>"
        },
        {
          "type": "h2",
          "id": "w3-zr",
          "text": "Case Study: Zirconium, Reactors and Hydrides"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Why a reactor cares which way the grains point.</strong> Think of a plank of wood with the grain running along it. A crack runs easily along the grain and badly across it. A nuclear fuel tube has brittle plates growing inside its wall, and those plates have a favourite direction set by the crystal lattice around them. Texture decides whether the plates lie flat inside the wall (mostly harmless) or point across it (a ready-made crack path).</div></div>"
        },
        {
          "type": "h3",
          "text": "The job: a thin tube that must survive for years"
        },
        {
          "type": "p",
          "text": "In a water-cooled reactor the uranium fuel is made into small ceramic pellets, stacked inside long, thin metal tubes called <strong>fuel cladding</strong> (roughly a centimetre across with a wall well under a millimetre thick). The cladding keeps radioactive fission products in and the cooling water out. It sits in hot water (around 300 °C) under stress and radiation for years. Zirconium alloys are used because they have:",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>Very low neutron absorption.</strong> Neutrons keep the chain reaction going. A cladding material that soaks them up wastes fuel. Most structural metals, including steel, absorb far more.",
            "<strong>Good corrosion resistance</strong> in hot water.",
            "<strong>Adequate strength</strong> at operating temperature."
          ]
        },
        {
          "type": "p",
          "text": "The catch: zirconium is <strong>hexagonal (hcp)</strong>, so it is strongly anisotropic, and it does react with water. That is where textures and hydrides come in.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "What is a hydride?"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Sugar in tea.</strong> Stir sugar into hot tea and it dissolves invisibly. Let the tea go cold and the tea can hold less sugar, so crystals appear. Hydrogen in zirconium behaves the same way: dissolved when hot, and when the metal cools or the hydrogen builds up, the excess comes out as separate solid particles. Those particles are the hydrides.</div></div>"
        },
        {
          "type": "list",
          "items": [
            "<strong>Where the hydrogen comes from.</strong> Water slowly corrodes the zirconium surface: \\(\\mathrm{Zr}+2\\mathrm{H_2O}\\rightarrow\\mathrm{ZrO_2}+2\\mathrm{H_2}\\). The oxide layer is protective, but a fraction of the hydrogen atoms released does not escape: it dissolves into the metal. Hydrogen atoms are tiny, so they slip in between the zirconium atoms.",
            "<strong>Why it turns into something solid.</strong> The metal can only hold a small amount of dissolved hydrogen, and less as it gets colder. When there is more than it can hold, the excess forms a chemical compound with zirconium: <strong>zirconium hydride</strong>, \\(\\mathrm{ZrH}_x\\). It is a different phase with a different crystal structure (the common one is fcc-based), not a zirconium alloy.",
            "<strong>Why it is a problem.</strong> Hydride is <strong>brittle</strong>, closer to a ceramic than a metal. It grows as thin <strong>plates</strong> (platelets). Under stress, a crack can start in a hydride plate and run along or between plates, so the tube loses toughness.",
            "<strong>Direction matters.</strong> Plates lying roughly <em>around</em> the tube wall (parallel to its surface) are not very harmful. Plates pointing <em>across</em> the wall (radially) give a crack a short cut through the wall. Engineers worry far more about the second kind."
          ]
        },
        {
          "type": "h3",
          "text": "Where texture comes in"
        },
        {
          "type": "p",
          "text": "Hydride plates do not form in random directions. They grow with a fixed crystallographic relationship to the zirconium grain around them, written on the slide as",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Orientation relationship",
          "html": "<p>\\((0001)_{Zr}\\parallel(111)_{\\text{hydride}}\\)</p><p>Read it as: \"the basal plane of the zirconium grain lies parallel to a close-packed \\((111)\\) plane of the hydride\". The plates tend to lie close to the basal plane of the grain they grow in. So where the basal planes (and therefore the c-axes) point is where the hydride plates lie.</p>"
        },
        {
          "type": "p",
          "text": "This is why texture is a safety variable. If the tube is made so that the basal poles mostly point through the wall (tilted a little towards the circumference, which is typical of pilgered tube), the plates mostly lie flat inside the wall. A different texture would put more plates across it. The slide pairs a micrograph of a cracked hydride with a sketch of a hydride between two grains under stress, which is the picture to hold in your head: the stress pulls on the brittle plate, and its orientation relative to the load decides whether it cracks.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Honest caveat",
          "html": "<p>This is the simplified version. In reality, the stress applied, temperature history, amount of hydrogen and local grain-boundary structure also change which way plates grow, and hydrogen can drift to a stressed crack tip and grow hydride there. The lecture slide only claims the texture link, so that is what to remember.</p>"
        },
        {
          "type": "h3",
          "text": "The three things the research tries to control"
        },
        {
          "type": "list",
          "items": [
            "<strong>Texture</strong>, to steer hydride precipitation as above.",
            "<strong>Microstructure</strong>, in particular the nature of the grain boundaries (how misoriented neighbouring grains are), because boundaries influence where hydrogen collects and where hydrides nucleate.",
            "<strong>Process optimisation and modelling</strong>: use computer models of the rolling process so the route can be designed instead of guessed by trial and error. The Zr rolling example later in the notes is this work."
          ]
        },
        {
          "type": "p",
          "text": "The slide also shows a <strong>bimodal grain structure</strong>: grain sizes that fall into two groups, a set of large grains and a set of small ones, rather than a single typical size. Asking why it forms is the starting point for the rolling case study below.",
          "class": ""
        },
        {
          "type": "h2",
          "id": "w3-mech",
          "text": "Where Texture Comes From: Slip, Twinning and Lattice Rotation"
        },
        {
          "type": "h3",
          "text": "Step 1: how metals actually bend"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Moving a rug by pushing the wrinkle.</strong> To shift a heavy rug across a floor you could drag the whole thing, which needs a big pull. Or you can make a ruck at one end and push the ruck along, which needs a tiny push. Metals do the second. A <strong>dislocation</strong> is a ruck in the atomic planes: an extra half-plane of atoms squeezed in. It moves through the crystal one atom spacing at a time, and when one passes through, the part of the crystal above it has shifted by one atomic step relative to the part below. Millions of dislocations moving is what you see as bending.</div></div>"
        },
        {
          "type": "p",
          "text": "<strong>Work hardening.</strong> As you keep deforming (cold working), dislocations multiply, run into one another and tangle. A tangled dislocation is hard to move, so each further bit of deformation needs a higher stress. The metal gets stronger and less ductile. When slip gets hard enough, other mechanisms (below: twinning) can become cheaper than continuing to slip.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Step 2: slip, and where it happens"
        },
        {
          "type": "p",
          "text": "<strong>Slip</strong> is plastic shear of one block of crystal over another along a <strong>slip plane</strong> in a <strong>slip direction</strong>. Atoms slide most easily on the most densely packed planes, in the most densely packed directions in them (the surfaces are smoothest, and the hops are shortest). A <strong>slip system</strong> is one plane plus one direction in it. The more systems a crystal has, the more ways it can change shape.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Structure</th><th>Slip plane</th><th>Slip direction</th><th>Typical metals</th><th>Systems</th><th>How the number comes about</th></tr></thead><tbody><tr><td>FCC</td><td>\\(\\{111\\}\\)</td><td>\\(\\langle1\\bar10\\rangle\\)</td><td>Cu, Al, Ni, Ag, Au</td><td>12</td><td>4 planes \\(\\times\\) 3 directions each</td></tr><tr><td>BCC</td><td>\\(\\{110\\}\\)</td><td>\\(\\langle111\\rangle\\)</td><td>α-Fe, W, Mo</td><td>12</td><td>6 planes \\(\\times\\) 2 directions</td></tr><tr><td>BCC</td><td>\\(\\{211\\}\\)</td><td>\\(\\langle111\\rangle\\)</td><td>α-Fe, W</td><td>12</td><td>12 planes \\(\\times\\) 1 direction</td></tr><tr><td>BCC</td><td>\\(\\{321\\}\\)</td><td>\\(\\langle111\\rangle\\)</td><td>α-Fe, K</td><td>24</td><td>24 planes \\(\\times\\) 1 direction</td></tr><tr><td>HCP basal</td><td>\\(\\{0001\\}\\)</td><td>\\(\\langle11\\bar20\\rangle\\)</td><td>Cd, Zn, Mg, Ti, Be</td><td>3</td><td>1 plane \\(\\times\\) 3 a-directions</td></tr><tr><td>HCP prismatic</td><td>\\(\\{10\\bar10\\}\\)</td><td>\\(\\langle11\\bar20\\rangle\\)</td><td>Ti, Mg, Zr</td><td>3</td><td>3 planes \\(\\times\\) 1 direction</td></tr><tr><td>HCP pyramidal</td><td>\\(\\{10\\bar11\\}\\)</td><td>\\(\\langle11\\bar20\\rangle\\)</td><td>Ti, Mg</td><td>6</td><td>6 planes \\(\\times\\) 1 direction</td></tr></tbody></table></div>"
        },
        {
          "type": "p",
          "text": "In Ti and Zr the <strong>prismatic</strong> \\(\\langle a\\rangle\\) system is the easiest (lowest critical stress), basal is the next. (In magnesium and zinc the basal system is easiest. The ranking depends on the metal.)",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Why fcc is friendly and hcp is awkward",
          "html": "<p>To change shape in any way you like, a crystal needs <strong>five independent slip systems</strong> (five different shear patterns that cannot be made by combining the others). FCC has them easily, which is why copper and aluminium are so ductile. For hcp, all the \\(\\langle a\\rangle\\)-type slip in the table (basal, prismatic and pyramidal) gives only <strong>four</strong>, and none of it can stretch or shrink the crystal along its <strong>c-axis</strong>, because every \\(\\langle a\\rangle\\) direction lies flat in the basal plane. Something else has to take up deformation along c: either hard \\(\\langle c+a\\rangle\\) slip, or <strong>twinning</strong>. That is why twinning is central to Ti and Zr and almost irrelevant to copper.</p>"
        },
        {
          "type": "h3",
          "text": "Step 3: slip rotates the lattice"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>A tilted deck of cards being pulled lengthwise.</strong> Hold a deck at an angle and pull it along its length. The cards slide, the deck gets longer and thinner, and the cards end up more nearly lined up with the pulling direction. No card changed, but the stack rotated. Slip in a crystal does the same: the slip planes and directions turn gradually towards the stretching direction (or the compression plane turns to face the load).</div></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 322\" role=\"img\" aria-label=\"A crystal being stretched: the slip planes tilt towards the tensile axis\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"sr-red\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker></defs><rect x=\"14\" y=\"38\" width=\"240\" height=\"250\" rx=\"8\" class=\"dg-frame\"/><text x=\"134\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Before</text><defs><clipPath id=\"sc1\"><rect x=\"44\" y=\"93\" width=\"100\" height=\"140\"/></clipPath></defs><rect x=\"44\" y=\"93\" width=\"100\" height=\"140\" rx=\"2\" fill=\"rgba(74,144,226,.18)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><g clip-path=\"url(#sc1)\"><line x1=\"44\" y1=\"93\" x2=\"144\" y2=\"-7\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"108\" x2=\"144\" y2=\"8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"123\" x2=\"144\" y2=\"23\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"138\" x2=\"144\" y2=\"38\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"153\" x2=\"144\" y2=\"53\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"168\" x2=\"144\" y2=\"68\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"183\" x2=\"144\" y2=\"83\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"198\" x2=\"144\" y2=\"98\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"213\" x2=\"144\" y2=\"113\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"228\" x2=\"144\" y2=\"128\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"243\" x2=\"144\" y2=\"143\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"258\" x2=\"144\" y2=\"158\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"273\" x2=\"144\" y2=\"173\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"288\" x2=\"144\" y2=\"188\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"303\" x2=\"144\" y2=\"203\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"318\" x2=\"144\" y2=\"218\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"44\" y1=\"333\" x2=\"144\" y2=\"233\" stroke=\"#f4a261\" stroke-width=\"1.5\"/></g><line x1=\"94\" y1=\"89\" x2=\"94\" y2=\"65\" stroke=\"#e63946\" stroke-width=\"3\" marker-end=\"url(#sr-red)\"/><line x1=\"94\" y1=\"237\" x2=\"94\" y2=\"261\" stroke=\"#e63946\" stroke-width=\"3\" marker-end=\"url(#sr-red)\"/><text x=\"156\" y=\"160\" class=\"dg-tb-amb\" text-anchor=\"start\">slip planes 45&#176;</text><text x=\"156\" y=\"178\" class=\"dg-t\" text-anchor=\"start\">to the axis</text><text x=\"134\" y=\"308\" class=\"dg-t\" text-anchor=\"middle\">pull along the vertical axis</text><rect x=\"280\" y=\"38\" width=\"214\" height=\"250\" rx=\"8\" class=\"dg-frame\"/><text x=\"387\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">After stretching</text><defs><clipPath id=\"sc2\"><rect x=\"310\" y=\"68\" width=\"74\" height=\"190\"/></clipPath></defs><rect x=\"310\" y=\"68\" width=\"74\" height=\"190\" rx=\"2\" fill=\"rgba(74,144,226,.18)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><g clip-path=\"url(#sc2)\"><line x1=\"310\" y1=\"68\" x2=\"384\" y2=\"-71.2\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"83\" x2=\"384\" y2=\"-56.2\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"98\" x2=\"384\" y2=\"-41.2\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"113\" x2=\"384\" y2=\"-26.2\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"128\" x2=\"384\" y2=\"-11.2\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"143\" x2=\"384\" y2=\"3.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"158\" x2=\"384\" y2=\"18.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"173\" x2=\"384\" y2=\"33.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"188\" x2=\"384\" y2=\"48.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"203\" x2=\"384\" y2=\"63.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"218\" x2=\"384\" y2=\"78.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"233\" x2=\"384\" y2=\"93.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"248\" x2=\"384\" y2=\"108.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"263\" x2=\"384\" y2=\"123.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"278\" x2=\"384\" y2=\"138.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"293\" x2=\"384\" y2=\"153.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"308\" x2=\"384\" y2=\"168.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"323\" x2=\"384\" y2=\"183.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"338\" x2=\"384\" y2=\"198.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"353\" x2=\"384\" y2=\"213.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"368\" x2=\"384\" y2=\"228.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"383\" x2=\"384\" y2=\"243.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"398\" x2=\"384\" y2=\"258.8\" stroke=\"#f4a261\" stroke-width=\"1.5\"/></g><line x1=\"347\" y1=\"64\" x2=\"347\" y2=\"40\" stroke=\"#e63946\" stroke-width=\"3\" marker-end=\"url(#sr-red)\"/><line x1=\"347\" y1=\"262\" x2=\"347\" y2=\"286\" stroke=\"#e63946\" stroke-width=\"3\" marker-end=\"url(#sr-red)\"/><text x=\"396\" y=\"160\" class=\"dg-tb-amb\" text-anchor=\"start\">slip planes 28&#176;</text><text x=\"396\" y=\"178\" class=\"dg-t\" text-anchor=\"start\">to the axis</text><text x=\"387\" y=\"308\" class=\"dg-t\" text-anchor=\"middle\">longer, thinner, planes closer to the axis</text><rect x=\"548\" y=\"38\" width=\"222\" height=\"250\" rx=\"8\" class=\"dg-frame\"/><text x=\"659\" y=\"62\" class=\"dg-tb\" text-anchor=\"middle\">Why texture appears</text><text x=\"562\" y=\"92\" class=\"dg-t\" text-anchor=\"start\">Each grain stretches by slip on</text><text x=\"562\" y=\"110\" class=\"dg-t\" text-anchor=\"start\">its own easiest systems.</text><text x=\"562\" y=\"128\" class=\"dg-t\" text-anchor=\"start\"></text><text x=\"562\" y=\"146\" class=\"dg-t\" text-anchor=\"start\">That turns the slip planes and</text><text x=\"562\" y=\"164\" class=\"dg-t\" text-anchor=\"start\">directions towards the stretch</text><text x=\"562\" y=\"182\" class=\"dg-t\" text-anchor=\"start\">direction.</text><text x=\"562\" y=\"200\" class=\"dg-t\" text-anchor=\"start\"></text><text x=\"562\" y=\"218\" class=\"dg-t\" text-anchor=\"start\">Many grains end up sharing one</text><text x=\"562\" y=\"236\" class=\"dg-t\" text-anchor=\"start\">direction along the axis: a</text><text x=\"562\" y=\"254\" class=\"dg-t\" text-anchor=\"start\">fibre texture.</text></svg><div class=\"diagram-caption\">Think of a tilted stack of cards being pulled lengthwise: the stack gets longer and the cards rotate towards the pulling direction. Angles are illustrative.</div></div>"
        },
        {
          "type": "p",
          "text": "Every grain starts with a different orientation, so each grain turns by a different amount, and neighbouring grains also constrain each other. But the <em>rotation direction</em> is systematic: grains are pushed towards certain stable end orientations. Many grains arriving at the same few orientations is exactly what a texture is. This is the mechanism behind the rolling and wire-drawing textures below.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Step 4: twinning, the sudden alternative"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 330\" role=\"img\" aria-label=\"A crystal before deformation, after slip, and after twinning\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><rect x=\"10\" y=\"38\" width=\"240\" height=\"238\" rx=\"8\" class=\"dg-frame\"/><text x=\"130\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Before</text><text x=\"130\" y=\"298\" class=\"dg-t\" text-anchor=\"middle\">a perfect block of crystal</text><circle cx=\"52\" cy=\"58\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"58\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"58\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"58\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"58\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"58\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"208\" cy=\"58\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"84\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"84\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"84\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"84\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"84\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"84\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"208\" cy=\"84\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"110\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"110\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"110\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"110\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"110\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"110\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"208\" cy=\"110\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"208\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"208\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"208\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"52\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"78\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"104\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"130\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"156\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"182\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"208\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><line x1=\"24\" y1=\"123\" x2=\"236\" y2=\"123\" stroke=\"#f4a261\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\"/><text x=\"28\" y=\"139\" class=\"dg-tb-amb\" text-anchor=\"start\">slip plane</text><rect x=\"270\" y=\"38\" width=\"240\" height=\"238\" rx=\"8\" class=\"dg-frame\"/><text x=\"390\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">After slip</text><text x=\"390\" y=\"298\" class=\"dg-t\" text-anchor=\"middle\">upper part moved by whole lattice steps</text><circle cx=\"338\" cy=\"58\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"364\" cy=\"58\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"390\" cy=\"58\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"416\" cy=\"58\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"442\" cy=\"58\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"468\" cy=\"58\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"494\" cy=\"58\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"338\" cy=\"84\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"364\" cy=\"84\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"390\" cy=\"84\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"416\" cy=\"84\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"442\" cy=\"84\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"468\" cy=\"84\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"494\" cy=\"84\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"338\" cy=\"110\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"364\" cy=\"110\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"390\" cy=\"110\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"416\" cy=\"110\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"442\" cy=\"110\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"468\" cy=\"110\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"494\" cy=\"110\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"286\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"312\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"338\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"364\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"390\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"416\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"442\" cy=\"136\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"286\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"312\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"338\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"364\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"390\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"416\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"442\" cy=\"162\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"286\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"312\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"338\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"364\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"390\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"416\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"442\" cy=\"188\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"286\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"312\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"338\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"364\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"390\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"416\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"442\" cy=\"214\" r=\"6.5\" class=\"dg-atomA\"/><line x1=\"284\" y1=\"123\" x2=\"496\" y2=\"123\" stroke=\"#f4a261\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\"/><text x=\"288\" y=\"139\" class=\"dg-tb-amb\" text-anchor=\"start\">slip plane</text><rect x=\"530\" y=\"38\" width=\"240\" height=\"238\" rx=\"8\" class=\"dg-frame\"/><text x=\"650\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">After twinning</text><text x=\"650\" y=\"298\" class=\"dg-t\" text-anchor=\"middle\">upper part is a mirror image of the lower</text><circle cx=\"546\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"546\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"546\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"572\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"572\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"572\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"598\" cy=\"176\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"598\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"598\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"598\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"624\" cy=\"176\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"624\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"624\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"624\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"650\" cy=\"176\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"650\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"650\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"650\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"676\" cy=\"150\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"676\" cy=\"176\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"676\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"676\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"676\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"702\" cy=\"150\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"702\" cy=\"176\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"702\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"702\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"702\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"728\" cy=\"124\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"728\" cy=\"150\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"728\" cy=\"176\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"728\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"728\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"728\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"754\" cy=\"124\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"754\" cy=\"150\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"754\" cy=\"176\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"754\" cy=\"202\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"754\" cy=\"228\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"754\" cy=\"254\" r=\"6.5\" class=\"dg-atomA\"/><circle cx=\"557.8\" cy=\"166.8\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"594.5\" cy=\"167.4\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"576.5\" cy=\"148.7\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"558.4\" cy=\"130\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"613.2\" cy=\"149.4\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"595.2\" cy=\"130.7\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"577.1\" cy=\"112\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"559.1\" cy=\"93.2\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"631.9\" cy=\"131.3\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"613.9\" cy=\"112.6\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"595.8\" cy=\"93.9\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"577.8\" cy=\"75.2\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"559.7\" cy=\"56.5\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"668.7\" cy=\"131.9\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"650.6\" cy=\"113.2\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"632.6\" cy=\"94.5\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"614.5\" cy=\"75.8\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"596.5\" cy=\"57.1\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"687.4\" cy=\"113.9\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"669.3\" cy=\"95.2\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"651.3\" cy=\"76.5\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"633.2\" cy=\"57.8\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"724.2\" cy=\"114.5\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"706.1\" cy=\"95.8\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"688\" cy=\"77.1\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"670\" cy=\"58.4\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"742.9\" cy=\"96.5\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"724.8\" cy=\"77.8\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"706.8\" cy=\"59.1\" r=\"6.5\" class=\"dg-atomG\"/><circle cx=\"743.5\" cy=\"59.7\" r=\"6.5\" class=\"dg-atomG\"/><line x1=\"544\" y1=\"192.8\" x2=\"756\" y2=\"107.2\" stroke=\"#f4a261\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\"/><text x=\"752\" y=\"102.2\" class=\"dg-tb-amb\" text-anchor=\"end\">twin plane</text></svg><div class=\"diagram-caption\">Slip leaves the lattice orientation unchanged: one part just moves by whole lattice steps. Twinning changes the orientation of one region to the mirror image of the rest, so it does change texture (schematic).</div></div>"
        },
        {
          "type": "p",
          "text": "A <strong>twin</strong> is a region of crystal whose lattice is the <strong>mirror image</strong> of the surrounding crystal across a particular plane (the twin plane). It forms by a quick, cooperative shear of the atoms in that region, much smaller than a lattice step per atom, rather than by individual atoms hopping along a slip plane. After twinning, the same lattice is present, but turned to a new orientation. The turn is sudden and large.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th></th><th>Slip</th><th>Twinning</th></tr></thead><tbody><tr><td>Lattice orientation afterwards</td><td>Unchanged inside each block, only the blocks are displaced</td><td>The twinned region has a new, mirror-image orientation</td></tr><tr><td>Rotation of the crystal</td><td>Gradual, grows with strain</td><td>Sudden, large (about 85° for the main Ti and Zr twin)</td></tr><tr><td>Size of the shear</td><td>A whole lattice step</td><td>A fraction of a lattice step per atom plane, but many planes</td></tr><tr><td>Favoured by</td><td>Higher temperature, small strains, favourable orientation</td><td>Low temperature, high strain rate, large grains, orientations where slip is hard</td></tr><tr><td>Where it matters</td><td>All metals</td><td>Mainly hcp metals (Ti, Zr, Mg, Zn) and some bcc metals at low temperature</td></tr><tr><td>Effect on texture</td><td>Slow drift towards stable orientations</td><td>Jump: intensity vanishes in one place on the pole figure and appears about 85° away</td></tr></tbody></table></div>"
        },
        {
          "type": "h3",
          "text": "The twins in titanium and zirconium"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "The 85° tensile twin",
              "color": "#f4a261",
              "text": "The most important one: the \\(\\{10\\bar12\\}\\langle10\\bar11\\rangle\\) twin, which rotates the lattice by about <strong>85° about a \\(\\langle11\\bar20\\rangle\\) axis</strong>. It is called a <strong>tensile twin</strong> because it forms when the crystal is <em>stretched along its c-axis</em> (or compressed perpendicular to it). The result is that the c-axis jumps from lying along the stretch to lying nearly perpendicular to it. There are six equivalent \\(\\{10\\bar12\\}\\) planes, so a grain can form up to six different <strong>twin variants</strong> with different rotation axes."
            },
            {
              "title": "The other modes",
              "color": "#8855f5",
              "text": "Ti has three twin modes in the lecture, with rotations of about <strong>85°, 65° and 35°</strong>. The 85° mode is the \\(\\{10\\bar12\\}\\) tensile twin above. The other two are the \\(\\{11\\bar22\\}\\) twin (a <em>compressive</em> twin, forming when the c-axis is squeezed, rotating about 65°) and the \\(\\{11\\bar21\\}\\) twin (tensile, about 35°). The slides do not give the plane names for these, so treat them as extra background."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Twinning variables to remember",
          "html": "<p>The lecture lists what controls twinning: <strong>grain size, temperature, plastic strain, strain rate and loading direction</strong>. The pattern is that twinning is more likely when slip is hard: low temperature, fast loading, large grains (small grains block twin growth) and a load direction that is bad for slip.</p>"
        },
        {
          "type": "h2",
          "id": "w3-axes",
          "text": "Sample Axes and Strain: Rolling vs Uniaxial Loading"
        },
        {
          "type": "h3",
          "text": "Step 1: you need axes fixed to the sample"
        },
        {
          "type": "p",
          "text": "A texture is a statement like \"the c-axes point mostly through the thickness of the sheet\". That only means something if you say what the sheet's own directions are. For a rolled sheet or plate they are:",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>RD, the rolling direction:</strong> the way the sheet travelled through the rolls. It is the long direction of the sheet.",
            "<strong>TD, the transverse direction:</strong> across the width of the sheet, in its plane, at 90° to RD.",
            "<strong>ND, the normal direction:</strong> perpendicular to the sheet surface, through the thickness."
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 270\" role=\"img\" aria-label=\"Rolling a sheet: rolling, transverse and normal directions with plane strain\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"rl-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"rl-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"rl-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"760\" height=\"250\" rx=\"8\" class=\"dg-frame\"/><polygon points=\"40,106 330,106 400,118 400,142 330,154 40,154\" fill=\"rgba(74,144,226,.35)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><polygon points=\"400,118 610,118 610,142 400,142\" fill=\"rgba(74,144,226,.35)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><circle cx=\"365\" cy=\"70\" r=\"46\" fill=\"#2a2a34\" stroke=\"#6a6a78\" stroke-width=\"2\"/><circle cx=\"365\" cy=\"190\" r=\"46\" fill=\"#2a2a34\" stroke=\"#6a6a78\" stroke-width=\"2\"/><path d=\"M345 70 a22 22 0 1 1 22 22\" fill=\"none\" stroke=\"#f4a261\" stroke-width=\"2.2\" marker-end=\"url(#rl-amb)\"/><path d=\"M385 190 a22 22 0 1 1 -22 -22\" fill=\"none\" stroke=\"#f4a261\" stroke-width=\"2.2\" marker-end=\"url(#rl-amb)\"/><text x=\"365\" y=\"24\" class=\"dg-t\" text-anchor=\"middle\">rollers</text><line x1=\"62\" y1=\"90\" x2=\"150\" y2=\"90\" class=\"dg-vec-acc\" marker-end=\"url(#rl-acc)\"/><text x=\"106\" y=\"82\" class=\"dg-t\" text-anchor=\"middle\">feed</text><line x1=\"640\" y1=\"130\" x2=\"730\" y2=\"130\" class=\"dg-vec-acc\" marker-end=\"url(#rl-acc)\"/><text x=\"735\" y=\"118\" class=\"dg-vl-acc\" text-anchor=\"end\">RD</text><line x1=\"676\" y1=\"200\" x2=\"676\" y2=\"150\" class=\"dg-vec-amb\" marker-end=\"url(#rl-amb)\"/><text x=\"690\" y=\"160\" class=\"dg-vl-amb\" text-anchor=\"start\">ND</text><circle cx=\"640\" cy=\"200\" r=\"9\" fill=\"none\" stroke=\"#e6e6ee\" stroke-width=\"1.8\"/><circle cx=\"640\" cy=\"200\" r=\"2.6\" fill=\"#e6e6ee\"/><text x=\"614\" y=\"204\" class=\"dg-vl-mut\" text-anchor=\"end\">TD</text><text x=\"640\" y=\"226\" class=\"dg-t\" text-anchor=\"middle\">out of the page</text><text x=\"28\" y=\"196\" class=\"dg-tb-acc\" text-anchor=\"start\">Longer: extension along RD (+&#916;)</text><text x=\"28\" y=\"218\" class=\"dg-tb-amb\" text-anchor=\"start\">Thinner: compression along ND (&#8722;&#916;)</text><text x=\"28\" y=\"240\" class=\"dg-tb\" text-anchor=\"start\">Same width: zero strain along TD</text></svg><div class=\"diagram-caption\">Plane strain: a sheet gets longer and thinner, but not wider.</div></div>"
        },
        {
          "type": "p",
          "text": "Memory aid: the sheet's <em>lengthways</em> direction (RD) is the one the rollers pull out, the one that is <em>across</em> is TD, and <em>normal</em> is the direction a nail would go in. Rolled sheets have mirror symmetry in all three of these planes (the sheet looks the same if you flip it over, or reverse it end for end, statistically speaking). This <strong>orthorhombic sample symmetry</strong> matters later because it lets us show only a quarter of each pole figure.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Step 2: how much did you deform it? (reduction versus strain)"
        },
        {
          "type": "p",
          "text": "The slides quote \"10% rolling\", \"20% rolling\" and so on. That is <strong>thickness reduction</strong>: the percentage by which the sheet got thinner,",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Reduction and true strain",
          "html": "<p>$$\\text{reduction}=\\frac{t_0-t}{t_0}\\times100\\%\\qquad\\varepsilon=\\ln\\frac{t}{t_0}$$</p><p>\\(t_0\\) is the starting thickness and \\(t\\) the final thickness. The <strong>true strain</strong> \\(\\varepsilon\\) is negative along ND because the sheet is compressed in that direction. Reduction is not the same number as strain, especially at large reductions:</p><table class=\"mini-table\"><thead><tr><th>Reduction</th><th>t/t<sub>0</sub></th><th>True strain along ND</th></tr></thead><tbody><tr><td>10%</td><td>0.90</td><td>\\(-0.105\\)</td></tr><tr><td>20%</td><td>0.80</td><td>\\(-0.223\\)</td></tr><tr><td>40%</td><td>0.60</td><td>\\(-0.511\\)</td></tr><tr><td>60%</td><td>0.40</td><td>\\(-0.916\\)</td></tr><tr><td>80%</td><td>0.20</td><td>\\(-1.609\\)</td></tr></tbody></table>"
        },
        {
          "type": "h3",
          "text": "Step 3: the strain tensor in plain words"
        },
        {
          "type": "p",
          "text": "A <strong>strain tensor</strong> is a bookkeeping table. Each diagonal entry says how much the material stretches (positive) or shrinks (negative) along one of the three axes. Here the rows and columns are in the order RD, TD, ND. Off-diagonal entries (shear) are zero in the cases below. Because metal does not compress, volume is conserved, so the three diagonal numbers must add to zero: if it stretches in one direction it must shrink in another.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Rolling: plane strain",
          "eqs": [
            "\\varepsilon_{\\text{rolling}}=\\begin{pmatrix}+\\Delta&0&0\\\\0&0&0\\\\0&0&-\\Delta\\end{pmatrix}"
          ],
          "vars": [
            {
              "symbol": "rows and columns",
              "desc": "in the order RD, TD, ND"
            },
            {
              "symbol": "+Δ",
              "desc": "stretch along RD (the sheet gets longer)"
            },
            {
              "symbol": "−Δ",
              "desc": "squash along ND (the sheet gets thinner)"
            },
            {
              "symbol": "0",
              "desc": "no change along TD (the sheet does not get wider)"
            }
          ],
          "note": "Rolling is <strong>plane-strain</strong> deformation: stretch in one direction, squash in another, and <em>nothing</em> in the third. The rolls squash the sheet down, and the metal can only escape lengthways because the sheet is wide and is held by friction sideways. The lecture calls this a <em>multiaxial</em> strain because two axes are involved. The diagonal sums to zero, so volume is conserved."
        },
        {
          "type": "example",
          "label": "Worked example: a rolling pass",
          "q": "A 5.0 mm plate is rolled down to 4.0 mm. The width does not change (plane strain). Find the reduction, the true strain along ND, and the lengthening of the plate.",
          "steps": [
            "Reduction \\(=(5.0-4.0)/5.0=20\\%\\)",
            "True strain along ND: \\(\\varepsilon_{ND}=\\ln(4.0/5.0)=\\ln0.8=-0.223\\)",
            "No change in width, and volume is constant, so the length must grow by \\(5.0/4.0=1.25\\). Along RD: \\(\\varepsilon_{RD}=\\ln1.25=+0.223\\)",
            "Check: \\(+0.223+0-0.223=0\\), so volume is conserved"
          ],
          "answer": "<strong>20% reduction, \\(\\varepsilon_{ND}=-0.223\\), \\(\\varepsilon_{RD}=+0.223\\)</strong>: a 1 m length of plate becomes 1.25 m."
        },
        {
          "type": "formulablock",
          "name": "Uniaxial loading",
          "eqs": [
            "d\\varepsilon_{\\text{tension}}=\\begin{pmatrix}+N&0&0\\\\0&-N/2&0\\\\0&0&-N/2\\end{pmatrix}\\qquad d\\varepsilon_{\\text{compression}}=\\begin{pmatrix}-N&0&0\\\\0&+N/2&0\\\\0&0&+N/2\\end{pmatrix}"
          ],
          "vars": [
            {
              "symbol": "N",
              "desc": "strain along the loading axis"
            },
            {
              "symbol": "∓N/2",
              "desc": "the other two directions share the opposite strain equally"
            }
          ],
          "note": "<strong>Tension:</strong> pull a rod and it gets longer and thinner. <strong>Compression:</strong> squash a cylinder and it gets shorter and fatter. In both cases the two directions <em>across</em> the load behave identically, so the axis along the load is an axis of infinite rotational symmetry (the lecture labels it C<sub>∞</sub>). Grains are free to rotate about that axis, so uniaxial loading produces a <strong>fibre texture</strong>: one crystal direction lines up with the loading axis, but nothing fixes the spin about it."
        },
        {
          "type": "example",
          "label": "Worked example: compression of a cylinder",
          "q": "A cylinder is compressed so that the strain along its axis is \\(-0.10\\). Assuming constant volume and an equal spread, what is the strain in each transverse direction?",
          "steps": [
            "Use the compression tensor with \\(N=0.10\\): axial \\(=-N=-0.10\\)",
            "Transverse \\(=+N/2=+0.05\\) in each of the two directions",
            "Check: \\(-0.10+0.05+0.05=0\\), so volume is conserved"
          ],
          "answer": "<strong>+0.05</strong> in each transverse direction (small-strain approximation)."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Rolling versus uniaxial in one line",
          "html": "<p>Rolling has <strong>three different</strong> things happening along three different axes, so it produces a texture with <strong>sheet symmetry</strong> (all of RD, TD, ND matter). Uniaxial loading has <strong>one special axis</strong>, so it produces a <strong>fibre</strong> texture. Do not mix them up: rolling is not \"tension along RD\" because the TD strain is zero, not \\(-N/2\\).</p>"
        },
        {
          "type": "h2",
          "id": "w3-pf",
          "text": "Pole Figures"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>A flat map of a globe, or a shadow of a sphere.</strong> Directions in 3D live on the surface of a sphere. To put them on paper we flatten the sphere the way a globe becomes a map. Imagine a glass globe with a lamp at the south pole: every point on the northern half casts a shadow onto the equatorial plane. The shadow map is the stereographic projection, and the shadow of one crystal direction is one dot.</div></div>"
        },
        {
          "type": "h3",
          "text": "How a pole figure is built, step by step"
        },
        {
          "type": "list",
          "items": [
            "<strong>1. Pick a plane family</strong>, for example \\(\\{100\\}\\) of a cubic crystal, or \\(\\{0002\\}\\) of titanium.",
            "<strong>2. Put the crystal at the centre of a reference sphere</strong> whose axes are the <em>sample</em> axes RD, TD and ND. The sample frame stays fixed, and the crystal turns inside it.",
            "<strong>3. Draw each plane's normal</strong> out to the sphere surface. The point where it pierces the sphere is the <strong>pole</strong> of that plane.",
            "<strong>4. Project each pole from the south pole onto the equatorial plane.</strong> A pole at angle \\(\\theta\\) from ND lands at radius \\(r=R\\tan(\\theta/2)\\) from the centre: ND itself lands at the centre, and a pole lying in the sheet plane (\\(\\theta=90^\\circ\\)) lands on the rim.",
            "<strong>5. Repeat for every grain</strong> and plot all the dots on the same circle. Where many grains share a pole direction the dots pile up, and the picture is drawn with contours of intensity."
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 330\" role=\"img\" aria-label=\"Building a pole figure by stereographic projection of a plane normal\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"pc-acc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-acc\"/></marker><marker id=\"pc-amb\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-amb\"/></marker><marker id=\"pc-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><rect x=\"10\" y=\"38\" width=\"380\" height=\"282\" rx=\"8\" class=\"dg-frame\"/><rect x=\"400\" y=\"38\" width=\"370\" height=\"282\" rx=\"8\" class=\"dg-frame\"/><text x=\"200\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">Side view of the reference sphere</text><text x=\"585\" y=\"24\" class=\"dg-tb\" text-anchor=\"middle\">The pole figure (view from above)</text><circle cx=\"190\" cy=\"175\" r=\"125\" fill=\"none\" stroke=\"#6a6a78\" stroke-width=\"1.8\"/><line x1=\"51\" y1=\"175\" x2=\"329\" y2=\"175\" stroke=\"#8c8c9c\" stroke-width=\"1.4\" stroke-dasharray=\"5 4\"/><text x=\"18\" y=\"193\" class=\"dg-t\" text-anchor=\"start\">equatorial plane</text><g transform=\"translate(190 175) rotate(-18)\"><rect x=\"-14\" y=\"-14\" width=\"28\" height=\"28\" fill=\"rgba(14,165,198,.25)\" stroke=\"#0ea5c6\" stroke-width=\"2\"/></g><line x1=\"190\" y1=\"167\" x2=\"190\" y2=\"36\" class=\"dg-route\" /><text x=\"182\" y=\"42\" class=\"dg-vl-mut\" text-anchor=\"end\">ND</text><line x1=\"190\" y1=\"175\" x2=\"285.8\" y2=\"94.7\" class=\"dg-vec-amb\" marker-end=\"url(#pc-amb)\"/><text x=\"293.8\" y=\"88.7\" class=\"dg-tb-amb\" text-anchor=\"start\">pole (plane normal)</text><circle cx=\"190\" cy=\"300\" r=\"5\" fill=\"#e6e6ee\"/><text x=\"200\" y=\"314\" class=\"dg-t\" text-anchor=\"start\">projection point (south pole)</text><line x1=\"190\" y1=\"300\" x2=\"248.3\" y2=\"175\" stroke=\"#e6e6ee\" stroke-width=\"1.4\" stroke-dasharray=\"6 4\"/><circle cx=\"248.3\" cy=\"175\" r=\"6\" class=\"dg-lp-acc\"/><text x=\"258.3\" y=\"163\" class=\"dg-tb-acc\" text-anchor=\"start\">projected pole</text><circle cx=\"285.8\" cy=\"94.7\" r=\"5.5\" fill=\"#f4a261\"/><text x=\"200\" y=\"123\" class=\"dg-vl-amb\" text-anchor=\"start\">&#952;</text><circle cx=\"585\" cy=\"175\" r=\"105\" fill=\"#101016\" stroke=\"#6a6a78\" stroke-width=\"1.8\"/><line x1=\"480\" y1=\"175\" x2=\"690\" y2=\"175\" stroke=\"#2c2c36\" stroke-width=\"1\"/><line x1=\"585\" y1=\"70\" x2=\"585\" y2=\"280\" stroke=\"#2c2c36\" stroke-width=\"1\"/><text x=\"696\" y=\"179\" class=\"dg-vl-mut\" text-anchor=\"start\">TD</text><text x=\"585\" y=\"298\" class=\"dg-vl-mut\" text-anchor=\"middle\">RD</text><text x=\"577\" y=\"167\" class=\"dg-t\" text-anchor=\"end\">ND</text><circle cx=\"634\" cy=\"175\" r=\"6\" class=\"dg-lp-acc\"/><text x=\"634\" y=\"159\" class=\"dg-tb-acc\" text-anchor=\"middle\">projected pole</text><line x1=\"585\" y1=\"215\" x2=\"634\" y2=\"215\" class=\"dg-route\"/><text x=\"609.5\" y=\"231\" class=\"dg-t\" text-anchor=\"middle\">r = R tan(&#952;/2)</text></svg><div class=\"diagram-caption\">A pole at angle &#952; from ND lands at a distance R tan(&#952;/2) from the centre. A pole along ND lands at the centre; one in the sheet plane lands on the rim.</div></div>"
        },
        {
          "type": "p",
          "text": "<strong>What a pole figure tells you:</strong> the orientation of one chosen plane normal with respect to the sample axes, for all grains at once. Dots scattered everywhere: random texture. Dots clustered in a few places: preferred orientation (texture).",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Rules and conventions that cause confusion"
        },
        {
          "type": "list",
          "items": [
            "<strong>Only the upper hemisphere is plotted.</strong> A plane's normal can be drawn pointing up or pointing down, and the two describe the same plane, so the lower half adds no information.",
            "<strong>Rim poles appear at both ends of a diameter.</strong> A plane lying in the sheet plane has a normal of exactly 90° from ND. Its up and down normals both land on the rim, at opposite points. The lecture explains this as half of the pole plotted on the positive side and half on the negative side.",
            "<strong>The label is a family, not one plane.</strong> The slide's \"(001) pole figure\" shows every symmetry-equivalent plane, so it really means \\(\\{001\\}\\). For a cube that is 3 planes, six poles (up and down), of which 5 dots are plotted when the crystal sits square to the sheet (1 at the centre and 4 on the rim, the rim pair counted at both ends).",
            "<strong>A rolled sheet has symmetry</strong> (RD, TD, ND are all mirror planes), so the pole figure repeats itself in four quadrants. The α-Ti slides plot a single <strong>quarter</strong> pole figure with TD, ND and RD labelled on its axes for exactly this reason: the other three quarters are copies.",
            "<strong>Stereographic versus equal-area.</strong> The stereographic projection preserves angles but stretches areas near the rim, so it exaggerates densities there. Most published pole figures use an <em>equal-area</em> projection so that contour levels are fair. The lecture uses the stereographic one, so use it in this course."
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 276\" role=\"img\" aria-label=\"Pole figures of a single cubic crystal aligned with the sheet, and of a hexagonal crystal\" xmlns=\"http://www.w3.org/2000/svg\"><defs></defs><circle cx=\"80\" cy=\"112\" r=\"66\" fill=\"#101016\" stroke=\"#6a6a78\" stroke-width=\"1.6\"/><line x1=\"14\" y1=\"112\" x2=\"146\" y2=\"112\" stroke=\"#2c2c36\"/><line x1=\"80\" y1=\"46\" x2=\"80\" y2=\"178\" stroke=\"#2c2c36\"/><text x=\"80\" y=\"38\" class=\"dg-tb\" text-anchor=\"middle\">{100}</text><text x=\"80\" y=\"202\" class=\"dg-t\" text-anchor=\"middle\">cube: 3 planes</text><circle cx=\"235\" cy=\"112\" r=\"66\" fill=\"#101016\" stroke=\"#6a6a78\" stroke-width=\"1.6\"/><line x1=\"169\" y1=\"112\" x2=\"301\" y2=\"112\" stroke=\"#2c2c36\"/><line x1=\"235\" y1=\"46\" x2=\"235\" y2=\"178\" stroke=\"#2c2c36\"/><text x=\"235\" y=\"38\" class=\"dg-tb\" text-anchor=\"middle\">{110}</text><text x=\"235\" y=\"202\" class=\"dg-t\" text-anchor=\"middle\">cube: 6 planes</text><circle cx=\"390\" cy=\"112\" r=\"66\" fill=\"#101016\" stroke=\"#6a6a78\" stroke-width=\"1.6\"/><line x1=\"324\" y1=\"112\" x2=\"456\" y2=\"112\" stroke=\"#2c2c36\"/><line x1=\"390\" y1=\"46\" x2=\"390\" y2=\"178\" stroke=\"#2c2c36\"/><text x=\"390\" y=\"38\" class=\"dg-tb\" text-anchor=\"middle\">{111}</text><text x=\"390\" y=\"202\" class=\"dg-t\" text-anchor=\"middle\">cube: 4 planes</text><circle cx=\"545\" cy=\"112\" r=\"66\" fill=\"#101016\" stroke=\"#6a6a78\" stroke-width=\"1.6\"/><line x1=\"479\" y1=\"112\" x2=\"611\" y2=\"112\" stroke=\"#2c2c36\"/><line x1=\"545\" y1=\"46\" x2=\"545\" y2=\"178\" stroke=\"#2c2c36\"/><text x=\"545\" y=\"38\" class=\"dg-tb\" text-anchor=\"middle\">(0001)</text><text x=\"545\" y=\"202\" class=\"dg-t\" text-anchor=\"middle\">hexagonal: basal</text><circle cx=\"700\" cy=\"112\" r=\"66\" fill=\"#101016\" stroke=\"#6a6a78\" stroke-width=\"1.6\"/><line x1=\"634\" y1=\"112\" x2=\"766\" y2=\"112\" stroke=\"#2c2c36\"/><line x1=\"700\" y1=\"46\" x2=\"700\" y2=\"178\" stroke=\"#2c2c36\"/><text x=\"700\" y=\"38\" class=\"dg-tb\" text-anchor=\"middle\">{10&#8722;10}</text><text x=\"700\" y=\"202\" class=\"dg-t\" text-anchor=\"middle\">hexagonal: prism</text><circle cx=\"80\" cy=\"112\" r=\"6\" fill=\"#e63946\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"146\" cy=\"112\" r=\"6\" fill=\"#e63946\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"80\" cy=\"178\" r=\"6\" fill=\"#e63946\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"14\" cy=\"112\" r=\"6\" fill=\"#e63946\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"80\" cy=\"46\" r=\"6\" fill=\"#e63946\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"262.3\" cy=\"112\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"235\" cy=\"139.3\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"207.7\" cy=\"112\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"235\" cy=\"84.7\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"281.7\" cy=\"158.7\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"188.3\" cy=\"158.7\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"188.3\" cy=\"65.3\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"281.7\" cy=\"65.3\" r=\"6\" fill=\"#2fa15c\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"414.2\" cy=\"136.2\" r=\"6\" fill=\"#4a90e2\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"365.8\" cy=\"136.2\" r=\"6\" fill=\"#4a90e2\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"365.8\" cy=\"87.8\" r=\"6\" fill=\"#4a90e2\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"414.2\" cy=\"87.8\" r=\"6\" fill=\"#4a90e2\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"545\" cy=\"112\" r=\"6\" fill=\"#8855f5\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"757.2\" cy=\"145\" r=\"6\" fill=\"#8855f5\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"700\" cy=\"178\" r=\"6\" fill=\"#8855f5\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"642.8\" cy=\"145\" r=\"6\" fill=\"#8855f5\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"642.8\" cy=\"79\" r=\"6\" fill=\"#8855f5\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"700\" cy=\"46\" r=\"6\" fill=\"#8855f5\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><circle cx=\"757.2\" cy=\"79\" r=\"6\" fill=\"#8855f5\" stroke=\"#0c0c10\" stroke-width=\"1.2\"/><text x=\"134\" y=\"103\" class=\"dg-vl-mut\" text-anchor=\"end\">TD</text><text x=\"92\" y=\"164\" class=\"dg-vl-mut\" text-anchor=\"start\">RD</text><text x=\"90\" y=\"104\" class=\"dg-t\" text-anchor=\"start\">ND</text><text x=\"390\" y=\"262\" class=\"dg-t\" text-anchor=\"middle\">Crystal axes lined up with the sheet axes (RD down, TD right, ND out of the page).</text></svg><div class=\"diagram-caption\">Dots on the rim come in opposite pairs, so the rim has two dots per plane. Counts: {100} gives 5 dots, {110} gives 8, {111} gives 4.</div></div>"
        },
        {
          "type": "example",
          "label": "Worked example: count the dots",
          "q": "A cubic crystal sits with its cube axes along RD, TD and ND. How many dots does its \\(\\{110\\}\\) pole figure show?",
          "steps": [
            "\\(\\{110\\}\\) holds 6 distinct planes: \\((110),(1\\bar10),(101),(10\\bar1),(011),(01\\bar1)\\) and each has an up and a down normal",
            "Four of them, \\((101),(10\\bar1),(011),(01\\bar1)\\), have normals 45° from ND, so they give 4 dots inside the circle (towards RD and TD)",
            "\\((110)\\) and \\((1\\bar10)\\) lie in the sheet plane, so their normals are on the rim, each drawn at both ends of a diameter: 4 more dots"
          ],
          "answer": "<strong>8 dots</strong> for 6 planes (4 inside, 4 on the rim). The same method gives 5 for \\(\\{100\\}\\) and 4 for \\(\\{111\\}\\)."
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "A pole figure is not the whole story",
          "html": "<p>A pole figure shows where <em>one</em> kind of plane normal points: that is two angles of information. A full orientation needs three, because the crystal can still be spun about that normal and nothing in that one figure would change. So you need several pole figures, or an <strong>orientation distribution function</strong> (below), to pin down a full texture.</p>"
        },
        {
          "type": "h2",
          "id": "w3-euler",
          "text": "Euler Angles and Orientation Space"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>How a pilot describes an aircraft.</strong> To say how a plane is oriented you give three turns: yaw, pitch and roll, in a fixed order. Three numbers, applied in order, fix the orientation completely. Euler angles do the same job for a crystal: three successive rotations take the sample axes onto the crystal axes. Why three? Orientation in 3D has three degrees of freedom: you can aim one axis anywhere (two angles) and then spin about it (the third).</div></div>"
        },
        {
          "type": "p",
          "text": "<strong>Bunge Euler angles</strong> \\((\\varphi_1,\\Phi,\\varphi_2)\\) describe a crystal orientation relative to the sample axes by three rotations <em>in this order</em>:",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>\\(\\varphi_1\\):</strong> rotate about <strong>ND</strong> (spin the crystal flat, like turning a plate on a table).",
            "<strong>\\(\\Phi\\):</strong> rotate about the <strong>new RD</strong> (tip the crystal over, like tilting the plate).",
            "<strong>\\(\\varphi_2\\):</strong> rotate about the <strong>new ND</strong> (spin it again about its own tilted axis)."
          ]
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 330\" role=\"img\" aria-label=\"The three Bunge Euler rotations applied one after another to the crystal axes\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"eu-g\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"184\" height=\"310\" rx=\"8\" class=\"dg-frame\"/><text x=\"92\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">Start</text><text x=\"92\" y=\"306\" class=\"dg-t\" text-anchor=\"middle\">crystal axes = sample axes</text><line x1=\"92\" y1=\"176\" x2=\"65.3\" y2=\"196.8\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"56.3\" y=\"208.8\" class=\"dg-vl-mut\" text-anchor=\"middle\">RD</text><line x1=\"92\" y1=\"176\" x2=\"151.4\" y2=\"176\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"155.4\" y=\"167\" class=\"dg-vl-mut\" text-anchor=\"middle\">TD</text><line x1=\"92\" y1=\"176\" x2=\"92\" y2=\"116.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"92\" y=\"110.6\" class=\"dg-vl-mut\" text-anchor=\"middle\">ND</text><line x1=\"92\" y1=\"176\" x2=\"71.2\" y2=\"192.2\" stroke=\"#e63946\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"71.2\" cy=\"192.2\" r=\"4.5\" fill=\"#e63946\"/><text x=\"63.2\" y=\"196.2\" class=\"dg-t\" text-anchor=\"end\" style=\"fill:#e63946\">[100]</text><line x1=\"92\" y1=\"176\" x2=\"138.2\" y2=\"176\" stroke=\"#2fa15c\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"138.2\" cy=\"176\" r=\"4.5\" fill=\"#2fa15c\"/><text x=\"146.2\" y=\"180\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#2fa15c\">[010]</text><line x1=\"92\" y1=\"176\" x2=\"92\" y2=\"129.8\" stroke=\"#4a90e2\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"92\" cy=\"129.8\" r=\"4.5\" fill=\"#4a90e2\"/><text x=\"100\" y=\"133.8\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#4a90e2\">[001]</text><rect x=\"202\" y=\"10\" width=\"184\" height=\"310\" rx=\"8\" class=\"dg-frame\"/><text x=\"284\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">Step 1: &#966;&#8321; about ND</text><text x=\"284\" y=\"306\" class=\"dg-t\" text-anchor=\"middle\">turn about the sheet normal</text><line x1=\"284\" y1=\"176\" x2=\"257.3\" y2=\"196.8\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"248.3\" y=\"208.8\" class=\"dg-vl-mut\" text-anchor=\"middle\">RD</text><line x1=\"284\" y1=\"176\" x2=\"343.4\" y2=\"176\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"347.4\" y=\"167\" class=\"dg-vl-mut\" text-anchor=\"middle\">TD</text><line x1=\"284\" y1=\"176\" x2=\"284\" y2=\"116.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"284\" y=\"110.6\" class=\"dg-vl-mut\" text-anchor=\"middle\">ND</text><line x1=\"284\" y1=\"176\" x2=\"297.8\" y2=\"188.4\" stroke=\"#e63946\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"297.8\" cy=\"188.4\" r=\"4.5\" fill=\"#e63946\"/><text x=\"305.8\" y=\"192.4\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#e63946\">[100]</text><line x1=\"284\" y1=\"176\" x2=\"332.8\" y2=\"165.6\" stroke=\"#2fa15c\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"332.8\" cy=\"165.6\" r=\"4.5\" fill=\"#2fa15c\"/><text x=\"340.8\" y=\"169.6\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#2fa15c\">[010]</text><line x1=\"284\" y1=\"176\" x2=\"284\" y2=\"129.8\" stroke=\"#4a90e2\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"284\" cy=\"129.8\" r=\"4.5\" fill=\"#4a90e2\"/><text x=\"292\" y=\"133.8\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#4a90e2\">[001]</text><rect x=\"394\" y=\"10\" width=\"184\" height=\"310\" rx=\"8\" class=\"dg-frame\"/><text x=\"476\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">Step 2: &#934; about new RD</text><text x=\"476\" y=\"306\" class=\"dg-t\" text-anchor=\"middle\">tip the crystal over</text><line x1=\"476\" y1=\"176\" x2=\"449.3\" y2=\"196.8\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"440.3\" y=\"208.8\" class=\"dg-vl-mut\" text-anchor=\"middle\">RD</text><line x1=\"476\" y1=\"176\" x2=\"535.4\" y2=\"176\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"539.4\" y=\"167\" class=\"dg-vl-mut\" text-anchor=\"middle\">TD</text><line x1=\"476\" y1=\"176\" x2=\"476\" y2=\"116.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"476\" y=\"110.6\" class=\"dg-vl-mut\" text-anchor=\"middle\">ND</text><line x1=\"476\" y1=\"176\" x2=\"489.8\" y2=\"188.4\" stroke=\"#e63946\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"489.8\" cy=\"188.4\" r=\"4.5\" fill=\"#e63946\"/><text x=\"497.8\" y=\"192.4\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#e63946\">[100]</text><line x1=\"476\" y1=\"176\" x2=\"507.3\" y2=\"133.9\" stroke=\"#2fa15c\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"507.3\" cy=\"133.9\" r=\"4.5\" fill=\"#2fa15c\"/><text x=\"515.3\" y=\"137.9\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#2fa15c\">[010]</text><line x1=\"476\" y1=\"176\" x2=\"438.7\" y2=\"154.3\" stroke=\"#4a90e2\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"438.7\" cy=\"154.3\" r=\"4.5\" fill=\"#4a90e2\"/><text x=\"430.7\" y=\"158.3\" class=\"dg-t\" text-anchor=\"end\" style=\"fill:#4a90e2\">[001]</text><rect x=\"586\" y=\"10\" width=\"184\" height=\"310\" rx=\"8\" class=\"dg-frame\"/><text x=\"668\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">Step 3: &#966;&#8322; about new ND</text><text x=\"668\" y=\"306\" class=\"dg-t\" text-anchor=\"middle\">final orientation</text><line x1=\"668\" y1=\"176\" x2=\"641.3\" y2=\"196.8\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"632.3\" y=\"208.8\" class=\"dg-vl-mut\" text-anchor=\"middle\">RD</text><line x1=\"668\" y1=\"176\" x2=\"727.4\" y2=\"176\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"731.4\" y=\"167\" class=\"dg-vl-mut\" text-anchor=\"middle\">TD</text><line x1=\"668\" y1=\"176\" x2=\"668\" y2=\"116.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"668\" y=\"110.6\" class=\"dg-vl-mut\" text-anchor=\"middle\">ND</text><line x1=\"668\" y1=\"176\" x2=\"695.6\" y2=\"165.7\" stroke=\"#e63946\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"695.6\" cy=\"165.7\" r=\"4.5\" fill=\"#e63946\"/><text x=\"703.6\" y=\"169.7\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#e63946\">[100]</text><line x1=\"668\" y1=\"176\" x2=\"688.3\" y2=\"133.4\" stroke=\"#2fa15c\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"688.3\" cy=\"133.4\" r=\"4.5\" fill=\"#2fa15c\"/><text x=\"696.3\" y=\"137.4\" class=\"dg-t\" text-anchor=\"start\" style=\"fill:#2fa15c\">[010]</text><line x1=\"668\" y1=\"176\" x2=\"630.7\" y2=\"154.3\" stroke=\"#4a90e2\" stroke-width=\"3.4\" stroke-linecap=\"round\"/><circle cx=\"630.7\" cy=\"154.3\" r=\"4.5\" fill=\"#4a90e2\"/><text x=\"622.7\" y=\"158.3\" class=\"dg-t\" text-anchor=\"end\" style=\"fill:#4a90e2\">[001]</text></svg><div class=\"diagram-caption\">Example angles &#966;&#8321; = 40&#176;, &#934; = 50&#176;, &#966;&#8322; = 30&#176;. Grey dashed lines are the fixed sample axes. Red, green and blue are the crystal axes after each rotation.</div></div>"
        },
        {
          "type": "p",
          "text": "<strong>Which way round does it go?</strong> The matrix \\(g\\) below is the rotation that carries the sample axes onto the crystal axes. Its three <strong>columns</strong> are RD, TD and ND written in crystal coordinates. That is how you read a texture component off the angles: the third column is \"the crystal direction pointing along ND\" and the first is \"the crystal direction pointing along RD\".",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Under the hood: the orientation matrix (optional)",
          "html": "<p>Writing \\(c_1=\\cos\\varphi_1,\\ s_1=\\sin\\varphi_1\\), \\(C=\\cos\\Phi,\\ S=\\sin\\Phi\\), \\(c_2=\\cos\\varphi_2,\\ s_2=\\sin\\varphi_2\\):</p><p>$$g=\\begin{pmatrix}c_1c_2-s_1s_2C & s_1c_2+c_1s_2C & s_2S\\\\ -c_1s_2-s_1c_2C & -s_1s_2+c_1c_2C & c_2S\\\\ s_1S & -c_1S & C\\end{pmatrix}$$</p><p>The columns of \\(g\\) are \\(\\mathrm{RD}\\), \\(\\mathrm{TD}\\) and \\(\\mathrm{ND}\\) in crystal coordinates. <strong>Worked check, Brass \\((35^\\circ,45^\\circ,0^\\circ)\\):</strong> \\(c_1=0.819,\\ s_1=0.574,\\ C=S=0.707,\\ c_2=1,\\ s_2=0\\). The third column (ND) is \\((s_2S,\\ c_2S,\\ C)=(0,0.707,0.707)\\), which is the direction \\([011]\\), so a \\(\\{110\\}\\) plane lies in the sheet. The first column (RD) is \\((c_1,\\ -s_1C,\\ s_1S)=(0.819,\\ -0.406,\\ 0.406)\\), which is proportional to \\([2\\bar11]\\), a direction of the \\(\\langle112\\rangle\\) type. So Brass is \\(\\{110\\}\\langle112\\rangle\\), as the table says. You will not be asked to multiply this out; it is here so the table does not feel like magic.</p>"
        },
        {
          "type": "h3",
          "text": "Orientation space"
        },
        {
          "type": "p",
          "text": "Every possible orientation is one point in a 3D <strong>orientation space</strong> (also called Euler space) whose axes are \\(\\varphi_1,\\Phi,\\varphi_2\\). A texture is then a <em>cloud of points</em>: one point per grain, with dense regions where many grains share an orientation. This is the idea behind the ODF in the next section.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Many Euler triples describe the same physical orientation, because a cubic crystal looks identical after any of 24 symmetry rotations, and the sheet has 4 symmetric ways to be turned. For a cubic crystal in a rolled sheet this means all unique orientations fit in the range \\(0^\\circ\\) to \\(90^\\circ\\) for each angle, which is why ODF sections only run to 90°.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "The four rolling texture components"
        },
        {
          "type": "p",
          "text": "Rolled fcc metals develop textures built from a handful of named orientations. Each is a fixed point in Euler space and, in the \\(\\{hkl\\}\\langle uvw\\rangle\\) notation, a plane lying in the sheet and a direction along RD:",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Component</th><th>Miller indices</th><th>Euler angles (φ₁, Φ, φ₂)</th><th>Where the name comes from</th></tr></thead><tbody><tr><td>Cube</td><td>\\(\\{001\\}\\langle100\\rangle\\)</td><td>(0°, 0°, 0°)</td><td>The crystal cube sits square to the sheet. The textbook \"no turning\" case.</td></tr><tr><td>Goss</td><td>\\(\\{110\\}\\langle001\\rangle\\)</td><td>(0°, 45°, 0°)</td><td>Named after Norman Goss, who found it in iron-silicon steel; the texture of transformer steel.</td></tr><tr><td>Brass</td><td>\\(\\{110\\}\\langle\\bar112\\rangle\\)</td><td>(35°, 45°, 0°)</td><td>Found in rolled alpha-brass (copper-zinc).</td></tr><tr><td>Copper</td><td>\\(\\{112\\}\\langle111\\rangle\\)</td><td>(90°, 35°, 45°)</td><td>Found in rolled pure copper.</td></tr></tbody></table></div>"
        },
        {
          "type": "p",
          "text": "<strong>How to read \\(\\{110\\}\\langle\\bar112\\rangle\\):</strong> a \\(\\{110\\}\\)-type plane lies flat in the sheet (so a \\(\\langle110\\rangle\\)-type direction is ND), and a \\(\\langle\\bar112\\rangle\\)-type direction points along RD. The two are perpendicular, as they must be: \\([011]\\cdot[2\\bar11]=0\\).",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Check this one against your notes",
          "html": "<p>The lecture slide lists Copper as <strong>(90°, 45°, 45°)</strong>. The exact value of \\(\\Phi\\) for \\(\\{112\\}\\langle111\\rangle\\) is <strong>35.26°</strong>, the angle between \\((001)\\) and \\((112)\\). With \\(\\Phi=45^\\circ\\) the plane normal works out as \\((1,1,\\sqrt2)\\), which is not a \\(\\{112\\}\\) plane. This site uses 35°. Learn Copper as about \\((90^\\circ,35^\\circ,45^\\circ)\\) and confirm with your lecturer which value the exam expects.</p>"
        },
        {
          "type": "h2",
          "id": "w3-odf",
          "text": "ODFs and Fibre Textures"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>A topographic map, or a CT scan.</strong> Instead of plotting every grain as a dot in Euler space, count how many grains sit near each orientation and draw contour lines, like hills on a walking map: high ground is a strong texture component. The <strong>Orientation Distribution Function (ODF)</strong>, \\(f(g)\\), is that map. A pole figure is a 2D <em>shadow</em> of the 3D distribution, so a single one loses information, like a single X-ray photograph. Combining several pole figures lets software rebuild the full 3D ODF, the way a CT scanner combines many X-ray views.</div></div>"
        },
        {
          "type": "formulablock",
          "name": "Orientation distribution function",
          "eqs": [
            "\\frac{\\Delta V}{V}=f(g)\\,dg \\qquad g=\\{\\varphi_1,\\Phi,\\varphi_2\\}"
          ],
          "vars": [
            {
              "symbol": "f(g)",
              "desc": "density of grains having the orientation g"
            },
            {
              "symbol": "ΔV/V",
              "desc": "volume fraction of grains in a small region dg around g"
            }
          ],
          "note": "In words: the fraction of the material whose orientation is within a small window \\(dg\\) of \\(g\\) equals \\(f(g)\\) times the size of the window. A random texture has \\(f(g)=1\\) everywhere, so intensities are quoted in <strong>multiples of random</strong> (MRD): the lecture's contours run 0.5, 1, 2, 4, 8, 16. A value of 8 means eight times as many grains in that orientation as a random sample would have."
        },
        {
          "type": "h3",
          "text": "How to read an ODF plot"
        },
        {
          "type": "p",
          "text": "A 3D contour plot is hard to read, so ODFs are normally drawn as a stack of 2D <strong>sections</strong>, one square for each fixed value of \\(\\varphi_2\\) (every 5° on the slide). In each square, \\(\\varphi_1\\) runs along one edge and \\(\\Phi\\) down the other. Contour lines enclose the high-density regions. You find a component by looking at the section for its \\(\\varphi_2\\) and then at its \\((\\varphi_1,\\Phi)\\) position: Cube is the corner of the \\(\\varphi_2=0\\) section, and for bcc metals the \\(\\varphi_2=45^\\circ\\) section contains most of the interesting action.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Fibre textures"
        },
        {
          "type": "p",
          "text": "A <strong>fibre</strong> is a whole <em>line</em> of orientations in Euler space that share one thing: a particular crystal direction is parallel to a particular sample direction, while the crystal is free to spin about that direction. Like wires in a cable: each wire has a different spin, but all point the same way. Fibres matter in bcc metals (iron, steel) because rolled bcc sheets develop most of their texture along a few of them. They show up as lines on the \\(\\varphi_2=45^\\circ\\) section.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Fibre</th><th>Fibre axis</th><th>Why you should care</th></tr></thead><tbody><tr><td>α-fibre</td><td>\\(\\langle110\\rangle\\parallel\\) RD</td><td>The main bcc rolling fibre. Strong in cold-rolled steel.</td></tr><tr><td>γ-fibre</td><td>\\(\\langle111\\rangle\\parallel\\) ND</td><td>A strong γ-fibre means a sheet that resists thinning and draws deep without tearing. This is the texture steelmakers want for car body panels.</td></tr><tr><td>η-fibre</td><td>\\(\\langle001\\rangle\\parallel\\) RD</td><td>Runs from Cube to Goss. Linked to magnetic properties of electrical steel.</td></tr><tr><td>ε-fibre</td><td>\\(\\langle110\\rangle\\parallel\\) TD</td><td>A fibre linking components in the (\u000barphi_1=90^circ) region.</td></tr></tbody></table></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 372\" role=\"img\" aria-label=\"The phi2 equals 45 degree section of Euler space showing the alpha, gamma and epsilon fibres of bcc metals\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"fb-mut\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"dg-ah-mut\"/></marker></defs><rect x=\"130\" y=\"54\" width=\"360\" height=\"240\" fill=\"#101016\" stroke=\"#6a6a78\" stroke-width=\"1.6\"/><line x1=\"190\" y1=\"54\" x2=\"190\" y2=\"294\" stroke=\"#22222a\"/><line x1=\"130\" y1=\"94\" x2=\"490\" y2=\"94\" stroke=\"#22222a\"/><line x1=\"250\" y1=\"54\" x2=\"250\" y2=\"294\" stroke=\"#22222a\"/><line x1=\"130\" y1=\"134\" x2=\"490\" y2=\"134\" stroke=\"#22222a\"/><line x1=\"310\" y1=\"54\" x2=\"310\" y2=\"294\" stroke=\"#22222a\"/><line x1=\"130\" y1=\"174\" x2=\"490\" y2=\"174\" stroke=\"#22222a\"/><line x1=\"370\" y1=\"54\" x2=\"370\" y2=\"294\" stroke=\"#22222a\"/><line x1=\"130\" y1=\"214\" x2=\"490\" y2=\"214\" stroke=\"#22222a\"/><line x1=\"430\" y1=\"54\" x2=\"430\" y2=\"294\" stroke=\"#22222a\"/><line x1=\"130\" y1=\"254\" x2=\"490\" y2=\"254\" stroke=\"#22222a\"/><text x=\"310\" y=\"34\" class=\"dg-tb\" text-anchor=\"middle\">&#966;&#8321; (0 to 90&#176;)</text><text x=\"116\" y=\"174\" class=\"dg-tb\" text-anchor=\"end\">&#934;</text><text x=\"116\" y=\"60\" class=\"dg-t\" text-anchor=\"end\">0&#176;</text><text x=\"116\" y=\"298\" class=\"dg-t\" text-anchor=\"end\">90&#176;</text><text x=\"130\" y=\"48\" class=\"dg-t\" text-anchor=\"middle\">0&#176;</text><text x=\"490\" y=\"48\" class=\"dg-t\" text-anchor=\"middle\">90&#176;</text><line x1=\"130\" y1=\"54\" x2=\"130\" y2=\"294\" stroke=\"#e63946\" stroke-width=\"5\"/><line x1=\"130\" y1=\"200\" x2=\"490\" y2=\"200\" stroke=\"#f4a261\" stroke-width=\"5\"/><line x1=\"490\" y1=\"54\" x2=\"490\" y2=\"294\" stroke=\"#8855f5\" stroke-width=\"5\"/><circle cx=\"130\" cy=\"54\" r=\"6.5\" fill=\"#f0f0f5\" stroke=\"#0c0c10\" stroke-width=\"1.4\"/><circle cx=\"130\" cy=\"294\" r=\"6.5\" fill=\"#f0f0f5\" stroke=\"#0c0c10\" stroke-width=\"1.4\"/><circle cx=\"490\" cy=\"54\" r=\"6.5\" fill=\"#f0f0f5\" stroke=\"#0c0c10\" stroke-width=\"1.4\"/><circle cx=\"490\" cy=\"294\" r=\"6.5\" fill=\"#4a90e2\" stroke=\"#0c0c10\" stroke-width=\"1.4\"/><text x=\"506\" y=\"292\" class=\"dg-tb-blue\" text-anchor=\"start\">Goss</text><text x=\"506\" y=\"309\" class=\"dg-t\" text-anchor=\"start\">(110)[001]</text><text x=\"506\" y=\"62\" class=\"dg-t\" text-anchor=\"start\">(001)[&#8722;1&#8722;10]</text><text x=\"138\" y=\"48\" class=\"dg-t\"></text><line x1=\"560\" y1=\"96\" x2=\"594\" y2=\"96\" stroke=\"#e63946\" stroke-width=\"5\"/><text x=\"604\" y=\"94\" class=\"dg-tb-red\" text-anchor=\"start\">&#945;-fibre</text><text x=\"604\" y=\"112\" class=\"dg-t\" text-anchor=\"start\">&lt;110&gt; || RD</text><line x1=\"560\" y1=\"150\" x2=\"594\" y2=\"150\" stroke=\"#f4a261\" stroke-width=\"5\"/><text x=\"604\" y=\"148\" class=\"dg-tb-amb\" text-anchor=\"start\">&#947;-fibre</text><text x=\"604\" y=\"166\" class=\"dg-t\" text-anchor=\"start\">&lt;111&gt; || ND</text><line x1=\"560\" y1=\"204\" x2=\"594\" y2=\"204\" stroke=\"#8855f5\" stroke-width=\"5\"/><text x=\"604\" y=\"202\" class=\"dg-tb\" text-anchor=\"start\">&#949;-fibre</text><text x=\"604\" y=\"220\" class=\"dg-t\" text-anchor=\"start\">&lt;110&gt; || TD</text><text x=\"130\" y=\"338\" class=\"dg-t\" text-anchor=\"start\">The fibres sit on this section of Euler space.</text><text x=\"130\" y=\"358\" class=\"dg-t\" text-anchor=\"start\">The &#951;-fibre (&lt;001&gt; || RD) lies in a different section.</text><text x=\"136\" y=\"70\" class=\"dg-t\" text-anchor=\"start\">(001)[1&#8722;10]</text><text x=\"136\" y=\"286\" class=\"dg-t\" text-anchor=\"start\">(110)[1&#8722;10]</text></svg><div class=\"diagram-caption\">Bunge Euler angles, &#966;&#8322; = 45&#176; section. A fibre is a line of orientations that share one crystal direction with one sample direction.</div></div>"
        },
        {
          "type": "p",
          "text": "Goss appears at \\((110)[001]\\) in the bottom right corner of this section. In the earlier table it is \\((0^\\circ,45^\\circ,0^\\circ)\\): the same orientation, a different Euler triple, because cubic symmetry gives each orientation several equivalent descriptions. The η-fibre runs from Cube to Goss and does not lie on this section.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Other deformation routes make fibres too: <strong>wire drawing</strong> is uniaxial, so it makes a fibre texture. Drawn fcc wire usually has \\(\\langle111\\rangle\\) and \\(\\langle100\\rangle\\) parallel to the wire axis, and drawn bcc wire has \\(\\langle110\\rangle\\) along it.",
          "class": ""
        },
        {
          "type": "h2",
          "id": "w3-sim",
          "text": "Interactive: Euler Angles to Pole Figure"
        },
        {
          "type": "raw",
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive · Week 3</span><iframe data-src=\"widgets/pole-figure.html\" data-sim=\"pole-figure.html\" title=\"Euler angles and pole figures\" style=\"height:900px\"></iframe><div class=\"sim-credit\">Built for this site to illustrate the lecture material (not one of the lecturer's animations).</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>Three sliders set the Bunge Euler angles. The left plot is the pole figure of the chosen plane family. The right plot shows the same crystal (a cube, or a hexagonal prism in hexagonal mode) sitting in the sheet, with its axes coloured. The text underneath names the orientation.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li><strong>Cubic:</strong> press <strong>Cube</strong> with {100} selected to get the pattern from the diagram above, then Goss, Brass and Copper and watch the {111} poles move.</li><li>Drag only φ<sub>1</sub>: the whole pole pattern spins about the centre, because φ<sub>1</sub> is a turn about ND.</li><li>Drag only Φ: the crystal tips about RD and the poles slide up and down the page.</li><li><strong>Hexagonal:</strong> choose Hexagonal, keep {0001} basal and press <strong>Typical rolled Ti</strong>. The one basal dot is the c-axis, tilted about 30° from ND towards TD. Switch to {10-10} and see six dots on the rim.</li></ul></div><div><h5>Why it matters</h5><p>An exam question may give you Euler angles and ask for the ideal orientation, or give a pole figure and ask what it shows. Seeing the three angles act one at a time makes both much easier, and the hexagonal mode shows what a \"basal pole figure\" is physically.</p></div></div>"
        },
        {
          "type": "h2",
          "id": "w3-measure",
          "text": "How Textures Are Measured"
        },
        {
          "type": "p",
          "text": "The pole figures and ODFs in the lecture come from two main techniques. You are not examined on the equipment, but knowing what the data physically is makes the figures much less abstract.",
          "class": ""
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "X-ray diffraction (XRD): the bulk average",
              "color": "#4a90e2",
              "text": "Fire an X-ray beam at the sample. Planes of one family \\(\\{hkl\\}\\) only reflect (diffract) the beam when they sit at the correct angle (Bragg's law). Fix the detector at the angle for the chosen \\(\\{hkl\\}\\), then tilt and rotate the sample through every direction. The reflected intensity at each tilt and rotation counts how many grains have that plane normal along the diffraction direction. Plot it against tilt and rotation: that is the pole figure. It averages over a large area (millimetres), so it gives the <strong>overall texture</strong> but no map of where each orientation lives."
            },
            {
              "title": "EBSD: grain by grain",
              "color": "#2fa15c",
              "text": "<strong>Electron backscatter diffraction</strong> is done inside a scanning electron microscope. A beam hits a point on the (tilted) sample, and diffracted electrons make a pattern of bands (a Kikuchi pattern) that software indexes to give that point's full orientation (all three Euler angles). Scan the beam across the surface and you get an orientation map. Pole figures can then be plotted from the map."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Reading an EBSD map"
        },
        {
          "type": "list",
          "items": [
            "<strong>IPF map (inverse pole figure map).</strong> Each pixel is coloured according to which crystal direction points along a chosen sample direction (often ND). For cubic metals the usual key is red for \\([001]\\), green for \\([101]\\) and blue for \\([111]\\). For hcp metals red usually means the c-axis \\([0001]\\), but <strong>always read the colour key printed on the map</strong>, because it is a convention. A patch of uniform colour is one orientation; a field of one colour means a strong texture.",
            "<strong>Misorientation.</strong> The smallest rotation that would turn one grain's lattice onto its neighbour's. Boundaries are drawn as lines, thin for <strong>low-angle</strong> boundaries (typically below about 15°) and thick for <strong>high-angle</strong> ones. Boundaries are often described as an angle about an axis, so \"22 to 35° about \\(\\langle0001\\rangle\\)\" in the Zr slides means the neighbouring lattice is the same orientation twisted by 22 to 35° around the c-axis.",
            "<strong>Why EBSD and XRD complement each other.</strong> XRD tells you the average texture; EBSD tells you which grains, where, and which boundaries sit between them. The Zr rolling study in the lecture uses EBSD maps to see twins and recrystallised grains, and XRD-style pole figures for the overall texture."
          ]
        },
        {
          "type": "h2",
          "id": "w3-roll",
          "text": "Texture Development During Rolling (Zr and Ti)"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>Rolling out pastry, but the dough is full of tiny stiff plates.</strong> As the dough thins, each plate is shoved and turned. Plates that happen to be well placed keep sliding and turning gradually. Plates that are badly placed jam, then snap or flip suddenly into a new position. What is left is a population of plates mostly pointing one way. Rolling a metal sheet works like this at the scale of crystals: slip is the gradual turning, twinning is the sudden flip, and annealing afterwards can melt the pattern away and replace it.</div></div>"
        },
        {
          "type": "h3",
          "text": "Example 1: hot rolling of Zr"
        },
        {
          "type": "h3",
          "text": "Where it starts: β-quenched material"
        },
        {
          "type": "p",
          "text": "Zirconium (like titanium) has two crystal structures. At high temperature it is <strong>β (bcc)</strong>; below about 865 °C (882 °C for titanium) it changes to <strong>α (hcp)</strong>. <strong>β-quenching</strong> means heating into the β range and then cooling fast. As it cools through the transformation, the α phase forms as thin parallel plates inside each old β grain, in several different orientations (a given β grain can make up to 12 α orientations). The result is a <strong>lamellar</strong> (layered) microstructure and a texture that is close to random, because so many orientations form. This is the clean starting point for studying what rolling does.",
          "class": ""
        },
        {
          "type": "p",
          "text": "The lecture follows this material through <strong>10, 20, 40 and 60% reduction</strong> in thickness (true strains of about 0.11, 0.22, 0.51 and 0.92 in magnitude), watching the \\(\\{0002\\}\\) pole figure, which shows where the c-axes point.",
          "class": ""
        },
        {
          "type": "raw",
          "html": "<div class=\"mini-wrap\"><table class=\"mini-table\"><thead><tr><th>Reduction</th><th>Microstructure on the slide</th><th>What the slide asks about the c-axes</th><th>What that means</th></tr></thead><tbody><tr><td>β-quenched</td><td>Lamellar plates</td><td>Random texture</td><td>No preferred direction yet</td></tr><tr><td>10%</td><td>Lamellae break up and distort</td><td>c-axes moving from RD towards the normal? 85° twin?</td><td>Rolling stretches the sheet along RD. A grain whose c-axis lies along RD is being stretched <em>along c</em>, exactly the condition for the 85° tensile twin. The twin would swing that c-axis most of the way to ND. The slide asks whether that is what happens.</td></tr><tr><td>20%</td><td>Recrystallisation, early or delayed</td><td>c-axes moving from TD towards the normal? Slip or twin?</td><td>There is no strain along TD in plane-strain rolling, so a c-axis along TD is not being stretched along c, and twinning is not obviously favoured. The lecturer's answer, below, is that slip takes over.</td></tr><tr><td>40% and 60%</td><td>Bimodal grain structure; selective grain growth?</td><td>Typical cold-rolling texture</td><td>Basal poles gather near ND and spread towards TD (the classic hcp rolling texture). Large and small grains coexist.</td></tr></tbody></table></div>"
        },
        {
          "type": "p",
          "text": "The question marks are the lecturer's own: the point of the example is to work out which mechanism does what. The <strong>main findings</strong>, from experiments combined with CPFEM (crystal plasticity finite element) modelling, which computes deformation grain by grain using slip and twinning rules:",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>Twinning plays a major role</strong> in the early stages.",
            "<strong>Recrystallisation determines the final texture.</strong>"
          ]
        },
        {
          "type": "h3",
          "text": "Detail: 10% and 20% reduction"
        },
        {
          "type": "cardgrid",
          "cards": [
            {
              "title": "10% rolling",
              "color": "#8855f5",
              "text": "<strong>The lamellae break up by 85° \\(\\langle11\\bar20\\rangle\\) tensile twinning.</strong> Each of the three twin variants the slide labels modes i, ii and iii can operate. Mode i is strongly active; modes ii and iii are poorly active at 10%. Also, <strong>discontinuous recrystallisation</strong> (new grains with boundaries of 22 to 35° about \\(\\langle0001\\rangle\\)) is already starting but is less common in the TD component."
            },
            {
              "title": "20% rolling",
              "color": "#0ea5c6",
              "text": "Grains are visibly strained. There is <strong>selective generation of 22 to 35° \\(\\langle0001\\rangle\\) boundaries</strong>, <strong>less twin activity and more slip activity</strong> than at 10%, and new orientations appear (violet and yellow on the slide's colour map, along a line running from ND towards RD)."
            }
          ]
        },
        {
          "type": "conceptbox",
          "variant": "",
          "title": "Plain-language glossary for this example",
          "html": "<p><strong>Recrystallisation:</strong> a deformed metal is full of dislocations, which store energy. When heated, small new <em>strain-free</em> grains appear and grow at the expense of the deformed ones, because the strain-free grains have lower energy. It wipes out much of the deformed structure and, importantly, the new grains do not get random orientations, so recrystallisation sets a texture of its own.</p><p><strong>Discontinuous recrystallisation:</strong> the process of nucleating new grains that then grow into the deformed matrix (a sudden change in grain structure), as opposed to a gradual rearrangement of the existing grains.</p><p><strong>Bimodal:</strong> two peaks in the grain size distribution (many small grains and many large ones, but few in between).</p>"
        },
        {
          "type": "h3",
          "text": "Example 2: cold rolling of α-Ti"
        },
        {
          "type": "p",
          "text": "The same story in titanium. The \\(\\{0002\\}\\) pole figures run from β-quenched through 10, 20, 40, 60 and 80% reduction. Early on, <strong>twinning</strong> operates, through three twin modes of rotation 85°, 65° and 35°. After that the slide marks the rest of the range as <strong>slip-dominant deformation</strong>. As reduction increases the basal poles gather towards the sheet normal and spread along TD, which is the <em>typical cold-rolling texture</em> of hcp titanium: the c-axes point mostly through the thickness, but tilted by roughly 20 to 40° towards the transverse direction.",
          "class": ""
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "Why the c-axes end up near ND",
          "html": "<p>Rolling squashes the sheet along ND. A grain whose c-axis lies along ND is being <em>compressed along c</em>, which hcp crystals resist, and \\(\\langle a\\rangle\\) slip cannot shorten c. Grains with c-axes in the sheet plane are being pulled along c by the RD stretch, so they twin and swing their c-axes towards ND. Slip then rotates c-axes further towards ND over time. The end state is c-axes clustered near ND: the deformation has recruited the grains into the orientation that suits the strain.</p>"
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "The big picture for rolling",
          "html": "<p>Early deformation: twinning reorients regions by large angles, and slip rotates them gradually. Later deformation: slip dominates and the texture sharpens. If the sheet is then annealed (heated), recrystallisation picks new grains and sets the final texture. This is why the Zr and Ti examples are both used to make the same point: texture is the outcome of competing micro-mechanisms, and the finished sheet's texture is a record of which ones won.</p>"
        },
        {
          "type": "h2",
          "id": "w3-load",
          "text": "Texture Development During Loading (Ti Alloys)"
        },
        {
          "type": "p",
          "text": "Texture does not only appear during manufacture. A part that is <strong>loaded in service</strong> can change its texture too, and uniaxial loading (the tensors earlier) is the simplest case. Here the interest is in titanium alloys, which are used in jet engines, aircraft and implants.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Deformation twinning in α+β Ti alloys"
        },
        {
          "type": "p",
          "text": "<strong>What is an α+β alloy?</strong> Titanium alloys contain two phases. Aluminium stabilises the hcp α phase and vanadium stabilises the bcc β phase. Ti-6Al-4V (6 wt% Al, 4 wt% V) is the most common titanium alloy in the world and is mostly α with some β.",
          "class": ""
        },
        {
          "type": "p",
          "text": "The slide shows a Ti-6Al-4V cylinder compressed to 4%, 6% and 14% strain, with \\((0002)\\) pole figures at each stage (and one at 0% for reference). The mechanism it highlights is the 85° \\(\\langle11\\bar20\\rangle\\) twin. How to read the sequence:",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>0% (starting texture):</strong> a strong central peak (many c-axes along the centre of the figure) with peaks at the TD sides. A red arrow under it marks the loading direction, so check it on your slide to see how the load sits relative to the peaks.",
            "<strong>4%, then 6%:</strong> the central peak weakens and the figure flattens as strain increases. Twinning moves whole regions of crystal by about 85°, so intensity disappears from where it was and reappears about 85° away. Early on this scatters the original peaks.",
            "<strong>14%:</strong> the centre peak is back and the TD-side peaks are strong. The texture has settled into a new arrangement that is not the starting one."
          ]
        },
        {
          "type": "p",
          "text": "The take-home message is that the pole figure at 14% looks very different from the one at 0%, even though the part only shortened by 14%. Twinning can change texture drastically at moderate strains because each twin reorients a whole region at once, not a few degrees at a time.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Example: twin evolution in α-Ti under compression"
        },
        {
          "type": "p",
          "text": "The variables that control twinning are <strong>grain size, temperature, plastic strain, strain rate and loading direction</strong>. This example fixes the others and varies the plastic strain at a strain rate of \\(10^{-3}\\ \\mathrm{s}^{-1}\\) (slow: 0.1% strain per second), taking pole figures at 4%, 9% and 15%. The slide shows quarter pole figures with axes TD, ND and RD, from a cylinder compressed from the sides.",
          "class": ""
        },
        {
          "type": "p",
          "text": "Major findings:",
          "class": ""
        },
        {
          "type": "list",
          "items": [
            "<strong>Twinning is a dominant deformation mode in α-Ti</strong> and is responsible for drastic texture change at moderate strain.",
            "<strong>Higher plastic strain increases the twin fraction.</strong> More twinned volume means more c-axes have been swung by 85°, so the texture changes sharply as strain accumulates."
          ]
        },
        {
          "type": "h2",
          "id": "w3-hardsoft",
          "text": "Hard and Soft Orientations"
        },
        {
          "type": "raw",
          "html": "<div class=\"analogy\"><span class=\"analogy-icon\">💡</span><div class=\"analogy-text\"><strong>A hexagonal pencil.</strong> Squeeze a hexagonal pencil end to end and it resists strongly. Squeeze it across the flats and it yields far sooner. Same pencil, different loading direction. For a crystal, the pencil's length is the c-axis, and the crystal's easy slip systems are in the wrong place to help when you squeeze along it.</div></div>"
        },
        {
          "type": "raw",
          "html": "<div class=\"diagram-wrap\"><svg class=\"dg\" viewBox=\"0 0 780 376\" role=\"img\" aria-label=\"A hexagonal crystal loaded along its c-axis (hard) and across it (soft)\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"hs-red\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#e63946\"/></marker><marker id=\"hs-blue\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#4a90e2\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"370\" height=\"356\" rx=\"8\" class=\"dg-frame\"/><text x=\"195\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">A: load parallel to c</text><line x1=\"247\" y1=\"112\" x2=\"247\" y2=\"182\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"0\"/><line x1=\"221\" y1=\"127.6\" x2=\"221\" y2=\"197.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"0\"/><line x1=\"169\" y1=\"127.6\" x2=\"169\" y2=\"197.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"0\"/><line x1=\"143\" y1=\"112\" x2=\"143\" y2=\"182\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"3 3\"/><line x1=\"169\" y1=\"96.4\" x2=\"169\" y2=\"166.4\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"3 3\"/><line x1=\"221\" y1=\"96.4\" x2=\"221\" y2=\"166.4\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"3 3\"/><polygon points=\"247,182 221,197.6 169,197.6 143,182 169,166.4 221,166.4\" fill=\"rgba(14,165,198,.10)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><polygon points=\"247,112 221,127.6 169,127.6 143,112 169,96.4 221,96.4\" fill=\"rgba(14,165,198,.22)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><line x1=\"195\" y1=\"182\" x2=\"195\" y2=\"108\" stroke=\"#4a90e2\" stroke-width=\"2.6\" marker-end=\"url(#hs-blue)\"/><text x=\"207\" y=\"142\" class=\"dg-vl-acc\" text-anchor=\"start\">c</text><rect x=\"125\" y=\"80\" width=\"140\" height=\"8\" rx=\"2\" fill=\"#3a3a46\" stroke=\"#8c8c9c\"/><rect x=\"125\" y=\"206\" width=\"140\" height=\"8\" rx=\"2\" fill=\"#3a3a46\" stroke=\"#8c8c9c\"/><line x1=\"155\" y1=\"46\" x2=\"155\" y2=\"76\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><line x1=\"155\" y1=\"258\" x2=\"155\" y2=\"218\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><line x1=\"235\" y1=\"46\" x2=\"235\" y2=\"76\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><line x1=\"235\" y1=\"258\" x2=\"235\" y2=\"218\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><text x=\"195\" y=\"290\" class=\"dg-tb-red\" text-anchor=\"middle\">HARD ORIENTATION</text><text x=\"195\" y=\"312\" class=\"dg-t\" text-anchor=\"middle\">Basal slip: zero shear on the slip plane</text><text x=\"195\" y=\"332\" class=\"dg-t\" text-anchor=\"middle\">Prismatic slip: zero shear in the slip direction</text><text x=\"195\" y=\"352\" class=\"dg-t\" text-anchor=\"middle\">Only &lt;c+a&gt; slip is left, and it needs a high stress</text><rect x=\"400\" y=\"10\" width=\"370\" height=\"356\" rx=\"8\" class=\"dg-frame\"/><text x=\"585\" y=\"32\" class=\"dg-tb\" text-anchor=\"middle\">B: load perpendicular to c</text><line x1=\"637\" y1=\"112\" x2=\"637\" y2=\"182\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"0\"/><line x1=\"611\" y1=\"127.6\" x2=\"611\" y2=\"197.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"0\"/><line x1=\"559\" y1=\"127.6\" x2=\"559\" y2=\"197.6\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"0\"/><line x1=\"533\" y1=\"112\" x2=\"533\" y2=\"182\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"3 3\"/><line x1=\"559\" y1=\"96.4\" x2=\"559\" y2=\"166.4\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"3 3\"/><line x1=\"611\" y1=\"96.4\" x2=\"611\" y2=\"166.4\" stroke=\"#6a6a78\" stroke-width=\"1.3\" stroke-dasharray=\"3 3\"/><polygon points=\"637,182 611,197.6 559,197.6 533,182 559,166.4 611,166.4\" fill=\"rgba(14,165,198,.10)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><polygon points=\"637,112 611,127.6 559,127.6 533,112 559,96.4 611,96.4\" fill=\"rgba(14,165,198,.22)\" stroke=\"#c9c9d6\" stroke-width=\"1.6\"/><line x1=\"585\" y1=\"182\" x2=\"585\" y2=\"108\" stroke=\"#4a90e2\" stroke-width=\"2.6\" marker-end=\"url(#hs-blue)\"/><text x=\"597\" y=\"142\" class=\"dg-vl-acc\" text-anchor=\"start\">c</text><rect x=\"513\" y=\"90\" width=\"8\" height=\"114\" rx=\"2\" fill=\"#3a3a46\" stroke=\"#8c8c9c\"/><rect x=\"649\" y=\"90\" width=\"8\" height=\"114\" rx=\"2\" fill=\"#3a3a46\" stroke=\"#8c8c9c\"/><line x1=\"425\" y1=\"108\" x2=\"509\" y2=\"108\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><line x1=\"745\" y1=\"108\" x2=\"661\" y2=\"108\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><line x1=\"425\" y1=\"186\" x2=\"509\" y2=\"186\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><line x1=\"745\" y1=\"186\" x2=\"661\" y2=\"186\" stroke=\"#e63946\" stroke-width=\"4\" marker-end=\"url(#hs-red)\"/><text x=\"585\" y=\"290\" class=\"dg-tb-acc\" text-anchor=\"middle\">SOFT ORIENTATION</text><text x=\"585\" y=\"312\" class=\"dg-t\" text-anchor=\"middle\">Basal slip: well placed to shear</text><text x=\"585\" y=\"332\" class=\"dg-t\" text-anchor=\"middle\">Prismatic slip: well placed to shear</text><text x=\"585\" y=\"352\" class=\"dg-t\" text-anchor=\"middle\">Yields at a low stress</text></svg><div class=\"diagram-caption\">Red arrows push flat plates onto the crystal (a compressive load). The blue arrow is the hexagonal c-axis. Same crystal, very different response.</div></div>"
        },
        {
          "type": "p",
          "text": "The lecture compares two loading directions on the same hcp crystal. <strong>A:</strong> load along the c-axis, a <strong>hard orientation</strong>. <strong>B:</strong> load perpendicular to c, a <strong>soft orientation</strong>. The easy slip modes of hcp metals, basal \\(\\langle11\\bar20\\rangle\\{0001\\}\\) and prismatic \\(\\langle11\\bar20\\rangle\\{10\\bar10\\}\\), are well placed to be activated in B and not in A.",
          "class": ""
        },
        {
          "type": "h3",
          "text": "Why: the Schmid factor"
        },
        {
          "type": "p",
          "text": "Slip is driven by <strong>shear stress on the slip plane in the slip direction</strong>, not by the applied stress directly. A load that does not push the plane sideways does nothing, however large. The conversion factor is the Schmid factor.",
          "class": ""
        },
        {
          "type": "formulablock",
          "name": "Schmid factor",
          "eqs": [
            "\\tau = \\sigma\\cos\\phi\\cos\\lambda"
          ],
          "vars": [
            {
              "symbol": "τ",
              "desc": "resolved shear stress on the slip system"
            },
            {
              "symbol": "σ",
              "desc": "applied uniaxial stress"
            },
            {
              "symbol": "φ",
              "desc": "angle between the load axis and the slip-plane normal"
            },
            {
              "symbol": "λ",
              "desc": "angle between the load axis and the slip direction"
            },
            {
              "symbol": "cosφ cosλ",
              "desc": "the Schmid factor, at most 0.5"
            }
          ],
          "note": "Slip starts when \\(\\tau\\) reaches the <strong>critical resolved shear stress</strong> (CRSS) of the system, a material constant. A small Schmid factor means a high applied stress is needed: a <em>hard</em> orientation. The maximum, 0.5, occurs when both angles are 45°. The <strong>yield stress</strong> of a grain on a given system is then \\(\\sigma_y=\\tau_{\\text{CRSS}}/(\\cos\\phi\\cos\\lambda)\\)."
        },
        {
          "type": "example",
          "label": "Worked example: hard or soft?",
          "q": "An hcp crystal is loaded along its c-axis. Find the Schmid factor for basal \\(\\langle11\\bar20\\rangle\\{0001\\}\\) slip. Then repeat for a load at 45° to both the slip-plane normal and the slip direction, with \\(\\sigma=20\\) MPa.",
          "steps": [
            "Load along c: the slip-plane normal (c) is along the load, so \\(\\phi=0^\\circ\\) and \\(\\cos\\phi=1\\). The slip direction \\(\\langle11\\bar20\\rangle\\) lies in the basal plane, perpendicular to c, so \\(\\lambda=90^\\circ\\) and \\(\\cos\\lambda=0\\)",
            "Schmid factor \\(=1\\times0=0\\), so \\(\\tau=0\\): basal slip cannot start, which is the hard orientation",
            "At 45° to both: \\(\\cos45^\\circ\\cos45^\\circ=0.5\\), so \\(\\tau=0.5\\times20=10\\) MPa"
          ],
          "answer": "Along c: <strong>0</strong> (hard). At 45° and 45°: <strong>10 MPa</strong>, the largest the Schmid factor can be."
        },
        {
          "type": "h3",
          "text": "Why hard and soft matter for texture and properties"
        },
        {
          "type": "list",
          "items": [
            "<strong>Strength.</strong> A plate with c-axes mostly through the thickness is hard to thin further by squashing (load along c), but yields more readily when pulled in its plane. So the yield stress of textured Ti or Zr sheet depends on direction.",
            "<strong>Stiffness.</strong> The direction that is hard for slip (along c) is also the stiff direction in titanium, which is the 40% modulus difference at the top of this page.",
            "<strong>Twinning takes over.</strong> A grain in a hard orientation for slip can still change shape by twinning, which is how the compression texture changes in the Ti-6Al-4V and α-Ti examples.",
            "<strong>Fatigue (extra, hedged).</strong> In titanium alloys used for jet-engine discs, a hard grain next to a soft grain can concentrate stress at their boundary. This hard-soft grain pairing is a suspected contributor to a failure mode called cold dwell fatigue. It is an active research area, so treat it as motivation rather than settled fact."
          ]
        },
        {
          "type": "conceptbox",
          "variant": "note",
          "title": "One more thing to check against your slides",
          "html": "<p>The lecture's sketch of orientation A includes a slip icon. Slip along an \\(\\langle a\\rangle\\) direction, which is in the basal plane, has zero resolved shear under a c-axis load (as the worked example just showed), so the mode that actually operates in orientation A is \\(\\langle c+a\\rangle\\) slip or twinning. Check your own slide's label.</p>"
        },
        {
          "type": "h2",
          "id": "w3-practice",
          "text": "Test Yourself"
        },
        {
          "type": "p",
          "text": "Try each question on paper first, then reveal the answer.",
          "class": ""
        },
        {
          "type": "example",
          "label": "Q1",
          "q": "Write out every direction in the cubic family \\(\\langle100\\rangle\\), and say how many distinct planes are in \\(\\{111\\}\\).",
          "steps": [
            "\\(\\langle100\\rangle\\) means a direction along any cube axis, in either sense: \\([100],[\\bar100],[010],[0\\bar10],[001],[00\\bar1]\\)",
            "\\(\\{111\\}\\) planes have normals \\((111),(11\\bar1),(1\\bar11),(\\bar111)\\) and their negatives, so 4 distinct planes (8 normals)"
          ],
          "answer": "<strong>6 directions; 4 distinct \\(\\{111\\}\\) planes.</strong>"
        },
        {
          "type": "example",
          "label": "Q2",
          "q": "Which of these are valid hexagonal plane symbols: \\((11\\bar20)\\), \\((1011)\\), \\((10\\bar10)\\)? Fix any that are not valid.",
          "steps": [
            "Rule: \\(i=-(h+k)\\), so \\(h+k+i\\) must be 0",
            "\\((11\\bar20)\\): \\(1+1-2=0\\), valid",
            "\\((1011)\\): \\(1+0+1=2\\neq0\\), invalid. The correct form is \\((10\\bar11)\\), since \\(i=-(1+0)=-1\\)",
            "\\((10\\bar10)\\): \\(1+0-1=0\\), valid"
          ],
          "answer": "<strong>\\((11\\bar20)\\) and \\((10\\bar10)\\) are valid; \\((1011)\\) should be \\((10\\bar11)\\).</strong>"
        },
        {
          "type": "example",
          "label": "Q3",
          "q": "Classify \\((0001)\\), \\((10\\bar10)\\) and \\((10\\bar11)\\) as basal, prismatic or pyramidal, and say how each sits relative to the c-axis.",
          "steps": [
            "\\(l=1\\) with \\(h=k=0\\): the plane normal is c, so it is the flat top face, the basal plane, perpendicular to c",
            "\\(l=0\\): a vertical side face, so it is a prismatic plane, parallel to c",
            "Both \\(h\\) or \\(k\\) and \\(l\\) non-zero: tilted and cutting the c-axis, so pyramidal"
          ],
          "answer": "<strong>Basal; prismatic; pyramidal.</strong>"
        },
        {
          "type": "example",
          "label": "Q4",
          "q": "In your own words, explain why a zirconium fuel tube with its basal poles mostly through the tube wall is less prone to hydride-induced failure than one with a random texture.",
          "steps": [
            "Hydride plates grow close to the basal plane of the grain around them: \\((0001)_{Zr}\\parallel(111)_{\\text{hydride}}\\)",
            "If basal planes mostly lie in the tube wall, plates lie in the wall too, not across it",
            "Plates across the wall give a brittle crack a short path through the wall, so a random texture, which puts more plates across it, is more dangerous"
          ],
          "answer": "<strong>Texture steers the hydride plates.</strong> A suitable texture keeps them lying flat in the wall instead of across it. (Stress and hydrogen level also matter, but texture is the lever the lecture highlights.)"
        },
        {
          "type": "example",
          "label": "Q5",
          "q": "Count the slip systems in fcc \\(\\{111\\}\\langle1\\bar10\\rangle\\). Then explain why this makes copper far more ductile than zirconium.",
          "steps": [
            "4 distinct \\(\\{111\\}\\) planes, 3 close-packed directions in each: \\(4\\times3=12\\) systems",
            "A general shape change needs 5 independent systems, and fcc has plenty",
            "In hcp Zr, \\(\\langle a\\rangle\\) slip (3 basal, 3 prismatic, 6 pyramidal) gives only 4 independent systems and none can strain along c",
            "So Zr needs hard \\(\\langle c+a\\rangle\\) slip or twinning to accommodate deformation along c, and is less ductile and more anisotropic"
          ],
          "answer": "<strong>12 systems.</strong> Copper meets the five-system requirement easily; zirconium cannot with \\(\\langle a\\rangle\\) slip alone."
        },
        {
          "type": "example",
          "label": "Q6",
          "q": "A 8 mm plate is rolled to 6 mm with no change in width. Find the percentage reduction, the true strain along ND, and the factor by which the length increases.",
          "steps": [
            "Reduction \\(=(8-6)/8=25\\%\\)",
            "\\(\\varepsilon_{ND}=\\ln(6/8)=\\ln0.75=-0.288\\)",
            "Plane strain with constant volume: length factor \\(=8/6=1.333\\), so \\(\\varepsilon_{RD}=+0.288\\)"
          ],
          "answer": "<strong>25%, \\(-0.288\\), and \\(\\times1.33\\).</strong>"
        },
        {
          "type": "example",
          "label": "Q7",
          "q": "A cubic crystal sits square to the sheet (cube axes along RD, TD, ND). How many dots appear in its \\(\\{111\\}\\) pole figure, and where are they?",
          "steps": [
            "The 4 distinct \\(\\{111\\}\\) planes each have normals pointing 54.7° from ND, which is neither 0° nor 90°",
            "Each plane has exactly one normal in the upper hemisphere, so 4 dots, all inside the circle, none at the centre and none on the rim",
            "By symmetry they sit at 45° azimuth in each quadrant of the figure"
          ],
          "answer": "<strong>4 dots</strong>, one in each quadrant, at \\(r=R\\tan(54.7^\\circ/2)\\approx0.52R\\) from the centre."
        },
        {
          "type": "example",
          "label": "Q8",
          "q": "Goss is \\((0^\\circ,45^\\circ,0^\\circ)\\). Say what each Euler angle does in reaching it, and write it in \\(\\{hkl\\}\\langle uvw\\rangle\\) form.",
          "steps": [
            "\\(\\varphi_1=0^\\circ\\): no turn about ND",
            "\\(\\Phi=45^\\circ\\): tip the crystal 45° about RD, which carries the \\([001]\\) axis 45° towards TD so that ND becomes \\([011]\\)",
            "\\(\\varphi_2=0^\\circ\\): no final spin, so \\([100]\\) still points along RD",
            "A \\(\\{110\\}\\) plane is now in the sheet and a \\(\\langle001\\rangle\\)-type direction is along RD (the interactive tool shows ND \\(\\parallel[011]\\), RD \\(\\parallel[100]\\))"
          ],
          "answer": "<strong>\\(\\{110\\}\\langle001\\rangle\\).</strong> Only \\(\\Phi\\) is non-zero."
        },
        {
          "type": "example",
          "label": "Q9",
          "q": "During rolling of Zr, a grain has its c-axis along RD. Which deformation mechanism is favoured, what is the rotation, and where does the c-axis end up?",
          "steps": [
            "Rolling stretches the sheet along RD, so this grain is being pulled along its c-axis",
            "Pulling along c is the condition for the tensile twin \\(\\{10\\bar12\\}\\langle10\\bar11\\rangle\\)",
            "That twin rotates the lattice by about 85° about a \\(\\langle11\\bar20\\rangle\\) axis"
          ],
          "answer": "<strong>85° tensile twinning</strong>, and the c-axis moves most of the way towards ND, which is the rolling texture of hcp metals."
        },
        {
          "type": "example",
          "label": "Q10",
          "q": "A grain is loaded with \\(\\phi=60^\\circ\\) and \\(\\lambda=45^\\circ\\) for a basal slip system whose CRSS is 10 MPa. Find the Schmid factor, the resolved shear stress at \\(\\sigma=50\\) MPa, and the yield stress of this grain.",
          "steps": [
            "Schmid factor \\(=\\cos60^\\circ\\cos45^\\circ=0.5\\times0.707=0.354\\)",
            "\\(\\tau=0.354\\times50=17.7\\) MPa, already above the CRSS of 10 MPa, so slip has started",
            "Yield stress: \\(\\sigma_y=10/0.354=28.3\\) MPa"
          ],
          "answer": "<strong>0.354; 17.7 MPa; 28.3 MPa.</strong> Slip is already active at 50 MPa."
        },
        {
          "type": "example",
          "label": "Q11",
          "q": "In an ODF, a texture component has intensity 8. What does that mean? What would a random sample show?",
          "steps": [
            "ODF intensity is in multiples of random (MRD)",
            "A random texture has \\(f(g)=1\\) at every orientation"
          ],
          "answer": "<strong>Eight times as many grains in that orientation as a random sample would have.</strong> A random sample is uniform at 1."
        },
        {
          "type": "example",
          "label": "Q12",
          "q": "Why does a pole figure labelled \\(\\{0002\\}\\) show where the c-axes point, even though basal planes are \\(\\{0001\\}\\)?",
          "steps": [
            "In hcp, the \\((0001)\\) diffraction peak is absent because the two atoms in the cell scatter out of phase",
            "The first measurable basal reflection is \\((0002)\\), a second-order reflection from the same planes",
            "Same planes, same normals, same pole figure"
          ],
          "answer": "<strong>\\(\\{0002\\}\\) and \\(\\{0001\\}\\) have identical plane normals</strong>, so the figure shows c-axis directions."
        }
      ],
      "essentialsTitle": "Texture essentials",
      "essentialsHeading": "Week 3 in one screen",
      "essentials": [
        "A polycrystal is isotropic only if all orientations are equally present. <strong>Texture</strong> is a non-random orientation distribution, and almost all processing creates one. It is about lattice direction, not grain shape.",
        "<strong>Brackets:</strong> \\((hkl)\\) one plane, \\(\\{hkl\\}\\) plane family, \\([uvw]\\) one direction, \\(\\langle uvw\\rangle\\) direction family. <strong>hcp:</strong> \\((hkil)\\) with \\(i=-(h+k)\\); \\(\\langle11\\bar20\\rangle\\) is an a-axis direction.",
        "<strong>Hydrides</strong> are brittle \\(\\mathrm{ZrH}_x\\) plates that precipitate when hydrogen from water corrosion exceeds what Zr can hold. They grow with \\((0001)_{Zr}\\parallel(111)_{\\text{hydride}}\\), so texture steers which way the plates lie.",
        "<strong>Rolling</strong> is plane strain: \\(\\varepsilon=\\mathrm{diag}(+\\Delta,0,-\\Delta)\\) in (RD, TD, ND). <strong>Uniaxial</strong> loading gives \\(\\mathrm{diag}(\\pm N,\\mp N/2,\\mp N/2)\\) and a fibre texture. True strain \\(=\\ln(t/t_0)\\), not the reduction percentage.",
        "<strong>Slip</strong> rotates the lattice gradually; <strong>twinning</strong> flips a region suddenly into a mirror orientation (85° \\(\\{10\\bar12\\}\\) tensile twin in Ti and Zr). Slip counts: FCC 12; BCC 12, 12, 24; HCP basal 3, prismatic 3, pyramidal 6. hcp \\(\\langle a\\rangle\\) slip cannot strain along c, so twinning matters.",
        "A <strong>pole figure</strong> is the stereographic projection of one plane family's normals (upper hemisphere) in the sample axes RD, TD, ND. Rim poles are drawn at both ends of a diameter. \\(\\{0002\\}\\) shows c-axes because \\((0001)\\) is extinct in hcp.",
        "<strong>Bunge Euler angles:</strong> \\(\\varphi_1\\) about ND, \\(\\Phi\\) about the rotated RD, \\(\\varphi_2\\) about the rotated ND. Cube (0,0,0), Goss (0,45,0), Brass (35,45,0), Copper (90,35,45).",
        "The <strong>ODF</strong> \\(f(g)\\) is the density of grains at orientation \\(g\\) in multiples of random (random is 1). bcc fibres: α \\(\\langle110\\rangle\\parallel\\)RD, γ \\(\\langle111\\rangle\\parallel\\)ND, η \\(\\langle001\\rangle\\parallel\\)RD, ε \\(\\langle110\\rangle\\parallel\\)TD.",
        "In rolled Zr and Ti, <strong>twinning</strong> drives early texture change and <strong>recrystallisation sets the final texture</strong>. Load along c is <strong>hard</strong>; load across c is <strong>soft</strong>. Schmid: \\(\\tau=\\sigma\\cos\\phi\\cos\\lambda\\le0.5\\sigma\\)."
      ],
      "desc": "Texture and anisotropy, notation guide, zirconium hydrides, slip and twinning, rolling and uniaxial strain, pole figures, Euler angles, ODFs, fibres, XRD and EBSD, Zr and Ti case studies, hard and soft orientations, practice questions.",
      "difficulty": "Medium",
      "readTime": "75 min",
      "color": "#8855f5"
    },
    {
      "soon": true,
      "numLabel": "Order · to come",
      "title": "Ionic Structures and Pauling's Rules",
      "desc": "Coming soon. Added once covered in lectures.",
      "color": "#e04545",
      "sections": []
    },
    {
      "soon": true,
      "numLabel": "Order · to come",
      "title": "Interstitial and Substitutional Solid Solutions",
      "desc": "Coming soon. Added once covered in lectures.",
      "color": "#d89800",
      "sections": []
    },
    {
      "soon": true,
      "numLabel": "Disorder · to come",
      "title": "Disorder topics (added as they are taught)",
      "desc": "Coming soon. Added once covered in lectures.",
      "color": "#2fa15c",
      "sections": []
    }
  ],
  "extraSections": null,
  "formulaSheet": [
    {
      "heading": "W1: Crystal Structures and Crystallography",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Interatomic energy",
          "eqs": [
            "U(r) = -\\frac{A}{r^{m}} + \\frac{B}{r^{n}} \\quad (n>m)"
          ],
          "vars": [
            {
              "symbol": "r",
              "desc": "interatomic separation"
            },
            {
              "symbol": "A, B",
              "desc": "attraction and repulsion constants"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Equilibrium and force",
          "eqs": [
            "\\left.\\frac{dU}{dr}\\right|_{r_0}=0 \\qquad F=-\\frac{dU}{dr}"
          ],
          "note": "r<sub>0</sub> is the equilibrium bond length. Well depth at r<sub>0</sub> is the bond energy."
        },
        {
          "type": "formulablock",
          "name": "Stiffness from the well",
          "eqs": [
            "S_0=\\left.\\frac{d^{2}U}{dr^{2}}\\right|_{r_0} \\qquad E\\approx\\frac{S_0}{r_0}"
          ],
          "note": "Steeper curvature means higher E."
        },
        {
          "type": "formulablock",
          "name": "Lattice vector",
          "eqs": [
            "\\mathbf{R}=n_1\\mathbf{a}+n_2\\mathbf{b}+n_3\\mathbf{c}"
          ],
          "vars": [
            {
              "symbol": "n₁,n₂,n₃",
              "desc": "integers"
            },
            {
              "symbol": "a,b,c",
              "desc": "primitive vectors"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "Lattice points per 2D cell",
          "eqs": [
            "N=\\frac{N_{corner}}{4}+\\frac{N_{edge}}{2}+N_{inside}"
          ]
        },
        {
          "type": "formulablock",
          "name": "Lattice points per 3D cell",
          "eqs": [
            "N=\\frac{N_{corner}}{8}+\\frac{N_{face}}{2}+N_{body}"
          ],
          "note": "P = 1, I = 2, F = 4 for cubic cells."
        },
        {
          "type": "formulablock",
          "name": "Counts to memorise",
          "eqs": [
            "\\text{2D Bravais lattices}=5 \\qquad \\text{crystal systems}=7 \\qquad \\text{3D Bravais lattices}=14"
          ]
        }
      ]
    },
    {
      "heading": "W2: Directions, Planes and Close Packing",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Fractional coordinates",
          "eqs": [
            "(x,\\,y,\\,z)=\\left(\\frac{x_{abs}}{a},\\ \\frac{y_{abs}}{b},\\ \\frac{z_{abs}}{c}\\right)"
          ],
          "note": "BCC: (0,0,0), (½,½,½). FCC: (0,0,0), (½,½,0), (½,0,½), (0,½,½)."
        },
        {
          "type": "formulablock",
          "name": "Direction between two points",
          "eqs": [
            "[\\,uvw\\,]=[\\,x_2-x_1,\\ y_2-y_1,\\ z_2-z_1\\,]\\ \\text{reduced}"
          ],
          "note": "Square brackets. Family &lt;uvw&gt;."
        },
        {
          "type": "formulablock",
          "name": "Miller indices",
          "eqs": [
            "(hkl)=\\left(\\frac1{p},\\ \\frac1{q},\\ \\frac1{s}\\right)\\ \\text{reduced}"
          ],
          "vars": [
            {
              "symbol": "p, q, s",
              "desc": "intercepts on a, b, c in units of a, b, c"
            }
          ],
          "note": "Round brackets. Family {hkl}. Zero index means parallel to that axis."
        },
        {
          "type": "formulablock",
          "name": "Plane spacing (cubic)",
          "eqs": [
            "d_{hkl}=\\frac{a}{\\sqrt{h^2+k^2+l^2}}"
          ],
          "note": "Cubic only. Not on the Week 2 slides."
        },
        {
          "type": "formulablock",
          "name": "2D packing efficiency",
          "eqs": [
            "\\text{square}=\\frac{\\pi}{4}=0.785 \\qquad \\text{hexagonal}=\\frac{\\pi}{2\\sqrt3}=0.907"
          ]
        },
        {
          "type": "formulablock",
          "name": "Atomic packing factor",
          "eqs": [
            "\\mathrm{APF}=\\frac{Z\\cdot\\frac43\\pi r^{3}}{V_{cell}}"
          ],
          "vars": [
            {
              "symbol": "Z",
              "desc": "atoms per cell"
            }
          ]
        },
        {
          "type": "formulablock",
          "name": "FCC",
          "eqs": [
            "4r=\\sqrt2\\,a \\qquad Z=4 \\qquad \\mathrm{APF}=\\frac{\\pi}{3\\sqrt2}=0.74"
          ],
          "note": "CN 12. Close-packed direction &lt;110&gt;, close-packed planes {111}."
        },
        {
          "type": "formulablock",
          "name": "BCC",
          "eqs": [
            "4r=\\sqrt3\\,a \\qquad Z=2 \\qquad \\mathrm{APF}=\\frac{\\sqrt3\\pi}{8}=0.68"
          ],
          "note": "CN 8. Close-packed direction &lt;111&gt;."
        },
        {
          "type": "formulablock",
          "name": "HCP",
          "eqs": [
            "Z=6 \\qquad \\frac{c}{a}=\\sqrt{\\tfrac83}\\approx1.633 \\qquad \\mathrm{APF}=0.74"
          ],
          "note": "CN 12. Stacking ABAB…"
        },
        {
          "type": "formulablock",
          "name": "Voids in close packing",
          "eqs": [
            "\\text{per atom: 1 octahedral, 2 tetrahedral} \\qquad \\text{FCC cell: 4 and 8}"
          ],
          "note": "Octahedral about 0.414 r, tetrahedral about 0.225 r."
        }
      ]
    },
    {
      "heading": "W3: Crystallographic Texture",
      "blocks": [
        {
          "type": "formulablock",
          "name": "Thickness reduction and true strain",
          "eqs": [
            "\\text{reduction}=\\frac{t_0-t}{t_0}\\qquad \\varepsilon=\\ln\\frac{t}{t_0}"
          ],
          "vars": [
            {
              "symbol": "t₀, t",
              "desc": "initial and final thickness"
            },
            {
              "symbol": "ε",
              "desc": "true strain (negative along ND when rolling)"
            }
          ],
          "note": "Reduction is not strain: 20% reduction is ε = −0.223, 80% is ε = −1.609."
        },
        {
          "type": "formulablock",
          "name": "Rolling (plane strain)",
          "eqs": [
            "\\varepsilon=\\begin{pmatrix}+\\Delta&0&0\\\\0&0&0\\\\0&0&-\\Delta\\end{pmatrix}"
          ],
          "note": "Axes in the order RD, TD, ND. Trace is zero, so volume is conserved."
        },
        {
          "type": "formulablock",
          "name": "Uniaxial tension and compression",
          "eqs": [
            "d\\varepsilon_{T}=\\mathrm{diag}\\left(+N,-\\tfrac{N}{2},-\\tfrac{N}{2}\\right)\\qquad d\\varepsilon_{C}=\\mathrm{diag}\\left(-N,+\\tfrac{N}{2},+\\tfrac{N}{2}\\right)"
          ],
          "note": "Loading axis first. Gives a fibre texture."
        },
        {
          "type": "formulablock",
          "name": "Hexagonal four-index rule",
          "eqs": [
            "(hkil):\\ i=-(h+k)\\qquad [uvtw]:\\ t=-(u+v)"
          ],
          "note": "The third index is redundant, so h + k + i = 0 is a quick check."
        },
        {
          "type": "formulablock",
          "name": "Schmid factor",
          "eqs": [
            "\\tau=\\sigma\\cos\\phi\\cos\\lambda"
          ],
          "vars": [
            {
              "symbol": "φ",
              "desc": "load axis to slip-plane normal"
            },
            {
              "symbol": "λ",
              "desc": "load axis to slip direction"
            }
          ],
          "note": "Maximum value of cosφ cosλ is 0.5. Yield stress on a system: σ_y = τ_CRSS / (cosφ cosλ)."
        },
        {
          "type": "formulablock",
          "name": "Stereographic projection",
          "eqs": [
            "r=R\\tan\\frac{\\theta}{2}"
          ],
          "vars": [
            {
              "symbol": "θ",
              "desc": "angle from ND to the pole"
            },
            {
              "symbol": "R",
              "desc": "radius of the pole figure circle"
            }
          ],
          "note": "ND maps to the centre (θ = 0). A pole in the sheet plane (θ = 90°) maps to the rim."
        },
        {
          "type": "formulablock",
          "name": "Bunge Euler angles",
          "eqs": [
            "g=\\{\\varphi_1,\\Phi,\\varphi_2\\}"
          ],
          "note": "&phi;<sub>1</sub> about ND, then &Phi; about the rotated RD, then &phi;<sub>2</sub> about the rotated ND. Components: Cube (0,0,0), Goss (0,45,0), Brass (35,45,0), Copper (90,35.26,45)."
        },
        {
          "type": "formulablock",
          "name": "Orientation matrix (columns are RD, TD, ND in crystal axes)",
          "eqs": [
            "g=\\begin{pmatrix}c_1c_2-s_1s_2C & s_1c_2+c_1s_2C & s_2S\\\\ -c_1s_2-s_1c_2C & -s_1s_2+c_1c_2C & c_2S\\\\ s_1S & -c_1S & C\\end{pmatrix}"
          ],
          "vars": [
            {
              "symbol": "c₁, s₁",
              "desc": "cos φ₁, sin φ₁"
            },
            {
              "symbol": "C, S",
              "desc": "cos Φ, sin Φ"
            },
            {
              "symbol": "c₂, s₂",
              "desc": "cos φ₂, sin φ₂"
            }
          ],
          "note": "Third column is ND in crystal coordinates; first column is RD."
        },
        {
          "type": "formulablock",
          "name": "Orientation distribution function",
          "eqs": [
            "\\frac{\\Delta V}{V}=f(g)\\,dg"
          ],
          "vars": [
            {
              "symbol": "f(g)",
              "desc": "density of grains at orientation g (1 for random)"
            }
          ],
          "note": "Contours in multiples of random."
        }
      ]
    }
  ],
  "formulaSheetSubtitle": "Every equation covered so far. Variables defined. Grows as more weeks are added.",
  "traps": [
    {
      "heading": "Week 1: Crystal Structures and Crystallography",
      "items": [
        {
          "tag": "W1 · T1",
          "claim": "\"Lattice points are the atoms.\"",
          "truth": "<strong>FALSE.</strong> Lattice points are infinitesimal geometric points. Atoms are physical objects. A lattice point need not lie at an atom's centre, and the motif at each point can be several atoms."
        },
        {
          "tag": "W1 · T2",
          "claim": "\"Amorphous solids have no order at all.\"",
          "truth": "<strong>FALSE.</strong> They lack <em>long-range</em> order but keep <em>short-range</em> order (each atom has a sensible set of near neighbours). Glass and amorphous silicon are the examples."
        },
        {
          "tag": "W1 · T3",
          "claim": "\"A polycrystal is amorphous because it has no single orientation.\"",
          "truth": "<strong>FALSE.</strong> Each grain is a perfect crystal, so there is long-range order inside every grain. Only the orientation changes between grains, across grain boundaries."
        },
        {
          "tag": "W1 · T4",
          "claim": "\"The unit cell must always be the primitive cell.\"",
          "truth": "<strong>FALSE.</strong> Unit cells can be non-primitive. The convention is shortest sides, most nearly perpendicular, and showing the full symmetry, so FCC and BCC use non-primitive cubic cells."
        },
        {
          "tag": "W1 · T5",
          "claim": "\"The conventional FCC cell contains 4 atoms so it is primitive.\"",
          "truth": "<strong>FALSE.</strong> A primitive cell holds exactly <strong>1</strong> lattice point. The FCC conventional cell holds 4 (8 x 1/8 + 6 x 1/2), so it is non-primitive."
        },
        {
          "tag": "W1 · T6",
          "claim": "\"There are 7 Bravais lattices in 3D.\"",
          "truth": "<strong>FALSE.</strong> There are <strong>7 crystal systems</strong> and <strong>14 Bravais lattices</strong>. The 14 come from combining the 7 systems with the allowed P, I, F, C centrings."
        },
        {
          "tag": "W1 · T7",
          "claim": "\"Lattice vectors are unique for a given lattice.\"",
          "truth": "<strong>FALSE.</strong> Infinitely many primitive vector choices describe the same lattice. The integers n<sub>1</sub>, n<sub>2</sub> change when you change vectors, but the lattice point reached is the same."
        },
        {
          "tag": "W1 · T8",
          "claim": "\"Solids expand when heated because the bonds get weaker or the well moves.\"",
          "truth": "<strong>FALSE.</strong> The well is unchanged. Expansion happens because it is <strong>asymmetric</strong> (steep on the compressed side, shallow on the stretched side), so the average spacing drifts outward as vibrations grow. A symmetric well would give no expansion."
        },
        {
          "tag": "W1 · T9",
          "claim": "\"A deeper well means more thermal expansion.\"",
          "truth": "<strong>FALSE.</strong> A deeper (stiffer) well gives <strong>less</strong> thermal expansion, a higher Young's modulus and a higher melting point. Ceramics sit at that end, polymers at the other."
        },
        {
          "tag": "W1 · T10",
          "claim": "\"At the melting point the atomic spacing keeps expanding smoothly with added heat.\"",
          "truth": "<strong>FALSE.</strong> At T<sub>m</sub> the added energy goes into breaking the ordered lattice, the enthalpy of fusion, and the average spacing barely changes at that point."
        },
        {
          "tag": "W1 · T11",
          "claim": "\"Metals are ductile because metallic bonds are directional.\"",
          "truth": "<strong>FALSE.</strong> Metallic bonding is <strong>non-directional</strong>. Delocalised electrons re-adjust when ions move, which gives ductility and malleability, and also lets metal atoms pack densely."
        }
      ]
    },
    {
      "heading": "Week 2: Directions, Planes and Close Packing",
      "items": [
        {
          "tag": "W2 · T1",
          "claim": "\"A cell shaped like a cube must be cubic.\"",
          "truth": "<strong>FALSE.</strong> The crystal system is set by minimum symmetry. Cubic needs four 3-fold axes along the body diagonals. A cell stretched along one axis is tetragonal."
        },
        {
          "tag": "W2 · T2",
          "claim": "\"[hkl] and (hkl) mean the same thing.\"",
          "truth": "<strong>FALSE.</strong> Square brackets are a <strong>direction</strong>, round brackets are a <strong>plane</strong>. Only in cubic crystals is the direction [hkl] perpendicular to the plane (hkl)."
        },
        {
          "tag": "W2 · T3",
          "claim": "\"The Miller index of a plane is its intercepts.\"",
          "truth": "<strong>FALSE.</strong> It is the <strong>reciprocals</strong> of the intercepts, cleared to the smallest integers. Intercepts ½, 1, ∞ give (210), not (½ 1 ∞)."
        },
        {
          "tag": "W2 · T4",
          "claim": "\"A plane that is parallel to an axis has an index of ∞ on it.\"",
          "truth": "<strong>FALSE.</strong> It has an intercept of ∞, so the index is <strong>0</strong>."
        },
        {
          "tag": "W2 · T5",
          "claim": "\"The notation brackets are interchangeable.\"",
          "truth": "<strong>FALSE.</strong> [uvw] direction, &lt;uvw&gt; family of directions, (hkl) plane, {hkl} family of planes. Mixing them loses marks."
        },
        {
          "tag": "W2 · T6",
          "claim": "\"There are always six planes in {100}.\"",
          "truth": "<strong>FALSE.</strong> That is for cubic. In tetragonal there are four {100}-type planes and two {001}-type, because c is a different length."
        },
        {
          "tag": "W2 · T7",
          "claim": "\"The faces of the FCC unit cell are the close-packed layers.\"",
          "truth": "<strong>FALSE.</strong> The close-packed layers are the <strong>{111}</strong> planes, which cut diagonally through the cell."
        },
        {
          "tag": "W2 · T8",
          "claim": "\"BCC is a close-packed structure.\"",
          "truth": "<strong>FALSE.</strong> Coordination number is 8 and APF is 0.68. Close-packed structures (FCC, HCP) have CN 12 and APF 0.74."
        },
        {
          "tag": "W2 · T9",
          "claim": "\"FCC packs more densely than HCP.\"",
          "truth": "<strong>FALSE.</strong> Both have APF 0.74 and CN 12. They differ only in the stacking sequence (ABC vs ABAB)."
        },
        {
          "tag": "W2 · T10",
          "claim": "\"The packing efficiency of hexagonal packing is 0.74.\"",
          "truth": "<strong>FALSE.</strong> 0.74 is the <strong>3D</strong> APF of FCC and HCP. Hexagonal packing in <strong>2D</strong> is 0.907 (square packing is 0.785)."
        },
        {
          "tag": "W2 · T11",
          "claim": "\"An FCC unit cell has 14 atoms.\"",
          "truth": "<strong>FALSE.</strong> 14 is the number of positions, not atoms. Corners and faces are shared with neighbouring cells: 8 × ⅛ + 6 × ½ = <strong>4</strong> atoms."
        },
        {
          "tag": "W2 · T12",
          "claim": "\"The &lt;111&gt; family has 4 members in a cubic crystal.\"",
          "truth": "<strong>FALSE.</strong> It has 8, because each of the 4 body diagonals can be traversed in two directions."
        }
      ]
    },
    {
      "heading": "Week 3: Crystallographic Texture",
      "items": [
        {
          "tag": "W3 · T1",
          "claim": "\"A polycrystal is always isotropic because it contains so many grains.\"",
          "truth": "<strong>FALSE.</strong> It is isotropic only if all possible orientations are present in equal amounts. A textured polycrystal is anisotropic even though it has many grains."
        },
        {
          "tag": "W3 · T2",
          "claim": "\"Texture means the grains are elongated or flattened.\"",
          "truth": "<strong>FALSE.</strong> Crystallographic texture is about the distribution of crystal <em>orientations</em>. Grain shape and size are separate things, and equiaxed grains can be strongly textured."
        },
        {
          "tag": "W3 · T3",
          "claim": "\"\\(\\{100\\}\\) and \\((100)\\) mean the same thing.\"",
          "truth": "<strong>FALSE.</strong> \\((100)\\) is one specific plane. \\(\\{100\\}\\) is the family: all symmetry-equivalent planes. Likewise \\([uvw]\\) is one direction and \\(\\langle uvw\\rangle\\) the family."
        },
        {
          "tag": "W3 · T4",
          "claim": "\"(1 0 1 1) is a valid hexagonal plane.\"",
          "truth": "<strong>FALSE.</strong> In \\((hkil)\\) the third index must be \\(-(h+k)\\). That plane is \\((10\\bar11)\\). If \\(h+k+i\\neq0\\), you have made an error."
        },
        {
          "tag": "W3 · T5",
          "claim": "\"Rolling is uniaxial deformation.\"",
          "truth": "<strong>FALSE.</strong> Rolling is plane strain: extension along RD, compression along ND and <em>zero</em> strain along TD. Uniaxial loading has a loading axis with equal opposite strain in the other two directions."
        },
        {
          "tag": "W3 · T6",
          "claim": "\"In uniaxial compression the strain is negative in all three directions.\"",
          "truth": "<strong>FALSE.</strong> It is negative along the axis and <em>positive</em> (+N/2) in the two transverse directions. The three strains sum to zero because volume is conserved."
        },
        {
          "tag": "W3 · T7",
          "claim": "\"20% rolling means the true strain is 0.20.\"",
          "truth": "<strong>FALSE.</strong> 20% is the thickness reduction. The true strain along ND is \\(\\ln(0.8)=-0.223\\). The difference grows with reduction: 80% reduction is \\(\\varepsilon=-1.609\\)."
        },
        {
          "tag": "W3 · T8",
          "claim": "\"A pole figure fully specifies a crystal orientation.\"",
          "truth": "<strong>FALSE.</strong> A single pole figure gives where one crystal direction points (two angles). The crystal can still spin about that direction. You need several pole figures or an ODF."
        },
        {
          "tag": "W3 · T9",
          "claim": "\"A (001) pole figure shows only the (001) poles.\"",
          "truth": "<strong>FALSE.</strong> It should be written \\(\\{001\\}\\): it includes all symmetrically equivalent planes. For a cubic crystal that is 3 planes and 5 dots (centre plus four on the rim)."
        },
        {
          "tag": "W3 · T10",
          "claim": "\"Pole figures plot both hemispheres of the sphere.\"",
          "truth": "<strong>FALSE.</strong> Only the upper (positive) hemisphere is plotted. Poles on the rim appear at both ends of a diameter."
        },
        {
          "tag": "W3 · T11",
          "claim": "\"A \\(\\{0002\\}\\) pole figure shows something different from a \\(\\{0001\\}\\) one.\"",
          "truth": "<strong>FALSE.</strong> Same plane normals. \\((0001)\\) is extinct in hcp X-ray diffraction, so \\((0002)\\) is measured instead. Either way, the figure shows c-axis directions."
        },
        {
          "tag": "W3 · T12",
          "claim": "\"Slip and twinning both just rotate the lattice a little.\"",
          "truth": "<strong>FALSE.</strong> Slip leaves each block's orientation unchanged and rotates the crystal gradually. Twinning creates a mirror-image region: a sudden rotation of about 85° for the main Ti and Zr twin."
        },
        {
          "tag": "W3 · T13",
          "claim": "\"HCP metals deform easily by slip alone, so twinning is irrelevant.\"",
          "truth": "<strong>FALSE.</strong> HCP \\(\\langle a\\rangle\\) slip gives only 4 independent systems and none strains the crystal along c. Twinning (85° \\(\\{10\\bar12\\}\\) tensile twin in Ti and Zr) is a dominant mode and drives drastic texture change."
        },
        {
          "tag": "W3 · T14",
          "claim": "\"Hydrides are a harmless solution of hydrogen in zirconium.\"",
          "truth": "<strong>FALSE.</strong> Dissolved hydrogen is not the problem. When it exceeds solubility it precipitates as brittle \\(\\mathrm{ZrH}_x\\) plates, and their orientation, set by the Zr texture, decides whether they are harmful."
        },
        {
          "tag": "W3 · T15",
          "claim": "\"Loading along the c-axis is a soft orientation for hcp slip.\"",
          "truth": "<strong>FALSE.</strong> It is the <em>hard</em> orientation: basal and prismatic slip have a Schmid factor of zero. Loading perpendicular to c is the soft orientation."
        },
        {
          "tag": "W3 · T16",
          "claim": "\"Recrystallisation has little effect on the final texture of rolled Zr.\"",
          "truth": "<strong>FALSE.</strong> One of the two main findings of the Zr work is that recrystallisation determines the final texture. The other is that twinning plays a major role early on."
        },
        {
          "tag": "W3 · T17",
          "claim": "\"The γ-fibre is \\(\\langle110\\rangle\\parallel\\) RD.\"",
          "truth": "<strong>FALSE.</strong> That is the α-fibre. γ is \\(\\langle111\\rangle\\parallel\\) ND, η is \\(\\langle001\\rangle\\parallel\\) RD and ε is \\(\\langle110\\rangle\\parallel\\) TD."
        },
        {
          "tag": "W3 · T18",
          "claim": "\"Copper is (90°, 45°, 45°) in Euler space.\"",
          "truth": "<strong>Careful.</strong> The lecture slide gives this, but the geometry of \\(\\{112\\}\\langle111\\rangle\\) requires \\(\\Phi=35.26^\\circ\\). Learn Copper as about (90°, 35°, 45°) and check what the exam paper uses."
        }
      ]
    }
  ],
  "trapsSubtitle": "Plausible-but-wrong claims the exam uses. Read each one. Know what's actually true.",
  "glossaryIntro": "Search across all terms instantly. Filter by week."
};
