import React from "react";
import "./Workings.css"
import DairyFarming from "./img/dairyfarming.jpg"
import BeeKeeping from "./img/beekeeping.jpg"
import PlantsGardening from "./img/plantsgardening.jpg"
import SoilTesting from "./img/soiltesting.jpg"
import CropManagement from "./img/cropmanagement.png"
import AgricultureTraining from "./img/agriculturetraining.png"


const Workings = ()=>{
    return(
        <div className="workings-container">
            <h4> Working In Organic & Natural Farmings </h4>
            <div className="working-section odd">
                <div className="working-text-container ">
                    <h2>Dairy Farming with Desi Cow Breeds</h2>
                </div>
                <div className="working-image-container">
                    <img className="working-image" src = {DairyFarming} />
                </div>
            </div>

            <div className="working-section">
                <div className="working-text-container">
                    <h2>Bee Keeping</h2>
                </div>
                <div className="working-image-container">
                    <img className="working-image" src = {BeeKeeping} />
                </div>
            </div>

            <div className="working-section odd">
                <div className="working-text-container">
                    <h2>Plants Gardening</h2>
                </div>
                <div className="working-image-container">
                    <img className="working-image" src = {PlantsGardening} />
                </div>
            </div>


            <div className="working-section">
                <div className="working-text-container">
                    <h2>Soil Testing</h2>
                </div>
                <div className="working-image-container">
                    <img className="working-image" src = {SoilTesting} />
                </div>
            </div>

            <div className="working-section odd">
                <div className="working-text-container">
                    <h2>Crop Management</h2>
                </div>
                <div className="working-image-container">
                    <img className="working-image" src = {CropManagement} />
                </div>
            </div>

            <div className="working-section">
                <div className="working-text-container">
                    <h2 className="desktop-head">Agricultural training to FPO’S, Agriculture Students, and Kitchen Gardening Training</h2>
                    <h2 className="mob-head"> Agricultural training</h2>
                </div>
                <div className="working-image-container">
                    <img className="working-image" src = {AgricultureTraining} />
                </div>
            </div>


        </div>
    )
    
}

export default Workings;