function camelize(str) {
  // Ваш код

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

camelize('background-color') //== 'backgroundColor';
camelize('list-style-image') //== 'listStyleImage';
camelize('-webkit-transition') //== 'WebkitTransition';

