import C01 from "./img/01.JPG";
import C02 from "./img/02.JPG";
import C03 from "./img/03.JPG";
import C04 from "./img/04.JPG";
import C05 from "./img/05.JPG";
import C06 from "./img/06.JPG";
import "./Catalogue.css"

import React, { useEffect } from "react";



const Catalogue = ()=>{

    return(
        <>
        <div className="catalogue-container">
            <img src= {C01} alt = ''/>
            <img src= {C02} alt = ''/>
            <img src= {C03} alt = ''/>
            <img src= {C04} alt = ''/>
            <img src= {C05} alt = ''/>
            <img src= {C06} alt = ''/>

        </div>


        </>
    )
}

export default Catalogue;