
const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv"); 

const app = express();

const PORT = process.env.PORT || 8070;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 



const CandidateRouter = require("./routes/candidates.js");
app.use("/candidate", CandidateRouter);

const AdminRouter = require("./routes/admins.js");
app.use("/admin", AdminRouter);

const AdminLoginRouter = require("./routes/adminLogin.js");
app.use("/login", AdminLoginRouter);





const URL =  "mongodb+srv://rdkskavinda:xXeEkxgxhIPVHqyx@cluster0.trhk4nj.mongodb.net/jobAgency_db";//database url

const ConnectMongoDB = (URL) => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(URL);
      console.log("Successfully Connected to MongoDB");
    } catch (err) {
      console.log("MongoDB Connection Failed");
    }
  };
  
  ConnectMongoDB(URL);
  
  app.listen(PORT, () => {
    console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
  });
  