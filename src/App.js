import "./App.css";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Forms from "./components/Forms";
import Team from "./components/Team";
import Gallery from "./components/Gallery";


function App() {
  return (
    <>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Forms/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/gallery" element={<Gallery/>} />
        

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
