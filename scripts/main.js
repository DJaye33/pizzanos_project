const navbar = document.querySelector(".navbar");

// Hide navbar on scroll
let prevScrollpos = window.pageYOffset; // begins at 0

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-10.2vh";
  }

  prevScrollpos = currentScrollPos;
};
