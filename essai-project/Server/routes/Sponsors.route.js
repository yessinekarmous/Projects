const SponsorsControllers = require("../controllers/Sponsors.controller");

module.exports = (app) => {
  app.post("/api/CreateSponsor", SponsorsControllers.CreateSponsor);
  app.get("/api/FindSponsor", SponsorsControllers.FindAll);
  app.get("/api/FindSponsor/:id", SponsorsControllers.FindOne);
  app.put("/api/UpdateSponsor/:id", SponsorsControllers.Update);
  app.delete("/api/DeleteSponsor/:id", SponsorsControllers.Delete);
};
