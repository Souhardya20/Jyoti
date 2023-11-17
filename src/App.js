import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Forms from "./components/Contact/Forms";
import Team from "./components/Team/Team";

import Galleryimport from "./components/Gallery/EventsGallery";


function App() {
  return (
    <>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Forms/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/gallery" element={<Galleryimport/>} />
        

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
