export default function searchDogs(dogs, input) {

  if (dogs && input) {
    const filterDog = dogs.filter((m) => m.name?.toLowerCase().includes(input?.toLowerCase()));
    if (!filterDog[0]) {
      return [{error:"Sorry there's no Dogs here :("}]
    }
    return filterDog;
  }
  return dogs; 
}
