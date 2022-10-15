import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import About from "./About/About";
import Blog from "./Blog";
import Contact from "./Contact/Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Privacy from "./Privacy/Privacy";

const Index = () => {
  return (
    <Layout>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </Layout>
  );
};

export default Index;
