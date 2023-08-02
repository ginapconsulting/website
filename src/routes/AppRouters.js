import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";

// Home Pages
import HomeOne from '../pages/HomeOne';

// About Page
// Blog Pages
// Pricing Plans Page
// Service Pages
import Service from '../pages/Service';

// Team Pages

// Project Pages

// Contact Page

// Not Fouond Page


const AppRouters = () => (
  <Fragment>
    <Routes>
      <Route path="/" exact element={<HomeOne />} />
      {/*<Route path="/home-two" exact element={<HomeTwo />} />
      <Route path="/home-three" exact element={<HomeThree />} />
      <Route path="/about" exact element={<About/>} />
      <Route path="/price-plan" exact element={<PricePlan/>} />*/}
      <Route path="/service" exact element={<Service/>} />
      {/*<Route path="/service-details" exact element={<ServiceDetails/>} />
      <Route path="/project" exact element={<Project/>} />
      <Route path="/project-details" exact element={<ProjectDetails/>} />
      <Route path="/team" exact element={<Team/>} />
      <Route path="/team-details" exact element={<TeamDetails/>} />
      <Route path="/blog" exact element={<Blog/>} />
      <Route path="/blog-grid" exact element={<BlogGrid/>} />
      <Route path="/blog-details" exact element={<BlogDetails/>} />
      <Route path="/contact" exact element={<Contact/>} />*/}
      <Route path="*" element={<HomeOne/>} />
    </Routes>
  </Fragment>
);

export default AppRouters;
