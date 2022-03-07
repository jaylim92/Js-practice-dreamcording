const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const coord = document.querySelector(".coord");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translate(${x}px)`;
    horizontal.style.transform = `translate(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    coord.innerHTML = `x: ${x}, y: ${y}`;
    coord.style.transform = `translate(${x}px, ${y}px)`;
  });
});
