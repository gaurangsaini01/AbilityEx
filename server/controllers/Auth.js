const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  try {
    //data fetch from req body
    const {
      firstName,
      lastName,
      email,
      password,
      image,
      employeeNumber,
      corporateName,
      department,
      role,
      lineManagerName,
      lineManagerEmail,
      phoneNumber,
      expertise,
      educationGrade,
      yearGraduate,
      schoolName,
      subjectStudied,
    } = req.body;

    //validate data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !expertise ||
      !educationGrade ||
      !yearGraduate ||
      !schoolName ||
      !subjectStudied
    ) {
      return res.status(400).json({
        success: false,
        message: "Fields Missing",
      });
    }

    //check user already exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists , Please Login",
      });
    }

    //if all good hash password and create entry in db and send success response
    const hashedPassword = await bcrypt.hash(password, 10);

    //for handling spaces in URL
    const seed = `${firstName} ${lastName}`;
    const encodedSeed = encodeURIComponent(seed);

    //entry create in Db
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      //dicebear Api to Generate image from user 2 initial name letters
      image: `https://api.dicebear.com/8.x/initials/svg?seed=${encodedSeed}`,
      corporateName,
      phoneNumber,
      expertise,
      educationGrade,
      yearGraduate,
      schoolName,
      subjectStudied,
      department,
      role,
      lineManagerName,
      lineManagerEmail,
      employeeNumber,
    });
    return res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "User Cannot Be Registered , try Again",
    });
  }
}

async function login(req, res) {
  try {
    const { email, password, corporateName } = req.body;
    console.log(corporateName)
    //check for empty Fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing Fields",
      });
    }
    if(corporateName!==undefined && !corporateName){
      return res.status(400).json({
        success: false,
        message: "Missing Fields",
      });
    }

    //Check User Exists Or Not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Doesn't Exist Go SignUp",
      });
    }
    if(corporateName!== undefined && user.corporateName !== corporateName){
      return res.status(400).json({
        success: false,
        message: "Wrong corporate name",
      });
    }
    //If passwords are matching
    if (await bcrypt.compare(password, user.password)) {
      //create a token using jwt
      const payload = {
        email: user.email,
        id: user._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      res.status(200).json({
        success: true,
        message: "Logged In",
        user,
        token,
      });
    }
    //If passwords are not matching
    else {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
}

module.exports = { signup, login };
