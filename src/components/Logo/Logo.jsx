import React from 'react';
import {Link} from "react-router-dom";

const Logo = ({ image, className, logoClassName}) => (
  <Link className={`vs-logo ${className || ''}`} to="/">
    <img src={image} alt="Logo" className={logoClassName} />
  </Link>
);

export default Logo;
