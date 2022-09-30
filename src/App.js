import React from 'react';
// import logo from './logo.svg';
import MenuBar from './component/menu-bar/menuBar.js';
import Home from './component/home/home';
import About from './component/about/about';
import Services from './component/services/services';
import Hse from './component/hseandquality/hse';
import Mission from './component/mission/mission.js'
import Gallery from './component/gallery/gallery';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
import Certificate from './component/certificate/index.jsx';

import './App.css';

const App=()=> {  

  return (
    <div className="App">
      <MenuBar/>
      <Home id="home"/>
      <About id="about"/>
      <Services id="services" />
      <Certificate id="cert"/>
      <Hse id="hse"/>
      <Mission id="mission"/>
      <Gallery id="gallery"/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;
