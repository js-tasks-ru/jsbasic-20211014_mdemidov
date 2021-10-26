let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  // Ваш код
  let filterArr = arr.filter(item => (item >= a && item <= b));
  return filterArr;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3,1] (совпадающие значения)
console.log(arr); // [5,3,8,1] (без изменений)
