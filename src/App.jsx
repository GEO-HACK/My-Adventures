import React from "react";
import SinglePlace from "./pages/Places/SinglePlace";
import Home from "./pages/Home";
import About from "./pages/About";
import Places from "./pages/Places/Places";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<Places />}/>
        <Route path="/places/:id" element={<SinglePlace />} />
      </Routes>
    </Router>
  );
};

export default App;
