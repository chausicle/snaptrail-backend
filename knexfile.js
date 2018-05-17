module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/snaptrail_dev"
  },
  production: {
    client: "pg",
    connection: "postgres://xiqwpbntdkuzym:188cf57885f6061b299de80605d380f508386b659ac8cf8e9edb638f7595d056@ec2-23-23-247-245.compute-1.amazonaws.com:5432/dfetufa2dskr55",
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },
  test: {
    client: "pg",
    connection: `${process.env.TEST_DATABASE_URL}/${process.env.TEST_DATABASE_NAME}`
  }
}
