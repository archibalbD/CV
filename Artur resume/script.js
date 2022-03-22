// let userName = "Artur";
// console.log(userName);

let surName = "Vaskevich";
console.log(surName);

let userArtur = "29";
console.log(userArtur);

// const winMassege = "Congratulations You Win";
// alert(winMassege);

// const userName = prompt("What is your name?");
// console.log("userName", userName);
// alert("Hello" + userName + "!");

// let userMoneyAmount = 500;

// const amountToAdd = Number(prompt("How much to add?"));
// userMoneyAmount = userMoneyAmount + amountToAdd;
// alert("Now in your wallet:" + userMoneyAmount);

// const isAdmin = confirm("Are you admin?");
// console.log("isAdmin", isAdmin);
// if (isAdmin) {
//   alert("Welcome");
// }

const userNickname = prompt("Your nickname?");
const userAge = prompt("How old are you?");

const isConfirmed = confirm(
  "Are you really ${userNickname} ${userAge} years old"
);
if (isConfirmed) {
  alert("Your data saved");
}
