import React from 'react';
import {FeatureBoxOne} from '../../components/';
import Slider from 'react-slick';

const FeatureOne = ({className})=> {

  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className={`feature-wrap1 ${className || ''}`}>
      <div className="container">
        <Slider className="row" {...settings}>
          <FeatureBoxOne
            title="Development Services"
            text="Experience the transformative impact of tailored technology with our Development Services, aligning innovation with your business goals."
            image="images/icon/fe-1-1.png"
            path="/service"
          />
          <FeatureBoxOne
            title="Consulting Services"
            text="Navigate the digital landscape confidently with our Consulting Services, empowering your organization to leverage technology effectively for operational improvement."
            image="images/icon/fe-1-3.png"
            path="/service"
          />
          <FeatureBoxOne
              title="Marketing Services"
              text="Unlock new growth opportunities with our Marketing Services, harnessing the power of data-driven strategies and digital tools to enhance your brand's reach."
              image="images/icon/fe-1-2.png"
              path="/service"
          />
        </Slider>
      </div>
    </div>
  );
}

export default FeatureOne;
