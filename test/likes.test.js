const chai = require("chai")
      should = chai.should()
      chaiHttp = require("chai-http")
      server = require("../app")
      config = require("../knexfile").test
      bcrypt = require("bcryptjs")

chai.use(chaiHttp)
chai.use(require("chai-as-promised"))

describe("API likes routes", () => {
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

  describe("#GET /likes", () => {
    it("Should return all likes", (done) => {
      chai.request(server)
        .get("/likes")
        .end((error, res) => {
          console.log('\n');
          console.log(res.body);
          console.log('\n');
          res.should.have.status(200)
          res.body.should.be.a("array")
          res.body[0].should.have.property("id")
          res.body[0].should.have.property("post_id")
          res.body[0].should.have.property("user_id")
          done()
        })
    })
  })

  describe("#POST /likes", () => {
    it("Should post a like with token", (done) => {
      chai.request(server)
        .post("/likes")
        .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEsInVzZXIiOiJjaGF1c2ljbGUifSwibG9nZ2VkSW4iOnRydWUsImV4cCI6MTUyNjE5MjAwMy4yNDgsImlhdCI6MTUyNjE4MjAwM30.p8MZ9rYxSbiTNhWxDgbcUbL-z3tFznZ098WitI2yqeQ")
        .end((error, res) => {
          console.log('\n');
          console.log(res.body);
          console.log('\n');
          res.should.have.status(201)
          res.body.should.be.a("object")
          res.body.should.have.property("id")
          res.body.should.have.property("post_id")
          res.body.should.have.property("user_id")
          done()
        })
    })
  })
})
