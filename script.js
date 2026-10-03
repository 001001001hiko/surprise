// GET THE ELEMENTS

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionPage = document.getElementById("questionPage");
const flowerPage = document.getElementById("flowerPage");

const message = document.getElementById("message");


// ================================
// YES BUTTON
// ================================

yesBtn.onclick = function () {

    // Hide question
    questionPage.style.display = "none";

    // Show flowers
    flowerPage.style.display = "flex";

};


// ================================
// MOVE NO BUTTON
// ================================

function moveNoButton() {

    // Make the button fixed to the screen
    noBtn.style.position = "fixed";

    // Get screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Get button size
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Calculate safe area
    const maxX = screenWidth - buttonWidth - 20;
    const maxY = screenHeight - buttonHeight - 20;

    // Generate random position
    const randomX =
        Math.floor(Math.random() * Math.max(maxX, 20));

    const randomY =
        Math.floor(Math.random() * Math.max(maxY, 20));

    // Move button
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Message
    message.innerHTML = "Nice try! 😏❤️";
}


// ================================
// COMPUTER
// ================================

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


// ================================
// MOUSE CLICK
// ================================

noBtn.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


// ================================
// PHONE
// ================================

noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);
