import React from "react";

import "./About.css";
import ceo from "./img/ceo.png";

export default function Organic(){

    return(
    // <div className="container">
        
    //     <img className="page1" src={page1} />
       
    // </div>
    <div className="bgImage" style={{
        // margin: "-3px",
        width: "100%",
        height: "30rem",
        backgroundImage: `url(${require('./img/Bg.png')})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",   
       }} >

        <div className="box1">
            <div className="para">
             <h3 className="Founded">Founded By</h3>
             <h2 className="By">Organic Farmers</h2>
             <p className="content">The Farmer’s Son is connecting you to the north as we are operating from Himachal Pradesh and Uttarakhand states, we are trying to connect you to the North Indian culture.</p> 
             </div>
        </div>

        <div className="box2">
            

            <div className="descriptionBox">
            <h1 className="name">Shubham Kumar Saini</h1>
            <p className="post">An Organic Farmer, Co-Founder & CEO, The  Farmer's Son</p>
            </div>

            <div className="pic">
             <img className="ceo" src={ceo}  />
            </div>
            

        </div>
        
        
        
        
         </div>

    )
}