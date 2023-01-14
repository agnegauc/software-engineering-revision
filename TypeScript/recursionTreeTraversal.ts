const doRecursion = (element: Element, symbolAmount = 4) => {
  const prefix = "-".repeat(symbolAmount);
  const elTag = element.nodeName.toLowerCase();
  const elClassName = element.className ? ` .${element.className}` : "";
  const elId = element.id ? ` #${element.id}` : "";
  const elDescription = `${elTag}${elId}${elClassName}`;

  console.log(`${prefix} doRecursion(<${elDescription}>)`);
  console.log(prefix, element);

  // O(n) to spread, O(n) to iterate. Less readable alternative: for of
  [...element.children].forEach((childEl) => {
    console.log(`${prefix} ${elDescription} has children. Do recursion`);

    doRecursion(childEl, symbolAmount + 4);
  });

  console.log(`${prefix} FINISHED: doRecursion(<${elDescription}>)`);
};

doRecursion(document.getElementsByTagName("body")[0]);

/* Sample data:

doRecursion(document.getElementsByTagName('body')[0])


<html>
    <head></head>
    
    <body>
        <div>
            <span></span>
            <p></p>
        </div>

        <main>
            <article></article>
        </main>
    </body>
</html>
*/
