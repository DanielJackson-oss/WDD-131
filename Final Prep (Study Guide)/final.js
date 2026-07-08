/* =========================================================
   CONTENT DATA
   ========================================================= */
const topics = [
{cat:"HTML / CSS", id:"head", title:"The &lt;head&gt; Section", sub:"What belongs in &lt;head&gt;, and why order/attributes matter.",
  blocks:[
    {tag:"concept", h:"What lives in &lt;head&gt;", p:[
      "The <code>&lt;head&gt;</code> holds metadata about the page &mdash; nothing the user sees directly rendered as page content.",
      "Typical contents: <b>meta tags</b> (charset, viewport, description), <b>title</b>, <b>link</b> (stylesheets, favicons), and sometimes <b>script</b>."
    ]},
    {tag:"good", h:"Standard head block", code:
`<span class="tagname">&lt;head&gt;</span>
  <span class="tagname">&lt;meta</span> <span class="fn">charset</span>=<span class="str">"UTF-8"</span><span class="tagname">&gt;</span>
  <span class="tagname">&lt;meta</span> <span class="fn">name</span>=<span class="str">"viewport"</span> <span class="fn">content</span>=<span class="str">"width=device-width, initial-scale=1.0"</span><span class="tagname">&gt;</span>
  <span class="tagname">&lt;title&gt;</span>My Page<span class="tagname">&lt;/title&gt;</span>
  <span class="tagname">&lt;link</span> <span class="fn">rel</span>=<span class="str">"stylesheet"</span> <span class="fn">href</span>=<span class="str">"styles.css"</span><span class="tagname">&gt;</span>
  <span class="tagname">&lt;script</span> <span class="fn">src</span>=<span class="str">"main.js"</span> <span class="kw">defer</span><span class="tagname">&gt;&lt;/script&gt;</span>
<span class="tagname">&lt;/head&gt;</span>`},
    {tag:"gotcha", h:"Why defer matters", p:[
      "If a &lt;script&gt; is placed in &lt;head&gt; <i>without</i> <code>defer</code>, it downloads and runs immediately &mdash; before the HTML body exists &mdash; so DOM queries in that script will fail.",
      "<code>defer</code> tells the browser: download in the background, but wait to run until the HTML is fully parsed. That's what makes putting scripts in &lt;head&gt; safe."
    ]}
  ]},

{cat:"HTML / CSS", id:"semantic", title:"Semantic vs. Non-Semantic HTML", sub:"Elements that describe meaning vs. elements that are just generic boxes.",
  blocks:[
    {tag:"concept", h:"The distinction", p:[
      "<b>Semantic</b> elements describe their content's purpose to the browser, assistive tech, and other developers: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;figure&gt;</code>.",
      "<b>Non-semantic</b> elements carry no inherent meaning &mdash; they're generic containers: <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>. They're still useful, just only for styling/grouping, not meaning."
    ]},
    {tag:"good", h:"Semantic layout", code:
`<span class="tagname">&lt;header&gt;</span>...<span class="tagname">&lt;/header&gt;</span>
<span class="tagname">&lt;nav&gt;</span>...<span class="tagname">&lt;/nav&gt;</span>
<span class="tagname">&lt;main&gt;</span>
  <span class="tagname">&lt;article&gt;</span>...<span class="tagname">&lt;/article&gt;</span>
<span class="tagname">&lt;/main&gt;</span>
<span class="tagname">&lt;footer&gt;</span>...<span class="tagname">&lt;/footer&gt;</span>`},
    {tag:"bad", h:"Same layout, no meaning", code:
`<span class="tagname">&lt;div</span> <span class="fn">class</span>=<span class="str">"header"</span><span class="tagname">&gt;</span>...<span class="tagname">&lt;/div&gt;</span>
<span class="tagname">&lt;div</span> <span class="fn">class</span>=<span class="str">"nav"</span><span class="tagname">&gt;</span>...<span class="tagname">&lt;/div&gt;</span>
<span class="tagname">&lt;div</span> <span class="fn">class</span>=<span class="str">"main"</span><span class="tagname">&gt;</span>...<span class="tagname">&lt;/div&gt;</span>`},
    {tag:"gotcha", h:"Exam angle", p:["Expect questions asking you to pick the semantic equivalent of a div-soup layout, or to say why screen readers prefer semantic tags."]}
  ]},

{cat:"HTML / CSS", id:"units", title:"Units of Measurement", sub:"Which units scale with the user's settings/viewport (responsive) and which don't.",
  blocks:[
    {tag:"concept", h:"Responsive vs. fixed units", p:[
      "<b>Fixed / not responsive:</b> <code>px</code> &mdash; an absolute pixel size that never scales with anything.",
      "<b>Responsive / relative:</b> <code>%</code> (relative to parent), <code>em</code> (relative to parent's font-size), <code>rem</code> (relative to the root/html font-size), <code>vw</code>/<code>vh</code> (relative to viewport width/height)."
    ]},
    {tag:"good", h:"Relative sizing example", code:
`<span class="kw">html</span> { <span class="fn">font-size</span>: <span class="num">16px</span>; }
<span class="kw">.card</span> { <span class="fn">font-size</span>: <span class="num">1.5rem</span>; }      <span class="cmt">/* = 24px, based on root */</span>
<span class="kw">.card</span> <span class="kw">p</span> { <span class="fn">font-size</span>: <span class="num">0.9em</span>; }    <span class="cmt">/* = 90% of .card's font-size */</span>
<span class="kw">.hero</span> { <span class="fn">width</span>: <span class="num">100vw</span>; <span class="fn">height</span>: <span class="num">60vh</span>; }`},
    {tag:"gotcha", h:"em vs rem", p:["<code>em</code> compounds &mdash; it's relative to its own parent, so nested ems can stack unexpectedly. <code>rem</code> always refers back to the root, which is why it's usually the safer default for consistent scaling."]}
  ]},

{cat:"HTML / CSS", id:"selectors", title:"CSS Selectors: Descendancy & Pseudo-classes", sub:"Targeting nested elements and element states.",
  blocks:[
    {tag:"concept", h:"Descendant selectors", p:[
      "A space between two selectors means \"any descendant, at any depth.\" A <code>&gt;</code> means \"direct child only.\""
    ]},
    {tag:"good", h:"Descendancy", code:
`<span class="kw">nav</span> <span class="kw">a</span> { <span class="fn">color</span>: <span class="str">blue</span>; }        <span class="cmt">/* any &lt;a&gt; inside &lt;nav&gt;, any depth */</span>
<span class="kw">.card</span> <span class="kw">&gt;</span> <span class="kw">p</span> { <span class="fn">margin</span>: <span class="num">0</span>; }     <span class="cmt">/* only &lt;p&gt; that is a DIRECT child of .card */</span>`},
    {tag:"concept", h:"Pseudo-classes", p:[
      "Pseudo-classes select an element based on state or position, not structure. Common ones: <code>:hover</code>, <code>:focus</code>, <code>:first-child</code>, <code>:last-child</code>, <code>:nth-child()</code>, <code>:not()</code>."
    ]},
    {tag:"good", h:"Pseudo-class examples", code:
`<span class="kw">button:hover</span> { <span class="fn">background</span>: <span class="str">#333</span>; }
<span class="kw">li:first-child</span> { <span class="fn">font-weight</span>: <span class="kw">bold</span>; }
<span class="kw">li:nth-child(2n)</span> { <span class="fn">background</span>: <span class="str">#eee</span>; } <span class="cmt">/* every even li */</span>`}
  ]},

{cat:"HTML / CSS", id:"media", title:"Media Queries", sub:"min-width / max-width conditions, and where they live in your CSS.",
  blocks:[
    {tag:"concept", h:"Concept", p:[
      "A media query wraps normal CSS rules in a condition based on the viewport. <code>min-width</code> means \"apply when the viewport is at least this wide\" (mobile-first, scaling up). <code>max-width</code> means \"apply when the viewport is at most this wide\" (desktop-first, scaling down)."
    ]},
    {tag:"good", h:"Where it belongs: top-level, after the base styles", code:
`<span class="cmt">/* base/mobile styles first */</span>
<span class="kw">.container</span> { <span class="fn">display</span>: <span class="kw">block</span>; }

<span class="cmt">/* then override for larger screens */</span>
<span class="kw">@media</span> (<span class="fn">min-width</span>: <span class="num">768px</span>) {
  <span class="kw">.container</span> { <span class="fn">display</span>: <span class="kw">flex</span>; }
}`},
    {tag:"gotcha", h:"Exam angle", p:["Media query blocks are written at the <b>top level</b> of the stylesheet (same level as a normal selector) &mdash; not nested inside another rule in plain CSS. A common wrong-answer trap is showing a media query nested incorrectly inside a class rule."]}
  ]},

{cat:"HTML / CSS", id:"reset", title:"Reset vs. Normalize CSS", sub:"Two strategies for taming browser default styles.",
  blocks:[
    {tag:"concept", h:"Reset", p:["Strips out virtually all default browser styling (margins, padding, font sizes, list styles) so every browser starts from the same blank slate. You rebuild everything yourself."]},
    {tag:"concept", h:"Normalize", p:["Doesn't remove defaults &mdash; it makes them <i>consistent</i> across browsers while preserving useful defaults (like list bullets or heading sizes). Less rebuilding required."]},
    {tag:"good", h:"Tiny reset example", code:
`<span class="kw">*</span> {
  <span class="fn">margin</span>: <span class="num">0</span>;
  <span class="fn">padding</span>: <span class="num">0</span>;
  <span class="fn">box-sizing</span>: <span class="kw">border-box</span>;
}`}
  ]},

{cat:"HTML / CSS", id:"a11y", title:"Accessibility: Alt Text & ARIA", sub:"Making content usable for assistive technology.",
  blocks:[
    {tag:"concept", h:"Alt text", p:[
      "Every meaningful <code>&lt;img&gt;</code> needs an <code>alt</code> attribute describing the image's content/purpose for screen readers. If an image is purely decorative, use <code>alt=\"\"</code> (empty, but present) so screen readers skip it."
    ]},
    {tag:"good", h:"Alt text examples", code:
`<span class="tagname">&lt;img</span> <span class="fn">src</span>=<span class="str">"chart.png"</span> <span class="fn">alt</span>=<span class="str">"Bar chart showing 2024 sales by quarter"</span><span class="tagname">&gt;</span>
<span class="tagname">&lt;img</span> <span class="fn">src</span>=<span class="str">"decorative-swirl.png"</span> <span class="fn">alt</span>=<span class="str">""</span><span class="tagname">&gt;</span>  <span class="cmt">/* decorative: empty alt, not omitted */</span>`},
    {tag:"concept", h:"When ARIA is (and isn't) needed", p:[
      "Rule of thumb: <b>use semantic HTML first</b>. A native <code>&lt;button&gt;</code> already has the right role, keyboard support, and focus behavior built in &mdash; adding ARIA to it is unnecessary.",
      "ARIA is needed when you build custom widgets out of non-semantic elements (like a &lt;div&gt; acting as a button) and need to manually supply the role/state info the browser can't infer."
    ]},
    {tag:"bad", h:"ARIA where it's not needed", code:
`<span class="tagname">&lt;button</span> <span class="fn">role</span>=<span class="str">"button"</span><span class="tagname">&gt;</span>Save<span class="tagname">&lt;/button&gt;</span>  <span class="cmt">/* redundant, &lt;button&gt; already has this role */</span>`},
    {tag:"good", h:"ARIA where it IS needed", code:
`<span class="tagname">&lt;div</span> <span class="fn">role</span>=<span class="str">"button"</span> <span class="fn">tabindex</span>=<span class="str">"0"</span> <span class="fn">aria-pressed</span>=<span class="str">"false"</span><span class="tagname">&gt;</span>Save<span class="tagname">&lt;/div&gt;</span>
<span class="cmt">/* a div pretending to be a button needs ARIA to communicate its role/state */</span>`}
  ]},

{cat:"HTML / CSS", id:"forms", title:"Forms", sub:"Input attributes and the GET vs. POST method.",
  blocks:[
    {tag:"concept", h:"Common input attributes", p:[
      "<code>type</code> (text, email, number, checkbox...), <code>name</code> (the key sent with the form data), <code>id</code> (for label linkage), <code>placeholder</code>, <code>required</code>, <code>value</code>, <code>min</code>/<code>max</code>."
    ]},
    {tag:"good", h:"Input example", code:
`<span class="tagname">&lt;label</span> <span class="fn">for</span>=<span class="str">"email"</span><span class="tagname">&gt;</span>Email<span class="tagname">&lt;/label&gt;</span>
<span class="tagname">&lt;input</span> <span class="fn">type</span>=<span class="str">"email"</span> <span class="fn">id</span>=<span class="str">"email"</span> <span class="fn">name</span>=<span class="str">"email"</span> <span class="fn">required</span> <span class="fn">placeholder</span>=<span class="str">"you@example.com"</span><span class="tagname">&gt;</span>`},
    {tag:"concept", h:"GET vs. POST", p:[
      "<b>GET</b>: appends form data to the URL as a query string. Visible, bookmarkable, has length limits &mdash; good for searches/filters, not for sensitive data.",
      "<b>POST</b>: sends form data in the request body, not the URL. Not visible in the address bar, no practical size limit &mdash; used for sensitive data or anything that changes server state (logins, submissions)."
    ]},
    {tag:"good", h:"Method attribute", code:
`<span class="tagname">&lt;form</span> <span class="fn">action</span>=<span class="str">"/search"</span> <span class="fn">method</span>=<span class="str">"GET"</span><span class="tagname">&gt;</span> ... <span class="tagname">&lt;/form&gt;</span>
<span class="tagname">&lt;form</span> <span class="fn">action</span>=<span class="str">"/login"</span> <span class="fn">method</span>=<span class="str">"POST"</span><span class="tagname">&gt;</span> ... <span class="tagname">&lt;/form&gt;</span>`}
  ]},

{cat:"HTML / CSS", id:"flexbox", title:"Flexbox", sub:"justify-content and flex-direction.",
  blocks:[
    {tag:"concept", h:"flex-direction", p:[
      "Sets the <b>main axis</b>. <code>row</code> (default) = left-to-right horizontally. <code>column</code> = top-to-bottom vertically. This decision changes what \"main axis\" means for every other flex property."
    ]},
    {tag:"concept", h:"justify-content", p:[
      "Aligns items along the <b>main axis</b>: <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>."
    ]},
    {tag:"good", h:"Flexbox example", code:
`<span class="kw">.nav</span> {
  <span class="fn">display</span>: <span class="kw">flex</span>;
  <span class="fn">flex-direction</span>: <span class="kw">row</span>;
  <span class="fn">justify-content</span>: <span class="kw">space-between</span>;
}`},
    {tag:"gotcha", h:"Exam angle", p:["If <code>flex-direction: column</code> is set, <code>justify-content</code> now controls <i>vertical</i> alignment, not horizontal &mdash; a very common trick question."]}
  ]},

{cat:"HTML / CSS", id:"linkjs", title:"Linking JS to HTML", sub:"How and where to attach a script tag.",
  blocks:[
    {tag:"good", h:"Two valid patterns", code:
`<span class="cmt">&lt;!-- Option 1: in head, with defer --&gt;</span>
<span class="tagname">&lt;script</span> <span class="fn">src</span>=<span class="str">"app.js"</span> <span class="kw">defer</span><span class="tagname">&gt;&lt;/script&gt;</span>

<span class="cmt">&lt;!-- Option 2: right before closing &lt;/body&gt;, no defer needed --&gt;</span>
<span class="tagname">&lt;/main&gt;</span>
<span class="tagname">&lt;script</span> <span class="fn">src</span>=<span class="str">"app.js"</span><span class="tagname">&gt;&lt;/script&gt;</span>
<span class="tagname">&lt;/body&gt;</span>`},
    {tag:"gotcha", h:"Why", p:["By the time the parser reaches the end of &lt;body&gt;, the DOM already exists, so a script placed there can safely query elements without <code>defer</code>."]}
  ]},

/* ================= JAVASCRIPT ================= */

{cat:"JavaScript", id:"vars", title:"Variables, Constants & Scope", sub:"let, const, var, and where a variable is visible.",
  blocks:[
    {tag:"concept", h:"let vs const vs var", p:[
      "<code>let</code>: block-scoped, reassignable. <code>const</code>: block-scoped, <b>cannot</b> be reassigned (but object/array contents can still be mutated). <code>var</code>: function-scoped (not block-scoped) &mdash; avoid it in modern code."
    ]},
    {tag:"good", h:"Scope example", code:
`<span class="kw">let</span> count = <span class="num">0</span>;
<span class="kw">const</span> MAX = <span class="num">10</span>;

<span class="kw">if</span> (count &lt; MAX) {
  <span class="kw">let</span> message = <span class="str">"under max"</span>;  <span class="cmt">// only exists inside this block</span>
}
<span class="cmt">// console.log(message);  // ReferenceError: message is not defined</span>`},
    {tag:"bad", h:"Reassigning a const", code:
`<span class="kw">const</span> total = <span class="num">100</span>;
total = <span class="num">200</span>;  <span class="cmt">// TypeError: Assignment to constant variable.</span>`}
  ]},

{cat:"JavaScript", id:"conditionals", title:"Conditionals (if)", sub:"if / else if / else syntax.",
  blocks:[
    {tag:"good", h:"if / else if / else", code:
`<span class="kw">let</span> score = <span class="num">82</span>;

<span class="kw">if</span> (score &gt;= <span class="num">90</span>) {
  <span class="fn">console</span>.log(<span class="str">"A"</span>);
} <span class="kw">else if</span> (score &gt;= <span class="num">80</span>) {
  <span class="fn">console</span>.log(<span class="str">"B"</span>);
} <span class="kw">else</span> {
  <span class="fn">console</span>.log(<span class="str">"C or below"</span>);
}`},
    {tag:"gotcha", h:"Truthy / falsy", p:["Falsy values: <code>false, 0, \"\", null, undefined, NaN</code>. Everything else, including <code>\"0\"</code> (a string) and empty arrays/objects, is truthy."]}
  ]},

{cat:"JavaScript", id:"dom-select", title:"DOM: Selecting Elements", sub:"querySelector, querySelectorAll, getElementById.",
  blocks:[
    {tag:"concept", h:"Differences", p:[
      "<code>getElementById('id')</code> &mdash; fastest, returns one element, no leading # needed.",
      "<code>querySelector('css-selector')</code> &mdash; returns the <b>first</b> match of any valid CSS selector.",
      "<code>querySelectorAll('css-selector')</code> &mdash; returns a <b>NodeList</b> of ALL matches (not a live array &mdash; use forEach or spread to loop)."
    ]},
    {tag:"good", h:"Selecting elements", code:
`<span class="kw">const</span> title = document.<span class="fn">getElementById</span>(<span class="str">"page-title"</span>);
<span class="kw">const</span> firstCard = document.<span class="fn">querySelector</span>(<span class="str">".card"</span>);
<span class="kw">const</span> allCards = document.<span class="fn">querySelectorAll</span>(<span class="str">".card"</span>);

allCards.<span class="fn">forEach</span>(card =&gt; {
  <span class="fn">console</span>.log(card);
});`},
    {tag:"bad", h:"Common syntax slip", code:
`<span class="kw">const</span> title = document.<span class="fn">getElementById</span>(<span class="str">"#page-title"</span>);
<span class="cmt">// WRONG: getElementById takes just the id name, no "#"</span>`}
  ]},

{cat:"JavaScript", id:"dom-class", title:"DOM: classList", sub:"add, remove, toggle, contains.",
  blocks:[
    {tag:"good", h:"classList methods", code:
`<span class="kw">const</span> box = document.<span class="fn">querySelector</span>(<span class="str">".box"</span>);

box.classList.<span class="fn">add</span>(<span class="str">"active"</span>);
box.classList.<span class="fn">remove</span>(<span class="str">"hidden"</span>);
box.classList.<span class="fn">toggle</span>(<span class="str">"open"</span>);
<span class="kw">if</span> (box.classList.<span class="fn">contains</span>(<span class="str">"active"</span>)) { ... }`},
    {tag:"gotcha", h:"Exam angle", p:["There is no <code>.addClass()</code> method in vanilla JS (that's jQuery). Vanilla JS uses <code>classList.add()</code>. Watch for that trap on the exam."]}
  ]},

{cat:"JavaScript", id:"dom-content", title:"DOM: innerHTML vs. textContent vs. innerText", sub:"Three ways to read/write an element's contents.",
  blocks:[
    {tag:"concept", h:"Differences", p:[
      "<code>innerHTML</code> reads/writes markup &mdash; it will parse any HTML tags you assign to it.",
      "<code>textContent</code> reads/writes plain text only, including hidden elements, and ignores styling.",
      "<code>innerText</code> reads/writes the <i>rendered</i> visible text only (respects CSS like <code>display:none</code>), and is more performance-costly since it triggers layout."
    ]},
    {tag:"good", h:"Usage", code:
`el.innerHTML = <span class="str">"&lt;strong&gt;Bold!&lt;/strong&gt;"</span>;  <span class="cmt">// renders as bold text</span>
el.textContent = <span class="str">"&lt;strong&gt;Bold!&lt;/strong&gt;"</span>;  <span class="cmt">// literally shows the tags as text</span>`}
  ]},

{cat:"JavaScript", id:"dom-create", title:"DOM: createElement & appendChild", sub:"Building new elements dynamically.",
  blocks:[
    {tag:"good", h:"Creating and inserting an element", code:
`<span class="kw">const</span> li = document.<span class="fn">createElement</span>(<span class="str">"li"</span>);
li.textContent = <span class="str">"New item"</span>;

<span class="kw">const</span> list = document.<span class="fn">querySelector</span>(<span class="str">"ul"</span>);
list.<span class="fn">appendChild</span>(li);`},
    {tag:"bad", h:"Misspelled method (exam trap)", code:
`list.<span class="fn">apendChild</span>(li);  <span class="cmt">// TypeError: list.apendChild is not a function &mdash; it's appendChild (two p's)</span>`}
  ]},

{cat:"JavaScript", id:"dom-style-value", title:"DOM: .style and .value", sub:"Reading/writing inline styles and form input values.",
  blocks:[
    {tag:"good", h:".style", code:
`<span class="kw">const</span> box = document.<span class="fn">querySelector</span>(<span class="str">".box"</span>);
box.style.backgroundColor = <span class="str">"tomato"</span>;
box.style.display = <span class="str">"none"</span>;
<span class="cmt">// CSS properties become camelCase in JS: background-color -> backgroundColor</span>`},
    {tag:"good", h:".value (for form inputs)", code:
`<span class="kw">const</span> input = document.<span class="fn">querySelector</span>(<span class="str">"#name"</span>);
<span class="fn">console</span>.log(input.value);       <span class="cmt">// read what the user typed</span>
input.value = <span class="str">""</span>;                <span class="cmt">// clear the field</span>`}
  ]},

{cat:"JavaScript", id:"events", title:"Events: addEventListener", sub:"Listening for user interaction.",
  blocks:[
    {tag:"good", h:"Basic listener", code:
`<span class="kw">const</span> btn = document.<span class="fn">querySelector</span>(<span class="str">"button"</span>);

btn.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () =&gt; {
  <span class="fn">console</span>.log(<span class="str">"clicked!"</span>);
});`},
    {tag:"good", h:"Using the event object", code:
`btn.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (event) =&gt; {
  event.preventDefault();     <span class="cmt">// stop default browser behavior (e.g. form submit)</span>
  <span class="fn">console</span>.log(event.target); <span class="cmt">// the element that was clicked</span>
});`},
    {tag:"gotcha", h:"Exam angle", p:["The event type goes in quotes as a string (<code>\"click\"</code>, <code>\"submit\"</code>, <code>\"input\"</code>) &mdash; not as a bare word, and not prefixed with 'on' like the old <code>onclick=</code> attribute style."]}
  ]},

{cat:"JavaScript", id:"sort", title:"Sorting: .sort() & Compare Functions", sub:"Why default sort breaks on numbers.",
  blocks:[
    {tag:"bad", h:"Default sort on numbers (broken)", code:
`<span class="kw">const</span> nums = [<span class="num">10</span>, <span class="num">2</span>, <span class="num">33</span>, <span class="num">4</span>];
nums.<span class="fn">sort</span>();
<span class="cmt">// With no compare function, .sort() converts items to STRINGS</span>
<span class="cmt">// and compares them character-by-character.</span>
<span class="cmt">// Actual result: [ 10, 2, 33, 4 ]  (looks "sorted" but is wrong —</span>
<span class="cmt">// "10" sorts before "2" alphabetically, as a string)</span>`},
    {tag:"good", h:"Correct numeric sort with a compare function", code:
`<span class="kw">const</span> nums = [<span class="num">10</span>, <span class="num">2</span>, <span class="num">33</span>, <span class="num">4</span>];

nums.<span class="fn">sort</span>((a, b) =&gt; a - b);   <span class="cmt">// ascending: [2, 4, 10, 33]</span>
nums.<span class="fn">sort</span>((a, b) =&gt; b - a);   <span class="cmt">// descending: [33, 10, 4, 2]</span>`},
    {tag:"gotcha", h:"How the compare function works", p:[
      "If the callback returns a <b>negative</b> number, <code>a</code> comes first. If it returns <b>positive</b>, <code>b</code> comes first. If <b>zero</b>, order is unchanged. <code>a - b</code> is the classic ascending-numbers pattern."
    ]}
  ]},

{cat:"JavaScript", id:"functions", title:"Functions: Declarations, Expressions, Arrow, Params", sub:"The four ways to write a function, and how parameters work.",
  blocks:[
    {tag:"good", h:"Function declaration", code:
`<span class="kw">function</span> <span class="fn">greet</span>(name) {
  <span class="kw">return</span> <span class="str">\`Hello, \${name}!\`</span>;
}
<span class="cmt">// hoisted: can be called before its definition appears in the file</span>`},
    {tag:"good", h:"Function expression", code:
`<span class="kw">const</span> greet = <span class="kw">function</span>(name) {
  <span class="kw">return</span> <span class="str">\`Hello, \${name}!\`</span>;
};
<span class="cmt">// NOT hoisted the same way — must be defined before it's called</span>`},
    {tag:"good", h:"Anonymous function (as a callback)", code:
`setTimeout(<span class="kw">function</span>() {
  <span class="fn">console</span>.log(<span class="str">"ran later"</span>);
}, <span class="num">1000</span>);
<span class="cmt">// "anonymous" = no name after the function keyword</span>`},
    {tag:"good", h:"Arrow function", code:
`<span class="kw">const</span> greet = (name) =&gt; {
  <span class="kw">return</span> <span class="str">\`Hello, \${name}!\`</span>;
};

<span class="cmt">// implicit return, single expression, no braces/return needed:</span>
<span class="kw">const</span> square = n =&gt; n * n;`},
    {tag:"gotcha", h:"Parameters vs. arguments", p:["<b>Parameters</b> are the named placeholders in the function definition (<code>name</code> above). <b>Arguments</b> are the actual values passed in when you call it (<code>greet(\"Sam\")</code> &mdash; <code>\"Sam\"</code> is the argument)."]}
  ]},

{cat:"JavaScript", id:"arrays", title:"Arrays: Indexing, .length, Adding Values", sub:"Zero-based indexing and mutating arrays.",
  blocks:[
    {tag:"concept", h:"Zero indexing", p:["The first element is at index <code>0</code>, not <code>1</code>. The last element is always at index <code>array.length - 1</code>."]},
    {tag:"good", h:"Indexing & length", code:
`<span class="kw">const</span> fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>];

fruits[<span class="num">0</span>];              <span class="cmt">// "apple"  (first item)</span>
fruits[fruits.length - <span class="num">1</span>]; <span class="cmt">// "cherry" (last item)</span>
fruits.length;             <span class="cmt">// 3</span>`},
    {tag:"good", h:"Adding values", code:
`fruits.<span class="fn">push</span>(<span class="str">"date"</span>);     <span class="cmt">// add to the END: ["apple","banana","cherry","date"]</span>
fruits.<span class="fn">unshift</span>(<span class="str">"kiwi"</span>);  <span class="cmt">// add to the START</span>`}
  ]},

{cat:"JavaScript", id:"objarrays", title:"Arrays of Objects", sub:"Accessing property values and calling methods on object elements.",
  blocks:[
    {tag:"good", h:"Array of objects", code:
`<span class="kw">const</span> users = [
  { name: <span class="str">"Ana"</span>, age: <span class="num">28</span> },
  { name: <span class="str">"Ben"</span>, age: <span class="num">34</span> }
];

users[<span class="num">0</span>].name;        <span class="cmt">// "Ana" — dot notation</span>
users[<span class="num">1</span>][<span class="str">"age"</span>];      <span class="cmt">// 34 — bracket notation (useful for dynamic keys)</span>`},
    {tag:"good", h:"Looping and calling methods", code:
`users.<span class="fn">forEach</span>(user =&gt; {
  <span class="fn">console</span>.log(user.name.<span class="fn">toUpperCase</span>());  <span class="cmt">// calling a string method on a property</span>
});`}
  ]},

{cat:"JavaScript", id:"arraymethods", title:"Array Methods: forEach, map, filter, reduce", sub:"The four core iteration methods and how their return values differ.",
  blocks:[
    {tag:"concept", h:"Key difference", p:[
      "<code>forEach</code>: loops, returns <code>undefined</code> — used for side effects only.",
      "<code>map</code>: returns a <b>new array</b>, same length, transformed.",
      "<code>filter</code>: returns a <b>new array</b>, possibly shorter, only items that pass the test.",
      "<code>reduce</code>: collapses the array down to a <b>single value</b> (sum, object, string, etc.)."
    ]},
    {tag:"good", h:"All four side by side", code:
`<span class="kw">const</span> nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>];

nums.<span class="fn">forEach</span>(n =&gt; <span class="fn">console</span>.log(n));        <span class="cmt">// logs each, returns undefined</span>
<span class="kw">const</span> doubled = nums.<span class="fn">map</span>(n =&gt; n * <span class="num">2</span>);      <span class="cmt">// [2, 4, 6, 8]</span>
<span class="kw">const</span> evens   = nums.<span class="fn">filter</span>(n =&gt; n % <span class="num">2</span> === <span class="num">0</span>); <span class="cmt">// [2, 4]</span>
<span class="kw">const</span> total   = nums.<span class="fn">reduce</span>((acc, n) =&gt; acc + n, <span class="num">0</span>); <span class="cmt">// 10</span>`},
    {tag:"gotcha", h:"reduce's signature", p:["<code>reduce((accumulator, currentValue) =&gt; ..., initialValue)</code>. The second argument to <code>reduce</code> (here <code>0</code>) sets the starting value of the accumulator — forgetting it is a common bug."]}
  ]},

{cat:"JavaScript", id:"datatypes", title:"Data Types & == vs. ===", sub:"Primitive types and loose vs. strict equality.",
  blocks:[
    {tag:"concept", h:"Primitive data types", p:["<code>string</code>, <code>number</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, plus the non-primitive <code>object</code> (arrays and functions are technically objects)."]},
    {tag:"concept", h:"== vs. ===", p:[
      "<code>==</code> (loose equality) converts types before comparing &mdash; can produce surprising \"true\" results.",
      "<code>===</code> (strict equality) compares value <b>and</b> type, with no conversion. This is the one you should default to."
    ]},
    {tag:"good", h:"Comparing", code:
`<span class="num">5</span> == <span class="str">"5"</span>;    <span class="cmt">// true  — string coerced to number</span>
<span class="num">5</span> === <span class="str">"5"</span>;   <span class="cmt">// false — different types, no coercion</span>
<span class="num">0</span> == <span class="kw">false</span>; <span class="cmt">// true  — coercion again</span>
<span class="num">0</span> === <span class="kw">false</span>;<span class="cmt">// false — number vs boolean</span>`}
  ]},

{cat:"JavaScript", id:"concat", title:"String Concatenation", sub:"Joining strings with + vs. template literals.",
  blocks:[
    {tag:"concept", h:"Two approaches", p:[
      "The <code>+</code> operator joins strings (and converts other types to strings when mixed with a string).",
      "<b>Template literals</b> use backticks and <code>${ }</code> to embed expressions directly — the modern, more readable approach."
    ]},
    {tag:"good", h:"Plus-operator concatenation", code:
`<span class="kw">const</span> first = <span class="str">"Jane"</span>;
<span class="kw">const</span> age = <span class="num">30</span>;
<span class="kw">const</span> msg = <span class="str">"Hi, "</span> + first + <span class="str">"! You are "</span> + age + <span class="str">" years old."</span>;`},
    {tag:"good", h:"Template literal (preferred)", code:
`<span class="kw">const</span> msg = <span class="str">\`Hi, \${first}! You are \${age} years old.\`</span>;
<span class="cmt">// Note: backticks (\`), not quotes — and \${ } for embedded expressions</span>`},
    {tag:"bad", h:"Common syntax mistakes", code:
`<span class="kw">const</span> msg = <span class="str">"Hi, {first}!"</span>;      <span class="cmt">// WRONG: regular quotes don't interpolate {first}</span>
<span class="kw">const</span> msg2 = <span class="str">'Hi, $\{first}!'</span>;    <span class="cmt">// WRONG: single quotes don't support \${ } either — needs backticks</span>`}
  ]},

{cat:"JavaScript", id:"forloop", title:"The for Loop", sub:"Classic three-part loop syntax.",
  blocks:[
    {tag:"good", h:"Standard for loop", code:
`<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; <span class="num">5</span>; i++) {
  <span class="fn">console</span>.log(i);   <span class="cmt">// logs 0,1,2,3,4</span>
}`},
    {tag:"concept", h:"The three parts", p:["<code>initialization</code> (runs once) <b>;</b> <code>condition</code> (checked before each pass) <b>;</b> <code>final expression</code> (runs after each pass, before re-checking the condition)."]},
    {tag:"good", h:"Looping over an array by index", code:
`<span class="kw">const</span> colors = [<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>];
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; colors.length; i++) {
  <span class="fn">console</span>.log(colors[i]);
}`}
  ]},

{cat:"JavaScript", id:"random", title:"Random Numbers with Math.floor", sub:"Generating a random whole number in a range.",
  blocks:[
    {tag:"concept", h:"Why floor?", p:["<code>Math.random()</code> returns a decimal between 0 (inclusive) and 1 (exclusive). Multiplying it scales the range; <code>Math.floor()</code> rounds down to a whole number so you get a clean integer index/value."]},
    {tag:"good", h:"Random integer between 0 and N-1", code:
`<span class="kw">const</span> rand = Math.<span class="fn">floor</span>(Math.<span class="fn">random</span>() * <span class="num">10</span>);
<span class="cmt">// whole number from 0 to 9</span>`},
    {tag:"good", h:"Random integer in a min–max range", code:
`<span class="kw">function</span> <span class="fn">randomInRange</span>(min, max) {
  <span class="kw">return</span> Math.<span class="fn">floor</span>(Math.<span class="fn">random</span>() * (max - min + <span class="num">1</span>)) + min;
}
<span class="fn">randomInRange</span>(<span class="num">1</span>, <span class="num">6</span>);  <span class="cmt">// simulates a die roll: 1-6</span>`}
  ]}
];

