const btn = document.getElementById("startBtn");
const player = document.getElementById("player");
const video = document.getElementById("video");
const card = document.getElementById("card");


btn.addEventListener("click", async () => {

    // hide button
    btn.style.display = "none";

    // show video
    player.classList.remove("hidden");

    // turn into viewing mode
    card.classList.add("watching");


    // attempt fullscreen
    try {

        await card.requestFullscreen();

    } catch(error){

        console.log("Fullscreen unavailable");

    }


    // start video
    video.play();

});
