// create a function that generates a array of random numbers length 50
// and then sort them in ascending order

const randomNumbers = () => {
  let array = [];
  for (let i = 0; i < 50; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
};
console.log(randomNumbers());
