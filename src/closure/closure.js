function greeting() {
    // `userName` es una variable en el scope de 'greeting'
    let userName = 'Oscar';

    // Se define la función 'displayUserName', que está en el scope de 'greeting' y tiene acceso a 'userName'
    function displayUserName() {
        return `Hello ${userName}`;
    }
    // 'greeting' retorna 'displayUserName', que es un closure que tiene acceso a 'userName'
    return displayUserName
}

// Cómo ejecutaríamos esta closure
// Creación del closure: se llama a 'greeting', que devuelve 'displayUserName'
// 'g' ahora es un closure que se refiere a 'displayUserName', pero con acceso al 'userName' definido en 'greeting'
const g = greeting();
// Al imprimir 'g', se muestra la definición de la función 'displayUserName'
console.log(g); // Retornando la definición de displayUserName
// Al llamar a `g()` se ejecuta la función 'displayUserName', que devuelve el saludo personalizado. Aunque 'userName' estaba en el scope de 'greeting' y normalmente no sería accesible, gracias al closure 'g' puede acceder a esta variable y usarla en el saludo
console.log(g()); // Ejecutamos el valor de hello Oscar recordando el contexto

/* CONSOLE ***************
Hello Oscar
*************************/