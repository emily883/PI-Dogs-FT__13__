
// This function changes the temperament property so that can be the same as the one returned by the api

function map(DogDb){
    const x = DogDb.map((m) => {
        var tempe = [];
        m.temperaments.map((t) => {
          tempe.push(t.temperament);
        });
        return {
          id: m.id,
          name: m.name,
          height: m.height,
          weight: m.weight,
          life_span: m.life_span,
          temperament: tempe.join(", "),
          image: m.image,
        };
      });
    return x;
}

module.exports = map;