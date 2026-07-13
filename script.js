const btn = document.getElementById("startBtn");
const player = document.getElementById("player");

const messages = [
    "📱 I GOT A TEXT! Your finale has officially arrived.",
    "🍿 Everyone settle in... it's finally happening.",
    "💖 No buffering. No ads. Just vibes.",
    "🥂 May your favourite couple win.",
    "🌴 Enjoy!! Love you girls xx"
];

btn.addEventListener("click", () => {

    btn.style.display = "none";
    player.classList.remove("hidden");

    document.querySelector(".message").innerHTML =
        messages[Math.floor(Math.random() * messages.length)];

    document.querySelector("video").play();

});
