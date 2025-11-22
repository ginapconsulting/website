import React from 'react';
import Slider from 'react-slick';
import {Button} from '../../components';

const HeroOne = ()=> {

  const HEROCONTENT = [
    {
      image: 'images/hero/hero-1-1.jpg',
      title: <>Empowering <span className="hero-innertext">CANADIAN BUSINESSES</span> <br/> with World‑Class Solutions</>,
      text: 'We partner with organizations across Canada to deliver modern technology strategy, engineering, and support tailored to your goals.',
      btn2: {text: 'Our Services', path: '/service'}
    },
    {
      image: 'images/hero/hero-1-2.jpg',
      title: <>Coast‑to‑Coast <span className="hero-innertext">CONSULTING &amp; SUPPORT</span> <br/> When You Need It</>,
      text: 'From discovery to delivery, our Canadian team provides responsive, round‑the‑clock support so you can focus on outcomes.',
      btn2: {text: 'Our Services', path: '/service'}
    },
    {
      image: 'images/hero/hero-1-3.jpg',
      title: <>Local Expertise, <span className="hero-innertext">GLOBAL STANDARDS</span> <br/> Experts &amp; Professionals</>,
      text: 'Industry‑leading practitioners delivering pragmatic solutions with the quality and care your Canadian customers expect.',
      btn2: {text: 'Our Services', path: '/service'}
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