/* =========================================================
   QUIZ DATA — spot-the-correct-syntax
   ========================================================= */
const quiz = [
  {q:"Which correctly selects <b>all</b> elements with class <code>.item</code>?",
   code:null,
   opts:["document.querySelector('.item')","document.getElementById('.item')","document.querySelectorAll('.item')","document.class('item')"],
   correct:2, fb:"querySelectorAll returns every match as a NodeList; querySelector only returns the first."},

  {q:"Which correctly adds a class to an element without a jQuery-style method?",
   code:null,
   opts:["el.addClass('active')","el.classList.add('active')","el.class.add('active')","el.classes.push('active')"],
   correct:1, fb:"Vanilla JS uses classList.add() — .addClass() is a jQuery method, not native JS."},

  {q:"Which is valid string interpolation for <code>name = \"Sam\"</code>?",
   code:null,
   opts:["'Hello, {name}!'","\"Hello, ${name}!\"","`Hello, ${name}!`","'Hello, ' . name . '!'"],
   correct:2, fb:"Template literals require backticks (`) around the string, with ${ } for embedded expressions."},

  {q:"Which correctly appends a new &lt;li&gt; to a &lt;ul&gt;?",
   code:null,
   opts:["list.apendChild(li)","list.appendChild(li)","list.appendChild = li","list.append.Child(li)"],
   correct:1, fb:"appendChild is spelled with two p's — 'apendChild' is a common typo trap."},

  {q:"Which comparison uses <b>strict</b> equality (checks type and value)?",
   code:null,
   opts:["5 == '5'","5 === '5'","5 = '5'","5 != '5'"],
   correct:1, fb:"=== is strict equality: no type coercion. 5 === '5' is actually false because number !== string."},

  {q:"Which array method returns a brand-new array containing only items that pass a test?",
   code:null,
   opts:["forEach","map","filter","reduce"],
   correct:2, fb:"filter() keeps only items where the callback returns true; map() transforms every item but keeps the same length."},

  {q:"Which arrow function correctly returns the square of n with implicit return?",
   code:null,
   opts:["const square = (n) => { n * n }","const square = n => n * n","const square = n => { return n * n }","const square == n => n * n"],
   correct:1, fb:"Both option 2 and 3 work, but option 2 is the true 'implicit return' form (no braces, no return keyword needed). Option 1 is missing 'return' inside braces so it returns undefined."},

  {q:"What is the index of the <b>last</b> item in array <code>arr</code>?",
   code:null,
   opts:["arr.length","arr.length - 1","arr.length + 1","arr[last]"],
   correct:1, fb:"Arrays are zero-indexed, so the last valid index is always length - 1."},

  {q:"Which correctly sorts an array of numbers in ascending order?",
   code:null,
   opts:["nums.sort()","nums.sort(a, b => a - b)","nums.sort((a, b) => a - b)","nums.sort() => a - b"],
   correct:2, fb:"sort() needs a compare function taking two params in parentheses: (a, b) => a - b. Plain .sort() compares as strings and breaks on multi-digit numbers."},

  {q:"Which is the correct syntax to declare a constant that can't be reassigned?",
   code:null,
   opts:["let MAX = 10;","var MAX = 10;","const MAX = 10;","final MAX = 10;"],
   correct:2, fb:"const creates a binding that can't be reassigned. 'final' isn't a JS keyword (that's Java)."},

  {q:"Which media query syntax is correctly placed and formatted?",
   code:null,
   opts:[
     ".container { @media (min-width: 768px) { display: flex; } }",
     "@media (min-width: 768px) { .container { display: flex; } }",
     "@media min-width: 768px { .container { display: flex; } }",
     "media(min-width: 768px) { .container { display: flex; } }"
   ],
   correct:1, fb:"Media queries wrap selectors at the top level of the stylesheet: @media (condition) { selector { ... } } — the condition needs parentheses."},

  {q:"Which input attribute makes a field required before the form can submit?",
   code:null,
   opts:["mandatory","validate","required","needed"],
   correct:2, fb:"The boolean attribute is simply 'required' — e.g. <input required>."},

  {q:"Which reduce() call correctly sums an array starting from 0?",
   code:null,
   opts:[
     "nums.reduce((acc, n) => acc + n)",
     "nums.reduce((acc, n) => acc + n, 0)",
     "nums.reduce(0, (acc, n) => acc + n)",
     "nums.reduce(acc + n, 0)"
   ],
   correct:1, fb:"The initial value is the SECOND argument to reduce(), after the callback: reduce(callback, initialValue)."},

  {q:"Which correctly generates a random whole number from 0-9?",
   code:null,
   opts:[
     "Math.random() * 10",
     "Math.floor(Math.random() * 10)",
     "Math.floor(Math.random()) * 10",
     "Math.random(10)"
   ],
   correct:1, fb:"Math.random() gives a decimal 0–0.999...; multiply first by the range, THEN floor the result."},

 {q:"Which script tag placement in &lt;head&gt; safely allows DOM access on load?",
   code:null,
   opts:[
     "<script src='app.js'><\/script>",
     "<script src='app.js' defer><\/script>",
     "<script defer src='app.js' /script>",
     "<head src='app.js' defer></head>"
   ],
   correct:1, fb:"defer tells the browser to wait until HTML parsing is complete before running the script, so DOM elements exist when it runs."}
];

