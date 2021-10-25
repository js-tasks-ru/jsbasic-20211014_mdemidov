function checkSpam(str) {
  // ваш код...

  let checkString1 = '1xbet';
  let checkString2 = 'xxx';

  if (str.toLowerCase().includes(checkString1) || str.toLowerCase().includes(checkString2)) {
    return true;
  }

  return false;
}


checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');
