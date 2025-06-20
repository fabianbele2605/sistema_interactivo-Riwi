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

## Código Ejemplo: javascript
```javascript
function StarProgram() {

    
    // Start program
    
    console.log("Welcome to our interactive Fabian system.")
    
    // Let's enter the data
    
    let Next = true;
    let youName = "";
    
    // Loop to validate name
    while (Next) {
        youName = prompt("Enter your name: ");
        if (youName === null) {
            alert("Canceled operation.") ;
            Next = false;
            break;
        }
        
        // Validate that the name only has letters (no numbers, special characters, or spaces)
        if (!/^[a-zA-Z]+$/.test(youName)) {
            alert("Error, Please enter a valid name..");
            continue;
        }
        
        // Validate that it is not empty 
        if (youName.trim() === "") {
            alert("Error, Name cannot be empty.");
            continue;
        }
        break; 
    }
    
    if (Next) {
        let age = "";
        // Cycle to validate age
        while (Next) {
            age = prompt("Please enter your age: ");
            if (age === null) {
                alert("Canceled Operation.");
                Next = false;
                break;
            }
            
            // Validate that the input is only numbers (no letters or other characters)
            if (!/^\d+$/.test(age)) {
                alert("Error, Please enter a valid age (only positive integers.)) ")
                continue;
            }
            
            // Convert age to number
            age = parseInt(age);
            
            // Validate that it is a number and not Nan
            if (isNaN(age)) {
                alert("Error, Please enter a valid numeric age.");
            } else {
                break;
            }
        }
        
        // validation and message
        if (Next) {
            if (age > 17) {
                alert(`Hello, ${youName}, You're of legal age 🧔, keep coding and get ready to be one of the best in programming 🔥💻`);
            } else {
                alert(`Hello, ${youName}, You are a minor 🧒, but you can continue coding and learning much more 💻⚡`);
            }
        }
    }
}

```
## Código Ejemplo: html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive system</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <h1>Sis-Int-Fa</h1>
    <p>Click and try our interactive system to validate your age..</p>
    
    <button class="boton" onclick="StarProgram()">Start</button>

    <footer>SisIntFa js</footer>
    <script src="./sistema_interactivo.js"></script>
    </body>
</html> 



```
## Código Ejemplo: Css
```Css

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgba(179, 193, 170, 0.813);
    color: rgba(35, 35, 35, 0.914);
    text-align: center;
    padding: 15%;
}

h1 {
    color: rgba(40, 40, 40, 0.853);
}

button {
    background-color: black;
    color: rgba(144, 156, 156, 0.914);
    padding: 10px 10px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover{
    background-color: brown;
}

footer{
    margin-top: 150px;
    font-size: 20px;
    color: black;
}


```

                                               @2025 fabian Riwi
