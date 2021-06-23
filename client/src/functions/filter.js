export default function filterTemperaments(dogs, temperaments) {
    // console.log(temperaments);
  for (let i = 0; i < temperaments.length; i++) {
    var DogsFiltered = dogs.filter((m) =>
      m.temperament?.includes(temperaments[i])
    );
  }
  if(!DogsFiltered[0]){
    return [{error: "There's no Dogs with those temperaments"}]
  }
  return DogsFiltered;
}
