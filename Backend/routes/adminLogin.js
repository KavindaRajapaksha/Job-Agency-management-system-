const router = require("express").Router();
let Admin = require("../models/Admin");

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);

    const user = await Admin.findOne({ email: req.body.email });
    console.log("user", user);
    if (!user) return res.status(401).send({ message: "Invalid Email" });
    if (req.body.password == user.password) {
      return res.json({
        message: "logged in successfully",
        user,
        status: 200,
      });
    } else {
      return res.json({
        message: "Invalid password",
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
