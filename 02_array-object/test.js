// const takeOrder = (customer, callback) => {
//     console.log (`Take order for ${customer}`);
//     callback (customer);
// };

// const processOrder = (customer, callback) => {
//     console.log (`processing order for ${customer}`);

//     setTimeout (() => {
//         console.log (`cooking completed`);
//         console.log (`cooking is done for ${customer}`);
//         callback(customer);
//     }, 3000);
// };


// const completeOrder =  (customer) => {
//     console.log (`Completed order for ${customer}`);
// }

// takeOrder('customer 1', (customer) => {
//     processOrder (customer, (customer) => {
//         completeOrder(customer);
//     })
// });


// takeOrder('customer 2', (customer) => {
//     processOrder (customer, (customer) => {
//         completeOrder(customer);
//     })
// });




// 


// const numbers = [1, 2, 3, -4, -5, 6];

// const posNumbers = getPos (numbers, (n) => n >= 0);

// function getPos (num, callback) {
//     const arr = [];
//     for (let x of num) {
//         if (callback (x)) {
//             arr.push (x);
//         }
//     }
//     return arr;
// }

// console.log (posNumbers);


// const students = [
//   { name: 'Alex', grade: 'A' },
//   { name: 'Ibrahim', grade: 'B' },
//   { name: 'Rubi', grade: 'A' }
// ];

// const grouped = students.reduce ((acc, curr) => {
//     acc [curr.grade] = acc [curr.grade] || [];
//     acc [curr.grade].push (curr.name);
//     return acc; // update the accumulator
// }, {});

// console.log (grouped);
const person = {
  name: 'Alice',
  address: { city: 'Wonderland', zip: 12345 }
};
const { name : personName, address : { city, zip }} = person;

console.log(personName); // Alice
console.log(city); // Wonderland
console.log(zip); // 12345