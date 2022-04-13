/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
let userName = prompt(
  'Welcome dear Gambler! Enjoy your stay at our Bingo Game! 🎰\n\nThe rules are simple: \nFirst player to complete a Line, shouts "LINE...!!!"\nFirst Player to complete a ticket, shouts "BINGO...!!!"  \n\nTo get started, please enter your name.'
);
if (userName === "" || userName === null) {
  alert(
    'Since you want to keep your name to yourself, I shall call you "Goldfinger" if you don\'t mind.'
  );
  userName = "goldfinger";
}
userName = userName.charAt(0).toUpperCase() + userName.slice(1);

let drawCounter = 0;
const cardNumbers = [];
const drawnNumbers = [];
const line1 = [];
const line2 = [];
const line3 = [];
const line = [];
const bingoLines = [];
const ranking = [];
class Player {
  constructor(name, goldNuggets) {
    this.name = name;
    this.goldNuggets = goldNuggets;
  }
}
const Jimi = new Player("James Marshall Hendrix");
const Goofy = new Player("Goofy");
const Roberts = new Player("Dread Pirate Roberts");
const Bilbo = new Player("Bilbo Baggins");
const Sirius = new Player("Sirius Black");
const Nick = new Player("Nick Burkhardt");
const Holden = new Player("James Holden");
// eslint-disable-next-line no-unused-vars
const user = new Player(userName, 180 - drawCounter * 2);
// eslint-disable-next-line no-unused-vars
const playersF = [
  Jimi.name,
  Goofy.name,
  Roberts.name,
  Bilbo.name,
  Sirius.name,
  Nick.name,
  Holden.name,
];

