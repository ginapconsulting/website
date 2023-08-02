import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne, NotFoundOne} from '../containers';

const NotFound = ()=> (
  <Fragment>
    <Seo title="Error Page" />
    <HeaderOne />
    <Breadcrumb pageName="Error Page" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <NotFoundOne />
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default NotFound;
