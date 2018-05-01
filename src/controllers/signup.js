const model = require("../models/signup");
const bcrypt = require('bcryptjs')

const createAccount = async (req, res, next) => {
  const data = await model.createAccount(req.body);
  console.log("data   ====>>>",   data)
  data
  .then(result => {
    res.status(201).send(result)
  })
}


// const createAccount = async (req, res, next) => {
//   let user = req.body;
//   const hash = await bcrypt.createHash(process.env.AWESOME_SECRET);
//   hash.update(user.password);
//   let hashed = hash.digest('hex')
//   user.password = hashed;
//
//   model.crateUser(user, (result, error) => {
//     if (error) {
//       res.status(400).send("Error registering user")
//     }
//     if (result.length === 0) {
//       res.status(404).json({
//         status: 404,
//         message: 'Error registering user',
//         errors: 'Exception'
//       })
//     }au
//   })
// }


module.exports = {
  createAccount
}
