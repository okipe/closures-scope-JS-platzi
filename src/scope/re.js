// Var

var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName); // Oscar

var lastName = "David"; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName); // Ana

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // reasignado
console.log(secondName); // Ana

// Let
let fruit = 'Apple'; // declara y asigna
fruit = 'Kiwi'; // reasignar
console.log(fruit);
// let fruit = 'Banana' // Cannot redeclare block-scope variable 'fruit'

// Const
const animal = 'dog';
// const animal = 'cat'; // Cannot redeclare block-scoped variable 'animal'.
// animal = 'cat'; // no se puede reasignar.
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);