```javascript
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionPage = document.getElementById("questionPage");
const flowerPage = document.getElementById("flowerPage");

const message = document.getElementById("message");


// YES BUTTON
yesBtn.addEventListener("click", function () {

    questionPage.style.display = "none";
    flowerPage.style.display = "flex";

});


// NO BUTTON
noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", function () {

    moveNoButton();

    message.innerText = "Hmm... try again 😏❤️";

});


function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(
        10,
        Math.random() * maxX
    );

    const randomY = Math.max(
        10,
        Math.random() * maxY
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}


// BACK BUTTON
function goBack() {

    flowerPage.style.display = "none";
    questionPage.style.display = "flex";

    noBtn.style.position = "relative";
    noBtn.style.left = "auto";
    noBtn.style.top = "auto";

    message.innerText = "";

}
```
