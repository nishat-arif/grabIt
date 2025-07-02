const heading = React.createElement("h1", {id:"heading"}, "Hello World from React")

// const heading = React.createElement("h1", {id:"heading"}, 
//                 React.createElement("h2", {id:"child"}, 
//                 [React.createElement("h1", {id:"child1"}, "child1"),React.createElement("h1", {id:"child2"}, "child2") ]));
console.log("heading",typeof heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root",typeof root);
root.render(heading);