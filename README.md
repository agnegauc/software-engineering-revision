# Software Engineering revision


<b>General</b>
<ul>
    <li>Algorithms:</li>
    <ul>
        <li>
            <a href='https://www.jenniferbland.com/time-complexity-analysis-in-javascript/'>Algorithm Time Complexity & Examples</a> 
        </li>    
        <li>
            <a href='https://en.wikipedia.org/wiki/Time_complexity'>Time complexity - Wikipedia</a>
        </li>
    </ul>
    
</ul



Completing the https://www.udemy.com/course/the-complete-javascript-course/ course again and creating and solving various revision exercises to properly understand these topics. It was renewed in 2021 so a lot of useful new information should be there.
    
<b>Important theory topics:</b>

<b>Web Development</b>
<ul>
    <li>Pages are sometimes rendered different in various browsers. Before pushing to production, test on chrome and firefox.</li>
    <li>
        <a href="https://github.com/lukehoban/es6features">ES6 changes</a>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">Data structures & their limits</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">Falsy values</a>
    </li>
    <li>
        <a href="https://javascript.info/arraybuffer-binary-arrays">ArrayBuffer, TypedArray </a>
    </li>
    <li>
        <a href="https://github.com/krzkaczor/ts-essentials">TypeScript Essentials</a>
    </li>
    <li>
        <a href="https://javascript.info/">The Modern JavaScript Tutorial</a>
    </li>
</ul>

<b>Theory:</b>
<ul>
    <li>
        Javascript functions run from the call stack. JS is single threaded so only 1 task at a time.
    </li>
</ul>

<b>Extra revision:</b>

<ul>
    <li>
        Hoisting lets you use some types of variables and functions before they are declared. For example: <i>var</i> will return undefined, function declarations will work and <i>const/let</i> will NOT work. 
    </li>
    <li>
        Heap - objects are stored in memory.
    </li>
    <li>
        Temporal dead zone (until variable x) - everything from the scope start until x is declared.
    </li>
    <li>
        A method's 'this' points to the object.
    </li>
    <li>
        Methods have access to 'this'.
    </li>
    <li>
        const objCopy = {...obj};
        <br/>
        However, the spread operator only copies the properties and ignores the prototype chain if I understand it properly in '<strong>9-DS-modern-operators-strings.js</strong>'
    </li>
</ul>

<h3>Type coercion:</h3>
<p>Javascript automatically converts data types so the code works, for example:</p>

```javascript
console.log("I'm " + 26 + "years old");
console.log("23" * "2"); // => 46

let n = "1" + 1;
n = n - 1;

console.log(n); // => 10
```

<h3>Recursion: HTML tree traversal (ES6+, DOM)</h3>
<div>
    <p>
        Check if the element has a child element and call the function with the leftmost child and repeat this step with its children until no leftmost child exists. Move up by 1 parent and call the function with the child that is on the right side (if leftmost was 0, then call with [1...; children.length)).
    </p>

```javascript
const recursion = (el, amount = 4) => {
  const prefix = "-".repeat(amount),
    elDetailed = `${el.nodeName.toLowerCase()}${el.id && " #" + el.id}${
      el.className && " ." + el.className
    }`;

  console.log(`${prefix} recursion(${elDetailed})`);
  console.log(el);

  for (let i = 0; i < el.children.length; i++) {
    console.log(
      `${prefix} ${elDetailed} has another child therefore another 'recursion' will be called`
    );

    recursion(el.children[i], amount + 4);
  }

  return console.log(`${prefix} RETURNED: recursion(${elDetailed})`);
};
```

</div>
    
<h3>General</h3>
<ul>
    <li>Paradigms (OOP, Procedural, Functional) - approach of structuring code which directs the coding technique.</li>
    <li>Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".</li>
    <li><a href="https://github.com/trekhleb/javascript-algorithms">Algorithms' comparison</a></li> 
</ul>

<h3>Front end and JS related (e.g. React):</h3>
<ul>
    <li>
        <strong>launch</strong>: https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7
    </li>
        <li><strong>error refreshing / </strong>: https://ui.dev/react-router-cannot-get-url-refresh/
    </li>
        <li><strong>http to https</strong>: https://serversforhackers.com/c/redirect-http-to-https-nginx
    </li>
        <li><strong>CSS3 vs CSS</strong>: faster, can be split into modules, has transitions, transformations, animations, supports responsive design and media queries.
    </li>
        <li><strong>HTML5 vs HTML4</strong>: it can draw shapes, handle inaccurate syntax, supports multimedia tags, WebSQL, web storage, localStorage.
    </li>
    <li>
        <a href='https://www.w3.org/wiki/Common_HTML_entities_used_for_typography'>
            <strong>Common HTML entities used for typography</strong>
        </a>
    </li>
</ul>

<h3>Sources:</h3>
<ul>
    <li>https://medium.com/openmindonline/javascript-under-the-hood-execution-context-b1b2fbf56e90</li>
    <li>https://www.udemy.com/course/the-complete-javascript-course</li>
    <li>https://google.github.io/styleguide/jsguide.html</li>
</ul>
