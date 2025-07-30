const arr = [10, 20, 30, 40, 50];
const filtered = arr.filter ((value, index, array) => {
    return value > index * 15;
})
console.log (filtered);