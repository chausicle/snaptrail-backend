const signup = require("../../queries/signup")

const createAccount = async (body) => {
  const user_image = "http://groups.commonfloor.com/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
  const username = body.username;
  const email = body.email;
  const password = body.password
  const signupRes = await signup.createAccount(user_image, username, email, password);

  console.log('signup response in model = ', signupRes);
  if (!signupRes) {
    return {
      error: "Bad request",
      status: 400,
      message: "User already exist"
    }
  } else {
    return {
      username: signupRes.username,
      message: "Account Created"
    }
  }
}

module.exports = {
  createAccount
}
