const { Router } = require("express");
const router = Router();

router.post("/", (req, res) => {
  const { temperaments, dogs } = req.body;

  for (let i = 0; i < temperaments.length; i++) {
    var DogsFiltered = dogs.filter((m) =>
      temperaments.every((val) => m.temperament.split(", ").includes(val))
    );
  }
  if (!DogsFiltered[0]) {
    res.json({ error: "There's no Dogs with those temperaments" });
  }

  res.json(DogsFiltered);
});

module.exports = router;
