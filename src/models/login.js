const login = require("../../queries/login")
const jwt = require("jsonwebtoken")

const checkLogin = async (username, password) => {
  const auth = await login.checkLogin(username, password)

  if (!auth) {
    return {
      error: "Forbidden",
      status: 403,
      message: "Username or password did not match"
    }
  } else {
    let jwtpayload = {
      sub: {
        id: auth,
        user: username
      },
      loggedIn: true,
      exp: (Date.now() / 1000) + 10000
    }
    const token = jwt.sign(jwtpayload, process.env.AWESOME_SECRET)

    return token
  }
}

module.exports = {
  checkLogin
}
