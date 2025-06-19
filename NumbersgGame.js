
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;

while (running) {
    let guessInput = window.prompt(`🎲 Guess a number between ${minNum} and ${maxNum}:`);

    // Convert input to a number
    const guess = Number(guessInput);

    // Validate input
    if (isNaN(guess)) {
        window.alert("❌ That’s not a valid number. Try again.");
        continue;
    }

    if (guess < minNum || guess > maxNum) {
        window.alert(`⚠️ Please enter a number between ${minNum} and ${maxNum}.`);
        continue;
    }

    // Valid guess
    attempts++;

    if (guess < answer) {
        window.alert("TOO LOW! Try again.");
    } else if (guess > answer) {
        window.alert("TOO HIGH! Try again.");
    } else {
        window.alert(`✅ CORRECT! 🎉 The answer was ${answer}. You got it in ${attempts} attempts!`);
        running = false;
    }
}
