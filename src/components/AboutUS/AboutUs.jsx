import React from "react";
import "./AboutUs.css"
import Aboutimg from "./img/aboutimg.png"

const AboutUs = ()=>{
    return(
        <div className="about-us-section">
            <div className="about-text-container">
                <h2>About Us</h2>
                <p> We’re on a to create a healthier society and country. For that, we are promoting organic farming so we can provide to you people organic goods. Organic farming is a system of farming or agriculture that repair, maintain, and improves the ecological balance. We’re on a goal to make healthy food, healthy soil, healthy plants, and a healthy environment. Pahadi Goods is helping hardworking farmers and women of North India & East U.P (Uttarakhand )by paying them reasionable price for the fresh organic goods they produce. </p>
            </div>
            <div className="about-image-container">
                <img className="about-image" src = {Aboutimg} />
            </div>
        </div>
    )
    
}

export default AboutUs;