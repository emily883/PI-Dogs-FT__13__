const { Router, response } = require("express");
const router = Router();
const { Temperament } = require("../db.js");
const axios = require("axios").default;
const { key } = process.env;

// Grab all the temperaments from the api and return a new json with all the temperaments with their respective id's

router.get("/", async (req, res) => {
  var temp = [];

  axios
    .get(`https://api.thedogapi.com/v1/breeds/?api_key=${key}`)
    .then((response) => {
      response.data.forEach((c) => {
        var tempos = c.temperament?.split(", "); 
        tempos?.forEach((t) => {
          if (!temp.find((m) => m.name === t)) {
            temp.push({ temperament: t });
          }
        });
      });
    })
    .then(() => {
      temp.forEach((t) => {
        Temperament.findOrCreate({
          where: {
            temperament: t.temperament,
          },
        });
      });
    })
    .catch((err) => res.status(401));
  

  setTimeout(function searchAll(){
    Temperament.findAll()
    .then((response) => res.json(response))
    .catch((err) => res.json({ error: "There was an error" }));
  },1000)
});

module.exports = router;
