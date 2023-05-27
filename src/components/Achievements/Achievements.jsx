import React from "react";
import "./Achievements.css"
import Carousels from "./Carousels/Carousels";

const Achievements = ()=>{
    return(
        <>
            <div className="main-exhibition-container">
                <div className="exhibition-text-container">
                    OUR ACHIEVEMENTS
                </div>
                <div className="main-carousels">
                    <Carousels/>
                </div>
            </div> 
        </>
    )
}

export default Achievements;