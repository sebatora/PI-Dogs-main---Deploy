const dogRouter = require("express").Router();
const { getDogsHandler, getDogHandler, postDogHandler } = require("../handlers/dogsHandler");

// GET todos o por nombre
dogRouter.get("/", getDogsHandler);

// GET por id
dogRouter.get("/:id", getDogHandler);

// POST nuevo perro
dogRouter.post("/", postDogHandler);

// DELETE por nombre
// dogRouter.delete("/", deleteDogsHandler);

module.exports = dogRouter;