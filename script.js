let currentPage = 1;
const totalPages = 8;

const pageNumber = document.getElementById("pageNumber");
const progressFill = document.getElementById("progressFill");


// -----------------------------
// PAGE LOAD
// -----------------------------
window.addEventListener("load", () => {
    const firstScreen = document.getElementById("screen1");

    if (firstScreen) {
        firstScreen.classList.add("active");
        firstScreen.classList.add("fade-in");
    }

    updateProgress();
});


// -----------------------------
// GO TO NEXT SCREEN
// -----------------------------
function nextScreen(number) {

    const currentScreen = document.querySelector(".screen.active");
    const nextScreenElement = document.getElementById(`screen${number}`);

    if (!nextScreenElement) {
        console.log("Screen not found:", number);
        return;
    }

    // Remove current screen
    if (currentScreen) {
        currentScreen.classList.remove("active");
        currentScreen.classList.remove("fade-in");
    }

    // Show next screen
    currentPage = number;

    nextScreenElement.classList.add("active");

    // Restart animation
    void nextScreenElement.offsetWidth;

    nextScreenElement.classList.add("fade-in");

    updateProgress();
}


// -----------------------------
// UPDATE PAGE NUMBER + PROGRESS
// -----------------------------
function updateProgress() {

    if (pageNumber) {
        pageNumber.textContent = String(currentPage).padStart(2, "0");
    }

    if (progressFill) {
        const percentage = (currentPage / totalPages) * 100;
        progressFill.style.width = `${percentage}%`;
    }
}


// -----------------------------
// PAGE 2 CHOICE
// -----------------------------
function chooseReason(choice) {

    const label = document.getElementById("reasonLabel");
    const title = document.getElementById("reasonTitle");
    const text = document.getElementById("reasonText");

    if (choice === "know") {

        label.textContent = "tum samajhte ho mujhe";

        title.textContent = "Phir tum jaante ho...";

        text.innerHTML = `
            main woh sab baar-baar kyun bolta hoon.<br>
            Bas isliye kyunki mujhe tumhari fikr hai.
        `;

    } else {

        label.textContent = "toh suno...";

        title.textContent = "Kyunki mujhe tumhari fikr hai.";

        text.innerHTML = `
            Tum mere liye important ho.<br>
            Isliye kabhi-kabhi main thoda zyada care kar leta hoon.
        `;
    }

    nextScreen(3);
}


// -----------------------------
// FINAL PAGE ANIMATION
// -----------------------------
function finalAnimation() {

    const button = document.querySelector(".end-btn");

    if (button) {
        button.innerHTML = "♡ Always";
        button.disabled = true;
    }

    for (let i = 0; i < 18; i++) {
        createHeart();
    }
}


// -----------------------------
// CREATE FLOATING HEART
// -----------------------------
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "final-floating-heart";

    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    heart.style.animationDelay =
        Math.random() * 1.5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}