function checkSpam(str) {
  // ваш код...

  let checkString1 = '1xBet';
  let checkString2 = 'XXX';

  if (str.toLowerCase().includes(checkString1.toLowerCase()) || str.toLowerCase().includes(checkString2.toLowerCase())) {
    return true;
  }

  return false;
}


checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');
