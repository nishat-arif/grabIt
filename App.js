import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL} from "./utils/constants"; 

const HeaderComponent = () => {
    return (
        <div className="header">
          <div className="logo">
            <img src={LOGO_URL} alt="GrubExpress Logo" className="logo_img"></img>
        </div>
        <div className="navItems">
            <ul className="navList">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li> 
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
}


const App =()=>{
    return (
        <div className="app">
            <HeaderComponent /> 
            <BodyComponent />      
        </div>
    );
}

const BodyComponent = () => {
    return (
    <div>
        <div className="search"></div>
        <div className="restaurantList">
            <h1>Restaurant List</h1>
            {/* Add restaurant cards here */}
        </div>

    </div>
    )};

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);