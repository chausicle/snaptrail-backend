const model = require("../models/login");

const checkLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body
    console.log("req = ", req);
    console.log("req.body = ", req.body);
    console.log("username from android = ", username);
    console.log("password from android = ", password);
    const token = await model.checkLogin(username, password)

    if (token.error) {
      res.sendStatus(403)
    } else {
      res.set({
        'Access-Control-Expose-Headers': 'Authorization',
        'Authorization': `${token}`
      }).send('passwords match, token in Authorization header')
    }
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  checkLogin
}
