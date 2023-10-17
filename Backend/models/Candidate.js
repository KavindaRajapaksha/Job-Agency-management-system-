const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const candidateSchema= new Schema({
    
    firstName:{
        type: String,
        required: true, //backend validation
    },

    lastName:{
        type: String,
        required: true, 
    },

    nicNumber:{
        type: String,
        required: true, 
    },

    age:{
        type: Number,
        required: true, 
    },

    contactNumber:{
        type: Number,
        required: true, 
    },

    gender:{
        type: String,
        required: true, 
    },

    emailAddress:{
        type: String,
        required: true, 
    },

    jobField:{
        type: String,
        required: true, 
    },

    educationQualificatios:{
        type: String,
        required: false, 
    },

    jobExperiences:{
        type: String,
        required: false, 
    }

  

})

const Candidate= mongoose.model("Candidates",candidateSchema);//collection name and schema

module.exports = Candidate;