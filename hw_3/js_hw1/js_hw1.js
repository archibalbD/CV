//  Задание 1.
// Спросить с помощью prompt у пользователя 2 числа и записать их в переменные.
// Сравнить полученные числа.
// С помощью alert вывести на экран сообщение о том, какое число больше. Если числа равны - сообщить что числа равны

let userName = prompt("Hi,What is your name?");
let number1 = +prompt(userName + ", Enter your first number");
let number2 = +prompt(userName + ", Enter your second number");
if (number1 > number2) {
  alert(number1 + " more than " + number2);
} else if (number1 < number2) {
  alert(number1 + " less then " + number2);
} else if ((number1 = number2)) {
  alert(number1 + " equals " + number2);
}
