const models = require("../database/models")

const getTable = async (req, res) => {
  try {
    const table = await models.Financial_Inclusion.findAll();
    return res.status(200).json(table);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getOne = async(req,res) => {
    try {
        const {term} = req.params;
        const response = await models.Financial_Inclusion.findOne({where: {
            FII: term
        }});
        if (response) {
            return res.status(200).json(response)
        }
        else {
            return res.status(400).json({message: "Error"})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  getTable,
  getOne
};
