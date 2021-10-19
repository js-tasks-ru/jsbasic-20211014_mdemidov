function ucFirst(str) {
  // ваш код...
  strFirst = str.slice(0, 1);
  strLowerCase = str.slice(1);
  strUpperCase = strFirst.toUpperCase();
  strUpperCase += strLowerCase;

  return strUpperCase;
}

ucFirst('вася');
ucFirst('в');
ucFirst('');

