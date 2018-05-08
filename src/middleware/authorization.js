const verifyToken = (req, res, next) => {
  const jwt = require("jsonwebtoken")
  const secret = process.env.AWESOME_SECRET
  const token = req.headers.authorization
  const verified = jwt.verify(token, secret, (err, result) => {
    if (err !== null) {
      return next({
        error: {
          status: 403,
          message: "JWT did not verify"
        }
      })
    }
  })

  next()
}
