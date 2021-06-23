const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db.js");

router.post("/", async (req, res) => {
  var { name, height, weight, life_span, temperament } = req.body;

  var image = {
    url: "https://i.pinimg.com/originals/e8/a9/ce/e8a9ce9ab3f3c5ef298a14514047647e.jpg",
  };

  try {
    if (name) {
      const NewDogBody = {
        name,
        height:{imperial: height},
        weight: {imperial: weight},
        life_span: `${life_span} years`,
        image,
      };

      const NewDog = await Dog.create(NewDogBody);
      res.json(NewDog);

      temperament.forEach(async (m) => {
        var tempe = await Temperament.findAll({
          where: { temperament: m },
        });
        await NewDog.addTemperament(tempe[0].id);
      });
    }
  } catch (error) {
    res.status(422); // 422 entidad input no procesable :)
    // Unprocessable Entity
  }
});

module.exports = router;
