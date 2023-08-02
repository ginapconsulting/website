import React from 'react';
import {HeaderSticky, HeaderTop, InfoMedia, Logo, MainMenu, MobileMenu} from '../../components';

const HeaderOne = () => (
  <header className="vs-header header-layout1">
    <HeaderTop>
      <HeaderTop.Left>
        <p className="note_style1"><span className="note_title">Now Hiring:</span>Are you a motivated Software Engineer or UI/UX Designer? Want to work with us? Send us an email</p>
      </HeaderTop.Left>
      <HeaderTop.Right>
        <p className="note_style1"><i className="fal fa-clock"/><span className="note_title">Office Hours:</span> 08:00am-6:00pm GMT+1</p>
      </HeaderTop.Right>
    </HeaderTop>
    <div className="container">
      <div className="menu-top">
        <div className="row justify-content-between align-items-center gx-sm-0">
          <div className="col">
            <Logo image="images/logo.png" logoClassName="logo-75" />
          </div>
          <InfoMedia className="header-media col-auto"
            icon="fas fa-phone-alt"
            title="Call us 24/7"
            info={<a href="tel:+2348068674787">+234 806 867 4787</a>}
          />
          <InfoMedia className="header-media col-auto d-none d-lg-flex"
            icon="fas fa-envelope"
            title="Mail Us For Support"
            info={<a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a>}
          />
          <InfoMedia className="header-media col-auto d-none d-xl-flex"
            icon="fas fa-map-marker-alt"
            title="Office Address"
            info="Fehintolu Block, Lokoja"
          />
        </div>
      </div>
    </div>
    <HeaderSticky>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <MainMenu className="menu-style1 d-none d-lg-block" />
            <MobileMenu />
          </div>
        </div>
      </div>
    </HeaderSticky>
  </header>
);


export default HeaderOne;
