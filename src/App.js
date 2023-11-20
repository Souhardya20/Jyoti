import "./App.css";
import { useEffect,useState } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Forms from "./components/Contact/Forms";
import Team from "./components/Team/Team";
import Album from "./components/Gallery/Album";
import Loader from "./components/Loader";




function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loader/>;
  }
  return (
    <>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Forms/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/gallery" element={<Album/>} />
        

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
