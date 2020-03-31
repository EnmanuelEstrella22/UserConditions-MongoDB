const { model, Schema } = require('mongoose');

const userConditions = new Schema({
  allergic: { type: Boolean, default: false },
  allergicText: { type: String, required: false },
  otherAllergic: { type: Boolean, default: false },
  medication: { type: Boolean, default: false },
  surgery: { type: Boolean, default: false },
  hasThroatPain: { type: Boolean, default: false },
  hipertension: { type: Boolean, default: false },
  diabetes: { type: Boolean, default: false },
  cardiopatia: { type: Boolean, default: false },
  bronconeumopatia: { type: Boolean, default: false },
  gastritis: { type: Boolean, default: false },
  insuficienciaRenal: { type: Boolean, default: false },
  insuficienciaHeatica: { type: Boolean, default: false },
  hepatitis: { type: Boolean, default: false },
  vih: { type: Boolean, default: false },
  allergicText: { type: String, required: false },
  otherAllergicText: { type: String, required: false },
  medicationText: { type: String, required: false },
  surgeryText: { type: String, required: false }

}, { collection: 'userConditions' });


module.exports = model('userConditions', userConditions);
