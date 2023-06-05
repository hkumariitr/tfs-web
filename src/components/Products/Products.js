import React from "react";
import "./Products.css"
import honey from "./img/honey.png"
import SugarcaneVinegar from "./img/vinegar.png"
import Jaggery from "./img/Jaggery.jpg"
import caneSugar from "./img/caneSugar.jpg"
import basmatiRice from "./img/basmatiRice.jpeg"
import cowGhee from "./img/cowGhee.jpeg"
import flaxSeeds from "./img/flaxSeeds.jpeg"
import lemonPickel from "./img/lemonPickel.jpg"
import lentils from "./img/lentils.jpg"
import manduaAata from "./img/manduaAata.jpg"
import mangoPickel from "./img/mangoPickel.jpg"
import mustardOil from "./img/mustardOil.jpg"
import rajma from "./img/rajma.jpg"
import wheatFloor from "./img/wheatFloor.jpg"
import anar from "./img/anar.jpg"
import apple from "./img/apple.webp"
import blueBerry from "./img/blueBerry.jpg"
import greenPear from "./img/greenPear.jpg"
import guava from "./img/guava.jpg"
import mango from "./img/mango.webp"
import mausambi from "./img/mausambi.jpg"
import orange from "./img/orange.jpg"
import ProductCard from "../PrCard/prcard";


const Products = ()=>{
    return(
        <div className="products-container" id = "products">
            <div className="products-head">
                Our Products
            </div>
            <div className="products-card-container">
                <ProductCard name = "Honey" image = {honey} />
                <ProductCard name = "Sugarcane Vinegar" image = {SugarcaneVinegar} />
                <ProductCard name = "Jaggery Powder" image = {Jaggery} />
                <ProductCard name = "Cane Sugar" image = {caneSugar} />
                <ProductCard name = "Basmati Rice" image = {basmatiRice} />
                <ProductCard name = "Cow Ghee" image = {cowGhee} />
                <ProductCard name = "Flax Seeds" image = {flaxSeeds} />
                <ProductCard name = "Lemon Pickel" image = {lemonPickel} />
                <ProductCard name = "Lentils" image = {lentils} />
                <ProductCard name = "Mandua Atta" image = {manduaAata} />
                <ProductCard name = "Mango Pickel" image = {mangoPickel} />
                <ProductCard name = "Mustard Oil" image = {mustardOil} />
                <ProductCard name = "Rajma" image = {rajma} />
                <ProductCard name = "Wheat Flour" image = {wheatFloor} />
            </div>

            <div className="products-head">
                Vegetables & Fruits
            </div>
            <div className="products-card-container">
                <ProductCard name = "Pomegranate" image = {anar} />
                <ProductCard name = "Apple" image = {apple} />
                <ProductCard name = "Blueberry" image = {blueBerry} />
                <ProductCard name = "Green Pear" image = {greenPear} />
                <ProductCard name = "Guava" image = {guava} />
                <ProductCard name = "Mango" image = {mango} />
                <ProductCard name = "Mausambi" image = {mausambi} />
                <ProductCard name = "Orange" image = {orange} />
                

            </div>
        </div>
    )
}

export default Products;