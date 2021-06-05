const { Router } = require("express");
// const { Product, User } = require('../db.js');
const axios = require("axios").default;
const router = Router();
const { key } = process.env;
// const  { conn } = require('../db')
// const db = require('../db.js');

router.get("/", (req, res) => {
  var { name } = req.query;
  if (name) {
    axios
      .get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then((response) => {
        return res.send(response.data);
      });
  }
  axios
    .get(`https://api.thedogapi.com/v1/breeds/?api_key=${key}`)
    .then((response) => {
      return res.send(response.data);
    })
    .catch((error) => res.status(404));
});

router.get("/:idRaza", (req, res) => {
  var { idRaza } = req.params;
  axios
    .get(`https://api.thedogapi.com/v1/breeds/?api_key=${key}`)
    .then((response) => {
      return res.send(response.data.find((m) => m.id === parseInt(idRaza)));
    })
    .catch((error) => req.status(404));
});

module.exports = router;
