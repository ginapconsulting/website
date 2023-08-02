import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne, ServiceSingle} from '../containers';

const ServiceDetails = ()=> (
  <Fragment>
    <Seo title="Services Details" />
    <HeaderOne />
    <Breadcrumb pageName="Services Details" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ServiceSingle className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default ServiceDetails;
