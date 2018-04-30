module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/snaptrail_dev"
  },
  production: {
    client: "pg",
    connection: "",
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },
  test: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  }
}
