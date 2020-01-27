const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  ggn: {type: String, required: true},
  name: {type: String, required: true},
  country: {type: String, required: true},
  roles: {type: Types.Array(String), required: true},
  sector: { type: String, require: true }
});

module.exports = model('Supplier', schema);