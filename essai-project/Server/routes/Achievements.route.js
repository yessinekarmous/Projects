const AchievementsControllers = require("../controllers/Achievements.controller");

module.exports = (app) => {
  app.post("/api/CreateContractedPlayer", AchievementsControllers.CreatePlayer);
  app.get("/api/FindContractedPlayer", AchievementsControllers.FindAll);
  app.get("/api/FindContractedPlayer/:id", AchievementsControllers.FindOne);
  app.put("/api/UpdateContractedPlayer/:id", AchievementsControllers.Update);
  app.delete("/api/DeleteContractedPlayer/:id", AchievementsControllers.Delete);
};
