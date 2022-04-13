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
function showFlights() {
  flight.scale
    ? alert(
        `Flight ID: ${flight.id}. ${flight.from} - destination ${flight.to}. One scale. Cost ${flight.cost} €. 🛬`
      )
    : alert(
        `Flight ID: ${flight.id} 🛩 ${flight.from} - destination ${flight.to}. Direct flight. Cost ${flight.cost} €.`
      );
}
function averageCost() {
  let totalAmount = 0;
  for (let i = 0; i < flights.length; i++) {
    totalAmount += flights[i].cost;
  }
  let average = totalAmount / flights.length;
  let ave = average * 100;
  let roundAverage = Math.floor(ave) / 100;

  let scaledFlights = 0;
  for (let i = 0; i < flights.length; i++) {
    scaledFlights += flights[i].scale;
  }
  const lateFlights = [];
  function fiveLateFlights() {
    for (let i = flights.length - 5; i < flights.length; i++) {
      lateFlights.push(flights[i].to);
    }
    alert(`Today\s last 5 destinations will be: ${lateFlights.join(", ")} 😎`);
  }

  showFlights();
  averageCost();
  showFlightsScaleNumbers();
  fiveLateFlights();
}
greetName();
