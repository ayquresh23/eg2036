// EG2036 Study Site: content data
// Schema documented in study-site-core/js/render.js
window.SITE_CONFIG = {
  "slug": "eg2036",
  "topicIds": [
    "w1"
  ],
  "navOrder": [
    "home",
    "w1",
    "formulas",
    "glossary",
    "traps"
  ],
  "topicColors": {
    "w1": "#0ea5c6"
  },
  "topicLabels": {
    "w1": "Crystal Structures"
  }
};

window.SITE_CONTENT = {
  "home": {
    "tag": "Order in Materials · Swansea University",
    "title": "EG2036 Study Site",
    "subtitle": "How atoms arrange themselves in solids and why it matters: bonding, lattices, unit cells, crystal systems, and later directions, planes, close packing and solid solutions. Built out week by week as lectures run, with interactive simulations for the ideas that are easier to see than to read.",
    "stats": [
      {
        "value": "1",
        "label": "Weeks built"
      },
      {
        "value": "5",
        "label": "Simulations"
      },
      {
        "value": "37",
        "label": "Terms"
      },
      {
        "value": "7",
        "label": "Formulas"
      },
      {
        "value": "11",
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
        "html": "<div class=\"card-grid\"><div class=\"topic-card\" onclick=\"showSection('formulas')\" style=\"--bar-color:#0ea5c6\"><div class=\"topic-num\">Reference</div><div class=\"topic-title\">📐 Formula Sheet</div><div class=\"topic-desc\">Every equation so far, with variables defined.</div></div><div class=\"topic-card\" onclick=\"showSection('glossary')\" style=\"--bar-color:#2fa15c\"><div class=\"topic-num\">Reference</div><div class=\"topic-title\">📚 Glossary</div><div class=\"topic-desc\">37 terms from Week 1. Search, filter, and flashcard mode.</div></div><div class=\"topic-card\" onclick=\"showSection('traps')\" style=\"--bar-color:#e04545\"><div class=\"topic-num\">Reference</div><div class=\"topic-title\">⚠️ MCQ Traps</div><div class=\"topic-desc\">Plausible-but-wrong claims the exam uses.</div></div></div>"
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
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 1 of 5</span><iframe src=\"widgets/bonding-energy.html\" data-sim=\"bonding-energy.html\" loading=\"lazy\" title=\"Bond energy and packing\" style=\"height:640px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>A block of atoms in 3D (drag to rotate) and the energy curve underneath. The slider moves from loose random packing, to a crystal, to over-compressed. The two checkboxes switch the attractive and repulsive parts of the curve on and off.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Start at the far left and note the average bond length and energy in the box.</li><li>Slide to the crystalline position: the bond length should land at \\(r_0\\) and the energy at its minimum.</li><li>Keep sliding: the energy shoots up. That is repulsion.</li><li>Untick 'Repulsive' and see there would be no minimum at all.</li></ul></div><div><h5>Why it matters</h5><p>It shows <em>why</em> ordered packing is favoured, and the total curve as a sum of two competing terms. Exam questions ask you to sketch this curve and label \\(r_0\\) and the bond energy.</p></div></div>"
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
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 2 of 5</span><iframe src=\"widgets/thermal-expansion.html\" data-sim=\"thermal-expansion.html\" loading=\"lazy\" title=\"Thermal expansion and bond dissociation\" style=\"height:640px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>The energy well with a marker for the atom pair's total energy. The horizontal line is the range of spacings the atoms swing through, and the dot is their average.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Raise the temperature slowly and watch the swing range grow.</li><li>Compare the distance to the left and right ends of the line: they are unequal.</li><li>Watch the average dot slide right.</li><li>Keep going until the bond breaks.</li></ul></div><div><h5>Why it matters</h5><p>This is the answer to 'why do solids expand when heated?'. If a symmetric (parabolic) well were used, the average would stay at \\(r_0\\) and there would be no expansion at all. <strong>Caveat:</strong> this simplified model does not include melting, and its temperatures are on an illustrative scale.</p></div></div>"
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
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 3 of 5</span><iframe src=\"widgets/modulus-stiffness.html\" data-sim=\"modulus-stiffness.html\" loading=\"lazy\" title=\"Potential energy, slope and curvature\" style=\"height:720px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>Three linked plots for the same well: energy (top), slope, which is minus the force (middle), and curvature (bottom). The slider changes the bond strength (well depth).</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Make the well deep, then shallow, and watch the curvature value at the bottom change.</li><li>Find where the slope crosses zero: that is \\(r_0\\).</li><li>Notice the average spacing drifts more for the shallow well, at the same temperature.</li></ul></div><div><h5>Why it matters</h5><p>One slider ties three ideas together: deeper well means stiffer (higher E) <em>and</em> less thermal expansion. That is exactly the ceramics-versus-polymers row in the bonding table above.</p></div></div>"
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
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 4 of 5</span><iframe src=\"widgets/phase-change.html\" data-sim=\"phase-change.html\" loading=\"lazy\" title=\"Phase changes with NaCl transition temperatures\" style=\"height:680px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>The energy well again, but now with temperature marked at NaCl's melting point (1074 K) and boiling point (1738 K), and a bar showing energy going into the enthalpy of fusion.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Sweep the temperature from 0 K upward.</li><li>Watch what happens to the average spacing at 1074 K: it barely changes while the fusion bar fills.</li><li>Continue past 1738 K.</li></ul></div><div><h5>Why it matters</h5><p>It shows that a phase change is a <em>step</em> in the energy budget, not a smooth continuation of thermal expansion. <strong>Caveat:</strong> this is one generic well scaled to NaCl's temperatures, an illustration and not a real NaCl simulation.</p></div></div>"
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
          "html": "<div class=\"sim-embed\"><span class=\"sim-tag\">Interactive 5 of 5</span><iframe src=\"widgets/crystal-planes.html\" data-sim=\"crystal-planes.html\" loading=\"lazy\" title=\"Crystal planes and nanoparticle facets\" style=\"height:700px\"></iframe><div class=\"sim-credit\">Interactive simulation by Dr Ashley Willow (Swansea University), restyled for this site.</div></div><div class=\"sim-guide\"><div><h5>What you are looking at</h5><p>A simple cubic block of atoms with a highlighted plane through it. The three buttons choose which plane is cut, and the readout shows how many atoms fall on that plane per unit area.</p></div><div class=\"sg-try\"><h5>Try this</h5><ul><li>Switch between (100), (110) and (111) and watch the atom density readout.</li><li>Use 'Play assembly' to see the facet build up.</li><li>Toggle the atom size between space-filling and reduced to see the gaps.</li><li>Rotate the block to look straight at each plane.</li></ul></div><div><h5>Why it matters</h5><p>It makes surface structure concrete: different cuts expose different atom arrangements and densities. The numbers in brackets are Miller indices, which get their own topic later, so treat them as labels for now. <strong>Careful:</strong> the simulation uses a simple cubic lattice, where (100) is densest. In FCC metals it is (111) that is the densest plane, so do not carry the ordering over.</p></div></div>"
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
      "soon": true,
      "numLabel": "Order · to come",
      "title": "Lattice Directions and Miller Indices",
      "desc": "Coming soon. Added once covered in lectures.",
      "color": "#3b82e8",
      "sections": []
    },
    {
      "soon": true,
      "numLabel": "Order · to come",
      "title": "Close-Packed Structures of Metals",
      "desc": "Coming soon. Added once covered in lectures.",
      "color": "#8855f5",
      "sections": []
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
    }
  ],
  "trapsSubtitle": "Plausible-but-wrong claims the exam uses. Read each one. Know what's actually true.",
  "glossaryIntro": "Search across all terms instantly. Filter by week."
};
