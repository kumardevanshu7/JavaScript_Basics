// Prompt Box : JS File

let btn = document.querySelector("button");
btn.addEventListener("click", inputMsg);

function inputMsg() {
  let msg = prompt("Enter the name: ");
  btn.textContent = "Name: " + msg;
}
