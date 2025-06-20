# Sistema Interactivo de Fabián

## Descripción
Este es un programa interactivo simple desarrollado en JavaScript que permite al usuario ingresar su nombre y edad. Basado en la edad ingresada, el programa muestra un mensaje personalizado con motivación para aprender a programar.

## Características
- Solicita el nombre del usuario y valida que no esté vacío.
- Solicita la edad y la convierte a un número entero.
- Muestra mensajes personalizados según si el usuario es mayor o menor de 18 años.
- Incluye opción para cancelar la operación.

## Instalación
1. Clona o descarga este repositorio.
2. Asegúrate de tener un navegador web (como Brave, Chrome, etc.) para ejecutar el código.
3. Abre el archivo `.html` o copia el código JavaScript en el navegador usando la consola de desarrolladores (F12 > Consola).

## Uso
1. Ejecuta el código en un entorno que soporte JavaScript (navegador o entorno Node.js con HTML).
2. Ingresa tu nombre cuando se te solicite.
3. Ingresa tu edad cuando se te solicite.
4. Recibirás un mensaje personalizado según tu edad.

## Código Ejemplo
```javascript
let continuar = true;
let ingresarNombre = "";

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
    edad = parseInt(edad);

    if (isNaN(edad)) {
        console.error("Error, por favor ingresa una edad valida numerica.");
    } else if (edad > 17) {
        alert(`Hola, ${ingresarNombre} eres mayor de edad🧔, sigue codificando y preparate para ser de los mejores en la programacion🔥💻`);
    } else {
        alert(`Hola, ${ingresarNombre} eres menor de edad🧒, pero puedes seguir codificando y aprendiendo mucho mas 💻⚡`);
    }
}