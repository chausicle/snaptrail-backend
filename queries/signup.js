const knex = require('./db');
const bcrypt = require('bcryptjs');

const createAccount = async (user_image, username, email, password) => {
  console.log('username is ', username);

  const user = await knex("users")
    .select("*")
    .where({ username })
    .orWhere({ email })
    .first()

  if (user) {
    console.log("User ====>", user );
    return false
  } else {
    const hashedPassword = hash(password, 10)
    console.log('hashed', hashedPassword);
    return knex('users')
      .insert({username, email, password: hashedPassword, user_image})
      .into('users')
      .returning('*')
  }
}

const hash = (password, saltRounds) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(`${password}`, salt);
  return `${hash}`
}

module.exports = { createAccount }
