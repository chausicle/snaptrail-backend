const model = require("../models/login")

const checkLogin = async (req, res, next) => {
  const { username, password } = req.body
  const token = await model.checkLogin(username, password)

  if (token.error) {
    res.sendStatus(403)
  } else {
    res.set({
      'Access-Control-Expose-Headers': 'Authorization',
      'Authorization': `${token}`
    }).send('passwords match, token in Authorization header')
  }
}

module.exports = {
  checkLogin
}
