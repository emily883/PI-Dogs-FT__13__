const { Router } = require("express");
const router = Router();
const { key } = process.env;
const axios = require("axios");
const map = require("./mapFunction");
const { Dog, Temperament } = require("../db.js");

router.post("/", async (req, res) => {
  const DogDb = Dog.findAll({ include: Temperament });
  var DbApi = axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${key}`);
  Promise.all([DbApi, DogDb])
    .then((response) => {
      let [DbApi, DogDb] = response;
      const x = map(DogDb);
      const info = x.concat(DbApi.data);
      const { order, property } = req.body;

      function sort(property) {
        
        if (property === "weight") {
          return function (a, b) {
            const avalue = a[property].imperial.split(" - ");
            const bvalue = b[property].imperial.split(" - ");
            var result =
              avalue[1] < bvalue[1] ? -1 : avalue[1] > bvalue[1] ? 1 : 0;
            return result;
          };
        }
        return function (a, b) {
          var result =
            a[property].toLowerCase() < b[property].toLowerCase()
              ? -1
              : a[property].toLowerCase() > b[property].toLowerCase()
              ? 1
              : 0;
          return result;
        };
      }
      
      result = info.sort(sort(property));
      order === "DS" ? res.json(result.reverse()) : res.json(result);
    })
    .catch((err) => res.status(404));
});

module.exports = router;
