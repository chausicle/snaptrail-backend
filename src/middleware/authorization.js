const jwt = require("jsonwebtoken")

const checkForToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.sendStatus(403);
  } else {
    next();
  }
}

const parseToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    req.token = token;
    next();
  } catch(err) {
    res.sendStatus(401);
  }
}

const verifyToken = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.token, TOKEN_SECRET);
    if (!decoded.loggedIn) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch(err) {
    res.sendStatus(403);
  }
}

module.exports = {
  checkForToken,
  parseToken,
  verifyToken
}
