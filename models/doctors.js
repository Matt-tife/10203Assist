import { Schema, model, models } from "mongoose";

const DoctorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required!'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required!'],
  },
  docEmail: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  userPassword: {
    type: String,
    required: [true, 'Please input a password']
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
  phoneCode: { 
    type: String 
  },
  phoneNumber: { 
    type: String 
  },
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
