const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

var direction;

leftArrow.addEventListener("click", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }

  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(20%)";
});

rightArrow.addEventListener("click", function () {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-20%)";
});
slider.addEventListener("transitionend", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(function () {
    slider.style.transition = "all 0.5sc";
  });
});

// box slider start
document.addEventListener("DOMContentLoaded", function () {
  // Show the first card box by default
  showCardBox(1);
});

function showCardBox(boxNumber) {
  // Hide all card boxes
  const cardBoxes = document.querySelectorAll(".card-box");
  cardBoxes.forEach((box) => {
    box.style.display = "none";
  });

  // Show the selected card box
  const selectedCardBox = document.getElementById(`card-box-${boxNumber}`);
  selectedCardBox.style.display = "block";
}

function onButtonClick(boxNumber) {
  showCardBox(boxNumber);
}
