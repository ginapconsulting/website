import React from 'react';
import {Button, ImageBoxOne, SecSubTitle, SecTitle} from '../../components';

const AboutOne = ({className})=> (
  <div className={`position-relative ${className || ''}`}>
    <div className="about-shape1 d-none d-xl-block">GP Consulting</div>
    <div className="container z-index-common">
      <div className="row gx-60">
        <div className="col-lg-6 col-xl-5 mb-50 mb-lg-0">
          <ImageBoxOne imageOne="images/faq/faq-1-1.jpg"
            imageTwo="images/about/ab-1-2.jpg"
          />
        </div>
        <div className="col-lg-6 col-xl-7 align-self-center">
          <SecSubTitle><i className="fas fa-bring-forward"/>Top Rated</SecSubTitle>
          <SecTitle className="h1">EXPERIENCE GROWTH WITH OUR TOP-TIER IT SOLUTIONS</SecTitle>
          <p className="mb-4 mt-1 pb-3">GINAP Consulting bridges the gap between your business aspirations and technology. We provide tailor-made, innovative strategies that integrate seamlessly into your operations. Our dedicated team ensures round-the-clock support, creating a synergy that powers your business objectives with leading-edge technology solutions.</p>
          <Button path="/about">About Us<i className="far fa-long-arrow-right"/></Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutOne;
