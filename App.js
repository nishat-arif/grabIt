import React from "react";
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




const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
// root.render(<HeadingComponent></HeadingComponent>);
root.render(HeadingComponent());