const input = document.querySelector("input");
const commentBtn = document.querySelector(".comment-btn");
const commentWrapper = document.querySelector(".comment-wrapper")

commentBtn.addEventListener("click", () => {
    const inputValue = input.value;
    commentWrapper.innerHTML += `<div>${inputValue}</div>`;
})


// <img src onerror="alert('hi')">
