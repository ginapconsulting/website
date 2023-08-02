import React from 'react';
import {Link} from 'react-router-dom';

const TeamBoxOne = ({path, desgination, image, name, className, linkedIn, twitter})=> (
  <div className={`team-style1 ${className || ''}`}>
    <div className="team-img">
      <Link to={path}><img src={image} alt="teamMember"/></Link>
      <div className="team-social">
        <Link to={linkedIn}><i className="fab fa-linkedin"/></Link>
        <Link to={twitter}><i className="fab fa-twitter"/></Link>
      </div>
    </div>
    <div className="team-content">
      <h3 className="team-title"><Link className="text-inherit" to={path}>{name}</Link></h3>
      <p className="team-degi">{desgination}</p>
    </div>
  </div>
);

export default TeamBoxOne;
