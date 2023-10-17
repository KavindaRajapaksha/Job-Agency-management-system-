const express = require("express");
let Admin = require("../models/Admin");

const router = express.Router();
//---------------------------------------------------------------

router.route("/add").post(async(req, res) => {
  const{firstName,lastName,email,address,password}=req.body;
  
    const newAdmin = new Admin({
       firstName,
       lastName,
       email,
       address,
       password

    });
  
    newAdmin
      .save()
      .then(() => {
        res.json("Admin Added"); 
      })
      .catch((err) => {
        console.log(err);
      }); 
  });


  //---------------------------------------------------------------

  router.route("/").get(async(req, res) => {
   
  
    Admin.find()
      .then((admins) => {
        res.json(admins);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //-------------------------------------------------------------------

  router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id; 
    const { firstName,lastName,email,address,password} = req.body; 
  
    const updateAdmin = {
       firstName,
       lastName,
       email,
       address,
       password

    };
    const update = await Admin.findByIdAndUpdate(userId, updateAdmin)
      .then(() => {
        res.status(200).send({ status: "Admin updated"}); 
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error update" });
      });
    });

    //------------------------------------------------------------------
    router.route("/delete/:id").delete((req, res) => {
        let userId = req.params.id;
        Admin.findByIdAndDelete(userId)
          .then(() => {
            res.status(200).send({ status: "Successfully deleted admin" });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error deleting admin" });
          });
      });
      //-------------------------------------------------------------------
      router.route("/get/:id").get(async (req, res) => {
        let userID = req.params.id;
        const user = await Admin.findById(userID)
          .then((admin) => {
            res.json(admin);
          })
          .catch((err) => {
            console.log(err);
          });
      });

      module.exports = router;