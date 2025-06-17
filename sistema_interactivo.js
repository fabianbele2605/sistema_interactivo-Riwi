// Inicializacion de programa
console.log("¡Bienvenido al sistema interactivo de fabian!")

// vamos a ingresar los datos

let nombre = prompt("Por favor,ingresa tu nombre:");
if (nombre !== null) {
    alert(`Hola, ${nombre}!`);
} else {
    alert('No ingresate tu nombre.')
}

let edad = prompt("Por favor, ingresa tu edad:")

// convertir edad a numero

edad = parseInt(edad);

// validacion y mensaje 
if (isNaN(edad)) {
    console.error("Error, por favor ingresa una edad valida numerica.");
} else 
if (edad => 18) {
    alert(`Hola, ${nombre} eres mayor de edad🧔, sigue codificando y preparate para ser de los mejores en la programacion🔥💻`)
} else {
    alert(`Hola, ${nombre} eres menor de edad🧒, pero puedes seguir codificando y aprendiendo mucho mas 💻⚡`)
}

