const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true 
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },

  program: {
    type: String, // e.g., BSc, MSc, PhD
    required: true
  },
  courses: [{
    courseCode: String,
    courseName: String,
    credits: Number,
    grade: String // e.g., A, B+, etc.
  }],

  // Other Info
  guardian: {
    name: String,
    relationship: String,
    contactNumber: String
  },
  status: {
    type: Boolean,
    default: true
  },

  // Timestamps
}, { timestamps: true });

const StudentModel = mongoose.model('students', studentSchema);

module.exports = StudentModel;
