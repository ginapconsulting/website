import React, {Fragment} from 'react';
import {ScrollTopBtn, Seo} from '../components';
import {AboutOne, FeatureOne, FooterOne, HeaderTwo, HeroOne, ServiceOne,} from '../containers';

const HomeOne = ()=> (
  <Fragment>
    <Seo title="Home" />
    <HeaderTwo/>
    <HeroOne/>
    <div className="background-image" style={{backgroundImage: "url(images/bg/ab-bg-1-1.jpg)"}}>
      <FeatureOne className="space-top space-extra-bottom"/>
      <AboutOne className="space-bottom"/>
    </div>
    <ServiceOne className="space-top space-extra-bottom"/>
    {/*<TeamOne className="space-top space-extra-bottom"/>*/}
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default HomeOne;
