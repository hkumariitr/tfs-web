import React from "react";
import honey from "./img/honey.png"
import ProductCard from "../PrCard/prcard";
import "./Organic.css"

export default function Organic(){

    return(
    <div className="card-container"> 
        <ProductCard name = "Honey" image = {honey} />
        <ProductCard name = "Honey" image = {honey} />
        <ProductCard name = "Honey" image = {honey} />
        <ProductCard name = "Honey" image = {honey} />
        <ProductCard name = "Honey" image = {honey} />
        <ProductCard name = "Honey" image = {honey} />
    </div>
    )
}