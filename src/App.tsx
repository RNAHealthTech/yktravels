import React from "react";
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import AboutPage from "./pages/About";
import TransportationPage from "./pages/Transportation";
import ContactPage from "./pages/Contact";
import BlogTemplate from "./ui/BlogTemplate";
import Blogs from "./pages/Blogs";
import PackagePage from "./ui/PackagePage";
import PackageList from "./pages/Packages";
 

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/packages" element={<PackageList />} />
        <Route path="/packages/:slug" element={<PackagePage />} />
        <Route path="/transportation" element={<TransportationPage />} />
        <Route path="/blogs/:slug" element={<BlogTemplate />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App; 