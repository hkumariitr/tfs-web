import "./Carousels.css"
import A01 from "./img/A01.png"
import A02 from "./img/A02.png"
import A03 from "./img/A03.png"
import A04 from "./img/A04.png"
import A05 from "./img/A05.png"
import A06 from "./img/A06.png"



export default function Carousels(){
    return(
        <div className="carousels-main-container">
        
      <section className="carousels-section">
        <div class="wrapper">
          <img classname = "carousels-img"src={A01} />
          <img classname = "carousels-img"src={A02} />
          <img classname = "carousels-img"src={A03} />
          <img classname = "carousels-img"src={A04} />
          <img classname = "carousels-img"src={A05} />
          <img classname = "carousels-img"src={A06} />

          
          
        </div>
      </section>
      </div>
    )
}