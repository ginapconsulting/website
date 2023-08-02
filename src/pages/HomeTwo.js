import React, {Fragment} from 'react';
import {ScrollTopBtn, Seo} from '../components';
import {
    AboutFour,
    AboutThree,
    BlogFour,
    BrandTwo,
    ContactOne,
    CounterTwo,
    FeatureTwo,
    FooterTwo,
    HeaderThree,
    HeroTwo,
    PricePlanOne,
    ProjectOne,
    ServiceTwo,
    TeamTwo
} from '../containers';

const HomeTwo = ()=> (
  <Fragment>
    <Seo title="Home Two" />
    <HeaderThree/>
    <HeroTwo/>
    <FeatureTwo className="space-top"/>
    <AboutThree/>
    <TeamTwo className="space-top space-extra-bottom"/>
    <CounterTwo className="space" />
    <AboutFour className="space space-extra-bottom"/>
    <ServiceTwo className="space space-extra-bottom"/>
    <ProjectOne className="space-top"/>
    <PricePlanOne className=" space-extra"/>
    <ContactOne/>
    <BlogFour className="space-top space-extra-bottom"/>
    <BrandTwo className="space"/>
    <FooterTwo/>
    <ScrollTopBtn/>
  </Fragment>
);

export default HomeTwo;
