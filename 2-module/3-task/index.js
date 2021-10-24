let num1;
let num2;

let calculator = {
  // ... ваш код ...
  read(num1, num2) {
    this.a = num1;
    this.b = num2;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return (this.a * this.b);
  },
};



calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
