const knex = require('./db');
const bcrypt = require('bcryptjs');

const checkUsernameExist = async (username) => {
  try {
    console.log('username is ', username);

    const user = await knex("users")
    .select("*")
    .where({ username })
    .first()

    if (user) {
      console.log("User ====>", user );
      return true
    }

    return false;
  } catch(error) {
    console.log(error);
  }
}

const checkEmailExist = async (email) => {
  try {
    console.log('email is ', email);

    const user = await knex("users")
    .select("*")
    .where({ email })
    .first()

    if (user) {
      console.log("email ====>", email );
      return true
    }

    return false;
  } catch(error) {
    console.log(error);
  }
}

const createAccount = async (user_image, username, email, password) => {
  try {
    const hashedPassword = hash(password, 10)
    console.log('hashed', hashedPassword);
    return knex('users')
    .insert({username, email, password: hashedPassword, user_image})
    .into('users')
    .returning('id', 'username', 'email', 'user_image');
  } catch(error) {
    console.log(error);
  }
}

const hash = (password, saltRounds) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(`${password}`, salt);
  return `${hash}`
}

module.exports = {
   createAccount,
   checkUsernameExist,
   checkEmailExist
}
