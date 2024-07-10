import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import MyProjects from "./Components/MyProjects/MyProjects";
import Scroll from "./Components/Scroll/Scroll";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <MyProjects/>
        <Scroll />
      </div>
    );
  }
}

export default App;
