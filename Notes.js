// Define the minimum and maximum numbers for the guessing game
const minNum = 1; // Minimum number the user can guess
const maxNum = 100; // Maximum number the user can guess

// Generate a random number between minNum and maxNum (inclusive)
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Variable to track the number of attempts made by the user
let attempts = 0;

// Variable to control the game loop
let running = true; // Set to true to start the game loop

// Start of the game loop
while (running) {
    // Prompt the user to guess a number within the defined range
    let guessInput = window.prompt(`🎲 Guess a number between ${minNum} and ${maxNum}:`);

    // Convert the input string to a number
    const guess = Number(guessInput);

    // Validate the user's input to ensure it's a number
    if (isNaN(guess)) {
        // If input is not a number, alert the user and continue to the next iteration
        window.alert("❌ That’s not a valid number. Try again.");
        continue; // Skip the rest of the loop and prompt again
    }

    // Check if the guessed number is within the valid range
    if (guess < minNum || guess > maxNum) {
        // If the guess is outside the range, alert the user
        window.alert(`⚠️ Please enter a number between ${minNum} and ${maxNum}.`);
        continue; // Skip the rest of the loop and prompt again
    }

    // If the guess is valid, increment the attempts counter
    attempts++;

    // Check if the guessed number is lower than the answer
    if (guess < answer) {
        // Alert the user that their guess is too low
        window.alert("TOO LOW! Try again.");
    } 
    // Check if the guessed number is higher than the answer
    else if (guess > answer) {
        // Alert the user that their guess is too high
        window.alert("TOO HIGH! Try again.");
    } 
    // If the guess is correct
    else {
        // Alert the user that they guessed correctly and show the number of attempts
        window.alert(`✅ CORRECT! 🎉 The answer was ${answer}. You got it in ${attempts} attempts!`);
        running = false; // Set running to false to exit the loop
    }
}

// Additional Information:
// - The game continues until the user guesses the correct number.
// - Input validation ensures the user provides a valid number within the specified range.
// - The use of alerts provides immediate feedback to the user on their guesses.
