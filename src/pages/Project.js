import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne, ProjectThree} from '../containers';

const Project = ()=> (
  <Fragment>
    <Seo title="Projects" />
    <HeaderOne />
    <Breadcrumb pageName="Projects" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ProjectThree className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Project;
