import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./home";
import GccTeam from "./components/pages/GccTeam";
import NccTeam from "./components/pages/NccTeam";
import Gallery from "./components/pages/Gallery";
import Videos from "./components/pages/Videos";
import LccTeam from "./components/pages/LccTeam";
import OurMission from "./components/pages/OurMission";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gccteam" element={<GccTeam />} />
          <Route path="/nccteam" element={<NccTeam />} />
          <Route path="/lccteam" element={<LccTeam />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/mission" element={<OurMission />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
