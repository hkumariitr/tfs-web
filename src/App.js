import './App.css';
import Main from './components/mainpage/mainpage';
import Navbar from "./components/navbar/navbar.jsx"
import About from "./components/AboutPage/About.jsx"
import Products from './components/Products/Products';
import AboutUs from './components/AboutUS/AboutUs';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    
    <Navbar />
    <Products />
    <AboutUs/>
    <Achievements/>
    <About/>
    <Footer/>
    
    </>
  )
}

export default App;
