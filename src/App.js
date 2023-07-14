import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Resume from "./pages/Resume";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Work from "./pages/Work";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
