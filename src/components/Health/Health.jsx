import React from "react";
import honey from "./img/honey.png"
import ProductCard from "../Product/prcard";
import "./health.css"

export default function Health(){

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