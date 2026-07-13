const btn = document.getElementById("startBtn");
const player = document.getElementById("player");
const video = document.getElementById("video");
const card = document.getElementById("card");


btn.addEventListener("click", async () => {


    btn.style.display = "none";


    player.classList.remove("hidden");


    card.classList.add("watching");


    try {

        await card.requestFullscreen();

    }

    catch(error){

        console.log("Fullscreen unavailable");

    }


    video.play();


});
