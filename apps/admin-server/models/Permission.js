const mongoose = require("mongoose");
const paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  formattedName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
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
  collection: 'permissions',
  timestamps: true
});

schema.plugin(paginate);

module.exports = mongoose.model('Permission', schema);