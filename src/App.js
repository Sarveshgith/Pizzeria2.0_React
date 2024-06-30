import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Aboutus from "./Components/AboutUs/Aboutus";
import Specialmenu from "./Components/SpecialMenu/Specialmenu";
import Gallery from "./Components/Gallery/Gallery";
import Chef from "./Components/Chef/Chef";
import Findus from "./Components/FindUs/Findus";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <Specialmenu />
      <Gallery />
      <Chef />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
