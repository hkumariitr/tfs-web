import React from "react";
import "./mainpage.css";
import tfscover from "./img/tfs-cover.png"
import Health from "../Health/Health"
import Organic from "../Organic/Organic";
import Aboutimg from "./img/aboutimg.png"

export default function Main(){
    return(
        <>
        <div>
        <img className="tfs-cover" src = {tfscover}/>
        </div>

        <div className=" products-section">

            <div className="pr-section-1">
                <div className="head"> <p> Health Products </p>  </div>
                <Health />
            </div>

            <div className="pr-section-2">
                <div className="head"> <p> Organic Products </p>  </div>
                <Organic />
            </div>

        </div>

        <div className="about-us-section">
            <div className="about-text-container">
                <h2>About Us</h2>
                <p> We’re on a to create a healthier society and country. For that, we are promoting organic farming so we can provide to you people organic goods. Organic farming is a system of farming or agriculture that repair, maintain, and improves the ecological balance. We’re on a goal to make healthy food, healthy soil, healthy plants, and a healthy environment. Pahadi Goods is helping hardworking farmers and women of North India & East U.P (Uttarakhand )by paying them reasionable price for the fresh organic goods they produce. </p>
            </div>
            <div className="about-image-container">
                <img className="about-image" src = {Aboutimg} />
            </div>
        </div>


        <div className="achievements-section">
            <div className="head"> <p> Our achievements </p>  </div>
        </div>

        </>
        
    )
}