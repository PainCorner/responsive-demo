const pixel = document.querySelector(".pixel");

pixel.textContent = window.innerWidth;

window.addEventListener("resize", () => {
  pixel.textContent = window.innerWidth;
});
