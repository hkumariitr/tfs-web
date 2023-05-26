import './navbar.scss';
import tfslogo from "./img/tfslogo.svg";
import React,{useEffect} from 'react';
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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
    <div className='landing-container'>
    <header className={x.join(" ")}>
        <div className="logo">
          <img src={tfslogo} alt="Logo" title="Logo" />
          <div className='navtext'> <p> The Farmer's Son</p></div>
          
        </div>
        

        <nav className="navigation">
            <ul>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Products</a></li>
              <li><a href="#post3">Achievements</a></li>
              <li><a href="#post4">Gallery</a></li>
              <li><a href="#post5">About Us</a></li>
            </ul>
        </nav>

        <div className='toggle_btn' onClick={handletoggleclick}>
          <Menu/>          
        </div>

        <div className={y.join(" ")}>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Products</a></li>
              <li><a href="#post3">Achievements</a></li>
              <li><a href="#post4">Gallery</a></li>
              <li><a href="#post5">About Us</a></li>
            
        </div>

    </header>
    </div>
  )
};

export default Navbar;