var promise = document.querySelector("#bg-sound").play();

if (promise !== undefined) {
  promise
    .then((_) => {
      // Autoplay started!
      console.log("Autoplay started!");
    })
    .catch((error) => {
      console.log("Autoplay was prevented");
      // Autoplay was prevented.
      // Show a "Play" button so that user can start playback.
    });
}
