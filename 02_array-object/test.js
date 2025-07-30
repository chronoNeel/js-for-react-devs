const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sliced = fruits.splice(2, 1, "Lemon", "Kiwi");
console.log (fruits, sliced); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ] [ 'Apple' ]