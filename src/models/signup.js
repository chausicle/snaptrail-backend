const signup = require("../../queries/signup")

const createAccount = (body) => {
  const user_image = "http://groups.commonfloor.com/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
  const username = body.username;
  const email = body.email;
  const password = body.password
  const signupRes = signup.createAccount(user_image, username, email, password);

  return signupRes
  .then(result => {
    return result[0]
  })
}

module.exports = {
  createAccount
}