/* =========================================================
   FULL EXAM BANK — every topic, sectioned HTML / CSS / JS
   Randomized order + randomized answer positions each attempt.
   ========================================================= */
const examBank = {

"HTML": [
  {topic:"The <head> Section", q:"Which of these belongs inside the &lt;head&gt;, not the visible page content?",
   opts:["&lt;meta charset=\"UTF-8\"&gt;","&lt;h1&gt;Welcome&lt;/h1&gt;","&lt;img src=\"logo.png\"&gt;","&lt;p&gt;About us&lt;/p&gt;"],
   correct:0, fb:"The <head> holds metadata (charset, viewport, title, links) — never content the user reads on the page."},
  {topic:"The <head> Section", q:"Why does adding <code>defer</code> to a &lt;script&gt; in &lt;head&gt; make it safe to query the DOM?",
   opts:["It makes the script run twice","It waits to run the script until HTML parsing finishes","It loads the script from cache","It disables the script's syntax errors"],
   correct:1, fb:"defer downloads in the background but waits to execute until the HTML document has been fully parsed, so the DOM already exists."},
  {topic:"The <head> Section", q:"Without <code>defer</code>, a &lt;script&gt; placed in &lt;head&gt; that tries to query the DOM will typically...",
   opts:["Work fine every time","Fail, because the body hasn't been parsed yet","Automatically move itself to the bottom of the page","Only work in Chrome"],
   correct:1, fb:"A non-deferred script in <head> runs immediately, before the body exists, so DOM lookups return null."},

  {topic:"Semantic HTML", q:"Which element is semantic (describes meaning, not just a generic box)?",
   opts:["&lt;div&gt;", "&lt;span&gt;", "&lt;article&gt;", "&lt;b&gt;"],
   correct:2, fb:"<article> tells the browser and assistive tech what the content IS. <div> and <span> carry no inherent meaning."},
  {topic:"Semantic HTML", q:"What's the main reason screen readers benefit from semantic tags like &lt;nav&gt; and &lt;main&gt;?",
   opts:["They render faster","They convey structure/purpose, letting users jump between regions","They use less memory","They automatically translate content"],
   correct:1, fb:"Semantic landmarks let assistive tech announce and navigate page regions by their purpose."},
  {topic:"Semantic HTML", q:"&lt;div class=\"nav\"&gt; and &lt;div class=\"footer\"&gt; are examples of...",
   opts:["Semantic markup", "Non-semantic markup pretending to be structural", "ARIA roles", "Invalid HTML"],
   correct:1, fb:"A class name doesn't add meaning — <div> is still a generic, non-semantic container regardless of its class."},

  {topic:"Accessibility", q:"What's the correct alt text for a purely decorative image?",
   opts:["Omit the alt attribute entirely","alt=\"decorative image\"","alt=\"\" (empty, but present)","alt=\"null\""],
   correct:2, fb:"An empty (but present) alt=\"\" tells screen readers to skip the image, since it carries no content meaning."},
  {topic:"Accessibility", q:"When is adding ARIA attributes actually necessary?",
   opts:["On every element, always","Never — semantic HTML replaces ARIA completely","When building a custom widget out of non-semantic elements (e.g. a &lt;div&gt; acting as a button)","Only inside &lt;head&gt;"],
   correct:2, fb:"Native elements like <button> already have the right role/keyboard behavior built in. ARIA fills the gap only when you fake that behavior with generic elements."},
  {topic:"Accessibility", q:"What is the purpose of alt text on a meaningful &lt;img&gt;?",
   opts:["It changes the image's file size","It describes the image's content/purpose for screen readers","It sets the image's CSS class","It's required only for &lt;svg&gt; elements"],
   correct:1, fb:"alt text gives assistive technology (and broken-image fallback) a description of what the image conveys."},

  {topic:"Forms", q:"Which input attribute makes a field required before the form can submit?",
   opts:["mandatory","validate","required","needed"],
   correct:2, fb:"The boolean attribute is simply 'required' — e.g. <input required>."},
  {topic:"Forms", q:"Which HTTP method appends form data to the URL as a visible query string?",
   opts:["POST","GET","PUT","PATCH"],
   correct:1, fb:"GET puts data in the URL — visible, bookmarkable, and size-limited. POST sends it in the request body instead."},
  {topic:"Forms", q:"What does &lt;label for=\"email\"&gt; do?",
   opts:["Sets the input's default value","Links the label to the &lt;input id=\"email\"&gt; so clicking the label focuses it","Validates the email format","Nothing — 'for' isn't a real attribute"],
   correct:1, fb:"The label's 'for' attribute must match the input's 'id', creating a clickable/accessible association between them."},

  {topic:"Linking JS to HTML", q:"Which script tag placement in &lt;head&gt; safely allows DOM access on load?",
   opts:["&lt;script src='app.js'&gt;&lt;/script&gt;","&lt;script src='app.js' defer&gt;&lt;/script&gt;","&lt;script defer src='app.js' /script&gt;","&lt;head src='app.js' defer&gt;&lt;/head&gt;"],
   correct:1, fb:"defer tells the browser to wait until HTML parsing is complete before running the script, so DOM elements exist when it runs."},
  {topic:"Linking JS to HTML", q:"Why can a &lt;script&gt; placed right before &lt;/body&gt; safely skip the defer attribute?",
   opts:["Scripts at the bottom never touch the DOM","By that point in parsing, the DOM already exists","defer only works in &lt;head&gt;","It can't — defer is always required"],
   correct:1, fb:"The parser has already built the DOM by the time it reaches the end of <body>, so the script can query elements immediately."}
],

"CSS": [
  {topic:"Units of Measurement", q:"Which unit is fixed and does NOT scale with anything?",
   opts:["rem","%","px","vw"],
   correct:2, fb:"px is an absolute pixel size — it never adjusts based on parent, root, or viewport."},
  {topic:"Units of Measurement", q:"<code>rem</code> is always relative to...",
   opts:["The element's own previous font-size","The immediate parent's font-size","The root (&lt;html&gt;) font-size","The viewport width"],
   correct:2, fb:"rem = 'root em' — it always refers back to the html element's font-size, avoiding compounding."},
  {topic:"Units of Measurement", q:"Why can nested <code>em</code> values produce unexpected sizing?",
   opts:["em is not supported in modern browsers","em compounds — it's relative to its own parent's font-size, so nesting stacks the effect","em only works on text, not boxes","em is identical to px"],
   correct:1, fb:"Because each em is relative to its parent, stacking elements with em font-sizes multiplies the effect at each level."},

  {topic:"Selectors & Pseudo-classes", q:"What does <code>.card &gt; p</code> select?",
   opts:["Any &lt;p&gt; anywhere inside .card","Only a &lt;p&gt; that is a DIRECT child of .card","Any element named 'card' inside a &lt;p&gt;","All paragraphs on the page"],
   correct:1, fb:"The > combinator restricts the match to direct children only, unlike a plain space which matches any depth."},
  {topic:"Selectors & Pseudo-classes", q:"What does <code>li:nth-child(2n)</code> target?",
   opts:["Every odd-numbered &lt;li&gt;","Every even-numbered &lt;li&gt;","Only the 2nd &lt;li&gt;","Every &lt;li&gt; except the 2nd"],
   correct:1, fb:"2n generates 2, 4, 6... — the even-positioned children."},
  {topic:"Selectors & Pseudo-classes", q:"A pseudo-class like <code>:hover</code> selects an element based on...",
   opts:["Its tag name","Its position in the DOM tree only","A state or condition (like being hovered), not structure","Its file extension"],
   correct:2, fb:"Pseudo-classes target state/position (hover, focus, first-child) rather than the document's static structure."},

  {topic:"Media Queries", q:"Which media query syntax is correctly placed and formatted?",
   opts:[".container { @media (min-width: 768px) { display: flex; } }","@media (min-width: 768px) { .container { display: flex; } }","@media min-width: 768px { .container { display: flex; } }","media(min-width: 768px) { .container { display: flex; } }"],
   correct:1, fb:"Media queries wrap selectors at the top level of the stylesheet: @media (condition) { selector { ... } } — the condition needs parentheses."},
  {topic:"Media Queries", q:"A <code>min-width</code> media query applies when the viewport is...",
   opts:["At most this wide (shrinking down)","At least this wide (growing up)","Exactly this wide","Any width — min-width is ignored by browsers"],
   correct:1, fb:"min-width means 'apply when the viewport is at least this wide' — the basis of mobile-first design."},
  {topic:"Media Queries", q:"Mobile-first CSS typically writes base styles for small screens first, then overrides using...",
   opts:["max-width queries scaling down","min-width queries scaling up","No media queries at all","!important on every rule"],
   correct:1, fb:"Mobile-first starts small and layers on min-width queries as the viewport grows."},

  {topic:"Reset vs. Normalize", q:"A CSS 'reset' typically...",
   opts:["Adds new default styles browsers are missing","Strips out virtually all default browser styling so every browser starts identical","Only affects flexbox properties","Is the same thing as normalize.css"],
   correct:1, fb:"Reset stylesheets wipe out margins, padding, list styles, etc., so you rebuild everything yourself from a blank slate."},
  {topic:"Reset vs. Normalize", q:"How does 'normalize' differ from a hard reset?",
   opts:["It deletes the DOM before styling","It makes default styles consistent across browsers while keeping useful defaults","It only works with a build tool","It disables JavaScript styling"],
   correct:1, fb:"Normalize preserves helpful defaults (like heading sizes or bullets) but standardizes them across browsers instead of erasing them."},
  {topic:"Reset vs. Normalize", q:"Which snippet is a classic (partial) CSS reset?",
   opts:["* { margin: 0; padding: 0; box-sizing: border-box; }","body { font-size: normalize; }","html { reset: true; }","* { all: default; }"],
   correct:0, fb:"Zeroing out margin/padding on the universal selector and setting box-sizing is a textbook mini reset."},

  {topic:"Flexbox", q:"If <code>flex-direction: column</code> is set, what does <code>justify-content</code> now control?",
   opts:["Horizontal alignment, unchanged","Vertical alignment, since the main axis flipped","Nothing — justify-content is ignored in column mode","Font size"],
   correct:1, fb:"justify-content always aligns along the MAIN axis. Switching flex-direction to column makes vertical the main axis."},
  {topic:"Flexbox", q:"What does <code>justify-content: space-between</code> do?",
   opts:["Stacks all items in the center with no gaps","Pushes the first and last items to the edges, evenly spacing the rest between them","Hides every other item","Reverses the item order"],
   correct:1, fb:"space-between places extra space evenly between items, with no space at the outer edges."},
  {topic:"Flexbox", q:"What is the default value of <code>flex-direction</code>?",
   opts:["column","row","row-reverse","It has no default — it must always be set"],
   correct:1, fb:"row is the default: items lay out left-to-right along the horizontal main axis."}
],

"JavaScript": [
  {topic:"Variables & Scope", q:"Which is the correct syntax to declare a constant that can't be reassigned?",
   opts:["let MAX = 10;","var MAX = 10;","const MAX = 10;","final MAX = 10;"],
   correct:2, fb:"const creates a binding that can't be reassigned. 'final' isn't a JS keyword (that's Java)."},
  {topic:"Variables & Scope", q:"Which keyword is block-scoped AND reassignable?",
   opts:["var","let","const","static"],
   correct:1, fb:"let is block-scoped like const, but unlike const it CAN be reassigned. var is function-scoped, not block-scoped."},
  {topic:"Variables & Scope", q:"Why is <code>var</code> generally avoided in modern JS?",
   opts:["It's slower to execute","It's function-scoped instead of block-scoped, which can leak variables out of blocks","It can't hold numbers","It was removed from the language"],
   correct:1, fb:"var ignores block boundaries (if/for/etc.) and is scoped to the whole function, which causes surprising bugs."},

  {topic:"Conditionals", q:"Which of these values is <b>falsy</b> in JavaScript?",
   opts:["\"0\" (a string)","[] (an empty array)","0 (the number)","{} (an empty object)"],
   correct:2, fb:"The falsy values are: false, 0, \"\", null, undefined, NaN. The string \"0\", [], and {} are all truthy."},
  {topic:"Conditionals", q:"Which is valid if / else if / else syntax?",
   opts:["if score >= 90 { }", "if (score >= 90) { } else if (score >= 80) { } else { }", "if (score >= 90) then { }", "if score >= 90: else score >= 80:"],
   correct:1, fb:"JS requires parentheses around the condition and braces around each block; 'else if' is two keywords."},
  {topic:"Conditionals", q:"Is the string <code>\"0\"</code> truthy or falsy?",
   opts:["Falsy, just like the number 0","Truthy — only the actual number 0 is falsy","It throws an error","Depends on the browser"],
   correct:1, fb:"Any non-empty string is truthy, even \"0\" or \"false\" — only the empty string \"\" is falsy."},

  {topic:"DOM: Selecting Elements", q:"Which correctly selects <b>all</b> elements with class <code>.item</code>?",
   opts:["document.querySelector('.item')","document.getElementById('.item')","document.querySelectorAll('.item')","document.class('item')"],
   correct:2, fb:"querySelectorAll returns every match as a NodeList; querySelector only returns the first."},
  {topic:"DOM: Selecting Elements", q:"What's wrong with <code>document.getElementById(\"#title\")</code>?",
   opts:["Nothing, it's correct","getElementById takes just the id name — no leading '#'","getElementById doesn't exist","It should be getElementByID (capital D)"],
   correct:1, fb:"Unlike querySelector, getElementById expects the bare id string, not a CSS selector with '#'."},
  {topic:"DOM: Selecting Elements", q:"<code>document.querySelector('.card')</code> returns...",
   opts:["Every element matching .card, as an array","Only the FIRST element that matches .card","Nothing unless .card is an id","A boolean"],
   correct:1, fb:"querySelector always returns just the first match in document order — use querySelectorAll for all matches."},

  {topic:"DOM: classList", q:"Which correctly adds a class to an element without a jQuery-style method?",
   opts:["el.addClass('active')","el.classList.add('active')","el.class.add('active')","el.classes.push('active')"],
   correct:1, fb:"Vanilla JS uses classList.add() — .addClass() is a jQuery method, not native JS."},
  {topic:"DOM: classList", q:"What does <code>el.classList.toggle('open')</code> do?",
   opts:["Always adds 'open'","Always removes 'open'","Adds 'open' if it's missing, removes it if it's present","Checks if 'open' exists and returns true/false only"],
   correct:2, fb:"toggle() flips the class's presence — on if it was off, off if it was on."},
  {topic:"DOM: classList", q:"How do you check whether an element currently has a class?",
   opts:["el.classList.has('active')","el.classList.includes('active')","el.classList.contains('active')","el.hasClass('active')"],
   correct:2, fb:"classList.contains() returns true/false for whether the class is present. .has()/.hasClass() aren't real DOM methods."},

  {topic:"innerHTML vs textContent", q:"Setting <code>el.innerHTML = \"&lt;strong&gt;Hi&lt;/strong&gt;\"</code> will...",
   opts:["Show the literal tag characters as text","Parse it and render bold text","Throw an error","Do nothing"],
   correct:1, fb:"innerHTML parses the string as markup and renders it — unlike textContent, which shows tags literally."},
  {topic:"innerHTML vs textContent", q:"Which property reflects only the visible, rendered text (respecting CSS like display:none)?",
   opts:["innerHTML","textContent","innerText","outerHTML"],
   correct:2, fb:"innerText is layout-aware and skips hidden text; textContent grabs ALL text regardless of CSS visibility."},
  {topic:"innerHTML vs textContent", q:"Setting <code>el.textContent = \"&lt;b&gt;Hi&lt;/b&gt;\"</code> will display...",
   opts:["Bold text reading 'Hi'","The literal characters &lt;b&gt;Hi&lt;/b&gt; as plain text","An error","An empty element"],
   correct:1, fb:"textContent never parses markup — it always treats the string as plain text, tags and all."},

  {topic:"DOM: createElement", q:"Which correctly appends a new &lt;li&gt; to a &lt;ul&gt;?",
   opts:["list.apendChild(li)","list.appendChild(li)","list.appendChild = li","list.append.Child(li)"],
   correct:1, fb:"appendChild is spelled with two p's — 'apendChild' is a common typo trap."},
  {topic:"DOM: createElement", q:"Which line correctly creates a brand-new &lt;li&gt; element (not yet in the page)?",
   opts:["document.createElement(\"li\")","document.newElement(\"li\")","document.makeElement(\"li\")","new Element(\"li\")"],
   correct:0, fb:"createElement(tagName) builds a detached element; it still needs appendChild (or similar) to be inserted into the DOM."},
  {topic:"DOM: createElement", q:"After creating <code>const li = document.createElement(\"li\")</code>, how do you set its visible text?",
   opts:["li.text = \"item\"","li.value = \"item\"","li.textContent = \"item\"","li.content = \"item\""],
   correct:2, fb:"textContent (or innerHTML) sets what's displayed inside the element; .text and .content aren't standard DOM properties."},

  {topic:".style and .value", q:"How do you set an element's background color via JS?",
   opts:["box.style.background-color = \"tomato\";","box.style['background-color'] = \"tomato\"; // only this form works","box.style.backgroundColor = \"tomato\";","box.css.backgroundColor = \"tomato\";"],
   correct:2, fb:"Hyphenated CSS properties become camelCase in JS: background-color → backgroundColor. (Bracket-string form also works, but dot-camelCase is standard.)"},
  {topic:".style and .value", q:"How do you read what a user typed into an &lt;input&gt;?",
   opts:["input.text","input.innerText","input.value","input.content"],
   correct:2, fb:"Form controls expose their current content through the .value property, not textContent/innerText."},
  {topic:".style and .value", q:"Which line clears a text input's contents?",
   opts:["input.value = \"\";","input.clear();","input.reset();","input.textContent = \"\";"],
   correct:0, fb:"Setting .value to an empty string clears the field. There's no built-in .clear() method on inputs."},

  {topic:"Events: addEventListener", q:"Which is the correct way to listen for a click event?",
   opts:["btn.addEventListener(click, handler)","btn.addEventListener(\"click\", handler)","btn.onEvent(\"click\", handler)","btn.click.addEventListener(handler)"],
   correct:1, fb:"The event type is a STRING in quotes (\"click\"), not a bare word — a common exam trap."},
  {topic:"Events: addEventListener", q:"What does <code>event.preventDefault()</code> do inside a form's submit handler?",
   opts:["Deletes the form from the DOM","Stops the browser's default action (like reloading the page on submit)","Prevents the event from ever firing again","Cancels all other event listeners"],
   correct:1, fb:"preventDefault() stops the browser's built-in behavior for that event, commonly used to stop a full-page form submission."},
  {topic:"Events: addEventListener", q:"Inside a click handler, what does <code>event.target</code> refer to?",
   opts:["The function that ran the handler","The element that was actually clicked","The document object","The event type as a string"],
   correct:1, fb:"event.target is the specific element the event originated from — useful when one listener handles multiple children."},

  {topic:"Sorting", q:"Which correctly sorts an array of numbers in ascending order?",
   opts:["nums.sort()","nums.sort(a, b => a - b)","nums.sort((a, b) => a - b)","nums.sort() => a - b"],
   correct:2, fb:"sort() needs a compare function taking two params in parentheses: (a, b) => a - b. Plain .sort() compares as strings and breaks on multi-digit numbers."},
  {topic:"Sorting", q:"Why does <code>[10, 2, 33, 4].sort()</code> (no compare function) NOT sort numerically?",
   opts:["sort() only works on strings, never arrays of numbers","With no compare function, items are converted to strings and compared character by character","It throws a TypeError","Arrays longer than 3 items can't be sorted"],
   correct:1, fb:"Default sort() does lexicographic (string) comparison, so \"10\" sorts before \"2\" — you need a numeric compare function to fix it."},
  {topic:"Sorting", q:"Which compare function sorts numbers in DESCENDING order?",
   opts:["(a, b) => a - b","(a, b) => b - a","(a, b) => a + b","(a, b) => a === b"],
   correct:1, fb:"b - a puts larger numbers first (a negative-first, positive-flips convention reversed from ascending)."},

  {topic:"Functions", q:"Which arrow function correctly returns the square of n with implicit return?",
   opts:["const square = (n) => { n * n }","const square = n => n * n","const square = n => { return n * n }","const square == n => n * n"],
   correct:1, fb:"True implicit return has no braces and no 'return' keyword. Option 1 is missing 'return' inside its braces, so it returns undefined."},
  {topic:"Functions", q:"What's the key difference between a function declaration and a function expression regarding hoisting?",
   opts:["Both are hoisted identically","Declarations are hoisted and callable before their line runs; expressions generally are not","Expressions are hoisted, declarations are not","Neither is ever hoisted"],
   correct:1, fb:"function greet(){} is hoisted fully. const greet = function(){} is not — the variable exists but isn't assigned until that line runs."},
  {topic:"Functions", q:"In <code>function greet(name) { ... } greet(\"Sam\")</code>, what is <code>\"Sam\"</code> called?",
   opts:["A parameter","An argument","A method","A callback"],
   correct:1, fb:"Parameters are the named placeholders in the definition (name); arguments are the actual values passed at call time (\"Sam\")."},

  {topic:"Arrays", q:"What is the index of the <b>last</b> item in array <code>arr</code>?",
   opts:["arr.length","arr.length - 1","arr.length + 1","arr[last]"],
   correct:1, fb:"Arrays are zero-indexed, so the last valid index is always length - 1."},
  {topic:"Arrays", q:"Which method adds an item to the END of an array?",
   opts:["fruits.unshift(\"date\")","fruits.push(\"date\")","fruits.append(\"date\")","fruits.add(\"date\")"],
   correct:1, fb:"push() adds to the end; unshift() adds to the start. append()/add() aren't array methods."},
  {topic:"Arrays", q:"What is the index of the FIRST element in any array?",
   opts:["1","0","-1","It depends on the array"],
   correct:1, fb:"JavaScript arrays are always zero-indexed — the first element is always at index 0."},

  {topic:"Arrays of Objects", q:"Given <code>users = [{name:\"Ana\"}]</code>, which correctly reads the name?",
   opts:["users.name[0]","users[0].name","users(0).name","users{0}.name"],
   correct:1, fb:"Index the array first with [0], then use dot notation to access the property: users[0].name."},
  {topic:"Arrays of Objects", q:"When would you use bracket notation (<code>obj[\"age\"]</code>) instead of dot notation (<code>obj.age</code>)?",
   opts:["Never — bracket notation is invalid JS","When the property name is dynamic (stored in a variable)","Only for arrays, never for objects","Bracket notation is faster in every case"],
   correct:1, fb:"Bracket notation lets you use a variable or computed string as the key, which dot notation can't do."},
  {topic:"Arrays of Objects", q:"In <code>users.forEach(user =&gt; console.log(user.name.toUpperCase()))</code>, what is happening?",
   opts:["Calling a built-in array method on each object's name property","Mutating the users array directly","Sorting users alphabetically","Throwing an error since forEach can't access properties"],
   correct:0, fb:"Inside the callback, user.name is a string, and .toUpperCase() is a string method being called on it."},

  {topic:"Array Methods", q:"Which array method returns a brand-new array containing only items that pass a test?",
   opts:["forEach","map","filter","reduce"],
   correct:2, fb:"filter() keeps only items where the callback returns true; map() transforms every item but keeps the same length."},
  {topic:"Array Methods", q:"Which reduce() call correctly sums an array starting from 0?",
   opts:["nums.reduce((acc, n) => acc + n)","nums.reduce((acc, n) => acc + n, 0)","nums.reduce(0, (acc, n) => acc + n)","nums.reduce(acc + n, 0)"],
   correct:1, fb:"The initial value is the SECOND argument to reduce(), after the callback: reduce(callback, initialValue)."},
  {topic:"Array Methods", q:"What's the key difference between <code>map()</code> and <code>forEach()</code>?",
   opts:["They're exactly the same","map() returns a new transformed array; forEach() returns undefined and is used for side effects","forEach() is newer and always preferred","map() can only be used on strings"],
   correct:1, fb:"map() builds and returns a new array of the same length; forEach() just loops and always returns undefined."},

  {topic:"Data Types & Equality", q:"Which comparison uses <b>strict</b> equality (checks type and value)?",
   opts:["5 == '5'","5 === '5'","5 = '5'","5 != '5'"],
   correct:1, fb:"=== is strict equality: no type coercion. 5 === '5' is actually false because number !== string."},
  {topic:"Data Types & Equality", q:"Which of these is NOT a JavaScript primitive type?",
   opts:["string","boolean","object","number"],
   correct:2, fb:"object is a non-primitive/reference type. The primitives are string, number, boolean, undefined, and null."},
  {topic:"Data Types & Equality", q:"Why does <code>0 == false</code> evaluate to <code>true</code>?",
   opts:["It doesn't — this is false","== performs type coercion before comparing, and false converts to 0","0 and false are the same primitive type","JavaScript has no boolean type"],
   correct:1, fb:"Loose equality (==) coerces types before comparing, so the boolean false is converted to the number 0 first."},

  {topic:"String Concatenation", q:"Which is valid string interpolation for <code>name = \"Sam\"</code>?",
   opts:["'Hello, {name}!'","\"Hello, ${name}!\"","`Hello, ${name}!`","'Hello, ' . name . '!'"],
   correct:2, fb:"Template literals require backticks (`) around the string, with ${ } for embedded expressions."},
  {topic:"String Concatenation", q:"Which correctly joins strings using the plus operator?",
   opts:["\"Hi, \" + first + \"!\"","\"Hi, \" . first . \"!\"","\"Hi, \" & first & \"!\"","\"Hi, \" ++ first ++ \"!\""],
   correct:0, fb:"JavaScript uses + for string concatenation. The . and & operators are from other languages (PHP, VB)."},
  {topic:"String Concatenation", q:"What's wrong with <code>'Hi, ${first}!'</code> (single quotes)?",
   opts:["Nothing, it interpolates correctly","Single/double quotes don't support ${ } interpolation — only backticks do","first must be defined as a global variable first","The exclamation point is invalid inside quotes"],
   correct:1, fb:"${ } interpolation is a template literal feature, which requires backticks — regular quotes just show the literal characters."},

  {topic:"The for Loop", q:"Which is a correctly structured <code>for</code> loop?",
   opts:["for (let i = 0, i &lt; 5, i++) { }","for (let i = 0; i &lt; 5; i++) { }","for let i = 0; i &lt; 5; i++ { }","for (i = 0 to 5) { }"],
   correct:1, fb:"The three clauses — initialization; condition; increment — are separated by semicolons and wrapped in parentheses."},
  {topic:"The for Loop", q:"In <code>for (let i = 0; i &lt; 5; i++)</code>, what runs after EACH pass through the loop body, right before re-checking the condition?",
   opts:["let i = 0","i &lt; 5","i++","Nothing runs automatically"],
   correct:2, fb:"The three parts are: initialization (once), condition (checked before each pass), final expression (runs after each pass)."},
  {topic:"The for Loop", q:"Which correctly loops over <code>colors = [\"red\",\"green\",\"blue\"]</code> by index?",
   opts:["for (let i = 1; i &lt;= colors.length; i++) console.log(colors[i]);","for (let i = 0; i &lt; colors.length; i++) console.log(colors[i]);","for (let i = 0; i &lt; colors; i++) console.log(colors[i]);","for (colors[i]; i &lt; 3; i++)"],
   correct:1, fb:"Start at index 0, stop when i is no longer less than colors.length (arrays are zero-indexed)."},

  {topic:"Random Numbers", q:"Which correctly generates a random whole number from 0-9?",
   opts:["Math.random() * 10","Math.floor(Math.random() * 10)","Math.floor(Math.random()) * 10","Math.random(10)"],
   correct:1, fb:"Math.random() gives a decimal 0–0.999...; multiply first by the range, THEN floor the result."},
  {topic:"Random Numbers", q:"Which formula simulates a die roll (whole number 1–6)?",
   opts:["Math.floor(Math.random() * 6)","Math.floor(Math.random() * 6) + 1","Math.floor(Math.random() + 6)","Math.random() * 6 + 1"],
   correct:1, fb:"Scale by the range (6), floor it (0-5), then shift up by the minimum (+1) to land on 1-6."},
  {topic:"Random Numbers", q:"Why is <code>Math.floor()</code> necessary after <code>Math.random() * 10</code>?",
   opts:["It isn't necessary — random() already returns whole numbers","Math.random() returns a decimal, and floor() rounds it down to a clean integer","floor() converts the result to a string","It prevents Math.random() from throwing an error"],
   correct:1, fb:"Math.random() alone returns a fractional value between 0 and 1; floor() is what produces a usable whole number."}
]
};

