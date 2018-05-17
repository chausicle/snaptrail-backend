const model = require("../models/signup");
const bcrypt = require('bcryptjs')

const createAccount = async (req, res, next) => {
  try {
    const data = await model.createAccount(req.body);
    console.log("data back in controller   ====>>>",   data)
    if (data.error) {
      res.status(400).json(data)
    } else {
      res.status(201).json(data)
    }
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  createAccount
}
