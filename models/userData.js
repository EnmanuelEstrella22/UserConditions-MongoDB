const { model, Schema } = require('mongoose');

const userData = new Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  cedulaNumber: { type: String, required: true },
  address: { type: String, required: true },
  cellPhone: { type: String, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactPhone: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true }
}, { collection: 'userData' });

module.exports = model('userData', userData);
