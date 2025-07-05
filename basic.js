import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Hello World from React")

const jsxHeading = <h1 id="heading">Hello World from JSX</h1>;

//const jsxHeading = (<h1 id="heading">Hello World from JSX</h1>);

// const heading = React.createElement("h1", {id:"heading"}, 
//                 React.createElement("h2", {id:"child"}, 
//                 [React.createElement("h1", {id:"child1"}, "child1"),React.createElement("h1", {id:"child2"}, "child2") ]));
// console.log("heading",typeof heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",typeof root);
root.render(jsxHeading);

///////////////////////////////////////////////////////////////////////////////

import ReactDOM from "react-dom/client";

//React element
const Title = () => (<h1 id="title">Title Component</h1>);

// react functional component
const HeadingComponent = () => {
    return (<div id="container">
                <Title />
                <h1 id="heading">
                 functional Component 
                </h1>
            </div>
    );
};   

//const HeadingComponent2 = () => <h1 id="heading">Hello World from functional Component </h1>;
//const HeadingComponent2 = () => (<h1 id="heading">Hello World from functional Component </h1>);




const root1= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
// root.render(<HeadingComponent></HeadingComponent>);
root.render(HeadingComponent());