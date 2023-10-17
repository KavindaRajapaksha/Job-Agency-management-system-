import React from "react";
import Home from "./pages/home";
import "./App.css";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import AddCandidates from "./pages/crud pages/addCandidates";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateCandidate from "../src/pages/crud pages/updateCandidate";
import ViewCandidate from "../src/pages/crud pages/ViewCandidate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service/add" element={<AddCandidates />} />
          <Route path="/service/update/:id" element={<UpdateCandidate />} />
          <Route path="/service/view/:id" element={<ViewCandidate />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
