import React from 'react';
import {Link} from 'react-router-dom';
import {AboutWidget, CategoryWidget, IconLink, InfoMedia, Widget} from '../../components/';

// Widget Datas
import widgetsdata from '../../data/widgets.json';

const {pageList, exploreLinks} = widgetsdata;


const FooterOne = ()=> (
  <footer className="footer-wrapper footer-layout1 background-image" style={{backgroundImage: 'url(images/shape/bg-footer-1-1.jpg)'}}>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-map-marker-alt"
              title="Head Office"
              info="334 Thimble Weed Crt, Milton, ON"
            />
          </div>
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-clock"
              title="Working Hours"
              info="Mon - Fri 9am - 6pm ET"
            />
          </div>
          <div className="footer-media col-sm">
            <InfoMedia
              icon="fal fa-phone-volume"
              title="Contact"
              info={<>
                <a href="mailto:hello@ginapconsulting.ca">hello@ginapconsulting.ca</a>
                <br/>
                <a href="tel:+14372923479">(437) 292 3479</a>
              </>}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-auto">
            <Widget widgetTitle="About Us" className="footer-widget">
              <AboutWidget>
                <AboutWidget.Text>We're committed to empowering organizations with innovative technology solutions that drive growth, streamline operations, and achieve strategic goals.</AboutWidget.Text>
                <IconLink className="footer-social">
                  <IconLink.Item icon="fab fa-linkedin" path="https://www.linkedin.com/company/ginapconsulting"/>
                  <IconLink.Item icon="fab fa-twitter" path="https://twitter.com/Ginapconsult"/>
                </IconLink>
              </AboutWidget>
            </Widget>
          </div>
          <div className="col-6 col-xl-auto">
            <Widget widgetTitle="Links" className="widget_nav_menu footer-widget">
              <CategoryWidget>
                {pageList.map(cat => (
                  <CategoryWidget.Item key={cat.name} path={cat.path}>{cat.name}</CategoryWidget.Item>
                ))}
              </CategoryWidget>
            </Widget>
          </div>
          <div className="col-6 col-xl-auto">
            <Widget widgetTitle="Explore" className="widget_nav_menu footer-widget">
              <CategoryWidget>
                {exploreLinks.map(cat => (
                  <CategoryWidget.Item key={cat.name} path={cat.path}>{cat.name}</CategoryWidget.Item>
                ))}
              </CategoryWidget>
            </Widget>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <p className="copyright-text">Copyright <i className="fal fa-copyright"/> 2025 <Link className="text-white" to="/">GINAP Consulting</Link>. All rights reserved by GINAP Consulting Inc.</p>
      </div>
    </div>
  </footer>
);

export default FooterOne;
