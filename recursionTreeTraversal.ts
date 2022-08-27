const doRecursion = (element: Element, symbolAmount = 4) => {
    const prefix = "-".repeat(symbolAmount);
    const elementName = element.nodeName.toLowerCase();

    const elementClassName = element.className ? ` .${element.className}` : "";
    const elementId = element.id ? ` #${element.id}` : "";

    const elementDetailed = `${elementName}${elementId}${elementClassName}`;

    console.log(`${prefix} doRecursion(<${elementDetailed}>)`);
    console.log(prefix, element);

    for (const childElement of element.children) {
        console.log(
            `${prefix} ${elementDetailed} has a child, 'doRecursion' will be called.`
        );

        doRecursion(childElement, symbolAmount + 4);
    }

    console.log(`${prefix} FINISHED: doRecursion(<${elementDetailed}>)`);
};

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
