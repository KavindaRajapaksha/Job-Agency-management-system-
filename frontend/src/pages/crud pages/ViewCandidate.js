import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./viewstyles.css"; 

function ViewCandidate() {
  const [candidate, setCandidate] = useState(null);
  const { id } = useParams();
  // Access the candidate ID from the URL

  useEffect(() => {
    // Fetch candidate details from the server based on the candidateId
    axios
      .get(`http://localhost:8070/candidate/get/${id}`)
      .then((response) => {
        setCandidate(response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidate data:", error);
      });
  }, [id]);

  return (

    <div className="candidate-details">
    
    
      {candidate ? (
        <div className="box">
          <h2 className="headder">Candidate Details</h2>
          <p className="container">
            <strong>Name:</strong> {candidate.firstName} {candidate.lastName}
          </p>
          <p className="container">
            <strong>NIC Number:</strong> {candidate.nicNumber}
          </p>
          < p className="container">
            <strong>Age:</strong> {candidate.age}
          </p>
          <p className="container">
            <strong>Contact Number:</strong> {candidate.contactNumber}
          </p>
          <p className="container">
            <strong>Gender:</strong> {candidate.gender}
          </p>
          <p className="container">
            <strong>Email Address:</strong> {candidate.emailAddress}
          </p>
          <p className="container">
            <strong>Job Field:</strong> {candidate.jobField}
          </p>
          <p className="container">
            <strong>Education Qualification:</strong>{" "}
            {candidate.educationQualifications}
          </p>
          <p className="container">
            <strong>Job Experiences:</strong> {candidate.jobExperiences}
          </p>
        </div>
      ) : (
        <p>Loading candidate details...</p>
      )}
    </div>
  );
}

export default ViewCandidate;
