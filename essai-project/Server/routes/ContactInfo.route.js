const ContactControllers = require("../controllers/ContactInfo.controller");

module.exports = (app) => {
  app.post("/api/CreateContact", ContactControllers.CreateContact);
  app.get("/api/FindContact", ContactControllers.FindAll);
  app.get("/api/FindContact/:id", ContactControllers.FindOne);
  app.put("/api/UpdateContact/:id", ContactControllers.Update);
  app.delete("/api/DeleteContact/:id", ContactControllers.Delete);
};
