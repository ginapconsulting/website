import React from 'react';
import Slider from 'react-slick';
import {SecSubTitle, SecTitle, TeamBoxOne, TitleWrap} from '../../components';

const TeamOne = ({...restProps})=> {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
    <div {...restProps}>
      <div className="container">
        <TitleWrap className="text-center">
          <SecSubTitle>Great Team Members</SecSubTitle>
          <SecTitle className="h1">Our Core Team</SecTitle>
        </TitleWrap>
        <Slider className="row" {...settings}>
          <TeamBoxOne path="/"
            name="Victor Ocheja"
            desgination="Director, Business & Operations"
            image="images/team/victor.png"
          />
          <TeamBoxOne path="/"
            name="Vera Oguche"
            desgination="HR Manager"
            image="images/team/mawedo.png"
          />
          <TeamBoxOne path="https://www.linkedin.com/in/regina-ochonu/"
                      name="Regina Ochonu"
                      desgination="Senior Partner - Engineering"
                      image="images/team/gina.jpeg"
                      linkedIn={'https://www.linkedin.com/in/regina-ochonu/'}
          />
          <TeamBoxOne path="https://www.linkedin.com/in/patrickocheja/"
            name="Patrick Ocheja"
            desgination="Senior Partner - AI & Blockchain"
            image="images/team/patrick.jpeg"
            linkedIn={'https://www.linkedin.com/in/patrickocheja/'}
          />
        </Slider>
      </div>
    </div>
  );
}

export default TeamOne;
