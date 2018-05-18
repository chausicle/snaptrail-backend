const signup = require("../../queries/signup")

const createAccount = async (body) => {
  try {
    const user_image = "http://groups.commonfloor.com/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
    const username = body.username;
    const email = body.email;
    const password = body.password
    const usernameRes = await signup.checkUsernameExist(username);
    const emailRes = await signup.checkEmailExist(email);


    if (usernameRes) {
      return {
        error: "Bad request",
        status: 400,
        message: "User already exist!"
      }
    } else if (emailRes){
      return {
        error: "Bad request",
        status: 400,
        message: "Email already exist!"
      }
    }

    if (!usernameRes && !emailRes) {
      const signupRes = await signup.createAccount(user_image, username, email, password);
      
      console.log('signup response in model = ', signupRes[0]);
      return {
        id: signupRes[0].id
        username: signupRes[0].username,
        email: signupRes[0].email,
        user_image: signupRes[0].user_image
      }
    }
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  createAccount
}
