const { UserConditions } = require('../models/index');
let ctrls = {}

ctrls.crearUserConditions = async (req, res) => {
     try {
          const { allergic,
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
               surgeryText } = req.body;

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
               surgeryText
          })

          await user.save();
          res.json({ mensaje: 'Se registro correctamente.' });
     } catch (error) {
          console.log(error);
     }
};



ctrls.getUserConditions = async (req, res) => {
     try {
          const userConditions = await UserConditions.find();
          res.json(userConditions);
     } catch (error) {
          console.log(error)
     }
};




module.exports = ctrls;