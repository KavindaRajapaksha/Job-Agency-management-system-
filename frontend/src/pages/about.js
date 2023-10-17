import React from 'react';
import NavBar from '../components/navbar';
import './about.css';

const About=()=>{
return(
   <div className='about'>
   <div className="nav">
      <NavBar /> 
      </div>
      <div className="aboutContent">
        <h1 className="aboutTitle">JOB BRIDGE</h1>
        <h1 className='aboutT1'>Career Connect Pro!</h1>
        
        <h3 className='aboutPara1'>"Welcome to Job Bridge! As a Company,we're dedicated to helping you find the perfect job match.We gather comprehensive data from candidates,including their educational background,qualifications,and job experience.With this information, we meticulously search for opportunities that align with your skills and aspirations.Our goal is to ensure a seamless transition into a fulfilling career that matches your unique qualifications. Join us on our website and let's embark on this journey towards your dream job together."</h3>
      </div>










    
   </div>
);






};

export default About;