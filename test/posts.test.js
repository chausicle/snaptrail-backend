const chai = require("chai")
      should = chai.should()
      expect = chai.expect
      chaiHttp = require("chai-http")
      server = require("../app")
      config = require("../knexfile").test

chai.use(chaiHttp)
chai.use(require("chai-as-promised"))

describe("API posts routes", () => {
  beforeEach(() => {
    const tempConnecion = require("knex")({
      client: "pg",
      connection: `${process.env.TEST_DATABASE_URL}/${process.env.TEST_DATABASE_NAME}`
    })
    return tempConnecion.raw(`CREATE DATABASE
      ${process.env.TEST_DATABASE_NAME}`)
      .catch(() => Promise.resolve("everything is ok"))
      .then(() => global.knex = require("../queries/db"))
      .then(() => knex.migrate.rollback(config))
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log("Migrations or seeds failed."))
  })

  describe("#GET /posts", () => {
    it("Should return all posts on the database", (done) => {
      chai.request(server)
        .get("/posts")
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.should.have.length(6);
          res.body[0].should.have.property("id");
          res.body[0].should.have.property("user_id");
          res.body[0].should.have.property("image_url");
          res.body[0].should.have.property("description");
          res.body[0].should.have.property("location");
          res.body[0].should.have.property("latitude");
          res.body[0].should.have.property("longitude");
          res.body[0].should.have.property("created_at");
          res.body[0].should.have.property("updated_at");
          done()
        })
    })
  })
  describe("#POST /posts", () => {
    it("Should make a post with token in authorization headers", (done) => {
      chai.request(server)
        .post("/posts")
        .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEsInVzZXIiOiJjaGF1c2ljbGUifSwibG9nZ2VkSW4iOnRydWUsImV4cCI6MTUyNjE5MjAwMy4yNDgsImlhdCI6MTUyNjE4MjAwM30.p8MZ9rYxSbiTNhWxDgbcUbL-z3tFznZ098WitI2yqeQ")
        .send({
          "user_id": 2,
          "description": "Little Si Trail welcomes hikers with a thigh-burning incline, but don’t be deterred. After a few winding switchbacks, the trail will level out and give you a break. And after the final uphill section, which can be a bit tiring, you’ll be rewarded with spectacular views of tree tops across the valley. Little Si Trail welcomes hikers with a thigh-burning incline, but don’t be deterred. After a few winding switchbacks, the trail will level out and give you a break. And after the final uphill section, which can be a bit tiring, you’ll be rewarded with spectacular views of tree tops across the valley. ",
          "image_url": "https://encrypted-tbn0.gstatic.com/images\\?q=tbn:ANd9GcTkAJEfy9JG6lxBYx4y-akyZmcTl2sid9Bqxda3332cPNomiwuI",
          "location": "Little Si Trail",
          "latitude": 47.495,
          "longitude": -121.755
        })
        .end((error, res) => {
          res.should.have.status(201)
          res.body.should.be.a("array")
          expect(res.body[0].description.length).to.be.below(1000)
          res.body[0].should.have.property("id");
          res.body[0].should.have.property("user_id");
          res.body[0].should.have.property("image_url");
          res.body[0].should.have.property("description");
          res.body[0].should.have.property("location");
          res.body[0].should.have.property("latitude");
          res.body[0].should.have.property("longitude");
          res.body[0].should.have.property("created_at");
          res.body[0].should.have.property("updated_at");
          done()
        })
    })
  })
})
