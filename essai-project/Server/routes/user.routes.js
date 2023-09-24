const Users = require("../controllers/user.controller");
const { authenticate } = require("../config/mongoose.config");
module.exports = (app) => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.get("/api/logout", Users.logout);
  app.get("/api/Users", Users.getAll);
  app.get("/api/Users/:email", Users.FindOne);
  app.put("/api/UpdateUser/:email", Users.Update);
  app.delete("/api/delete/:id", Users.deleteAllUsers);
};
