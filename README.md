# 🪨 Rock Paper Scissors (JavaScript)

## 📌 Project Overview

This project is a simple **Rock-Paper-Scissors game** built using JavaScript.
The game is played between a human user and the computer for **5 rounds**, with scores tracked and a final winner declared.

---

## 🎯 Features

* User input via browser prompt
* Random computer choice generation
* Round-by-round gameplay
* Score tracking (Human vs Computer)
* Final winner announcement after 5 rounds
* Case-insensitive input handling
* Recursive game loop (no traditional loops used)

---

## 🧠 Concepts Used

* Functions
* Conditional statements
* Recursion (instead of loops)
* Global state management
* String manipulation (`toLowerCase()`)

---

## 🕹️ How the Game Works

1. The user is prompted to enter:

   * `rock`, `paper`, or `scissor`
2. The computer randomly selects one of the three options.
3. A round is played:

   * Winner is decided based on rules
   * Scores are updated
4. Steps repeat until **5 rounds are completed**
5. Final winner is displayed in the console

---

## ⚙️ Functions Breakdown

### `getComputerChoice()`

* Generates a random choice:

  * rock / paper / scissor

### `getHumanChoice()`

* Takes user input using `prompt()`
* Converts input to lowercase for consistency

### `playRound(humanChoice, computerChoice)`

* Determines winner of a single round
* Updates scores
* Returns result message

### `playGame()`

* Controls the game flow using recursion
* Runs exactly 5 rounds
* Displays final result

---

## ▶️ How to Run

1. Open your browser
2. Open Developer Console (F12)
3. Paste the script or run it from your HTML file
4. Call:

```js
playGame();
```

---

## 📊 Example Output

```
Round: 1
You Win! Rock beats Scissor
Scores => Human: 1 Computer: 0

Round: 2
You Lose! Paper beats Rock
Scores => Human: 1 Computer: 1

...

Game Over
You won the Game!!!
```

---

## 🏁 Conclusion

This project demonstrates core JavaScript fundamentals .

---
