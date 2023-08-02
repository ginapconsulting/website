import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {ContactTwo, FooterOne, HeaderOne} from '../containers';

const Contact = () => (
  <Fragment>
    <Seo title="Contact Us" />
    <HeaderOne />
    <Breadcrumb pageName="Contact Us" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ContactTwo className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Contact;
