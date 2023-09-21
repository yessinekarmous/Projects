const PlayersControllers = require("../controllers/Players.controller");

module.exports = (app) => {
  app.post("/api/CreatePlayer", PlayersControllers.CreatePlayer);
  app.get("/api/FindPlayer", PlayersControllers.FindAll);
  app.get("/api/FindPlayer/:id", PlayersControllers.FindOne);
  app.put("/api/UpdatePlayer/:id", PlayersControllers.Update);
  app.delete("/api/DeletePlayer/:id", PlayersControllers.Delete);
  app.delete("/api/DeletePlayer", PlayersControllers.DeleteAll);
};
