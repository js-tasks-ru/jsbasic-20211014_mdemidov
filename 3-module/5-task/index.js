
const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(inputData) {
  // ...
  let strData = inputData.split(' ').map(item => Number(item));
  let str = strData.filter(item => isFinite(item));
  let min = Math.min.apply(null, str);
  let max = Math.max.apply(null, str);

  let result = {};
  result.min = min;
  result.max = max;
  return result;
}

console.log(getMinMax(inputData));
