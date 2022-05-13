document.querySelector("h2").style.color = "white";
resizeColor();

window.addEventListener("resize", resizeColor);

function resizeColor() {
  if (window.innerWidth > 800) {
    document.body.style.backgroundColor = "#fcba03";
  } else if (window.innerWidth <= 800 && window.innerWidth > 500) {
    document.body.style.backgroundColor = "#e703fc";
  } else if (window.innerWidth <= 500) {
    document.body.style.backgroundColor = "#03bafc";
  }
}
