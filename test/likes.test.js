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
    it("Should post a like with token in header", (done) => {
      chai.request(server)
        .post("/likes")
        .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEsInVzZXIiOiJjaGF1c2ljbGUifSwibG9nZ2VkSW4iOnRydWUsImV4cCI6MTUyNjE5MjAwMy4yNDgsImlhdCI6MTUyNjE4MjAwM30.p8MZ9rYxSbiTNhWxDgbcUbL-z3tFznZ098WitI2yqeQ")
        .send({
          post_id: 2,
          user_id: 1
        })
        .end((error, res) => {
          res.should.have.status(201)
          res.body.should.be.a("array")
          res.body[0].should.be.a("object")
          res.body[0].should.have.property("id")
          res.body[0].should.have.property("post_id")
          res.body[0].should.have.property("user_id")
          done()
        })
    })
    it("Should not post a like if the post has that like from that user already: A user should only be able to like once per post", done => {
      chai.request(server)
        .post("/likes")
        .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEsInVzZXIiOiJjaGF1c2ljbGUifSwibG9nZ2VkSW4iOnRydWUsImV4cCI6MTUyNjE5MjAwMy4yNDgsImlhdCI6MTUyNjE4MjAwM30.p8MZ9rYxSbiTNhWxDgbcUbL-z3tFznZ098WitI2yqeQ")
        .send({
          post_id: 5,
          user_id: 1
        })
        .end((error, res) => {
          res.should.have.status(400)
          res.body.error.should.be.a("object")
          done()
        })
    })
  })

  describe("#DELETE /likes", () => {
    it("Should delete a like with token in header", done => {
      chai.request(server)
        .delete("/likes/1")
        .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEsInVzZXIiOiJjaGF1c2ljbGUifSwibG9nZ2VkSW4iOnRydWUsImV4cCI6MTUyNjE5MjAwMy4yNDgsImlhdCI6MTUyNjE4MjAwM30.p8MZ9rYxSbiTNhWxDgbcUbL-z3tFznZ098WitI2yqeQ")
        .end((error, res) => {
          res.should.have.status(204);
          done()
        })
    })
    it("Should not delete a like with invalid token in header", done => {
      chai.request(server)
      .delete("/likes/1")
      .set("authorization", "incorrect-token")
      .end((error, res) => {
        res.should.have.status(403);
        done()
      })
    })
  })
})
