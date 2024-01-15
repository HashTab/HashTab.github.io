import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero";

import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Versions from "./components/Versions";

const App = () => {
  const location = useLocation();
  return (
    <div className="bg-main-black relative h-full">
      <Contacts />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Versions style={"bottom-[-30px] right-0"} />
      </AnimatePresence>
    </div>
  );
};

export default App;
