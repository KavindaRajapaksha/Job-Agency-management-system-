import React from 'react';
import './services.css';
import { useNavigate } from 'react-router-dom';

const Services=()=>{
   const navigate = useNavigate();
return(
   <div className='service'>
    <section className='header'>
    
      <div className='logo'   onClick={()=>{navigate("/")}}>
         <h4 className='tt1'>JOB BRIDGE</h4>
         <h6 className='tt2'>Career Connect Pro!</h6>
         
      </div>
     
    </section>
     <section className='serviceContent'>
     <h3 className='candidates'>CANDIDATES</h3>
     <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Age</th>
      <th scope="col">Field</th>
      <th scope="col">Manage Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sandun</th>
      <td>45</td>
      <td>Engineering</td>
      <td>
         <button className='update' >Update</button>
         <button className='view'>View</button>
         <button className='delete'>Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">Kavinda</th>
      <td>24</td>
      <td>Medicine</td>
      <td>         <button className='update' >Update</button>
         <button className='view'>View</button>
         <button className='delete'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">Duminda</th>
      <td>33</td>
      <td>teaching</td>
      <td>         <button className='update' >Update</button>
         <button className='view'>View</button>
         <button className='delete'>Delete</button></td>
    </tr>
  </tbody>
</table>
  <div className='add-candidate-button'>
          <button className='add-candidate' onClick={()=>{navigate("/service/add")}}>Add Candidate</button>
        </div>
     </section>

    
   </div>



);






};

export default Services;