/* =========================================================
   RENDER
   ========================================================= */
const navRoot = document.getElementById("navRoot");
const mainEl = document.getElementById("main");

const categories = [...new Set(topics.map(t => t.cat))];
let flatOrder = topics.map(t => t.id);
flatOrder.push("__quiz__");
flatOrder.push("__exam__");

function buildNav(){
  categories.forEach(cat => {
    const group = document.createElement("div");
    group.className = "nav-group";
    const h4 = document.createElement("h4");
    h4.textContent = cat;
    group.appendChild(h4);
    topics.filter(t => t.cat === cat).forEach(t => {
      const item = document.createElement("div");
      item.className = "nav-item";
      item.dataset.id = t.id;
      item.innerHTML = `<span class="dot"></span><span>${t.title.replace(/<[^>]+>/g,'')}</span>`;
      item.addEventListener("click", () => renderTopic(t.id));
      group.appendChild(item);
    });
    navRoot.appendChild(group);
  });

  const qGroup = document.createElement("div");
  qGroup.className = "nav-group";
  const qh4 = document.createElement("h4");
  qh4.textContent = "Practice";
  qGroup.appendChild(qh4);
  const qItem = document.createElement("div");
  qItem.className = "nav-item";
  qItem.dataset.id = "__quiz__";
  qItem.innerHTML = `<span class="dot"></span><span>Syntax Spotter Quiz</span>`;
  qItem.addEventListener("click", renderQuiz);
  qGroup.appendChild(qItem);

  const eItem = document.createElement("div");
  eItem.className = "nav-item";
  eItem.dataset.id = "__exam__";
  eItem.innerHTML = `<span class="dot"></span><span>Full Practice Test (All Topics)</span>`;
  eItem.addEventListener("click", renderExam);
  qGroup.appendChild(eItem);

  navRoot.appendChild(qGroup);
}

