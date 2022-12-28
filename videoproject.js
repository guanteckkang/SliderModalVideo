let video = document.getElementById("video");
let playpauses = document.getElementById("playpause");
let mute = document.getElementById("mute");

playpauses.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playpauses.innerHTML = "Pause";
  } else {
    video.pause();
    playpauses.innerHTML = "Play";
  }
});
mute.addEventListener("click", () => {
  video.muted = !video.muted;
});
