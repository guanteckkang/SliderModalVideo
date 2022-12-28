let opened = document.querySelector("#open"); //button open
let closed = document.querySelector("#close"); //button close
let modal = document.querySelector("#modal");
let container = document.querySelector(".container");

opened.addEventListener("click", () => {
  container.classList.add("container2");
  modal.style.display = "inline-block";
});
closed.addEventListener("click", () => {
  container.classList.remove("container2");
  modal.style.display = "none";
});
