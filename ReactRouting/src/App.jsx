import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Work from "./components/Work";
import Home from "./components/Home";
import Dynamic from "./components/Dynamic";
import Notfound from "./components/Notfound";

const App = () => {


  //Notice how the * and 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/:any" element={<Dynamic />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
