const express = require("express").Router;

const OngController = require("./controllers/OngController");
const SessionController = require("./controllers/SessionController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const routes = express();

routes.post("/session", SessionController.store);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.delete);
routes.put("/incidents/:id/update", IncidentController.update);

module.exports = routes;
