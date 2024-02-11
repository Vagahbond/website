// Get the video
const video = document.getElementById("bg-video");

window.onload = () => {
  if (video.paused) {
    video.play();
  }
};
