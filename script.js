const btn = document.getElementById("startBtn");
const player = document.getElementById("player");
const video = document.querySelector("video");
const message = document.querySelector(".message");
const card = document.querySelector(".card");

const messages = [

`📱 <strong>I GOT A TEXT!</strong><br><br>
"The finale has arrived. Grab snacks immediately."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"No Wi-Fi. No distractions. Just villa drama."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Your private Love Island screening starts now 💕"`

];


btn.addEventListener("click", async () => {

    message.innerHTML =
    messages[Math.floor(Math.random()*messages.length)];

    btn.style.display = "none";

    card.classList.add("watching");

    player.classList.remove("hidden");

    try {
        await video.requestFullscreen();
        video.play();
    } catch {
        video.play();
    }

});