function setActiveNav(id){
  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.toggle("active", el.dataset.id === id);
  });
}

function blockHTML(b){
  if(b.p){
    return `<div class="card">
      <h3><span class="tag ${b.tag}">${b.tag}</span> ${b.h}</h3>
      ${b.p.map(p => `<p>${p}</p>`).join("")}
    </div>`;
  }
  return `<div class="card">
    <h3><span class="tag ${b.tag}">${b.tag}</span> ${b.h}</h3>
    <pre><code>${b.code}</code></pre>
  </div>`;
}

function renderTopic(id){
  const t = topics.find(x => x.id === id);
  const idx = flatOrder.indexOf(id);
  const prevId = flatOrder[idx-1];
  const nextId = flatOrder[idx+1];

  mainEl.innerHTML = `
    <div class="path"><span class="seg-cat">${t.cat.toLowerCase().replace(/[^a-z]+/g,'-')}</span>/<span class="seg-file">${t.id}.${t.cat==='JavaScript'?'js':'html'}</span></div>
    <div class="topic-title">${t.title}</div>
    <div class="topic-sub">${t.sub}</div>
    ${t.blocks.map(blockHTML).join("")}
    <div class="pager">
      <button ${!prevId?"disabled":""} id="prevBtn">&larr; previous</button>
      <button id="nextBtn">${nextId==='__quiz__' ? 'go to quiz →' : nextId==='__exam__' ? 'go to full test →' : 'next →'}</button>
    </div>
  `;
  setActiveNav(id);
  window.scrollTo({top:0, behavior:"instant"});

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    if(prevId === '__quiz__') renderQuiz(); else if(prevId === '__exam__') renderExam(); else if(prevId) renderTopic(prevId);
  });
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    if(nextId === '__quiz__') renderQuiz(); else if(nextId === '__exam__') renderExam(); else if(nextId) renderTopic(nextId);
  });
}

