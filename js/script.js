/* ================================
   BrightBank — App Logic Skeleton
   Clean + Organized Version
================================ */

// ------------------------------
// GLOBAL ELEMENT SELECTORS
// ------------------------------
const calcBtn = document.getElementById("calc-btn");
const calcSumBtn = document.getElementById("calc-sum");
const calculator = document.getElementById("calculator");



/* ------------------------------
   FEATURE PLACEHOLDER
-------------------------------- */
// This safely targets the FIRST BUTTON but won't break the script if it doesn't exist
const firstButton = document.querySelector("button");
if (firstButton) {
    firstButton.addEventListener("click", () => {
        alert("Feature coming soon!");
    });
}



/* ------------------------------
   ACCOUNT BALANCES
-------------------------------- */

// TODO: Store checking and savings balances in variables
let checkingBalance = 0;
let savingsBalance = 0;

// TODO: Write a function to update account balance displays on the DOM



// TODO: Write functions to deposit money into checking and savings



// TODO: Write functions to withdraw money (make sure to prevent negative balances!)



/* ------------------------------
   BUDGET CALCULATOR
-------------------------------- */

// TODO: Add an event listener to open/close the calculator
calcBtn.addEventListener("click", () => {
    // TEMPORARY FEATURE ALERT
    alert("Calculator feature coming soon!");

    // When you're ready, remove the alert above
    // and uncomment this below to toggle visibility:

    // calculator.style.display =
    //   calculator.style.display === "block" ? "none" : "block";
});

// TODO: Add event listener for calculation button
calcSumBtn.addEventListener("click", () => {
    // When you start building this:
    // - Get income and expenses from input fields
    // - Subtract expenses from income
    // - Display result in #calc-result
});



/* ------------------------------
   SAVING HABIT REWARDS SYSTEM
-------------------------------- */

// TODO: Create a simple "reward points" system for good financial habits
// Example: Depositing money or saving a certain amount = points



// TODO: Store points in localStorage so they stay after page refresh



// TODO: Display user’s total reward points in the UI



/* ------------------------------
   FINANCIAL LITERACY QUIZ
-------------------------------- */

// TODO: Create an array of quiz questions and answers



// TODO: Write function to display quiz question to user



// TODO: Check user's answers and update score



// TODO: Show final score and link to educational articles




/* ------------------------------
   USER AUTH / LOGIN MOCKUP
-------------------------------- */

// TODO: Create a simple login system (no backend needed yet)
// - Save username in localStorage
// - Display "Welcome back, ____!"



// TODO: Add logout button to clear login data




/* ------------------------------
   FUTURE EXPANSIONS
-------------------------------- */

// TODO: Add charts (income vs expenses) using Canvas or Chart.js
// TODO: Add a savings goal tracker with a progress bar
// TODO: Add transaction history section
// TODO: Add dark mode toggle

// END OF FILE
