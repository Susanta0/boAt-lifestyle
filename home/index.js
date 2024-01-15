// scroll bar start

let scrolImage = [
  "https://www.boat-lifestyle.com/cdn/shop/files/Personalization_Desk_1440x.png?v=1698928779",
  "https://www.boat-lifestyle.com/cdn/shop/files/Desktop_3416514a-87f6-4562-bde3-420528f42d9f_1440x.jpg?v=1696856402",
  "https://www.boat-lifestyle.com/cdn/shop/files/LNT_WEB_1440x.jpg?v=1698230264",
  "https://www.boat-lifestyle.com/cdn/shop/files/1440x602_39694f8e-f18d-45d4-992a-253308275921_1440x.jpg?v=1698931152",
  "https://www.boat-lifestyle.com/cdn/shop/files/Crest-banner-dark-desktop_1600x.png?v=1699269025",
  "https://www.boat-lifestyle.com/cdn/shop/files/Rockerz_110_Homepage_banner_WEB_1440x.jpg?v=1699590221",
];
let radioButtons = document.querySelectorAll('input[name="slider"]');
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let image = document.querySelector("#dis");
let currimg = 0;
function showImage() {
  image.setAttribute("src", scrolImage[currimg]);
}
function nextImage() {
  currimg++;
  if (currimg >= scrolImage.length) {
    currimg = 0;
  }
  updateRadioButtons();
  showImage();
}
function prevImage() {
  currimg--;
  if (currimg < 0) {
    currimg = scrolImage.length - 1;
  }
  updateRadioButtons();
  showImage();
}
function updateRadioButtons() {
  radioButtons.forEach((radio, index) => {
    radio.checked = index === currimg;
  });
}
next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);
// scrool bar end

// Auto slide every 3 seconds
setInterval(nextImage, 3000);
// Add event listeners for radio buttons
radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    currimg = index;
    showImage();
  });
});
// auto video js start
const video = document.querySelectorAll("#videoMp4-1");
video.forEach((video) => {
  video.onmouseover = function () {
    video.play();
  };
  video.onmouseout = function () {
    video.pause();
  };
})(
  // auto video js end

  // timer start
  (function () {
    const second = 1000;
    minute = second * 60;
    hour = minute * 60;
    day = hour * 24;

    let end = "Dec 31, 2023 00:00:00";
    countdown = new Date(end).getTime();
    x = setInterval(function () {
      let now = new Date().getTime();
      distance = countdown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("second").innerText = Math.floor(
          (distance % minute) / second
        ));
    }, 0);
  })()
);

// timer end
function toggleNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}



