import React from 'react';
import Slider from 'react-slick';
import {SecTitle, TeamBoxOne, TitleWrap} from '../../components';

const TeamOne = ({...restProps})=> {
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
      <div className="container ">
        <TitleWrap className="text-center">
          <SecTitle className="h1">Our Core Team</SecTitle>
        </TitleWrap>
        <Slider className="row" {...settings}>
          {/* <TeamBoxOne path="/"
            name="Victor Ocheja"
                      hidden
            desgination="Director, Business & Operations"
            image="images/team/victoro.jpeg"
                      linkedIn={'https://www.linkedin.com/in/victor-ocheja'}
                      twitter={'https://twitter.com/ochejav'}
          /> */}
          <TeamBoxOne path="/"
            name="Vera Oguche"
            desgination="HR Manager"
            image="images/team/mawedo.png"
          />
          <TeamBoxOne path="https://www.linkedin.com/in/regina-ochonu/"
                      name="Regina Ochonu"
                      desgination="Senior Partner"
                      image="images/team/gina.jpeg"
                      linkedIn={'https://www.linkedin.com/in/regina-ochonu/'}
          />
          <TeamBoxOne path="https://www.linkedin.com/in/olamikunleogunleye/"
            name="Olamikunle (Kunle) Ogunleye, Ph.D."
            desgination="Project Manager"
            image="images/team/kunle.jpeg"
            linkedIn={'https://www.linkedin.com/in/olamikunleogunleye/'}
          />
        </Slider>
      </div>
    </div>
  );
}

export default TeamOne;
