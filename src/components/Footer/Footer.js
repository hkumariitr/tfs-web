import React from "react";
import "./Footer.css";
import Logo from "./img/tfslogo.svg"
import FB from "./img/fb.png"
import TW from "./img/tw.png"
import IG from "./img/ig.png"


const Footer = () => {
    return(
        <div className="footer-container">
        <div className="footer-subcontainer">
            <div className="logo-container"> <img src = {Logo} className="logoimg"/> </div>
            <div className="address"> <p>B1/H3, Mohan Co-operative Industrial Area,
                                        Mathura Road, New Delhi - 110044 </p> </div>
            <div className="social-icons"> 
                <div> <img className="fbicon" src = {FB}/> </div>
                <div> <img className="twicon" src = {TW}/> </div>
                <div> <img className="igicon" src = {IG}/> </div>
            </div>
            <div className="privacy"> <p> Privacy Policy </p> </div>
            <div className="copyright"> <p> Copyright © 2023. The Farmer's Son. All rights reserved. </p> </div>
        </div>
        </div>
    )
}

export default Footer;