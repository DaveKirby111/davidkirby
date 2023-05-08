import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
