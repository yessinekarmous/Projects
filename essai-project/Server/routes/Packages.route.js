const PackagesControllers = require("../controllers/Packages.controller");

module.exports = (app) => {
  app.post("/api/CreatePackage", PackagesControllers.CreatePackage);
  app.get("/api/FindPackage", PackagesControllers.FindAll);
  app.get("/api/FindPackage/:id", PackagesControllers.FindOne);
  app.put("/api/UpdatePackage/:id", PackagesControllers.Update);
  app.delete("/api/DeletePackage/:id", PackagesControllers.Delete);
};
