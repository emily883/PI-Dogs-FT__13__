const { Router } = require('express');
const router = Router();
const {Dog, Temperament} = require('../db.js');



router.post("/" , async (req, res) =>{
    const {name, height, weight, life_span, nameT, image} = req.body;
    if(!image){
        image = {url: 'https://i.pinimg.com/originals/e8/a9/ce/e8a9ce9ab3f3c5ef298a14514047647e.jpg'}
    }
    try {
        if(name){
            let newDog = await Dog.create({
                name,
                height,
                weight,
                life_span,
            })
            let tempe = await Temperament.create({
                nameT,
            })
            await newDog.addTemperament(tempe);
            return res.json(newDog);
        }
    } catch (error) {
        res.status(422); // 422 entidad input no procesable :) 
        // Unprocessable Entity
    }
})

module.exports = router;