/* function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(2); // Así sale 5 y 2.

 */

function moneyBox() {
    let saveCoins = 0;
    // Closures
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

// Primer closure: 'myMoneyBox' ahora es un closure que se refiere a 'countCoins', pero con acceso al 'saveCoins' definido en 'moneyBox'
const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(2);
myMoneyBox(18); // Ahora sale 5, 7, 25

// Creación del segundo closure: se llama nuevamente a 'moneyBox', que devuelve 'countCoins'. 'moneyBoxAna' ahora es otro closure que se refiere a 'countCoins', pero con acceso a un nuevo 'saveCoins' definido en una nueva ejecución de 'moneyBox'

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);