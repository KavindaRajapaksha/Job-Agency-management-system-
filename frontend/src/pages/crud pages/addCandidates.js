import React from "react";
import "./addCandidates.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCandidates = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [jobField, setJobField] = useState("");
  const [educationQualification, setEducationQualification] = useState("");
  const [jobExperiences, setJobExperiences] = useState("");

  return (
    <div className="adding">
      <section className="header">
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
        <form>
          <div class="form-row">
            <br />
            <br />

            <h2 className="newCand">New Candidate</h2>

            <div class="col">
              <input
                type="text"
                class="form-control"
                name="firstName"
                placeholder="First name"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="lastName"
                placeholder="Last name"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="nicNumber"
                placeholder="Nic Number"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="age"
                placeholder="Age"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="contactNumber"
                placeholder="Telephone Number"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="gender"
                placeholder="Gender"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="emailAddress"
                placeholder="Email"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="jobField"
                placeholder="Job Field"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="educationQualification"
                placeholder="Education  Qualification"
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                class="form-control"
                name="jobExperiences"
                placeholder="Job Experiences"
              />
            </div>

            <br />
          </div>
        </form>

        <button className="AddUser">Add Candidate</button>
      </section>
    </div>
  );
};

export default AddCandidates;
