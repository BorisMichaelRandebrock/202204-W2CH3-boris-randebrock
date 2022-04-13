let numbers = [];
function getNumbers() {
  let number = +prompt("Please be so kind to enter a number 😊");
  if (number > 0 && isNaN(number) === false) {
    numbers.push(number);
  } else {
    getNumbers();
    return;
  }
  let number2 = +prompt(
    "🤯 and now, please enter a second number, 🥺\nunless,..., if you wish to calculate the root... 🤓  \n...please press cancel or 0 to calculate your number`s root."
  );
  if (number2 > 0 && isNaN(number2) === false) {
    numbers.push(number2);
    const summedNums = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    let sum = Math.floor(summedNums * 1000);
    let sumNums = (sum /= 1000);
    const subNums = numbers.reduce((accumulator, currentValue) => {
      return accumulator - currentValue;
    });
    let sub = Math.floor(subNums * 1000);
    let suNums = (sub /= 1000);
    const multNums = numbers.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    });
    let mult = Math.floor(multNums * 1000);
    let mulNums = (mult /= 1000);
    const divNums = numbers.reduce((accumulator, currentValue) => {
      return accumulator / currentValue;
    });
    let dnum = Math.floor(divNums * 1000);
    let dNums = (dnum /= 1000);

    let results = [];
    results.push(sumNums, suNums, mulNums, dNums);

    alert(
      `The sum of ${number} + ${number2} =                            ${sumNums} 😃   \nThe substraction of ${number} - ${number2} =               ${suNums} 😇  \nThe multiplication of ${number} * ${number2} =             ${mulNums} 🧐  \nThe division of ${number} / ${number2} =                        ${dNums} 😎 \nThe array numbers are:                     ${numbers} \nThe results of the calculations are:  ${results} \nThank you for your colaboration!!!  🙋‍♂️`
    );
  } else if (number2 <= 0 || isNaN(number2) === true) {
    const root = Math.sqrt(numbers);
    let rootM = Math.floor(root * 1000);
    let sq = (rootM /= 1000);
    alert(
      `The number you have entered is: ${numbers[0]} \nAs promised √${numbers[0]} = ${sq} 🧐`
    );
  }
}
getNumbers();
