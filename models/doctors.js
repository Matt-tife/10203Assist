import { Schema, model, models } from "mongoose";

const DoctorSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    // required: [true, 'Email is required!'],
  },
  userPassword: {
    type: String,
    // required: [true, 'Please input a password']
  },
  username: {
    type: String,
    // required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  dob: {
    type: String
  },
  states: {
    type: String
  },
  userCountry: {
    type: String
  },
  firstName: {
    type: String,
    // required: [true, 'First Name is required!'],
  },
  lastName: {
    type: String,
    // required: [true, 'Last Name is required!'],
  },
  phoneCode: { String },
  phoneNumber: { Number },
  image: {
    type: String,
  },
  // completedRegistration : {
  //   type: Boolean,
  //   default: false
  // }
}, { timestamps: true });

const Doctor = models.Doctor || model("Doctor", DoctorSchema);

export default Doctor;

// The "models" object is provided by the moongoose library 
// and stores all the registered models
// If a model named "User" already exists in the "models" object, it assigns the existing model
// to the "User" variable

// This prevents redefining the model and ensures that the existing model is reused

// If a model named "User"  does not exist in the "models" object,
// the "model" function from mongoose creates a new model
// The newly created model is then assigned to the "User" variable
