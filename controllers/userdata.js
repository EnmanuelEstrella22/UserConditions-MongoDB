const { UserData } = require('../models/index');
let ctrls = {};

//User Data

ctrls.crearUserData = async (req, res) => {
  try {
    const {
      name,
      gender,
      dateOfBirth,
      cedulaNumber,
      address,
      cellPhone,
      civil_state,
      emergencyContactName,
      emergencyContactPhone,
      emergencyContact_relationShip,
      height,
      weight,
    } = req.body;

    const user_data = new UserData({
      name,
      gender,
      dateOfBirth,
      cedulaNumber,
      address,
      cellPhone,
      civil_state,
      emergencyContactName,
      emergencyContactPhone,
      emergencyContact_relationShip,
      height,
      weight,
    });

    await user_data.save();
    res.json({ mensaje: 'Se registro correctamente.' });
  } catch (error) {
    console.log(error);
  }
};


ctrls.getUserData = async (req, res) => {
  try {
    const userData = await UserData.findOne({ 'name': req.params.name });
    userData ? res.json(userData) : res.status(404).json({ mensaje: 'Not exit.' })
    res.json(userData);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error.' });
  }
};

module.exports = ctrls;
