import React from "react";
import "./prcard.css";

export default function ProductCard(props){

    return(
    <div className="container">
        <div className="main-rectangle">
            <div className="img-container"> <img className="pr-img" src = {props.image}/>  </div>
            <div className="text-container"> <p> {props.name} </p>  </div>
        </div>
    </div>
    )
}