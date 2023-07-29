const audio = document.querySelector("#bg-sound");
navigator.mediaDevices.getUserMedia({ audio: true });

window.addEventListener("load", playMusic);

async function playMusic() {
  try {
    await audio.play();
  } catch (error) {
    console.log(error);
  }
}
