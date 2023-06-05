import FounderThumb from "./img/ceothumb.png"
import DirectorThumb from "./img/directorthumb.png"
import ManagerThumb from "./img/managingdirthumb.png"
import MobViewMsg from "./img/aboutphoneview.png"
import "./FounderMessage.css"

import React, { useEffect } from "react";



const FounderMessage = ()=>{

    // const handleClickScroll = () => {
    //     const element = document.getElementById('middle');
    //     if (element) {
    //       // 👇 Will scroll smoothly to the top of the next section
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };
    

    // useEffect(()=>{{handleClickScroll()}});
    return(
        <>
        <div className="msg-container">
            <img src= {FounderThumb} alt = ''/>
            <img id ="middle" src= {DirectorThumb} alt = ''/>
            <img src= {ManagerThumb} alt = ''/>
        </div>

        <div className="mobile-msg-container">
            <img className="mb-view-msg" src = {MobViewMsg}/>
        </div>

        </>
    )
}

export default FounderMessage;