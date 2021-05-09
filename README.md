# js-revision-and-new-features

Completing the https://www.udemy.com/course/the-complete-javascript-course/ course again. It was renewed in 2021 so a lot of useful new information should be there

<b>Important theory topics:</b>

<ul>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">Data structures</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">Operator Precedence</a>
    </li>
    <li>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">Falsy values</a>
    </li>
</ul>

<b>Extra revision if I forget these things:</b>

<ul>
<li>
One line arrow functions don't require a 'return'.
</li>
    <li>
        Methods have access to 'this'.
    </li>

    <li>
        Hoisting lets you use some types of variables and functions before they are declared.
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

</ul>

<h3>Type coercion:</h3>
<p>js automatically converts data types so the code works.</p>
<p>example: console.log("I'm "+ 26 + "years old")</p>
<p>example 2: console.log ('23' \*'2' ) => 46</p>
<p>example 3: let n = '1'+1; n=n-1; console.log(n) => 10</p>

<h3>General (not only in JS)</h3>
<ul>
    <li>Paradigms (OOP, Procedural, Functional) - approach of structuring code which directs the coding technique.</li>
    <li>Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".</li>
</ul>

<h3>Launching JS related projects (e.g. React):</h3>
<ul>
<li>
launch: https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7
</li>
<li>error refreshing / : https://ui.dev/react-router-cannot-get-url-refresh/
</li>
<li>http to https: https://serversforhackers.com/c/redirect-http-to-https-nginx
</li>
</ul>

<h3>Sources:</h3>
<ul>
    <li>https://medium.com/openmindonline/javascript-under-the-hood-execution-context-b1b2fbf56e90</li>
    <li>https://www.udemy.com/course/the-complete-javascript-course</li>
    </ul>
