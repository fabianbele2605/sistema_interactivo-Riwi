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