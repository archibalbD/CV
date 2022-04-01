// Задание 2
// Реализовать калькулятор используя prompt и alert.
// Последовательно спросить у пользователя два числа и желаемое действие.
// Действия могут быть следующие: + - / *
// Выполнить математическую операцию с полученными значениями.
// Результат показать пользователю

let userName = prompt("Enter your name?");
let num1 = +prompt(userName + ", Enter your first number");
let num2 = +prompt(userName + ", Enter your second number");

const operator = prompt(userName + "enter math operation (* / - +");
switch (operator) {
  case "*":
    alert(num1 * num2);
    break;
  case "/":
    alert(num1 / num2);
    break;
  case "-":
    alert(num1 - num2);
    break;
  default:
    alert(num1 + num2);
}