const playersOrder = (array) => {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const addCardNumber = () => {
  const newNumber = {};
  newNumber.number = randomNumber();
};
const randomNumber = () => {
  for (let i = 0; cardNumbers.length < 15; i + 1) {
    const number = Math.floor(Math.random() * 90) + 1;
    cardNumbers.includes(number) ? randomNumber() : cardNumbers.push(number);
  }
  showCarton();
};

const drawNumber = () => {
  const drawnNumber = Math.floor(Math.random() * 90) + 1;
  compareNumberDraws(drawnNumber);
  // eslint-disable-next-line no-unused-expressions
  drawnNumbers.includes(drawnNumber) ? drawNumber() : drawnNumber;
  switch (drawnNumber) {
    case 1:
      alert(`\nNumber: ${drawnNumber}\n\nThe pun  `);
      break;
    case 2:
      alert(`\nNumber ${drawnNumber}\n\nOne little duck 🦆 `);
      break;
    case 3:
      alert(`\nNumber: ${drawnNumber}\n\nCup of tea  `);
      break;
    case 4:
      alert(`\nNumber: ${drawnNumber}\n\nKnock at the door `);
      break;
    case 5:
      alert(`\nNumber: ${drawnNumber}\n\nMan alive  `);
      break;
    case 6:
      alert(`\nNumber: ${drawnNumber}\n\nHalf a dozen  `);
      break;
    case 7:
      alert(`\nNumber: ${drawnNumber}\n\nLucky`);
      break;
    case 8:
      alert(`\nNumber: ${drawnNumber}\n\nGarden gate  `);
      break;
    case 9:
      alert(`\nNumber: ${drawnNumber}\n\nBrighton line  `);
      break;
    case 10:
      alert(`\nNumber: ${drawnNumber}\n\nDowning Street `);
      break;
    case 11:
      alert(`\nNumber: ${drawnNumber}\n\nLegs eleven  `);
      break;
    case 12:
      alert(`\nNumber: ${drawnNumber}\n\nOne dozen  `);
      break;
    case 13:
      alert(`\nNumber: ${drawnNumber}\n\nUnlucky for some  `);
      break;
    case 14:
      alert(`\nNumber: ${drawnNumber}\n\nValentines day ❤️ `);
      break;
    case 15:
      alert(`\nNumber: ${drawnNumber}\n\nYoung and keen`);
      break;
    case 16:
      alert(`\nNumber: ${drawnNumber}\n\nSweet 16  `);
      break;
    case 17:
      alert(`\nNumber: ${drawnNumber}\n\nDancing Queen  `);
      break;
    case 18:
      alert(`\nNumber: ${drawnNumber}\n\nComing of age  `);
      break;
    case 19:
      alert(`\nNumber: ${drawnNumber}\n\nGoodbye teens  `);
      break;
    case 20:
      alert(`\nNumber: ${drawnNumber}\n\nOne score `);
      break;
    case 21:
      alert(`\nNumber: ${drawnNumber}\n\nKey of the door `);
      break;
    case 22:
      alert(`\nNumber: ${drawnNumber} \n\nTwo little ducks 🦆🦆`);
      break;
    case 23:
      alert(`\nNumber: ${drawnNumber}\n\nThe Lord is my Shepherd `);
      break;
    case 24:
      alert(`\nNumber: ${drawnNumber}\n\nTwo dozen `);
      break;
    case 25:
      alert(`\nNumber: ${drawnNumber} \n\nDuck and alive `);
      break;
    case 26:
      alert(`\nNumber: ${drawnNumber}\n\nHalf a crown `);
      break;
    case 27:
      alert(`\nNumber: ${drawnNumber} \n\nDuck and a crutch`);
      break;
    case 28:
      alert(`\nNumber: ${drawnNumber}\n\nIn a state `);
      break;
    case 29:
      alert(`\nNumber: ${drawnNumber}\n\nRise and shine `);
      break;
    case 30:
      alert(`\nNumber: ${drawnNumber}\n\nDirty Gertie`);
      break;
    case 31:
      alert(`\nNumber: ${drawnNumber}\n\nGet up and run `);
      break;
    case 32:
      alert(`\nNumber: ${drawnNumber}\n\nBuckle my shoe `);
      break;
    case 33:
      alert(`\nNumber: ${drawnNumber}\n\nDirty knee`);
      break;
    case 34:
      alert(`\nNumber: ${drawnNumber}\n\nAsk for more `);
      break;
    case 35:
      alert(`\nNumber: ${drawnNumber}\n\nJump and jive `);
      break;
    case 36:
      alert(`\nNumber: ${drawnNumber}\n\nThree dozen `);
      break;
    case 37:
      alert(`\nNumber: ${drawnNumber}\n\nMore than eleven `);
      break;
    case 38:
      alert(`\nNumber: ${drawnNumber}\n\nChristmass cake `);
      break;
    case 39:
      alert(`\nNumber: ${drawnNumber}\n\nSteps `);
      break;
    case 40:
      alert(`\nNumber: ${drawnNumber}\n\nLife begins `);
      break;
    case 41:
      alert(`\nNumber: ${drawnNumber}\n\nTime for fun `);
      break;
    case 42:
      alert(`\nNumber: ${drawnNumber}\n\nWinnie the Pooh `);
      break;
    case 43:
      alert(`\nNumber: ${drawnNumber}\n\nDown on your knees `);
      break;
    case 44:
      alert(`\nNumber: ${drawnNumber}\n\nDroopy drawers `);
      break;
    case 45:
      alert(`\nNumber: ${drawnNumber}\n\nHalfway there `);
      break;
    case 46:
      alert(`\nNumber: ${drawnNumber}\n\nUp to tricks `);
      break;
    case 47:
      alert(`\nNumber: ${drawnNumber}\n\nFor and  seven `);
      break;
    case 48:
      alert(`\nNumber: ${drawnNumber}\n\nFour dozen `);
      break;
    case 49:
      alert(`\nNumber: ${drawnNumber}\n\nPC `);
      break;
    case 50:
      alert(
        `\nNumber: ${drawnNumber}\n\n5-0 5-0, \nit’s off to work we go... 🎼🎶 `
      );
      break;
    case 51:
      alert(`\nNumber: ${drawnNumber}\n\nTweak of the thumb `);
      break;
    case 52:
      alert(`\nNumber: ${drawnNumber}\n\nChicken Vindaloo 🍛👳🏽‍♂️`);
      break;
    case 53:
      alert(`\nNumber: ${drawnNumber}\n\nHere comes Herbie 🚗`);
      break;
    case 54:
      alert(`\nNumber: ${drawnNumber}\n\nMan at the door `);
      break;
    case 55:
      alert(`\nNumber: ${drawnNumber}\n\nAll the fives `);
      break;
    case 56:
      alert(`\nNumber: ${drawnNumber}\n\nShotts bus `);
      break;
    case 57:
      alert(`\nNumber: ${drawnNumber}\n\nHeinz varieties `);
      break;
    case 58:
      alert(`\nNumber: ${drawnNumber}\n\nMake them wait `);
      break;
    case 59:
      alert(`\nNumber: ${drawnNumber}\n\nBrighton line `);
      break;
    case 60:
      alert(`\nNumber: ${drawnNumber}\n\nGrandma’s getting frisky `);
      break;
    case 61:
      alert(`\nNumber: ${drawnNumber}\n\nBakers bun `);
      break;
    case 62:
      alert(`\nNumber: ${drawnNumber}\n\nTickety boo - turn the screw `);
      break;
    case 63:
      alert(`\nNumber: ${drawnNumber}\n\nTickle me `);
      break;
    case 64:
      alert(`\nNumber: ${drawnNumber}\n\nRed and raw `);
      break;
    case 65:
      alert(`\nNumber: ${drawnNumber}\n\nStop working `);
      break;
    case 66:
      alert(`\nNumber: ${drawnNumber}\n\nClickety click `);
      break;
    case 67:
      alert(`\nNumber: ${drawnNumber}\n\nStairway to heaven `);
      break;
    case 68:
      alert(`\nNumber: ${drawnNumber}\n\nPick a mate `);
      break;
    case 69:
      alert(`\nNumber: ${drawnNumber}\n\nMeal for two `);
      break;
    case 70:
      alert(`\nNumber: ${drawnNumber}\n\nThree score and ten `);
      break;
    case 71:
      alert(`\nNumber: ${drawnNumber}\n\nJ. Lo’s bum `);
      break;
    case 72:
      alert(`\nNumber: ${drawnNumber}\n\nDanny La Rue `);
      break;
    case 73:
      alert(`\nNumber: ${drawnNumber}\n\nLucky and three `);
      break;
    case 74:
      alert(`\nNumber: ${drawnNumber}\n\nCandy store `);
      break;
    case 75:
      alert(`\nNumber: ${drawnNumber}\n\nStrive and strive `);
      break;
    case 76:
      alert(`\nNumber: ${drawnNumber}\n\nTrombones `);
      break;
    case 77:
      alert(`\nNumber: ${drawnNumber}\n\nTwo little crutches `);
      break;
    case 78:
      alert(`\nNumber: ${drawnNumber}\n\nHeavens gate `);
      break;
    case 79:
      alert(`\nNumber: ${drawnNumber}\n\nOne more time `);
      break;
    case 80:
      alert(`\nNumber: ${drawnNumber}\n\nGandhi’s breakfast - eight and blank`);
      break;
    case 81:
      alert(`\nNumber: ${drawnNumber}\n\nFat lady with a walking stick `);
      break;
    case 82:
      alert(`\nNumber: ${drawnNumber}\n\nStraight and through `);
      break;
    case 83:
      alert(`\nNumber: ${drawnNumber}\n\nTime for tea `);
      break;
    case 84:
      alert(`\nNumber: ${drawnNumber}\n\nGive me more `);
      break;
    case 85:
      alert(`\nNumber: ${drawnNumber}\n\nStaying alive `);
      break;
    case 86:
      alert(`\nNumber: ${drawnNumber}\n\nBetween the sticks `);
      break;
    case 87:
      alert(`\nNumber: ${drawnNumber}\n\nTorquay in Devon `);
      break;
    case 88:
      alert(`\nNumber: ${drawnNumber}\n\nTwo fat ladies  `);
      break;
    case 89:
      alert(`\nNumber: ${drawnNumber}\n\nAlmost there `);
      break;
    case 90:
      alert(`\nNumber: ${drawnNumber} \n\nTop of the shop `);
      break;
    default:
      preCheckLine(drawnNumber);
      alert(
        `Hello again ${userName}, the game is over. \nDo you want to play again?`
      );
      break;
  }
  // eslint-disable-next-line no-plusplus
  drawCounter++;
  drawnNumbers.push(drawnNumber);
  bingoLinesSwitch(drawnNumber);
};
const bingoLinesSwitch = (nr) => {
  if (line1.length === 5) {
    bingoLines.push("bLine1");
  }
  if (line2.length === 5) {
    bingoLines.push("bLine2");
  }
  if (line3.length === 5) {
    bingoLines.push("bLine3");
  }
  if (bingoLines.includes("bLine1") && bingoLines.includes("bLine2")) {
    checkForBingoNumbers(nr);
  } else if (bingoLines.includes("bLine1") && bingoLines.includes("bLine3")) {
    checkForBingoNumbers(nr);
  } else if (bingoLines.includes("bLine2") && bingoLines.includes("bLine3")) {
    checkForBingoNumbers(nr);
  } else if (
    bingoLines.includes("bLine1") ||
    bingoLines.includes("bLine2") ||
    bingoLines.includes("bLine3")
  ) {
    check4SecondLineNumbers(nr);
  } else checkNumbers(nr);
};
const checkNumbers = (nr) => {
  let match = jointArray[0].indexOf(nr);
  if (match !== -1) {
    jointArray[0][match] = "X";
    line1.push(nr);
  }
  match = jointArray[1].indexOf(nr);
  if (match !== -1) {
    jointArray[1][match] = "X";
    line2.push(nr);
  }
  match = jointArray[2].indexOf(nr);
  if (match !== -1) {
    jointArray[2][match] = "X";
    line3.push(nr);
  }
  checkLine(nr);
};
const checkLine = (nr) => {
  if (line1.length === 5 || line2.length === 5 || line3.length === 5) {
    alert(
      `Congratulations ${userName}, with number ${nr} you write a LINE...! \n🍀🍀🍀`
    );
    print();
  } else {
    print();
  }
};
const check4SecondLineNumbers = (nr) => {
  let match = jointArray[0].indexOf(nr);
  if (match !== -1) {
    jointArray[0][match] = "X";
    line1.push(nr);
  }
  match = jointArray[1].indexOf(nr);
  if (match !== -1) {
    jointArray[1][match] = "X";
    line2.push(nr);
  }
  match = jointArray[2].indexOf(nr);
  if (match !== -1) {
    jointArray[2][match] = "X";
    line3.push(nr);
  }
  check2PreLine(nr);
};
const check2PreLine = (nr) => {
  if (line1.length === 5) {
    bingoLines.push("bLine1");
  }
  if (line2.length === 5) {
    bingoLines.push("bLine2");
  }
  if (line3.length === 5) {
    bingoLines.push("bLine3");
  }
  check2Line(nr);
};
const check2Line = (nr) => {
  if (bingoLines.includes("bLine1") && bingoLines.includes("bLine2")) {
    alert(
      `You son of a gun ${userName}, with number ${nr} you write your second LINE...! \n🍀🍀🍀`
    );
    print();
  } else if (bingoLines.includes("bLine1") && bingoLines.includes("bLine3")) {
    alert(
      `You son of a gun ${userName}, with number ${nr} you write your second LINE...! \n🍀🍀🍀`
    );
    print();
  } else if (bingoLines.includes("bLine2") && bingoLines.includes("bLine3")) {
    alert(
      `You son of a gun ${userName}, with number ${nr} you write your second LINE...! \n🍀🍀🍀`
    );
    print();
  } else {
    print();
  }
};
const checkForBingoNumbers = (nr) => {
  let match = jointArray[0].indexOf(nr);
  if (match !== -1) {
    jointArray[0][match] = "X";
    line1.push(nr);
  }
  match = jointArray[1].indexOf(nr);
  if (match !== -1) {
    jointArray[1][match] = "X";
    line2.push(nr);
  }
  match = jointArray[2].indexOf(nr);
  if (match !== -1) {
    jointArray[2][match] = "X";
    line3.push(nr);
  }
  checkPreBingo(nr);
};
const checkPreBingo = (nr) => {
  if (line1.length === 5) {
    bingoLines.push("bLine1");
  }
  if (line2.length === 5) {
    bingoLines.push("bLine2");
  }
  if (line3.length === 5) {
    bingoLines.push("bLine3");
  }
  // eslint-disable-next-line no-undef
  checkBingo(nr);
};

const compareNumberDraws = (nr) => {
  for (let i = 0; i < drawnNumbers.length; i + 1);
  if (nr === drawnNumbers) {
    drawNumber();
  }
  return nr;
};
const endGame = () => {
  playAgain = Boolean(
    confirm(
      `Game over, ${userName} 👾 \n\nIf you want to play again, press enter. \nIf you want to leave, press cancel.`
    )
  );
  playAgain === true ? resetCardNumbers() : leave();
};
function showCarton() {
  cardNumbers.sort((a, b) => a - b);
  cardNumbers.join(", ");
  const third = cardNumbers.slice(-5);
  const second = cardNumbers.slice(-10, -5);
  const first = cardNumbers.slice(-15, -10);
  jointArray = [first, second, third];

  draw = Boolean(
    confirm(
      `Hello ${userName}...! ✨\n\nHere is your ticket. It comes with 90 goldnuggets to start off with.\nFor every ball drawn, 1 nugget will be discounted. \n\nShould you prefer to change your ticket for another, press cancel. \nOtherwise, press enter to start playing. \n\nGood Luck...! 🍀`
    )
  );
  draw === true ? drawNumber() : resetCardNumbers();
}
const resetCardNumbers = () => {
  cardNumbers.length = 0;
  drawnNumbers.length = 0;
  line1.length = 0;
  line2.length = 0;
  line3.length = 0;
  line.length = 0;
  bingoLines.length = 0;
  newNumber = {};
  drawCounter = 0;
  addCardNumber();
};
const print = () => {
  line1.sort((a, b) => a - b);
  line2.sort((a, b) => a - b);
  line1.sort((a, b) => a - b);

  drawNumber();
};
const getRanking = () => {
  for (let i = 0; ranking.length < 7; i + 1) {
    const goldNugget = Math.floor(Math.random() * 25) + 1;
    ranking.push(goldNugget);
  }
  ranking.sort((a, b) => b - a);
};
const leave = () => {
  alert(
    `It has been a pleasure to play with you, ${userName}. \nWe hope to see you again soon...! \n👋🏻`
  );
  leaveNow();
};
const leaveNow = () => {
  if (Date.getDay() === 5 || Date.getDay() === 6) {
    alert(`joe... can't leave ... again ${nameUp} 😱`);
  }
};
addCardNumber();