let quizState = {};

function renderQuiz(){
  quizState = {};
  mainEl.innerHTML = `
    <div class="path"><span class="seg-cat">practice</span>/<span class="seg-file">syntax-spotter.test.js</span></div>
    <div class="topic-title">Syntax Spotter Quiz</div>
    <div class="topic-sub">Pick the correct syntax for each prompt. This is the same skill the final will test: recognizing valid vs. invalid code at a glance.</div>
    <div class="score-bar">
      <span class="pill" id="scorePill">Score: 0 / ${quiz.length}</span>
      <button id="resetQuiz">reset</button>
    </div>
    <div id="quizList"></div>
    <div class="pager">
      <button id="prevBtn">&larr; back to topics</button>
      <button id="nextBtn">go to full test →</button>
    </div>
  `;
  setActiveNav("__quiz__");
  window.scrollTo({top:0, behavior:"instant"});

  const list = document.getElementById("quizList");
  quiz.forEach((item, qi) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML = `
      <div class="quiz-q">${qi+1}. ${item.q}</div>
      <div class="quiz-opts">
        ${item.opts.map((o,oi) => `<button class="opt" data-qi="${qi}" data-oi="${oi}"><code>${o.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></button>`).join("")}
      </div>
      <div class="quiz-fb" id="fb-${qi}"></div>
    `;
    list.appendChild(card);
  });

  document.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const qi = +btn.dataset.qi;
      const oi = +btn.dataset.oi;
      if(quizState[qi] !== undefined) return; // already answered
      quizState[qi] = oi;
      const card = btn.closest(".quiz-card");
      card.querySelectorAll(".opt").forEach(b => b.disabled = true);
      const correctIdx = quiz[qi].correct;
      card.querySelectorAll(".opt")[correctIdx].classList.add("correct");
      if(oi !== correctIdx) btn.classList.add("incorrect");
      const fb = document.getElementById(`fb-${qi}`);
      fb.textContent = quiz[qi].fb;
      fb.classList.add("show");
      updateScore();
    });
  });

  updateScore();

  document.getElementById("resetQuiz").addEventListener("click", renderQuiz);
  document.getElementById("prevBtn").addEventListener("click", () => renderTopic(topics[topics.length-1].id));
  document.getElementById("nextBtn").addEventListener("click", renderExam);
}

