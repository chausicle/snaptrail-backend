const chai = require("chai")
      should = chai.should()
      chaiHttp = require("chai-http")
      server = require("../app")
      config = require("../knexfile").test
      bcrypt = require("bcryptjs")

chai.use(chaiHttp)
chai.use(require("chai-as-promised"))

describe("API Routes", () => {
  beforeEach(() => {
    const tmpConnection = require("knex")({
      client: "pg",
      connection: `${process.env.TEST_DATABASE_URL}/${process.env.TEST_DATABASE_NAME}`
    })
    return tmpConnection.raw(`CREATE DATABASE ${process.env.TEST_DATABASE_NAME}`)
      .catch(() => Promise.resolve("everything is OK"))
      .then(() => global.knex = require("../queries/db"))
      .then(() => knex.migrate.rollback(config))
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log("Migrations or seeds failed."))
  })

  describe("#POST /login", () => {
    it("Should return a token with correct credentials", (done) => {
      chai.request(server)
        .post("/login")
        .send({
          username: "chausicle",
          password: "iamjustin"
        })
        .end((error, res) => {
          res.headers.should.have.property("authorization")
          res.headers.authorization.should.be.a("string")
          done()
        })
    })

    it("Should return status 403 with incorrect credentials", (done) => {
      chai.request(server)
        .post("/login")
        .send({
          username: "chausicle",
          password: "wrongpassword"
        })
        .end((error, res) => {
          res.should.have.status(403)
          done()
        })
    })
  })
})
