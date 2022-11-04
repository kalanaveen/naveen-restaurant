import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
     <div className='app__aboutus-overlay flex__center'>
       <img src={images.G} alt="G" />
     </div>
     <div className="app__aboutus-content flex__center">
         <div className='app__aboutus-content_about'>bgxgnxhbgbn
           <h1 className='headtext__cormorant'>About Us</h1>
           <img src={images.spoon} alt="spoon" className='spoon__img'/>
           <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, nemo saepe officiis in itaque adipisci amet eos. Quod aspernatur et eius adipisci repudiandae molestiae? Perferendis nam deleniti sunt? Quas, iure.</p>
           <button type='button' className='custom__button'>Know More</button>
         </div>

         <div className='app__aboutus-content_knife flex__center'>
            <img src={images.knife} alt="knife" />
         </div>

         <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={images.spoon} alt="spoon" className='spoon__img'/>
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam impedit, veniam perferendis a necessitatibus unde? Recusandae, eligendi? Explicabo quo veniam debitis quia expedita assumenda quibusdam ducimus vero qui facere!</p>
            <button type='button' className='custom__button'>Know More</button>
         </div>
     </div>
  </div>
);

export default AboutUs;