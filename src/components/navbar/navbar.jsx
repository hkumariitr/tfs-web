import React from "react";
import './navbar.css';
import tfslogo from "./img/tfslogo.svg";

export default function Navbar(){
    return(
        <>
            <div className = "heading"> 
                <div >
                 <img className="brand-logo" src = {tfslogo}/>
                </div>
                <div className="nav-content">                    
                    <div> Home </div>
                    <div> Products </div>
                    <div> Achievements </div>
                    <div> Gallery </div>
                    <div> About Us </div>
                </div>
            </div>
        </>
        )
}