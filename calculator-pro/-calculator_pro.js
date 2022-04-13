let userName = prompt(
  '\nBienvenido al famoso juego de Isdi Coders "Paso de cabra"...! \n\nDinos cómo quieres que te llamemos y comenzamos.'
);
if (userName === "" || userName === null) {
  alert(
    '\nAquí protegemos tu privacidad; para poder dirigirnos a ti te llamaremos "Erudit@".'
  );
  userName = "Erudit@";
}
userName = userName.charAt(0).toUpperCase() + userName.slice(1);

alert(
  `\nAquí te explicamos como funciona, ${userName}: \n\nTienes que encontrar una palabra que, se inicie con, o bien contenga una letra del alfabeto español, así que lee con atención el enunciado.\n\nEn tus respuestas ¡NO PONGAS ACENTOS! aquí la rapidez es ensencial.`
);
alert(
  `\nEn el caso de no se te ocurra la respuesta en ese momento, escribe: "pasalacabra", "pasapalabra" o simplemente "p"...! \n\nEn una segunda ronda tendrás oportunidad de responder las palabras de las que hayas pasado.\n\nEn el caso de querer parar el juego, haz click en "cancel" pero ten en cuenta que no participarás en el ránking.`
);
let pointCounter = 0;
const segundaRonda = [];
/*const drawnNumbers = [];
const line1 = [];
const line2 = [];
const line3 = [];
const line = [];
const bingoLines = [];*/
const ranking = [];
const playersPoints = () => Math.floor(Math.random() * 27 + 1);

class Player {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }
}
const Jimi = new Player("James Marshall Hendrix 🎸", playersPoints());
const Goofy = new Player("Goofy", playersPoints());
const Roberts = new Player("Dread Pirate Roberts 🏴‍☠️", playersPoints());
const Bilbo = new Player("Bilbo Baggins", playersPoints());
const Sirius = new Player("Sirius Black", playersPoints());
const Nick = new Player("Nick Burkhardt", playersPoints());
const Holden = new Player("James Holden", playersPoints());
const Alf = new Player("Alf", playersPoints());
const MrRobot = new Player("Elliot Alderson", 27); // memoria fotografica
const DrMurphy = new Player("Dr. Shawn Murphy", 27); // memoria fotografica
const JordiH = new Player("Jordi Hurtado", 25); // presentador saber y ganar
const Fran = new Player("Fran González", 27); // champion
const Silvia = new Player("Silvia Jato", playersPoints()); // primera presentadora paso de cabra
const Antonio = new Player("Antonio Ruiz", 27); // champion
const JordiS = new Player("Jordi Soler Comas", playersPoints());
const Joey = new Player("Joey Tribbiani", 2);
const Phoebe = new Player("Phoebe Buffay", 5);
const Brainy = new Player("Querl Dox", 27);
const Amy = new Player("Amy Farrah Fowler", 27);
const Maya = new Player("Abeja Maya 🐝", playersPoints());
const Alan = new Player("Alan Harper", 5);

//const letters = [letraA,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z]
const players = [
  [Alan.name, Alan.points][(Maya.name, Maya.points)],
  [Jimi.name, Jimi.points],
  [Goofy.name, Goofy.points],
  [Roberts.name, Roberts.points],
  [Bilbo.name, Bilbo.points],
  [Sirius.name, Sirius.points],
  [Nick.name, Nick.points],
  [Holden.name, Holden.points],
  [Alf.name, Alf.points],
  [MrRobot.name, MrRobot.points],
  [DrMurphy.name, DrMurphy.points],
  [JordiH.name, JordiH.points],
  [Fran.name, Fran.points],
  [Silvia.name, Silvia.points],
  [Antonio.name, Antonio.points],
  [JordiS.name, JordiS.points],
  [Joey.name, Joey.points],
  [Phoebe.name, Phoebe.points],
  [Brainy.name, Brainy.points],
  [Amy.name, Amy.points],
];
const player = [
  Alan,
  Maya,
  Jimi,
  Goofy,
  Roberts,
  Bilbo,
  Sirius,
  Nick,
  Holden,
  Alf,
  MrRobot,
  DrMurphy,
  JordiH,
  Fran,
  Silvia,
  Antonio,
  JordiS,
  Joey,
  Phoebe,
  Brainy,
  Amy,
];
const playersOrder = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const playersShuffle = playersOrder(player);

const gameOn = () =>
  (greeting = alert(
    `\nHola ${userName}, empecemos presentándote a tu contrincante, ${player[0].name}.  \n\n¿Empezamos ya...? `
  ));
