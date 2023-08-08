const { Schema, model } = require('mongoose');

const dataSchema = new Schema({
  Year: {
    type: Number,
    required: true,
  },
  Month: {
    type: Number,
    required: true,
  },
  Day: {
    type: Number,
    required: true,
  },
  Time: {
    type: Number,
    required: true,
  },
  Site: {
    type: String,
    required: true,
  },
  Atlas: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
  }
});

const Data = model('Data', dataSchema);

module.exports = Data;
