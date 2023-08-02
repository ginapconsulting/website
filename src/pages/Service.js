import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne, ServiceFive} from '../containers';

const Service = ()=> (
  <Fragment>
    <Seo title="Services" />
    <HeaderOne />
    <Breadcrumb pageName="Services" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ServiceFive className="space-top space-extra-bottom"/>
    {/*<CtaOne className="space"/>
    <ProcessThree className="space-top space-extra-bottom"/>
    <TestimonialOne className="space-top space-extra-bottom"/>*/}
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Service;
