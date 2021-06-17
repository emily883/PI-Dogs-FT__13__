const { Router } = require("express");
const { Dog } = require("../db.js");
const axios = require("axios").default;
const router = Router();
const { key } = process.env;
const limit = 8;

router.get("/", (req, res) => {
  var { name } = req.query;
  var page = parseInt(req.query.page);
  const DogDb = Dog.findAll();

  //TERMINAR ESTO 
  if (name) {
    axios
      .get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then((response) => {
        !response.data[0]
          ? res.json({ error: "Sorry:(, There is no Dog to show" })
          : res.json(paginated(response.data, page));
      })
      .catch((err) => res.sendStatus(400));
    // Promise.all([Dogap, DogDb]).then((response) => {
    //   let [DogApi, DogDb] = response;
    //   return res.json(paginated(DogDb.concat(DogApi.data), page));
    // });
  }
  const DogApi = axios.get(
    `https://api.thedogapi.com/v1/breeds/?api_key=${key}`
  );

  Promise.all([DogApi, DogDb]).then((response) => {
    let [DogApi, DogDb] = response;
    return res.json(paginated(DogDb.concat(DogApi.data), page));
  }).catch(err => res.status(404));
});

router.get("/:idRaza", async (req, res) => {
  var { idRaza } = req.params;
  try {
    const DogApi = axios.get(
      `https://api.thedogapi.com/v1/breeds/?api_key=${key}`
    );
    const DogDb = Dog.findAll();

    Promise.all([DogApi, DogDb]).then((response) => {
      let [DogApi, DogDb] = response;
      return res.json(DogDb.concat(DogApi.data).find((m) => m.id == idRaza));
    });
  } catch (error) {
    return res.status(404);
  }
});

function paginated(model, page) {
  const start = (page - 1) * limit; // start = 1
  const end = page * limit; 
  const pages = Math.round(model.length / 8);
  const result = {pages:pages};

  if (end < model.length) {
    let aja = page + 1;
    result.next = {
      page: `http://localhost:3001/dogs?page=${aja}`,
      limit: limit,
    };
  }
  if (start > 0) {
    let aja = page - 1;
    result.previous = {
      page: `http://localhost:3001/dogs?page=${aja}`,
      limit: limit,
    };
  }
  result.results = model.slice(start, end);
  return result;
}

module.exports = router;
