const { Router, response } = require("express");
const router = Router();
const { Temperament } = require("../db.js");
const axios = require("axios").default;
const { key } = process.env;

router.get("/", async (req, res) => {
  var temp = [];

  axios
    .get(`https://api.thedogapi.com/v1/breeds/?api_key=${key}`)
    .then((response) => {
      response.data.forEach((c) => {
        var tempos = c.temperament?.split(", "); // Algunos devuelven undefined el ? es para evitar que se haga el split a un undefined y tire error :)
        // console.log(tempos);
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
            nameT: t.temperament,
          },
        });
      });
    })
    .catch((err) => res.status(401));
  // El código de error HTTP 401 indica que la petición (request) no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado.

  setTimeout(function searchAll(){
    Temperament.findAll()
    .then((response) => res.json(response))
    .catch((err) => res.json({ error: "There was an error" }));
  },2000)
});

module.exports = router;
