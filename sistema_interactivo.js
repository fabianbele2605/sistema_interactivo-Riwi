// Inicializacion de programa
console.log("¡Bienvenido al sistema interactivo de fabian!")

// vamos a ingresar los datos

let ingresarNombre = "";
while 
(ingresarNombre === "" || ingresarNombre === null) {
  ingresarNombre = prompt("Por favor, ingresa tu nombre:");
}

alert("Hola, " + ingresarNombre);


let edad = prompt("Por favor, ingresa tu edad:")

// convertir edad a numero

edad = parseInt(edad);

// validacion y mensaje 
if (isNaN(edad)) {
    console.error("Error, por favor ingresa una edad valida numerica.");
} else if (edad > 17) {
    alert(`Hola, ${ingresarNombre} eres mayor de edad🧔, sigue codificando y preparate para ser de los mejores en la programacion🔥💻`)
} else {
    alert(`Hola, ${ingresarNombre} eres menor de edad🧒, pero puedes seguir codificando y aprendiendo mucho mas 💻⚡`)
}

