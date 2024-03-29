import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home";

export default function App (){
  return(
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}
