const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {    //email/username are same according to figma file .
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  corporateName: {
    type:String,
    default:""
  }, //organization name 
  employeeNumber: {
    type:Number,
    default:""
  },
  department: {
    type:String,
    default:"IT department"
  },
  role: {
    type:String,
    default:"Developer"
  },
  lineManagerName: {
    type:String,
    default:""
  },
  lineManagerEmail: {
    type:String,
    default:""
  },
  phoneNumber: {
    type:Number,
    default:""
  },
  expertise: {
    type: String,
    enum: [
      "marketing",
      "sales",
      "technology",
      "design",
      "management",
      "education",
      "government",
      "finance",
      "health",
      "social",
    ],
    default:"marketing"
  },
  educationGrade: {
    type: String,
  },
  yearGraduate: {
    type: Number,
  },
  schoolName: {
    type: String,
  },
  subjectStudied: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
