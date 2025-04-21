function moveRandomEl(elm) {
  elm.style.position = "absolute";
  // Get the width and height of the viewport
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Set the top and left to random positions within the full viewport
  elm.style.top = Math.floor(Math.random() * (viewportHeight - elm.offsetHeight)) + "px";
  elm.style.left = Math.floor(Math.random() * (viewportWidth - elm.offsetWidth)) + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
