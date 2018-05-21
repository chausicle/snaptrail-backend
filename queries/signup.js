const knex = require('./db');
const bcrypt = require('bcryptjs');

const checkUsernameExist = async (username) => {
  try {
    const user = await knex("users")
    .select("*")
    .where({ username })
    .first()

    if (user) {
      return true
    }

    return false;
  } catch(error) {
    console.log(error);
  }
}

const checkEmailExist = async (email) => {
  try {
    const user = await knex("users")
    .select("*")
    .where({ email })
    .first()

    if (user) {
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
    return knex('users')
    .insert({username, email, password: hashedPassword, user_image})
    .into('users')
    .returning('*');
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
