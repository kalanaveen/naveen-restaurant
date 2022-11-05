import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
     <div className="app__wrapper_img app__wrapper_img-reverse">
       <img src={images.chef} alt="chef image" />
     </div>
     <div className="app__wrapper_info">
       <SubHeading title="Chef's Word"/>
       <h1 className="headtext__cormorant">What we believe in</h1>

       <div className="app__chef-content">
         <div className="app__chef-content_quote">
           <img src={images.quote} alt="quote" />
           <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
         </div>
         <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur laudantium quaerat unde ullam maxime labore, temporibus placeat magnam tenetur nulla sed eaque ipsum expedita inventore voluptate asperiores ex officiis voluptatem.</p>    
       </div>

       <div className="app__chef-sign">
        <p>Naveen Kala</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
       </div>
     </div>
  </div>
);

export default Chef;
