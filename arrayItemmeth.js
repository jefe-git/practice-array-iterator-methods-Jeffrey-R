//Task 1 using for each

const cities = ["Tokyo", "Barcelona", "Chicago", "Sydney", "Cape Town"];
cities.forEach(city => {
  console.log(city.toUpperCase());
});

//Task 2 transofrming with .map

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares);

//task 3 using .filter to filter
const scores = [85, 42, 90, 75, 30, 100];
const highScores = scores.filter(score => score >= 80);
console.log(highScores)

//Task 4 using indexing

let favoriteFood = ["pizza", "burger", "pho", "curry", "pasta"];
let firstLongOne = favoriteFood.find(function(food) {
  return food.length > 4;
});
let indexLongOne = favoriteFood.findIndex(function(food) {
  return food.length > 4;
});
console.log(firstLongOne);   // Output: pizza
console.log(indexLongOne);   // Output: 0

// end