const mongoose = require("mongoose");
const paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
  shipmentId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  soId: {
    type: String,
    required: true,
  },
  packageId: {
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
  createdBy: {
    type: String,
    required: true,
  },
  updatedBy: {
    type: String,
    required: true,
  },
}, {
  collection: 'shipments',
  timestamps: true
});

schema.plugin(paginate);

module.exports = mongoose.model('Shipment', schema);