// Inicializacion de programa
console.log("Bienvenido al sistema interactivo de fabian!")

// vamos a ingresar los datos
let continuar = true;
let ingresarNombre = "";

// ciclo while para validar que no deje vacio el prompt y el usuario quiera cancelar la operacion

while (ingresarNombre === "" || ingresarNombre === null) {
    ingresarNombre = prompt("Por favor, ingresa tu nombre:");
    if (ingresarNombre === null) {
        alert("Operación cancelada.");
        continuar = false;
        break; 
    }
}

if (continuar) {
    let edad = prompt("Por favor, ingresa tu edad:");

    // convertir edad a numero
    edad = parseInt(edad);

    // validacion y mensaje 
    if (isNaN(edad)) {
        console.error("Error, por favor ingresa una edad valida numerica.");
    } else if (edad > 17) {
        alert(`Hola, ${ingresarNombre} eres mayor de edad🧔, sigue codificando y preparate para ser de los mejores en la programacion🔥💻`);
    } else {
        alert(`Hola, ${ingresarNombre} eres menor de edad🧒, pero puedes seguir codificando y aprendiendo mucho mas 💻⚡`);
    }
}