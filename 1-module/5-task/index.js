function truncate(str, maxlength) {
  // ваш код...
  let strLength = str.length;

  if (strLength <= maxlength) {
    return str;

  } else {

    let newStr = str.substr(0, maxlength - 1) + '\u2026';

    console.log(newStr.length);

    return newStr;

  }

}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Вот, что мне хотелось бы сказать на эту тему:', 10);
truncate('Всем привет!', 20);
