// variables

var a; // declarando
var b = 'b' // declaramos y asignamos
b = 'bb'; // reasignación
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}

bestFruit();

/* OUTPUT *****************
Apple
Apple
************************/

function countries() {
    country = 'Colombia'; // global (tener cuidado, pero si pongo var, let o const, ya no se podría acceder)
    console.log(country);
}

countries();
console.log(country);