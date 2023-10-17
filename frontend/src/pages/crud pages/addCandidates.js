import React from "react";
import './addCandidates.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCandidates = () => {
  const navigate= useNavigate();
  const [inputVal,setInputVal]=useState({
    firstName:"",
    lastName:"",
    nicNumber:"",
    age:"",
    contactNumber:"",
    gender:"", 
    emailAddress:"",
    jobField:"",
    educationQualification:"",
    jobExperiences:""

  });
   const setData=(e)=>{
     console.log(e.target.value);
     const {name,value}=e.target;
     setInputVal((preVal)=>{
       return{
        ...preVal,[name]:value

       }
     })

   }
  //  const addCandidate=async(e)=>{
  //    e.preventDefault();
  //    const{firstName,lastName,nicNumber,age,contactNumber,gender,emailAddress,jobField,educationQualification,jobExperiences }=inputVal;
  //    const res=await fetch("http://localhost:8070/candidate/add",{
  //       method:"POST",
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //       body:JSON.stringify({
  //         firstName,lastName,nicNumber,age,contactNumber,gender,emailAddress,jobField,educationQualification,jobExperiences 
  //       })

     


  //    })


  //    const data =await res.json();
  //    console.log(data);
  

  //  }



  return (
    
    <div className="adding">
    <section className='header'>
    
    <div className='logo'   onClick={()=>{navigate("/")}}>
       <h4 className='tt1'>JOB BRIDGE</h4>
       <h6 className='tt2'>Career Connect Pro!</h6>
       
    </div>
   
  </section>
  <section className="addingContent">
  <form>
  <div class="form-row">
  <br/>
  <br/>
   
   <h2 className="newCand">New Candidate</h2>
    
    <div class="col">
      <input type="text" class="form-control" 
        name="firstName" onChange={setData} value={inputVal.firstName}
       placeholder="First name" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="lastName" onChange={setData} value={inputVal.lastName}
      placeholder="Last name" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="nicNumber" onChange={setData} value={inputVal.nicNumber}
      placeholder="Nic Number" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="age" onChange={setData} value={inputVal.age}
      placeholder="Age" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="contactNumber" onChange={setData} value={inputVal.contactNumber}
      placeholder="Telephone Number" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="gender" onChange={setData} value={inputVal.gender}
      placeholder="Gender" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="emailAddress" onChange={setData} value={inputVal.emailAddress}
      placeholder="Email" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="jobField" onChange={setData} value={inputVal.jobField}
      placeholder="Job Field" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="educationQualification" onChange={setData} value={inputVal.educationQualification}
      placeholder="Education  Qualification" />
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" 
      name="jobExperiences" onChange={setData} value={inputVal.jobExperiences}
      placeholder="Job Experiences" />
    </div>
    
    <br/>
   
    
  </div>
</form>

<button className="AddUser">Add Candidate</button>





  </section>
    
    </div>
  );
};

export default AddCandidates;
