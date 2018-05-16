const chai = require("chai")
      should = chai.should()
      expect = chai.expect
      chaiHttp = require("chai-http")
      server = require("../app")
      config = require("../knexfile").test

      chai.use(chaiHttp)
      chai.use(require("chai-as-promised"))

      describe("API users routes", () => {
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

        describe("#GET /users", () => {
          it("Should return all users on the database", (done) => {
            chai.request(server)
              .get("/users")
              .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body[0].should.have.property("id");
                res.body[0].should.have.property("username");
                res.body[0].should.have.property("email");
                res.body[0].should.have.property("user_image");
                done()
              })
          })
        })
        describe("#PATCH /users", () => {
          it("Should update a user profile image with token in authorization headers", (done) => {
            chai.request(server)
              .patch("/users/3")
              .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjQsInVzZ
              XIiOiJUaGUgRmlzaCBNYW4ifSwibG9nZ2VkSW4iOnRydWUsImV4cCI6MTUyNjM0MzU0OS4wNzMsImlhdCI6MTU
              yNjMzMzU0OX0.RWi5JdF2G8zUIf8ehsk_czYEX4oI_WZ8RVhYb2yEah4")
              .send({
                "user_image": "https://encrypted-tbn0.gstatic.com/images\\?q=tbn:ANd9GcTkAJEfy9JG6lxBYx4y-akyZmcTl2sid9Bqxda3332cPNomiwuI"
              })
              .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body[0].should.have.property("id");
                res.body[0].should.have.property("username");
                res.body[0].should.have.property("email");
                res.body[0].should.have.property("user_image");
                done()
              })
          })
        })
      })
