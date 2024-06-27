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
//   accountType: {
//     type: String,
//     enum: ["personal", "corporate"],
//     required: true,
//   },
  image: {
    type: String,
    required: true,
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
    required: true,
  },
  educationGrade: {
    type: String,
    required: true,
  },
  yearGraduate: {
    type: Number,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  subjectStudied: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
