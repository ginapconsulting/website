import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {BlogSingle, FooterOne, HeaderOne} from '../containers';

const BlogDetails = () => (
  <Fragment>
    <Seo title="Blog Details" />
    <HeaderOne />
    <Breadcrumb pageName="Blog Details" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <BlogSingle className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default BlogDetails;
