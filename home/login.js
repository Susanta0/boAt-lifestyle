// login fast buttom
document.querySelector(".l-g-u").addEventListener("click", tapMe);

function tapMe() {
  var element = document.querySelector(".from_container");
  element.style.display = "block";

  let closeCrose = document.querySelector(".close-buttom");
  closeCrose.addEventListener("click", function () {
    element.style.display = "none";
  });
}

let login10 = document.querySelector(".hii-boat");

login10.addEventListener("click", function () {
  // Freeze the scroll bar
  document.body.classList.add("freeze-scroll");
  // open the form
  let show = document.querySelector(".popup");
  show.style.display = "block";

  let cut = document.querySelector(".close-buttom2");
  // close the form
  cut.addEventListener("click", function () {
    show.style.display = "none";
    // Unfreeze the scroll bar
    document.body.classList.remove("freeze-scroll");
  });

  // second popup display
  let clickOtp = document.querySelector(".send");
  let phoneNumber = document.querySelector(".type");
  clickOtp.addEventListener("click", function () {
    if (phoneNumber.value == 9999999999) {
      phoneNumber.value = "";
      let popup2 = document.querySelector(".second-popup");
      popup2.style.display = "block";
      show.style.display = "none";
    }

    // cut otp input form
    let cut2 = document.querySelector(".close-buttom3");
    cut2.addEventListener("click", function () {
      popup2.style.display = "none";
      document.body.classList.remove("freeze-scroll");
    });
  });

  // thard form open
  let step1 = document.querySelector(".continue10");
  let openThard = document.querySelector(".thard-popup");
  let otp = document.querySelector(".fourdigt");
  step1.addEventListener("click", function () {
    if (otp.value == 1234) {
      otp.value = "";
      // let openThard=document.querySelector(".thard-popup");
      openThard.style.display = "block";
      document.querySelector(".second-popup").style.display = "none";
    }
    // thard form close

    let closeEnd = document.querySelector(".close-button4");
    closeEnd.addEventListener("click", function () {
      openThard.style.display = "none";
      document.body.classList.remove("freeze-scroll");
    });
    let s = document.querySelector(".submitHere");
    s.addEventListener("click", function () {
      let userFullName = document.querySelector(".type123");
      let userEmail = document.querySelector(".typeEmailHere");

      if (userFullName.value && userEmail.value) {
        userFullName.value = "";
        userEmail.value = "";

        document.body.classList.remove("freeze-scroll");
        openThard.style.display = "none";

        let boat = document.querySelector(".hii");
        boat.innerText = "Hi Susanta";

        let logout = document.querySelector(".from_container>button+.hii-boat");
        logout.innerText = "Logout";
        logout.style.display = "block";
        var element = document.querySelector(".from_container");
        element.style.display = "none";

        let loginclose = document.querySelector("#loginClose");
        loginclose.style.display = "none";

        let replace = document.querySelector(".l-g-u>img");
        replace.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhq_GGdqQFCvgcJBpqJT31gJKnjDCvQuKJqg&usqp=CAU";
        replace.style.fontsize = "20px";
        replace.style.marginTop = "5px";
      }
    });
  });
});

let logout = document.querySelector(".from_container>button+.hii-boat");
logout.addEventListener("click", function () {
  location.reload();
});

// website up scrol button

document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.querySelector(".scroll-to-top");

  window.onscroll = function () {
    scrollFunction();
  };

  scrollButton.addEventListener("click", function () {
    scrollToTop();
  });

  function scrollFunction() {
    if (
      document.body.scrollTop > 6000 ||
      document.documentElement.scrollTop > 6000
    ) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }

  function scrollToTop() {
    var scrollToTopElement =
      document.scrollingElement || document.documentElement;

    // Scroll to the top smoothly
    scrollToTopElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
