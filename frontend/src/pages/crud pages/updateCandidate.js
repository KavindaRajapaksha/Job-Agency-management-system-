import React, { useEffect, useState } from "react";
import "./addCandidates.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateCandidate() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [jobField, setJobField] = useState("");
  const [educationQualifications, setEducationQualification] = useState("");
  const [jobExperiences, setJobExperiences] = useState("");

  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8070/candidate/get/${id}`)
      .then((response) => {
        const userData = response.data;
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setNicNumber(userData.nicNumber);
        setAge(userData.age);
        setContactNumber(userData.contactNumber);
        setGender(userData.gender);
        setEmailAddress(userData.emailAddress);
        setJobField(userData.jobField);
        setEducationQualification(userData.educationQualifications);
        setJobExperiences(userData.jobExperiences);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //update the database
    try {
      await axios.put(`http://localhost:8070/candidate/update/${id}`, {
        firstName,
        lastName,
        nicNumber,
        age,
        contactNumber,
        gender,
        emailAddress,
        jobField,
        educationQualifications,
        jobExperiences,
      });
      alert("Candidate updated Successfully");
      navigate("/service");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="adding">
      {" "}
      <section className="header">
        {" "}
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <h4 className="tt1">JOB BRIDGE</h4>
          <h6 className="tt2">Career Connect Pro!</h6>
        </div>
      </section>
      <section className="addingContent">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <h2 className="newCand">New Candidate</h2>

            <div className="col">
              <input
                type="text"
                className="form-control gapper"
                name="firstName"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control gapper"
                name="lastName"
                placeholder="Last name"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control gapper"
                name="nicNumber"
                placeholder="Nic Number"
                value={nicNumber}
                onChange={(e) => setNicNumber(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control gapper"
                name="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control gapper"
                name="contactNumber"
                placeholder="Telephone Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control gapper"
                name="gender"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control gapper"
                name="emailAddress"
                placeholder="Email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control gapper"
                name="jobField"
                placeholder="Job Field"
                value={jobField}
                onChange={(e) => setJobField(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control gapper gapperbig"
                name="educationQualification"
                placeholder="Education Qualification"
                value={educationQualifications}
                onChange={(e) => setEducationQualification(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control gapper gapperbig"
                name="jobExperiences"
                placeholder="Job Experiences"
                value={jobExperiences}
                onChange={(e) => setJobExperiences(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="AddUser">Update Candidate</button>
        </form>
      </section>
    </div>
  );
}

export default UpdateCandidate;
