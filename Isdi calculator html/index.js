let x;
let y;
let operator;
const numbers = [];

let onScreen = document.querySelector(".numbersDisplay")
let allClear = document.querySelector("#AC");
let deleteLast = document.querySelector("#C");
let squareNumber = document.querySelector("#square");
let memoryRecall = document.querySelector("#MR");
let memoryPlus = document.querySelector("#Mplus");
let memoryMinus = document.querySelector("#Mminus");
let divideNumbers = document.querySelector("#divide");
let multiplyNumbers = document.querySelector("#multiply");
let substractNumbers = document.querySelector("#substract");
let addNumbers = document.querySelector("#add");
let dot = document.querySelector("#dots");
let equal = document.querySelector("#equal");
let one = document.querySelector("#number1");
let two = document.querySelector("#number2");
let three = document.querySelector("#number3");
let four = document.querySelector("#number4");
let five = document.querySelector("#number5");
let six = document.querySelector("#number6");
let seven = document.querySelector("#number7");
let eight = document.querySelector("#number8");
let nine = document.querySelector("#number9");
let zero = document.querySelector("#zero");

one.onclick = (e) => { onScreen.innerText = onScreen.innerText + "1" };
two.onclick = (e) => { onScreen.innerText = onScreen.innerText + "2" };
three.onclick = (e) => { onScreen.innerText = onScreen.innerText + "3" };
four.onclick = (e) => { onScreen.innerText = onScreen.innerText + "4" };
five.onclick = (e) => { onScreen.innerText = onScreen.innerText + "5" };
six.onclick = (e) => { onScreen.innerText = onScreen.innerText + "6" };
seven.onclick = (e) => { onScreen.innerText = onScreen.innerText + "7" };
eight.onclick = (e) => { onScreen.innerText = onScreen.innerText + "8" };
nine.onclick = (e) => { onScreen.innerText = onScreen.innerText + "9" };
zero.onclick = (e) => { onScreen.innerText = onScreen.innerText + "0" };
dot.onclick = (e) => { onScreen.innerText = onScreen.innerText + "." };

const memPlus = () => {
  x = onScreen.innerText;
  x = parseFloat(x);
  numbers.push(x);
  clear();
};
const memMinus = () => {
  x = onScreen.innerText;
  x = parseFloat(x);
  x *= -1;
  numbers.push(x);
  clear();
};
const memoRecall = () => {
  memorized = numbers.reduce((a, b) => a + b);
  memorized = Math.floor(memorized * 1000);
  memorized /= 1000;
  allCleared();
  onScreen.innerText = memorized;
};
const sq = () => {
  x = onScreen.innerText
  numX = parseFloat(x);
  clear();
  let rooted = Math.sqrt(numX);
  let roots = Math.floor(rooted * 1000);
  roots /= 1000;
  onScreen.innerText = roots;
};
const div = () => {
  x = onScreen.innerText;
  operator = "/";
  clear();
};
const mult = () => {
  x = onScreen.innerText;
  operator = "x";
  clear()
};
const minus = () => {
  if (onScreen.innerText === "") {
onScreen.innerText = "-";
return;
  }
  x = onScreen.innerText;
  operator = "-";
  clear()
};
const plus = () => {
  x = onScreen.innerText;
  operator = "+";
  clear()
};
const clear = () => {
  onScreen.innerText = "";
};
const clearLastNumber = () => {
  onScreen.innerText = onScreen.innerText.slice(0, -1);
};
const allCleared = () => {
  onScreen.innerText = "";
  x = 0;
  y = 0;
  operator = "";
  numbers.length = 0;
};
const result = () => {
  let res = 0;
  y = onScreen.innerText;
  switch (operator) {
    case "+":
      res = parseFloat(x) + parseFloat(y);
      break;
    case "-":
      res = parseFloat(x) - parseFloat(y);
      break;
    case "x":
      res = parseFloat(x) * parseFloat(y);
      break;
    case "/":
      res = parseFloat(x) / parseFloat(y);
      break;
    default:
      "Error!!!!";
      break;
  };
  allCleared();
  res = Math.floor(res * 1000);
  res /= 1000;
  onScreen.innerText = res;  
};


allClear.addEventListener("click", allCleared);
deleteLast.addEventListener("click", clearLastNumber);
squareNumber.addEventListener("click", sq);
memoryRecall.addEventListener("click", memoRecall);
memoryPlus.addEventListener("click", memPlus);
memoryMinus.addEventListener("click", memMinus);
divideNumbers.addEventListener("click", div);
multiplyNumbers.addEventListener("click", mult);
substractNumbers.addEventListener("click", minus);
addNumbers.addEventListener("click", plus);
equal.addEventListener("click", result);