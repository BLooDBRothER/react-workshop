const countElem = document.querySelector(".count");
const incrementBtn = document.querySelector(".inc-btn");
const decrementBtn = document.querySelector(".dec-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countElem.textContent = `Count: ${count}`;
});

decrementBtn.addEventListener("click", () => {
    count--;
    countElem.textContent = `Count: ${count}`;
});
