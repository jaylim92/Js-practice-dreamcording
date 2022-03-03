const target = document.querySelector(".target");
const coord = document.querySelector(".coord");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  vertical.style.left = mouseX + `px`;
  horizontal.style.top = mouseY + `px`;
  target.style.left = mouseX + `px`;
  target.style.top = mouseY + `px`;
  coord.style.left = mouseX + `px`;
  coord.style.top = mouseY + `px`;
  coord.innerText = `x: ${mouseX}, y: ${mouseY}`;
});
