const knex = require("./db")
const bcrypt = require("bcryptjs")

const checkLogin = async (username, password) => {
  const user = await knex("users")
    .select("*")
    .where({ username })
    .first()

  if (!user) return false 
  else if (bcrypt.compareSync(password, user.password)) return user.id
  else return false
}

module.exports = { checkLogin }
