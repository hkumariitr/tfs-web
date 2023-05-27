import React from "react";
import "./Products.css"
import honey from "./img/honey.png"
import SugarcaneVinegar from "./img/vinegar.png"
import Jaggery from "./img/Jaggery.jpg"
import caneSugar from "./img/caneSugar.jpg"
import ProductCard from "../PrCard/prcard";


const Products = ()=>{
    return(
        <div className="products-container">
            <div className="products-head">
                Our Products
            </div>
            <div className="products-card-container">
                <ProductCard name = "Honey" image = {honey} />
                <ProductCard name = "Sugarcane Vinegar" image = {SugarcaneVinegar} />
                <ProductCard name = "Jaggery Powder" image = {Jaggery} />
                <ProductCard name = "Cane Sugar" image = {caneSugar} />
                <ProductCard name = "Honey" image = {honey} />
                <ProductCard name = "Sugarcane Vinegar" image = {SugarcaneVinegar} />
                <ProductCard name = "Jaggery Powder" image = {Jaggery} />
                <ProductCard name = "Cane Sugar" image = {caneSugar} />
                <ProductCard name = "Honey" image = {honey} />
                <ProductCard name = "Sugarcane Vinegar" image = {SugarcaneVinegar} />
                <ProductCard name = "Jaggery Powder" image = {Jaggery} />
                <ProductCard name = "Cane Sugar" image = {caneSugar} />
            </div>

            <div className="products-head">
                Vegetables & Fruits
            </div>
            <div className="products-card-container">
                <ProductCard name = "Honey" image = {honey} />
                <ProductCard name = "Sugarcane Vinegar" image = {SugarcaneVinegar} />
                <ProductCard name = "Jaggery Powder" image = {Jaggery} />
                <ProductCard name = "Cane Sugar" image = {caneSugar} />
                <ProductCard name = "Honey" image = {honey} />
                <ProductCard name = "Sugarcane Vinegar" image = {SugarcaneVinegar} />
                <ProductCard name = "Jaggery Powder" image = {Jaggery} />
                <ProductCard name = "Cane Sugar" image = {caneSugar} />
                <ProductCard name = "Honey" image = {honey} />

            </div>
        </div>
    )
}

export default Products;