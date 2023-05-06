# Software Engineering Revision

**Table of contents:**
- [Architecture](#architecture)
  - [Theory](#theory)
  - [API Solutions \& Gateways](#api-solutions--gateways)
- [Data Structures & Algorithms](#data-structures--algorithms)
- [Security](#security)
- [TypeScript, JavaScript](#typescript-javascript)
  - [React](#react)
    - [Deployment](#deployment)
  - [Best Practises](#best-practises)
- [Situational](#situational)

---


## Architecture
### Theory
- [The downstream services are the ones that consume the upstream service. In particular, they depend on the upstream service. The FE is downstream to the BE because it depends on the BE. The BE can exist meaningfully without the FE, but the FE doesn't make sense without the BE.](https://softwareengineering.stackexchange.com/a/312402)
### API Solutions & Gateways
- [KrakenD](https://www.krakend.io/): selective parts of *REST* endpoints responses. Higher performance and lower response size and better separation of concerns, i.e.: authentication.
    - Downside: not possible to auto-generate typed React hooks from the schema as of December 2022. This can be achieved with *GraphQL*.


## Data Structures & Algorithms
  - [Data structures & algorithms: examples and time complexity](https://github.com/skjha1/Data-Structure-Algorithm-Programs)
  - [Algorithm Time Complexity & Examples](https://www.jenniferbland.com/time-complexity-analysis-in-javascript)
  - [Time complexity theory](https://en.wikipedia.org/wiki/Time_complexity)
  - [Loops that grow proportionally to the input size have a linear time complexity O(n). If you loop through only half of the array, that’s still O(n).](https://adrianmejia.com/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation)

## Security
- [Open Web Application Security Project® (OWASP) Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html)
  - [Implementation of Proper Password Strength Controls](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls)
  - [Responses of Authentication Mechanisms](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#authentication-responses)
  - [Avoid publicly exposing primary keys from the database](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html#ensure-lookup-ids-are-not-accessible-even-when-guessed-or-cannot-be-tampered-with)

## TypeScript, JavaScript
- [ECMAScript Language Specification Changelog](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [`ArrayBuffer`, `TypedArray`](https://javascript.info/arraybuffer-binary-arrays)
- [TypeScript Essentials](https://github.com/krzkaczor/ts-essentials)
- [Use `type` over `interface` unless developing public libraries](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [Available Features on Browsers](https://caniuse.com)
- <a href='https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168'>Time Complexities Of Common Array Operations In JavaScript</a>
- <a href="https://github.com/trekhleb/javascript-algorithms">Algorithms & Data Structures in JS</a>
- <a href='https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/'>Data Structures in JavaScript: Arrays, HashMaps, and Lists.</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">Data types & their limits</a>
- <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">Falsy values (!)</a>
- <a href="https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec">Memory Management & Leak Prevention
- <a href="https://v8.dev/blog/array-sort">Sorting in v8 engine</a>
- <a href="https://firstclassjs.com/under-the-hood-arrays-in-js/">Array performance in v8 engine</a>
- [*Array* implementation is similar to *ArrayList* in Java](https://stackoverflow.com/a/20622554)
- <a href='https://stackoverflow.com/a/22289982'>`Array.isArray`>`instanceof Array`</a>
- <a href="https://github.com/lukehoban/es6features">ES6 changes</a>
- <a href="https://v8.dev/blog/elements-kinds">Element kinds in v8 engine</a>
- Arrow functions don't bind their own `this`. Instead, they inherit `this` from the parent scope which is called [lexical scoping](https://stackoverflow.com/a/1047491).
- [Call Stack & Execution Context](https://medium.com/openmindonline/javascript-under-the-hood-execution-context-b1b2fbf56e90)
- Functions run from the call stack. JS is single threaded as of December 2022 so only one task runs at a time. Though `async` compensates any performance issues in case of requests.
- [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) lets you use some types of variables and functions before they are declared. For example: `var` will return `undefined`, function declarations will work and `const` or `let` won't work. 
- The heap stores values of the variables and references of the objects in JavaScript.
- Data from databases should be fetched as readonly because it should not be modified directly. For example: `user: Readonly<TUser>`. 

### React
- [React Class Component Lifecycle into hooks](https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks/62701724#62701724)
- [React Class Component Lifecycle into hooks #2](https://stackoverflow.com/a/55768105)
#### Deployment
Prior to deploying React on a server, consider a [serverless approach](https://learn.microsoft.com/en-us/azure/developer/javascript/how-to/with-web-app/static-web-app-with-swa-cli/introduction).
- [Launching a web server](https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7)
- [Error refreshing /](https://ui.dev/react-router-cannot-get-url-refresh/)
- [HTTP to HTTPS](https://serversforhackers.com/c/redirect-http-to-https-nginx)

### Best Practises

- <a href='https://javascript.info/structure#semicolon'>Semicolons in every line</a>. Can be achieved with <a href="https://prettier.io/">Prettier</a>.
- <a href='https://javascript.info/strict-mode'>"use strict";</a> for JavaScript <a href='https://stackoverflow.com/a/31392947'>as TypeScript typically inserts it.</a>
- [Use `null` to assign an *empty* value. `undefined` is reserved as a value for unassigned things.](https://javascript.info/types#the-undefined-value)
- [`const`, `let` instead of `var` (ES6)](https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-999428999994)
- [Semantic function naming](https://javascript.info/function-basics#function-naming)
- [Google JavaScript style guide](https://google.github.io/styleguide/jsguide.html)
- [Verify application favicon status](https://realfavicongenerator.net/favicon_checker)
- Websites are sometimes rendered different in various browsers due to different engines. Test on Chrome, Firefox & Safari before deploying.

## Situational

- [Object Model: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
- [Git undoing merges, dirty merge conflict solution](https://stackoverflow.com/a/2389423)
- [Git revert to commit](https://stackoverflow.com/a/12049323)
- [Git commands in one](https://stackoverflow.com/a/35049625)
- [Remove accents from strings for international projects with various user languages](https://npm.io/package/remove-accents)
- [HTML entities for typography, i.e. `&mdash;`](https://www.w3.org/wiki/Common_HTML_entities_used_for_typography)
- [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)
- v8 engine (Node, Chrome):
  - [v8 engine data types' size](https://www.mattzeunert.com/2016/07/24/javascript-array-object-sizes.html)
  - [v8 memory quiz](https://www.mattzeunert.com/2018/01/25/v8-javascript-memory-quiz.html)
