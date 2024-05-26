const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Harryisagoodb$oy';

//ROute 1: auth for api/auth/createuser
router.post('/creatUser', [
  body('name', "Enter valid name").isLength({ min: 3 }),
  body('email', "Enter valid email").isEmail(),
  body('password').isLength({ min: 5 }),


], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ errors: "Sorry this email is already exitst" })
    }
    var salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);

    res.json({ authToken })


  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: "some error occurd" });
  }

})


//ROute 2:  auth for api/auth/login
router.post('/login', [
  body('email', "Enter valid email").isEmail(),
  body('password', "Password cannot be blank ").exists(),


],
  // if  there is error then do this
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try with correct user creditial " })
      }

      let passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please try with correct user creditial " })

      }
      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken })

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "some error occurd" });
    }
  })

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required

router.post('/getuser', fetchuser, async (req, res) => {




  try {

    let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

module.exports = router