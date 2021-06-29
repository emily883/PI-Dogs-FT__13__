const { Router } = require("express");
const router = Router();
const { key } = process.env;
const axios = require("axios");
const map = require("./mapFunction");
const { Dog, Temperament } = require("../db.js");

// Depending on the property and how you want to order it, this endpoint takes care of it

router.post("/", async (req, res) => {
  const { order, property, info} = req.body;

  function sort(property) {
    if (property === "weight") {
      return function (a, b) {
        const avalue = a[property].imperial.split(" - ");
        const bvalue = b[property].imperial.split(" - ");
        var result = avalue[1] < bvalue[1] ? -1 : avalue[1] > bvalue[1] ? 1 : 0;
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
});

module.exports = router;