function updateScore(){
  const answered = Object.keys(quizState).length;
  const correct = Object.entries(quizState).filter(([qi,oi]) => quiz[qi].correct === oi).length;
  document.getElementById("scorePill").textContent = `Score: ${correct} / ${quiz.length}  (${answered} answered)`;
}

/* =========================================================
   FULL EXAM — topic picker + randomized, batched (10 at a time)
   ========================================================= */
const examSections = ["HTML", "CSS", "JavaScript"];
const BATCH_SIZE = 10;

function shuffleArray(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let examScope = null;   // "HTML" | "CSS" | "JavaScript" | "ALL"
let examPool = [];      // flat, shuffled list of questions for the current attempt
let examState = {};     // key: index in examPool -> chosen option index
let currentBatch = 0;

/* ---- Step 1: topic picker ---- */
function renderExam(){
  const options = [
    ...examSections.map(sec => ({ id: sec, label: sec, count: examBank[sec].length })),
    { id: "ALL", label: "All Topics (Mixed)", count: examSections.reduce((s,sec)=>s+examBank[sec].length,0) }
  ];

  mainEl.innerHTML = `
    <div class="path"><span class="seg-cat">practice</span>/<span class="seg-file">full-exam.test.js</span></div>
    <div class="topic-title">Full Practice Test</div>
    <div class="topic-sub">Pick a topic to be tested on, or mix everything together. Questions are served in batches of ${BATCH_SIZE}, freshly randomized (question order AND answer order) every attempt.</div>
    <div class="exam-picker" id="examPicker"></div>
    <div class="pager">
      <button id="prevBtn">&larr; back to quiz</button>
      <button disabled>choose a topic to begin</button>
    </div>
  `;
  setActiveNav("__exam__");
  window.scrollTo({top:0, behavior:"instant"});

  const picker = document.getElementById("examPicker");
  options.forEach(opt => {
    const batches = Math.ceil(opt.count / BATCH_SIZE);
    const card = document.createElement("button");
    card.className = "exam-pick-card";
    card.innerHTML = `
      <div class="pick-title">${opt.label}</div>
      <div class="pick-meta">${opt.count} questions &middot; ${batches} batch${batches===1?"":"es"} of ${BATCH_SIZE}</div>
    `;
    card.addEventListener("click", () => startExam(opt.id));
    picker.appendChild(card);
  });

  document.getElementById("prevBtn").addEventListener("click", renderQuiz);
}

/* ---- Step 2: build the shuffled pool and kick off batch 1 ---- */
function buildExamPool(scope){
  const source = scope === "ALL"
    ? examSections.flatMap(sec => examBank[sec].map(q => ({ ...q, section: sec })))
    : examBank[scope].map(q => ({ ...q, section: scope }));

  return shuffleArray(source).map(item => {
    const optOrder = shuffleArray(item.opts.map((_, i) => i));
    return {
      section: item.section,
      topic: item.topic,
      q: item.q,
      fb: item.fb,
      opts: optOrder.map(i => item.opts[i]),
      correct: optOrder.indexOf(item.correct)
    };
  });
}

function startExam(scope){
  examScope = scope;
  examPool = buildExamPool(scope);
  examState = {};
  currentBatch = 0;
  renderExamBatch();
}

/* ---- Step 3: render the current 10-question batch ---- */
function renderExamBatch(){
  const total = examPool.length;
  const totalBatches = Math.ceil(total / BATCH_SIZE);
  const start = currentBatch * BATCH_SIZE;
  const batch = examPool.slice(start, start + BATCH_SIZE);
  const label = examScope === "ALL" ? "All Topics (Mixed)" : examScope;

  mainEl.innerHTML = `
    <div class="path"><span class="seg-cat">practice</span>/<span class="seg-file">full-exam.test.js</span></div>
    <div class="topic-title">Full Practice Test &mdash; ${label}</div>
    <div class="topic-sub">Batch ${currentBatch+1} of ${totalBatches} &middot; questions ${start+1}&ndash;${start+batch.length} of ${total}</div>
    <div class="score-bar">
      <span class="pill" id="scorePill">Score: 0 / ${total}</span>
      <button id="changeTopic">change topic</button>
      <button id="shuffleExam">shuffle &amp; restart</button>
    </div>
    <div class="exam-progress">
      ${Array.from({length: totalBatches}, (_, bi) => `<div class="seg"><i style="width:${bi < currentBatch ? 100 : bi === currentBatch ? 0 : 0}%"></i></div>`).join("")}
    </div>
    <div id="examBody"></div>
    <div class="pager">
      <button id="prevBatchBtn" ${currentBatch===0?"disabled":""}>&larr; previous 10</button>
      <button id="nextBatchBtn">${currentBatch === totalBatches-1 ? "see results" : "next 10 →"}</button>
    </div>
  `;
  setActiveNav("__exam__");
  window.scrollTo({top:0, behavior:"instant"});

  const body = document.getElementById("examBody");
  batch.forEach((item, bi) => {
    const qi = start + bi; // global index into examPool
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML = `
      <div class="quiz-topic">${item.section} &middot; ${item.topic}</div>
      <div class="quiz-q">${qi+1}. ${item.q}</div>
      <div class="quiz-opts">
        ${item.opts.map((o,oi) => `<button class="opt" data-qi="${qi}" data-oi="${oi}"><code>${o}</code></button>`).join("")}
      </div>
      <div class="quiz-fb" id="fb-${qi}"></div>
    `;
    body.appendChild(card);

    if(examState[qi] !== undefined){
      const opts = card.querySelectorAll(".opt");
      opts.forEach(b => b.disabled = true);
      opts[item.correct].classList.add("correct");
      if(examState[qi] !== item.correct) opts[examState[qi]].classList.add("incorrect");
      const fb = card.querySelector(".quiz-fb");
      fb.textContent = item.fb;
      fb.classList.add("show");
    }
  });

  body.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const qi = +btn.dataset.qi;
      if(examState[qi] !== undefined) return; // already answered
      const oi = +btn.dataset.oi;
      examState[qi] = oi;
      const card = btn.closest(".quiz-card");
      card.querySelectorAll(".opt").forEach(b => b.disabled = true);
      const correctIdx = examPool[qi].correct;
      card.querySelectorAll(".opt")[correctIdx].classList.add("correct");
      if(oi !== correctIdx) btn.classList.add("incorrect");
      const fb = document.getElementById(`fb-${qi}`);
      fb.textContent = examPool[qi].fb;
      fb.classList.add("show");
      updateExamScore();
    });
  });

  updateExamScore();
  document.getElementById("changeTopic").addEventListener("click", renderExam);
  document.getElementById("shuffleExam").addEventListener("click", () => startExam(examScope));
  document.getElementById("prevBatchBtn").addEventListener("click", () => {
    currentBatch--;
    renderExamBatch();
  });
  document.getElementById("nextBatchBtn").addEventListener("click", () => {
    if(currentBatch === totalBatches - 1){
      showExamSummary();
    } else {
      currentBatch++;
      renderExamBatch();
    }
  });
}

