const mongoose = require("mongoose");
const paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  lastLoginAt:{
    type: Date,
    required: false,
  },
  createdBy: {
    type: String,
    required: true,
  },
  updatedBy: {
    type: String,
    required: true,
  },
}, {
  collection: 'users',
  timestamps: true
});

schema.plugin(paginate);

module.exports = mongoose.model('User', schema);