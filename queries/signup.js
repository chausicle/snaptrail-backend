const knex = require('./db');
const bcrypt = require('bcryptjs');


const createAccount = (username, email, password, user_image) => {
  return knex("users")
  .select("*")
  .where({ username })
  .first()
  .then(found => {
    if (found) {
      return 'Account already exist'
    } else {
      const hashedPassword = hash(password, 10)

      return knex('users')
        .insert ({username, email, password: hashedPassword, user_image})
        .into('users')
        .returning('*')
    }
  })
}
  const hash = (password, saltRounds) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(`${password}`, salt);
    return `${hash}`
  }





module.export = { createAccount }
