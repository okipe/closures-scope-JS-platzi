function createPetList() {
    // `petList` es un arreglo vacío en el ámbito (scope) de `createPetList`
    const petList = [];
    return function (addPet) {
        // Si se proporciona un parámetro `addPet`, se añade al final del arreglo `petList`
        if (addPet) {
        petList.push(addPet);
        }
    return petList;
    }
}

/* CONSOLE ******************
Input:
const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

Output:
["michi", "firulais"]
*****************************/