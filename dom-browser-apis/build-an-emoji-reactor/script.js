function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  
  if (currCount === 10) return;
  
  currCount++;
  
  countEl.textContent = `${currCount}/10`;
}

// Select all buttons with class "emoji-btn"
const btns = document.querySelectorAll(".emoji-btn");

// Iterate over each button and add the click event listener
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    updateCount(btn);
  });
});
