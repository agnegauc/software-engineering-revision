# Software Engineering revision

<b>General</b>

<ul>
    <li>Algorithms:</li>
    <ul>
        <li>
            <a href='https://github.com/skjha1/Data-Structure-Algorithm-Programs'>Data Structure & Algorithms: examples and time complexity</a>
        </li>
        <li>
            <a href='https://en.wikipedia.org/wiki/Time_complexity'>Time complexity theory</a>
        </li>
        <li>
            <a href='https://adrianmejia.com/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/'>All loops that grow proportionally to the input size have a linear time complexity O(n). If you loop through only half of the array, that’s still O(n).</a>
        </li>
    </ul>
    <li>
        <a href="https://javascript.info/function-basics#function-naming">Self explanatory function naming.</a>
    </li>
    <li>Paradigms (OOP, procedural, functional) - approach of structuring code which directs the coding technique.</li>

</ul

<p><b>Front-End & Back-End</b></p>
<p>Mainly focused on TypeScript & JavaScript.</i></p>
<ul>
    <li>Pages are sometimes rendered different in various browsers. Before pushing to production, test on chrome and firefox & safari.</li>
    <li>
        <a href="https://javascript.info/arraybuffer-binary-arrays">ArrayBuffer, TypedArray </a>
    </li>
    <li>
        <a href="https://github.com/krzkaczor/ts-essentials">TypeScript Essentials</a>
    </li>
    <li>
        <a href="https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c">interface vs type</a>
    </li>
    <li>
        <a href="https://javascript.info/">The Modern JavaScript Tutorial</a>
    </li>
    <li>
        <a href="https://caniuse.com">Available Features (caniuse)</a>
    </li>
    <li>
        <a href='https://www.jenniferbland.com/time-complexity-analysis-in-javascript/'>Algorithm Time Complexity & Examples (Javascript)</a> 
    </li>    
    <li>
        <a href='https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168'>Time Complexities Of Common Array Operations In JavaScript</a>
    </li>
    <li>
        <a href="https://github.com/trekhleb/javascript-algorithms">Algorithms & Data Structures in JS</a>
    </li>
    <li>
        <a href='https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/'>Data Structures in JavaScript: Arrays, HashMaps, and Lists.</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">Data types & their limits</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">Falsy values (!)</a>
    </li>            
    <li>
        <a href="https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec">JS Memory Management & Leak Prevention
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model">Object Model</a>
    </li>
    <li>
        <a href="https://v8.dev/blog/array-sort">JS sorting in v8 engine</a>
    </li>
    <li>
        <a href="https://firstclassjs.com/under-the-hood-arrays-in-js/">JS array performance in v8 engine</a>
    </li>
    <li>
        <a href="https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks/62701724#62701724">React Class Component Lifecycle into hooks</a>
    </li>
    <li>
        <a href="https://stackoverflow.com/a/55768105">React Class Component Lifecycle into hooks #2</a>
    </li>
    <li>
         <a href='https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability'>any, unknown, object, void, undefined, null, and never assignability.</a>
    </li>
    <li>
        <a href='https://www.w3.org/wiki/Common_HTML_entities_used_for_typography'>
            Common HTML entities used for typography
        </a>
    </li>
    <li>
        <a href='https://stackoverflow.com/a/22289982'>
            Array.isArray > instanceof Array
        </a>
    </li>
    <li>
        <a href="https://github.com/lukehoban/es6features">ES6 changes</a>
    </li>
    <li>
        <a href="https://www.mattzeunert.com/2018/01/25/v8-javascript-memory-quiz.html">v8 memory quiz</a>
    </li>
    <li>
        <a href="https://v8.dev/blog/elements-kinds">JS element kinds in v8 engine</a>
    </li>
    <li>
        <a href="https://www.mattzeunert.com/2016/07/24/javascript-array-object-sizes.html">JS v8 engine data types' size</a>
    </li>
    <li>
        Arrow functions don't bind their own <b>this</b>. Instead, they inherit <b>this</b> from the parent scope which is called <a href='https://stackoverflow.com/a/1047491'>lexical scoping</a>.
    </li>
    <li>
        JavaScript functions run from the call stack. JS is single threaded so only 1 task at a time. Though async compensates any performance issues in case of requests.
    </li>
    <li>
        <a href='https://developer.mozilla.org/en-US/docs/Glossary/Hoisting'>Hoisting</a> lets you use some types of variables and functions before they are declared. For example: <i>var</i> will return undefined, function declarations will work and <i>const/let</i> won't work. 
    </li>
    <li>
        The heap stores variables in JavaScript.
    </li>
</ul>

<b>Best practises:</b>

<ul>
<li>
<a href='https://javascript.info/structure#semicolon'>Semicolons in every line</a>. Can be achieved with <a href="https://prettier.io/">Prettier</a>.
</li>
<li>
<a href='https://javascript.info/strict-mode'>"use strict";</a> for JavaScript <a href='https://stackoverflow.com/a/31392947'>as TypeScript typically inserts it.</a>
</li>
<li>
<a href='https://javascript.info/types#the-undefined-value'>Use null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.</a>
</li>
<li>
<a href="https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-999428999994">Don't use <b>var</b>. Use <b>const</b> & <b>let</b> (ES6).</a>
</li>
</ul>

<b>React Deployment:</b>

<ul>
<li>
<strong>launch</strong>: https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7
</li>
<li>
<strong>error refreshing / </strong>: https://ui.dev/react-router-cannot-get-url-refresh/
</li>
<li>
<strong>http to https</strong>: https://serversforhackers.com/c/redirect-http-to-https-nginx
</li>
</ul>

<h3>Sources:</h3>
<ul>
    <li>https://medium.com/openmindonline/javascript-under-the-hood-execution-context-b1b2fbf56e90</li>
    <li>https://google.github.io/styleguide/jsguide.html</li>
</ul>
