import './App.css';
import Navbar from "./components/navbar/navbar.jsx"
import Products from './components/Products/Products';
import AboutUs from './components/AboutUS/AboutUs';
import Catalogue from "./components/Catalogue/Catalogue"
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import Workings from './components/Workings/Workings';
import ImageSlider from './components/AboutPage/About.jsx';
import SliderData from './components/AboutPage/SliderData';
import FounderMessage from './components/FounderMessage/FounderMessage';

function App() {
  return (
    <>
    
    <Navbar />
    <Products />
    <AboutUs/>
    <Workings/>
    <Catalogue/>
    <Achievements/>
    <FounderMessage/>
    <Footer/>
    
    </>
  )
}

export default App;
