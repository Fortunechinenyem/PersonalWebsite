import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";
import Training from "./pages/Training";
import About from "./pages/About";

function App() {
  return (
    <article>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </article>
  );
}

export default App;
