import React from 'react';
import './services.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Services=()=>{
    const navigate = useNavigate();
    const [candidates,setCandidates]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8070/candidate/`).then((res)=>{
            setCandidates(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
    }
    ,[])
 //delete
  
    const deleteCandidate=(id)=>{
        axios.delete(`http://localhost:8070/candidate/delete/${id}`).then((res)=>{
            alert("Candidate deleted successfully");
            window.location.reload();
        }).catch((err)=>{
            alert(err.message);
        })
    }

   



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

  {candidates.map((candidate)=>{
      return(
        <tr>
        <th scope="row">{candidate.firstName}</th>
        <td>{candidate.age}</td>
        <td>{candidate.jobField}</td>
        <td>
           <button className='update' onClick={()=>{navigate(`/service/update/${candidate._id}`)}}>Update</button>
           <button className='view' onClick={()=>{navigate(`/service/view/${candidate._id}`)}}>View</button>
           <button className='delete' onClick={()=>deleteCandidate(candidate._id)}>Delete</button>
        </td>
      </tr>
      )
  })}
  
    
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