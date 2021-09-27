const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'Ten khoa hoc chua cap nhat', minLength: 1, maxLength: 255 },
    description: { type: String, maxLength: 600},
    img: { type: String, maxLength: 255},
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
  });

  module.exports = mongoose.model('Course', Course);