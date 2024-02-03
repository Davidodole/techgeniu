import { HashRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/home";
=======
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Home from "./pages/Home.jsx";
>>>>>>> 0601dae (changes)


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
