const { UserConditions } = require('../models/index');
let ctrls = {};

//User Conditions
ctrls.crearUserConditions = async (req, res) => {
  try {
    const {
      allergic,
      otherAllergic,
      medication,
      surgery,
      hasThroatPain,
      hipertension,
      diabetes,
      cardiopatia,
      bronconeumopatia,
      gastritis,
      insuficienciaRenal,
      insuficienciaHeatica,
      hepatitis,
      vih,
      allergicText,
      otherAllergicText,
      medicationText,
      surgeryText,
      name
    } = req.body;

    console.log(req.body);
    const user = new UserConditions({
      allergic,
      otherAllergic,
      medication,
      surgery,
      hasThroatPain,
      hipertension,
      diabetes,
      cardiopatia,
      bronconeumopatia,
      gastritis,
      insuficienciaRenal,
      insuficienciaHeatica,
      hepatitis,
      vih,
      allergicText,
      otherAllergicText,
      medicationText,
      surgeryText,
      name
    });

    await user.save();
    res.json({ mensaje: 'Se registro correctamente.' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Valores Incorrectos.' });
  }
};

ctrls.getUserConditions = async (req, res) => {
  try {
    const userConditions = await UserConditions.findOne({ 'name': req.params.name });
    userConditions ? res.json(userConditions) : res.status(404).json({ mensaje: 'Not exit.' })
  } catch (error) {
    res.status(500).json({ mensaje: 'Error.' });
  }
};

module.exports = ctrls;
