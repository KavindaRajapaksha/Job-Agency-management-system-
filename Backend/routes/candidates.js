const express = require("express");
let Candidate = require("../models/Candidate");

const router = express.Router(); 
//------------------------------------------------------------------------------------------------------------------------------------------
router.route("/add").post(async(req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const nicNumber=req.body.nicNumber;
    const age = Number(req.body.age);
    const contactNumber=Number(req.body.contactNumber);
    const gender = req.body.gender;
    const emailAddress=req.body.emailAddress;
    const jobField=req.body.jobField;
    const educationQualifications=req.body.educationQualifications;
    const jobExperiences=req.body.jobExperiences;

    
  
    const newCandidate = new Candidate({
      
        firstName,
        lastName,
        nicNumber,
        age,
        contactNumber,
        gender, //object that use to save data
        emailAddress,
        jobField,
        educationQualifications,
        jobExperiences
    });
  
    newCandidate
      .save()
      .then(() => {
        res.json("Candidate Added"); 
      })
      .catch((err) => {
        console.log(err);
      });
  });
  //--------------------------------------------------------------------------------------------------------------------------

  router.route("/").get(async(req, res) => {

  
    Candidate.find()
      .then((candidates) => {
        res.json(candidates); 
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  //------------------------------------------------------------------------------------------------------------------------------


  router.route("/update/:id").put(async (req, res) => {
    
    let userId = req.params.id; 
    const { firstName,lastName,nicNumber,age,contactNumber,gender,emailAddress,jobField,educationQualifications,jobExperiences} = req.body; //d structure
  
    const updateCandidate = {
        firstName,
        lastName,
        nicNumber,
        age,
        contactNumber,
        gender, 
        emailAddress,
        jobField,
        educationQualifications,
        jobExperiences
    };
    const update = await Candidate.findByIdAndUpdate(userId, updateCandidate)
      .then(() => {
        res.status(200).send({ status: "User updated"}); //error msg ekak font end ekata yawanawa
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error update" });
      });
    });
    
    //----------------------------------------------------------------------------------------------------------------------------------
    router.route("/delete/:id").delete((req, res) => {
        let userId = req.params.id;
        Candidate.findByIdAndDelete(userId)
          .then(() => {
            res.status(200).send({ status: "Successfully deleted" });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error deleting user" });
          });
      });
      
      //----------------------------------------------------------------------------------------------------------------------------------
      router.route("/get/:id").get(async (req, res) => {
        let userID = req.params.id;
        const user = await Candidate.findById(userID)
          .then((candidate) => {
            res.json(candidate);
          })
          .catch((err) => {
            console.log(err);
          });
      });


  module.exports = router;
