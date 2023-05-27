import './navbar.scss';
import tfslogo from "./img/tfslogo.svg";
import React,{useEffect} from 'react';
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';


const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(true);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 150 ){
      setScrolled(true);
    }
    else{
      setScrolled(true);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }

    const [toggle,settoggle] = React.useState(false);
    const handletoggleclick =()=>{
      settoggle(!toggle);
    }

    let y=['dropdown_menu'];
    if(toggle){
      y.push('open');
    }

  const Menu = ()=>{
    if(toggle) {
        return( <CloseIcon/> )
      }
    else{
      return <MenuIcon  className='hamicon'/> 
    }
    
  }

  return (
    <div className='landing-container' id = "home">
    <header className={x.join(" ")}>
        <div className="logo">
          <img src={tfslogo} alt="Logo" title="Logo" />
          <div className='navtext'> <p> The Farmer's Son</p></div>
          
        </div>
        

        <nav className="navigation">
            <ul>
              <li> <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}> Home </Link> </li>
              <li> <Link activeClass="active" to="products" spy={true} smooth={true} offset={-100} duration={500}> Products </Link></li>
              <li> <Link activeClass="active" to="aboutus" spy={true} smooth={true} offset={-100} duration={500}> About</Link></li>
              <li> <Link activeClass="active" to="achievements" spy={true} smooth={true} offset={-100} duration={500}>Achievements</Link></li>
              <li> <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}> Contact</Link> </li>
              
            </ul>
        </nav>

        <div className='toggle_btn' onClick={handletoggleclick}>
          <Menu/>          
        </div>

        <div className={y.join(" ")}>
        <li > <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onClick={handletoggleclick}> Home </Link> </li>
              <li> <Link activeClass="active" to="products" spy={true} smooth={true} offset={-100} duration={500} onClick={handletoggleclick}> Products </Link></li>
              <li> <Link activeClass="active" to="aboutus" spy={true} smooth={true} offset={-100} duration={500} onClick={handletoggleclick}> About</Link></li>
              <li> <Link activeClass="active" to="achievements" spy={true} smooth={true} offset={-100} duration={500} onClick={handletoggleclick}>Achievements</Link></li>
              <li> <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handletoggleclick}> Contact</Link> </li>
            
        </div>

    </header>
    </div>
  )
};

export default Navbar;