import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./View";
import Add from "./Add";
import Edit from "./Edit"
import Home from "./Home"
import ViewDoctor from "./ViewDoctor";
import AddDoctor from "./AddDoctor";
import About from "./About";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/View" element={<View />} />
        <Route path="/Viewdoctor" element={<ViewDoctor />} />
        <Route path="/create" element={<Add />} />
        <Route path="/createdoctor" element={<AddDoctor />} />
        <Route path="/update/:id" element={<Edit/>} />
        <Route path="/About" element={<About />} />

        {/* <Route path="/delete" element={<App2 />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;