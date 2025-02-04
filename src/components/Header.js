import logo from "../../project-images/logo_namaste.png";
import logoText from "../../project-images/padharo_sa.png";
// import {CiSearch} from "react-icons/ci";
import {useState} from 'react';

const Header= () => {
    const [btnNameReact, setBtnNameReact]= useState("Login");

    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={logo}></img>
            <img className="logoText" src={logoText}></img>
        </div>
        <div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                        <button className="login" onClick={()=>{
                            btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}}
                            >{btnNameReact}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

// Always Export before import
export default Header; 