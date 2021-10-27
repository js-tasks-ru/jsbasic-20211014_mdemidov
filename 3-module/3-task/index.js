function camelize(str) {

  let splitStr = str.split('');
  let newArr = [];
  for (let i = 0; i < splitStr.length; i++) {

    if (splitStr[i] === '-') {
      newArr.push(splitStr[i + 1].toUpperCase());
      splitStr.splice(i, 1);
    } else newArr.push(splitStr[i]);

  }

  newArr = newArr.join('');
  return newArr;
};

console.log(camelize('background-color')) //== 'backgroundColor';
console.log(camelize('list-style-image')) //== 'listStyleImage';
console.log(camelize('-webkit-transition')) //== 'WebkitTransition';

