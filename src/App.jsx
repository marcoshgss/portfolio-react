import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import MyProjects from "./Components/MyProjects/MyProjects";
import Scroll from "./Components/Scroll/Scroll";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <MyProjects/>
        <Scroll/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
