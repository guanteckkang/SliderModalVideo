let container = document.querySelector(".slider-container"); //picture container
let button = document.querySelector(".button-container"); //button container
let imagecount = document.querySelector(".image-count"); //image
let next = document.querySelector(".next"); //next button
let prev = document.querySelector(".prev"); //prev button
let arr = [
  "img/mihile.webp",
  "img/bw.webp",
  "img/dw.webp",
  "img/nw.webp",
  "img/tb.webp",
  "img/wa.webp",
];
let num = 0;

function render() {
  container.innerHTML = `
  <div class="image-count">
  <img class="image" src="${arr[num]}" alt="no image">
  <p>${num + 1}</p>
  <div>
  `;
}
function nextprev() {
  if (num === 0) {
    prev.style.display = "none";
  } else if (num > 0 && num < 5) {
    next.style.display = "inline-block";
    prev.style.display = "inline-block";
  } else if (num === 5) {
    next.style.display = "none";
  }
}
function plus() {
  num++;
  nextprev();
  render();
}
function minus() {
  num--;
  nextprev();
  render();
}

nextprev();
render();
