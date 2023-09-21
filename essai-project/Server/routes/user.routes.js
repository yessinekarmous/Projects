const Users = require("../controllers/user.controller");
const { authenticate } = require("../config/mongoose.config");
module.exports = (app) => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.get("/api/logout", Users.logout);
  app.get("/api/AllUsers", Users.getAll);
  app.delete("/api/delete/:id", Users.deleteAllUsers);
};
