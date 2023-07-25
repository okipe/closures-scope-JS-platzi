function greeting() {
    let useName = 'Ana';
    console.log(useName);
    
    if (useName === 'Ana') {
        console.log(`Hello ${useName}!`);
    }
}

greeting();
console.log(userName); // Saldrá error porque la variable es local, no global.