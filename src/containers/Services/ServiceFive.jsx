import React from 'react';
import {ServiceBoxOne} from '../../components';


// Service Data
import serviceData from '../../data/service.json';

const ServiceFive = ({...restProps})=> (
  <div {...restProps}>
    <div className="container">
      <div className="row">
        {serviceData.map(item => (
          <div  key={item.id} className="col-md-6 col-lg-4">
            <ServiceBoxOne className="layout2"
              path={item.path}
              bgImage={item.image}
              icon={item.image}
              title={item.title}
              text={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default ServiceFive;