const conLa = () => {
  //let answer = Boolean(prompt(`Con la letra ${letraA[0].letter}: ${letraA[0].question}`));
  let answer = prompt(letraA[0].question);
  answer = answer.toLowerCase();
  //((answer !== letraA[0].answer) === true) ? alert(`Lo siento ${userName}, la respuesta correcta es ${letraA[0].answer} y no ${answer}.`):conLaB;
  if ((answer !== letraA[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraA[0].answer} y no ${answer}.`
    );
    conLaB();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraA);
    conLaB();
  } else if ((answer === letraA[0].answer) === true) {
    pointCounter++;
    conLaB();
  } else {
  }
};
const conLaB = () => {
  answer = prompt(letraB[0].question);
  answer = answer.toLowerCase();
  answer.charAt(0).toUpperCase() + answer.slice(1);
  if ((answer !== letraB[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraB[0].answer} y no ${answer}.`
    );
    conLaC();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraB);
    conLaC();
  } else if ((answer === letraB[0].answer) === true) {
    pointCounter++;
    conLaC();
  } else {
    bye();
  }
};
const conLaC = () => {
  answer = prompt(letraC[0].question);
  answer = answer.toLowerCase();
  answer.charAt(0).toUpperCase() + answer.slice(1);
  if ((answer !== letraC[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraC[0].answer} y no ${answer}.`
    );
    conLaD();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraC);
    conLaD();
  } else if ((answer === letraC[0].answer) === true) {
    pointCounter++;
    conLaD();
  } else {
    bye();
  }
};
const conLaD = () => {
  let answer = prompt(letraD[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraD[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraD[0].answer} y no ${answer}.`
    );
    conLaE();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraD);
    conLaE();
  } else if ((answer === letraD[0].answer) === true) {
    pointCounter++;
    conLaE();
  } else {
  }
};
const conLaE = () => {
  let answer = prompt(letraE[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraE[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraE[0].answer} y no ${answer}.`
    );
    conLaF();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraE);
    conLaF();
  } else if ((answer === letraE[0].answer) === true) {
    pointCounter++;
    conLaF();
  } else {
  }
};
const conLaF = () => {
  let answer = prompt(letraF[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraF[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraF[0].answer} y no ${answer}.`
    );
    conLaG();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraF);
    conLaG();
  } else if ((answer === letraF[0].answer) === true) {
    pointCounter++;
    conLaG();
  } else {
  }
};
const conLaG = () => {
  let answer = prompt(letraG[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraG[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraG[0].answer} y no ${answer}.`
    );
    conLaH();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraG);
    conLaH();
  } else if ((answer === letraG[0].answer) === true) {
    pointCounter++;
    conLaH();
  } else {
  }
};
const conLaH = () => {
  let answer = prompt(letraH[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraH[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraH[0].answer} y no ${answer}.`
    );
    conLaI();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraH);
    conLaI();
  } else if ((answer === letraH[0].answer) === true) {
    pointCounter++;
    conLaI();
  } else {
  }
};
const conLaI = () => {
  let answer = prompt(letraI[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraI[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraI[0].answer} y no ${answer}.`
    );
    conLaJ();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraI);
    conLaJ();
  } else if ((answer === letraI[0].answer) === true) {
    pointCounter++;
    conLaJ();
  } else {
  }
};
const conLaJ = () => {
  let answer = prompt(letraJ[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraJ[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraJ[0].answer} y no ${answer}.`
    );
    conLaK();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraJ);
    conLaK();
  } else if ((answer === letraJ[0].answer) === true) {
    pointCounter++;
    conLaK();
  } else {
  }
};
const conLaK = () => {
  let answer = prompt(letraK[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraK[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraK[0].answer} y no ${answer}.`
    );
    conLaL();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraK);
    conLaL();
  } else if ((answer === letraK[0].answer) === true) {
    pointCounter++;
    conLaL();
  } else {
  }
};
const conLaL = () => {
  let answer = prompt(letraL[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraL[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraL[0].answer} y no ${answer}.`
    );
    conLaM();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraL);
    conLaM();
  } else if ((answer === letraL[0].answer) === true) {
    pointCounter++;
    conLaM();
  } else {
  }
};
const conLaM = () => {
  let answer = prompt(letraM[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraM[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraM[0].answer} y no ${answer}.`
    );
    conLaN();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraM);
    conLaN();
  } else if ((answer === letraM[0].answer) === true) {
    pointCounter++;
    conLaN();
  } else {
  }
};
const conLaN = () => {
  let answer = prompt(letraN[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraN[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraN[0].answer} y no ${answer}.`
    );
    conLaÑ();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraN);
    conLaÑ();
  } else if ((answer === letraN[0].answer) === true) {
    pointCounter++;
    conLaÑ();
  } else {
  }
};
const conLaÑ = () => {
  let answer = prompt(letraÑ[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraÑ[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraÑ[0].answer} y no ${answer}.`
    );
    conLaO();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraÑ);
    conLaO();
  } else if ((answer === letraÑ[0].answer) === true) {
    pointCounter++;
    conLaO();
  } else {
  }
};
const conLaO = () => {
  let answer = prompt(letraO[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraO[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraO[0].answer} y no ${answer}.`
    );
    conLaP();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraO);
    conLaP();
  } else if ((answer === letraO[0].answer) === true) {
    pointCounter++;
    conLaP();
  } else {
  }
};
const conLaP = () => {
  let answer = prompt(letraP[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraP[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraP[0].answer} y no ${answer}.`
    );
    conLaQ();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraP);
    conLaQ();
  } else if ((answer === letraP[0].answer) === true) {
    pointCounter++;
    conLaQ();
  } else {
  }
};
const conLaQ = () => {
  let answer = prompt(letraQ[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraQ[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraQ[0].answer} y no ${answer}.`
    );
    conLaR();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraQ);
    conLaR();
  } else if ((answer === letraQ[0].answer) === true) {
    pointCounter++;
    conLaR();
  } else {
  }
};
const conLaR = () => {
  let answer = prompt(letraR[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraR[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraR[0].answer} y no ${answer}.`
    );
    conLaS();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraR);
    conLaS();
  } else if ((answer === letraR[0].answer) === true) {
    pointCounter++;
    conLaS();
  } else {
  }
};
const conLaS = () => {
  let answer = prompt(letraS[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraS[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraS[0].answer} y no ${answer}.`
    );
    conLaT();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraS);
    conLaT();
  } else if ((answer === letraS[0].answer) === true) {
    pointCounter++;
    conLaT();
  } else {
  }
};
const conLaT = () => {
  let answer = prompt(letraT[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraT[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraT[0].answer} y no ${answer}.`
    );
    conLaU();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraT);
    conLaU();
  } else if ((answer === letraT[0].answer) === true) {
    pointCounter++;
    conLaU();
  } else {
  }
};
const conLaU = () => {
  let answer = prompt(letraU[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraU[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraU[0].answer} y no ${answer}.`
    );
    conLaV();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraU);
    conLaV();
  } else if ((answer === letraU[0].answer) === true) {
    pointCounter++;
    conLaV();
  } else {
  }
};
const conLaV = () => {
  let answer = prompt(letraV[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraV[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraV[0].answer} y no ${answer}.`
    );
    conLaW();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraV);
    conLaW();
  } else if ((answer === letraV[0].answer) === true) {
    pointCounter++;
    conLaW();
  } else {
  }
};
const conLaW = () => {
  let answer = prompt(letraW[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraW[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraW[0].answer} y no ${answer}.`
    );
    conLaX();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraW);
    conLaX();
  } else if ((answer === letraW[0].answer) === true) {
    pointCounter++;
    conLaX();
  } else {
  }
};
const conLaX = () => {
  let answer = prompt(letraX[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraX[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraX[0].answer} y no ${answer}.`
    );
    conLaY();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraX);
    conLaY();
  } else if ((answer === letraX[0].answer) === true) {
    pointCounter++;
    conLaY();
  } else {
  }
};
const conLaY = () => {
  let answer = prompt(letraY[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraY[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraY[0].answer} y no ${answer}.`
    );
    conLaZ();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraY);
    conLaZ();
  } else if ((answer === letraY[0].answer) === true) {
    pointCounter++;
    conLaZ();
  } else {
  }
};
const conLaZ = () => {
  let answer = prompt(letraZ[0].question);
  answer = answer.toLowerCase();
  if ((answer !== letraZ[0].answer) === true) {
    alert(
      `Lo siento ${userName}, la respuesta correcta es ${letraZ[0].answer} y no ${answer}.`
    );
    secondRound();
  } else if (
    (answer === "pasalacabra") === true ||
    (answer === "p") === true ||
    (answer === "pasapalabra") === true
  ) {
    segundaRonda.push(letraZ);
    secondRound();
  } else if ((answer === letraZ[0].answer) === true) {
    pointCounter++;
    secondRound();
  } else {
  }
};

const letraA = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
];

const letraB = [
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
];
const letraC = [
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
];
const letraD = [
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
];
const letraE = [
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
];
const letraF = [
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
];
const letraG = [
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
];
const letraH = [
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
];
const letraI = [
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
];
const letraJ = [
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
];
const letraK = [
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
];
const letraL = [
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
];
const letraM = [
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
];
const letraN = [
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
];
const letraÑ = [
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
];
const letraO = [
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
];
const letraP = [
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
];
const letraQ = [
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
];
const letraR = [
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
];
const letraS = [
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
];
const letraT = [
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
];
const letraU = [
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
];
const letraV = [
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
];
const letraW = [
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
];
const letraX = [
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
];
const letraY = [
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
];
const letraZ = [
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];
gameOn();
conLa();
