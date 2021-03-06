const { Router } = require("express");
const { Dog, Temperament } = require("../db.js");
const axios = require("axios").default;
const router = Router();
const { key } = process.env;
const map = require("./mapFunction.js");

router.get("/", (req, res) => {
  const DogDb = Dog.findAll({ include: Temperament });
  const DogApi = axios.get(
    `https://api.thedogapi.com/v1/breeds/?api_key=${key}`
  );

  Promise.all([DogApi, DogDb])
    .then((response) => {
      let [DogApi, DogDb] = response;

      const x = map(DogDb);
      return res.json(x.concat(DogApi.data));
    })
    .catch((err) => res.status(404));
});

router.get("/:idRaza", async (req, res) => {
  var { idRaza } = req.params;
  try {
    const DogApi = axios.get(
      `https://api.thedogapi.com/v1/breeds/?api_key=${key}`
    );
    const DogDb = Dog.findAll({ include: Temperament });

    Promise.all([DogApi, DogDb]).then((response) => {
      let [DogApi, DogDb] = response;

      const x = map(DogDb);
      return res.json(x.concat(DogApi.data).find((m) => m.id == idRaza));
    });
  } catch (error) {
    return res.status(404);
  }
});

module.exports = router;
