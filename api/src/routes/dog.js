const { Router } = require('express');
const router = Router();
const {Dog, Temperament} = require('../db.js')

router.post("/" , async (req, res) =>{
    const {name, height, weight, life_span, nameT} = req.body;
    try {
        if(name){
            let newDog = await Dog.create({
                name,
                height,
                weight,
                life_span,
            });
            // console.log(typeof newDog);
            await newDog.addTemperament(nameT);
        }
         res.json(newDog);
    } catch (error) {
        res.status(422); // 422 entidad input no procesable :) 
        // Unprocessable Entity
    }
})

module.exports = router;