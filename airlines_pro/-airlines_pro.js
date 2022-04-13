const flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function averageCost() {
  let totalAmount = 0;
  for (let i = 0; i < flights.length; i++) {
    totalAmount += flights[i].cost;
  }
  let average = totalAmount / flights.length;
  let ave = average * 100;
  let roundAverage = Math.floor(ave) / 100;
  newAverage.push(roundAverage);
}
function showFlightsScaleNumbers() {
  let scaledFlights = 0;
  for (let i = 0; i < flights.length; i++) {
    scaledFlights += flights[i].scale;
  }

  const lateFlights = [];
  function fiveLateFlights() {
    for (let i = flights.length - 5; i < flights.length; i++) {
      lateFlights.push(flights[i].to);
    }

    showFlights();
    averageCost();
    showFlightsScaleNumbers();
    fiveLateFlights();
    adminUserToggle();
  }

  function adminUserToggle() {
    let role = Boolean(
      confirm(
        'If you are a User, please press: "enter" 😃 \nIf you are Admin, please press: "cancel" 🖥'
      )
    );
    role === true ? userAction() : adminAction();
  }

  function userAction() {
    let offerFlightId;
    let priceRange = +prompt("Please enter your maximum budget in €: ");
    for (let i = 0; i < flights.length; i++) {
      if (priceRange >= flights[i].cost) {
      }
    }
    offerFlightId = +prompt(
      "Please enter the ID of the flight you would like to purchase:"
    );
    for (let i = 0; i < flights.length; i++) {
      if (offerFlightId == flights[i].id) {
        flights.scale
          ? alert(
              `Thank you for purchase ${nameUp}! \nFlight details: ID ${flights[i].id} - One scale    \n${flights[i].from} - ${flights[i].to}  \ncost:  ${flights[i].cost} € \n👋🏻`
            )
          : alert(
              `Thank you for purchase ${nameUp}! \nFlight details: ID ${flights[i].id} - Direct flight  \n${flights[i].from} - ${flights[i].to}  \nCost: ${flights[i].cost} € \n👋🏻`
            );
        return thankYou();
      }
    }
  }
}

function adminAction() {
  let action = prompt(
    'To introduce a new flight, enter the word: "add" \nTo eliminate an existing flight, enter the word: "delete"  \nTo exit, press cancel.'
  );
  if (action === "") {
    adminAction();
  } else if (action === null) {
    return alert(
      `Thank you and good evening, ${nameUp}! \nI shall see you tomorrow 🥰`
    );
  } else if (
    action.toUpperCase() !== "ADD" &&
    action.toUpperCase() !== "DELETE"
  ) {
    adminAction();
  } else if (action.toUpperCase() === "ADD") {
    return addFlights();
  } else if (action.toUpperCase() === "DELETE") {
    return deleteFlights();
  } else {
    prompt(
      `Thank you and good evening, ${nameUp}! \nI shall see you tomorrow 🥰`
    );
  }
}

function addFlights() {
  let newFlight = {};
  newFlight.from = prompt("Flight origin:                 ");
  newFlight.from =
    newFlight.from.charAt(0).toUpperCase() + newFlight.from.slice(1);
  newFlight.to = prompt("Flight destination:             ");
  newFlight.to = newFlight.to.charAt(0).toUpperCase() + newFlight.to.slice(1);
  newFlight.scale = Boolean(
    confirm(
      'For a flight with a scale, press: "enter" \nFor a direct flight, press "cancel"'
    )
  );
  newFlight.cost = +prompt("Ticket price in €:            ");
  isNaN(newFlight.cost)
    ? (newFlight.cost = +prompt(
        "You have not entered a validnumber. \nPlease enter the ticket price in € as a number:"
      ))
    : newFlightId();
  function newFlightId() {
    newFlight.id = Math.floor(Math.random() * 100 + 20);
    compareId(newFlight.id);
    flights.push(newFlight);
    showFlights();
    newAverage.push(newFlight.cost);
    averageCost();
    if (flights.length >= 15) {
      alert("⛔️You have reached the maximum capacity of daily flights!! ⛔️");
      adminAction();
    }
    continueToAdd();
  }
}
function continueToAdd() {
  let continuesTo = Boolean(
    confirm(
      'To continue adding flights, press: "enter"  \nTo return to the admin menu, press: "cancel".'
    )
  );
  continuesTo === true ? addFlights() : adminAction();
}

function deleteFlights() {
  let deleteFlight = +prompt(
    "Please enter ID of the flight you want to delete:"
  );
  for (let i = 0; i < flights.length; i++) {
    if (deleteFlight === flights[i].id) {
      flights.splice(i, 1);
    }
  }

  showFlights();
  averageCost();
  continueDelete();
}
function continueDelete() {
  let continues = Boolean(
    confirm(
      'To continue deleting flights, press: "enter"  \nTo return to the admin menu, press: "cancel".'
    )
  );
  continues === true ? deleteFlights() : adminAction();
}

function compareId(flightNr) {
  for (let i = 0; i < flights.length; i++) {
    if (flightNr !== flights[i].id) {
      return flightNr;
    } else {
      newFlightId();
    }
  }
}

function bye() {
  alert(`Thank you and good evening, ${nameUp} 🥰`);
}

const newAverage = [];

greetName();
