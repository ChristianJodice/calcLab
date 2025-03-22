let calcHistory = [];

function addToHistory(operation, a, b, result) {
    calcHistory.push({
        operation: operation,
        firstNumber: a,
        secondNumber: b,
        result: result,
        timestamp: new Date().toLocaleString()
    });
}

function displayHistory() {
    if (calcHistory.length === 0) {
        console.log("No calculations stored in history.");
        return;
    }

    console.log("\nCalculation History:");
    console.log("-------------------");
    calcHistory.forEach((calc, i) => 
        console.log(`${i + 1}. ${calc.firstNumber} ${calc.operation} ${calc.secondNumber} = ${calc.result}\n   Time: ${calc.timestamp}`)
    );
}

function add(a, b) {
    let result = a + b;
    addToHistory('+', a, b, result);
    return result;
}

function subtract(a, b) {
    let result = a - b;
    addToHistory('-', a, b, result);
    return result;
}

function multiply(a, b) {
    let result = a * b;
    if (a === 0 || b === 0) {
        console.log("Error: Multiplication by zero");
    }
    addToHistory('*', a, b, result);
    return result;
}

function divide(a, b) {
    let result = a / b;
    if (a === 0 || b === 0) {
        console.log("Error: Division by zero");
        return 0;
    }
    addToHistory('/', a, b, result);
    return result;
}

// Example of using the functions
console.log("Adding 5 + 3:", add(5, 3));
console.log("Subtracting 9 - 4:", subtract(9, 4));
console.log("Multiplying 7 * 2:", multiply(7, 2));
console.log("Dividing 8 / 2:", divide(8, 2));
console.log("Dividing 5 / 0:", divide(5, 0));

// Displaying the history
displayHistory();