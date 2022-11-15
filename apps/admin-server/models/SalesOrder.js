const mongoose = require("mongoose");
const paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
  soId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  salesEmail: {
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
  }
}, {
  collection: 'sales_orders',
  timestamps: true
});

schema.plugin(paginate);

module.exports = mongoose.model('SalesOrder', schema);
