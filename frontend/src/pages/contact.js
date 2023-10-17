import React from 'react';
import './contact.css';
import NavBar from '../components/navbar';
const Contact=()=>{
return(
   <div className='contact'>
  <div className="nav">
      <NavBar /> 
      </div>
      <div className='contactContent'>
       <h5 className='telnum'>Tel:<br/>
       <ul>
         <li>+94-XXXXXXXXX</li>
         <li>+94-XXXXXXXXX</li>
       </ul>
       </h5>
       <h5 className='email'>Email:<br/>
       <ul>
         <li>abcd.jobbridge1234@gmail.com</li>
         <li>pqrs.jobbridge65655@gmail.com</li>
        
       </ul>
       </h5>
       <h5 className='address'>Address:</h5>
       <ul className='ad'>
         <li>1223/88 <br/>Hapugala <br/>Wakwella<br/>Galle</li>
       </ul>
       <h5 className='greeting'>Call For More Informations!</h5>

      </div>
      <div className='para'>
         <h4>"Your dream job awaits, and we're here to connect you with it. Trust us to match your qualification with the perfect opportunity. Register now, and lets' make your career aspirations a reality"</h4>
      </div>
  
 
   
   </div>



);






};

export default Contact;