const btn = document.getElementById("startBtn");
const player = document.getElementById("player");

const messages = [
    "💌 I GOT A TEXT! Tonight's giving main character energy.",
    "🌴 Welcome to the villa. Islanders, please take your seats.",
    "💖 Warning: excessive screaming at the TV may occur.",
    "✨ You're officially coupled up with the Season Finale."
];

btn.addEventListener("click", () => {

    btn.style.display = "none";
    player.classList.remove("hidden");

    document.querySelector(".message").innerHTML =
        messages[Math.floor(Math.random()*messages.length)];

    document.querySelector("video").play();

});
