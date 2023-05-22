import React from "react";
import honey from "./img/honey.png"
import SugarcaneVinegar from "./img/vinegar.png"
import Jaggery from "./img/Jaggery.jpg"
import caneSugar from "./img/caneSugar.jpg"
import ProductCard from "../Product/prcard";
import "./health.css"

export default function Health(){

    return(
    <div className="card-container"> 
        <ProductCard name = "Honey" image = {honey} />
        <ProductCard name = "Sugarcane Vinegar" image = {SugarcaneVinegar} />
        <ProductCard name = "Jaggery Powder" image = {Jaggery} />
        <ProductCard name = "Cane Sugar" image = {caneSugar} />
        
    </div>
    )
}