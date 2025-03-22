# Simple Calculator

A JavaScript calculator that performs basic arithmetic operations and maintains a history of calculations.

## Features

- Basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)
- Calculation history tracking
- Combined operations support
- Error handling for division by zero
- Timestamp tracking for each calculation

## Usage

### Basic Operations

```javascript
// Addition
add(5, 3);      // Returns 8

// Subtraction
subtract(9, 4); // Returns 5

// Multiplication
multiply(7, 2); // Returns 14

// Division
divide(8, 2);   // Returns 4
```

### Combined Operations

The calculator supports performing multiple operations in sequence using the `combine` function:

```javascript
// Example: 5 + 3 * 2 - 4
combine([5, '+', 3, '*', 2, '-', 4]);

// Example: 10 / 2 + 3 * 4
combine([10, '/', 2, '+', 3, '*', 4]);
```

### Viewing History

To view the history of all calculations:

```javascript
displayHistory();
```

The history will show:
- The calculation performed
- The result
- Timestamp of when the calculation was made

## Error Handling

The calculator includes error handling for:
- Division by zero
- Invalid operations in combined calculations
- Invalid input for the combine function

## Example Output

```
Adding 5 + 3: 8
Subtracting 9 - 4: 5
Multiplying 7 * 2: 14
Dividing 8 / 2: 4
Dividing 5 / 0: Error: Division by zero

Combining operations:
5 + 3 * 2 - 4: 12
10 / 2 + 3 * 4: 20

Calculation History:
-------------------
1. 5 + 3 = 8
   Time: [timestamp]
2. 9 - 4 = 5
   Time: [timestamp]
...
```

## Getting Started

1. Clone this repository
2. Open the `calculator.js` file in your JavaScript environment
3. Start using the calculator functions!

## Note

The calculation history is stored in memory and will be cleared when the page is refreshed or the script is restarted. 