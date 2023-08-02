import React from 'react';
import Slider from 'react-slick';
import {Button} from '../../components';

const HeroOne = ()=> {

  const HEROCONTENT = [
    {
      image: 'images/hero/hero-1-1.jpg',
      title: <>Top Tier <span className="hero-innertext">WORLD CLASS </span> <br/> Services & Solutions</>,
      text: ' GINAP Consulting offers cutting-edge services and solutions, custom-designed to fit your business needs. We\'re dedicated to fueling your growth and driving your success with our innovative technology strategies.',
      btn1: {text: 'About Us', path: '/about'},
      btn2: {text: 'READ MORE',path: '/about'}
    },
    {
      image: 'images/hero/hero-1-2.jpg',
      title: <>24/7 <span className="hero-innertext">PROVIDE FREE CONSULTATION</span> <br/> SUPPORT &amp; MANAGEMENT</>,
      text: 'We\'re here for you around the clock, ensuring your tech operations run seamlessly. With our 24/7 support and management, you can focus on what matters most—your business.',
      btn1: {text: 'About Us', path: '/about'},
      btn2: {text: 'READ MORE',path: '/about'}
    },
    {
      image: 'images/hero/hero-1-3.jpg',
      title: <>TEAM OF <span className="hero-innertext">HIGHLY QUALIFIED STAFF</span> <br/> Experts &amp; Professionals</>,
      text: 'Our team comprises industry-leading experts and professionals committed to bringing you the best in technology. Leverage our experience and knowledge to transform your operations and reach new heights.',
      btn1: {text: 'About Us', path: '/about'},
      btn2: {text: 'READ MORE',path: '/about'}
    }
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          arrows: false,
        }
      }
    ]
  };


  return (
    <Slider className="hero-layout1" {...settings}>
      {HEROCONTENT.map((slide, index) => (
        <div key={index}>
          <div className="hero-inner">
            <div className="hero-shape1"></div>
            <div className="hero-shape2"></div>
            <div className="hero-bg background-image" style={{backgroundImage: `url(${slide.image})`}}></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-text">{slide.text}</p>
                <div className="hero-btns">
                  <Button path={slide.btn1.path}>{slide.btn1.text}<i className="far fa-arrow-right"/></Button>
                  <Button path={slide.btn2.path} className="style2">{slide.btn2.text}<i className="far fa-arrow-right"/></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroOne;
