import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {AboutTwo, CtaOne, FooterOne, HeaderOne, TeamFour} from '../containers';

const Team = ()=> (
  <Fragment>
    <Seo title="Team" />
    <HeaderOne />
    <Breadcrumb pageName="Team" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <TeamFour className="space-top space-extra-bottom"/>
    <CtaOne className="space"/>
    <AboutTwo className="space-top space-extra-bottom background-image" style={{backgroundImage: 'url(images/bg/skill-bg-2-1.jpg)'}} />
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Team;
