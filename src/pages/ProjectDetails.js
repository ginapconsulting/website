import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne, ProjectSingle} from '../containers';

const ProjectDetails = ()=> (
  <Fragment>
    <Seo title="Project Details" />
    <HeaderOne />
    <Breadcrumb pageName="Project Details" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ProjectSingle className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default ProjectDetails;
