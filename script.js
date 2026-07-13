const btn = document.getElementById("startBtn");
const player = document.getElementById("player");
const video = document.querySelector("video");
const message = document.querySelector(".message");

const messages = [

`📱 <strong>I GOT A TEXT!</strong><br><br>
"The girls have entered the villa. Please grab snacks and prepare for drama."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Your private Love Island screening is officially ready. No buffering allowed."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Congratulations. You have been selected for an exclusive finale viewing experience."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"The villa has been delivered straight to you. Enjoy 💕"`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Tonight's final recoupling is between you and this episode."`

];


btn.addEventListener("click", () => {

    btn.innerHTML = "🏝️ Entering the villa...";

    setTimeout(() => {

        btn.style.display = "none";

        player.classList.remove("hidden");

        message.innerHTML =
        messages[Math.floor(Math.random() * messages.length)];

        video.play();

    },1200);

});
