document.addEventListener("DOMContentLoaded", () => {

  /* ========= 1. Dialog ========= */
  const dialog = document.getElementById("myDialog");
  document.getElementById("openDialog").onclick = () => dialog.showModal();
  document.getElementById("closeDialog").onclick = () => dialog.close();

  /* ========= 2. Canvas ========= */
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "crimson";
  ctx.fillRect(50, 50, 150, 100);

  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Hello Canvas", 70, 40);

  /* ========= 3. Web Animations API ========= */
  const box = document.getElementById("box");

  const animation = box.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(200px)" }
    ],
    {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate"
    }
  );

  document.getElementById("play").onclick = () => animation.play();
  document.getElementById("pause").onclick = () => animation.pause();

  /* ========= 4. requestAnimationFrame ========= */
  const movingText = document.getElementById("movingText");
  let position = 0;

  function move() {
    movingText.style.left = position + "px";
    position += 2;

    if (position > window.innerWidth) {
      position = -movingText.offsetWidth;
    }

    requestAnimationFrame(move);
  }

  requestAnimationFrame(move);

  /* ========= 5. setTimeout / setInterval ========= */
  document.getElementById("startTimer").onclick = () => {
    let count = 0;
    const id = setInterval(() => {
      console.log("Timer:", ++count);
      if (count === 5) clearInterval(id);
    }, 1000);
  };

  /* ========= 6. classList ========= */
  const menu = document.getElementById("menu");
  document.getElementById("toggleMenu").onclick = () => {
    menu.classList.toggle("show");
  };

});

