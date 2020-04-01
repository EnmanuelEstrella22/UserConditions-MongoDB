const { UserData } = require('../models/index');
let ctrls = {}

//User Data

ctrls.crearUserData = async (req, res) => {
    try {
      const { name,
        dateOfBirth,
        cedulaNumber,
        address,
        cellPhone,
        emergencyContactName,
        emergencyContactPhone,
        height,
        weight } = req.body;
  
      const user_data = new UserData({
        name,
        dateOfBirth,
        cedulaNumber,
        address,
        cellPhone,
        emergencyContactName,
        emergencyContactPhone,
        height,
        weight
      });
  
      await user_data.save();
      res.json({ mensaje: 'Se registro correctamente.'});
  
    } catch (error) {
      console.log(error);
    }
  };
  
  ctrls.getUserData = async (req, res) => {
    try {
      const userData = await UserData.find();
      res.json(userData);
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = ctrls;
  