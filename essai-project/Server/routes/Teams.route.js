const TeamsControllers = require("../controllers/Teams.controller");

module.exports = (app) => {
  app.post("/api/CreateTeam", TeamsControllers.CreateTeam);
  app.get("/api/FindTeam", TeamsControllers.FindAll);
  app.get("/api/FindTeam/:id", TeamsControllers.FindOne);
  app.put("/api/UpdateTeam/:id", TeamsControllers.Update);
  app.delete("/api/DeleteTeam/:id", TeamsControllers.Delete);
};
