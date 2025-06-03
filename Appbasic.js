// const heading = React.createElement('h1', { id: 'myDiv' }, 'Hello World from React');
// const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(heading);


//simple parent child example (child id Hello world, div is object holding all this)
// const parent = React.CreateElement(
//     "div",{},"Hello World from React"
// )

 
//for nested chlildren we pass children as array of children using square brackets
 const parent = React.CreateElement(
     "div",{id: "parent"},
     [
        // React.CreateElement("h1", { id: "child1" }, "Hello World from React"),
        // React.CreateElement("h2", { id: "child2" }, "This is a child element"),
        // React.CreateElement("p", { id: "child3" }, "This is a paragraph inside the parent div")

        React.createElement("div", { id: "child1" },[
            React.createElement("h1", {}, "I am h1 tag"),
              React.createElement("h2", {}, "I am h2 tag"),

        ]),
         React.createElement("div", { id: "child2" },[
            React.createElement("h1", {}, "I am h3 tag"),
              React.createElement("h2", {}, "I am h4 tag"),

        ]),



     ]
 )