function updateExamScore(){
  const total = examPool.length;
  let correct = 0, answered = 0;
  examPool.forEach((item, qi) => {
    if(examState[qi] !== undefined){
      answered++;
      if(examState[qi] === item.correct) correct++;
    }
  });
  const pill = document.getElementById("scorePill");
  if(pill) pill.textContent = `Score: ${correct} / ${total}  (${answered} answered)`;
}

function showExamSummary(){
  const total = examPool.length;
  let correct = 0;
  examPool.forEach((item, qi) => { if(examState[qi] === item.correct) correct++; });
  const pct = Math.round((correct / total) * 100);
  const cls = pct >= 80 ? "" : pct >= 60 ? "mid" : "low";

  const breakdown = examScope === "ALL"
    ? examSections.map(sec => {
        const secQs = examPool.filter(q => q.section === sec);
        const secCorrect = examPool.reduce((c, item, qi) => c + (item.section === sec && examState[qi] === item.correct ? 1 : 0), 0);
        return `<span>${sec}: <b>${secCorrect} / ${secQs.length}</b></span>`;
      }).join("")
    : "";

  mainEl.innerHTML = `
    <div class="path"><span class="seg-cat">practice</span>/<span class="seg-file">full-exam.test.js</span></div>
    <div class="topic-title">Results &mdash; ${examScope === "ALL" ? "All Topics (Mixed)" : examScope}</div>
    <div class="exam-summary">
      <div class="big-score ${cls}">${correct} / ${total} &nbsp;(${pct}%)</div>
      <div class="breakdown">${breakdown}</div>
    </div>
    <div class="pager">
      <button id="reviewBtn">&larr; review answers</button>
      <button id="retakeBtn">shuffle &amp; retake</button>
      <button id="pickBtn">choose a different topic</button>
    </div>
  `;
  setActiveNav("__exam__");
  window.scrollTo({top:0, behavior:"instant"});

  document.getElementById("reviewBtn").addEventListener("click", () => { currentBatch = 0; renderExamBatch(); });
  document.getElementById("retakeBtn").addEventListener("click", () => startExam(examScope));
  document.getElementById("pickBtn").addEventListener("click", renderExam);
}

buildNav();
renderTopic(topics[0].id);