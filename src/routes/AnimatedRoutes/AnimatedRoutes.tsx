import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Contacts, Home, Episodes, About } from "../../pages";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/runnerview_with_kat" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};
