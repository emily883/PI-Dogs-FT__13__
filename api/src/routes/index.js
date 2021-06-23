const { Router, json } = require('express');

const router = Router();
router.use(json());  

const dogs = require("./dogs.js");
const dog = require("./dog.js");
const temperament = require("./temperament.js");
const order = require("./order.js");

router.use("/dog",dog);
router.use("/dogs",dogs);
router.use("/temperament", temperament);
router.use("/order", order);

module.exports = router;
