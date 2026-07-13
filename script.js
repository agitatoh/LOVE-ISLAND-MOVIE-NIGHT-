const btn = document.getElementById("startBtn");
const player = document.getElementById("player");
const video = document.getElementById("video");
const card = document.getElementById("card");


btn.onclick = function(){

    console.log("Button clicked");


    btn.style.display = "none";


    player.classList.remove("hidden");


    card.classList.add("watching");


    video.play();


};
