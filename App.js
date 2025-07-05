import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "./utils/constants";   




const HeaderComponent = () => {
    return (
        <div className="header">
          <div className="logo">
            <img src={LOGO_URL} alt="GrabIt Logo" />
        </div>
        <div className="navItems">
            <ul>
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
        
        </div>
    );
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);