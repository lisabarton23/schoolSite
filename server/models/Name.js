const { Schema, model } = require('mongoose');

const nameSchema = new Schema({
  name: {
    type: String,
    
  },
});

const Name = model('Name', nameSchema);

module.exports = Name;