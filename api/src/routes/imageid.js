const axios = require("axios");
const { key } = process.env;

async function getImage(search) {
  // search de parametro
  try {
    var DogApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds/?api_key=${key}`
    );
  } catch (error) {
    console.log(error);
  }
  var aja = {};

  var response = search.data.map((m) => {
    aja =  DogApi.data.find((x) => m.id == x.id);

    if(aja){
        const { weight, height, name, id, image, life_span, temperament } = aja;
        return {
            name: name,
            height: { imperial: height },
            weight: { imperial: weight },
            id: id,
            life_span: life_span,
            temperament: temperament,
            image: { url: image.url },
          };
    }
    
  });

  return response;


}

module.exports = getImage;
