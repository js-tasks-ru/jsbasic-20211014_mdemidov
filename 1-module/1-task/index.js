function factorial(n) {
  let fact = n;
  if (n == 0) {
    return 1;
  } else {
    for (let i = 1; i < n; i++) {
      fact *= (n - i);
    }

  }
  return fact;
}
