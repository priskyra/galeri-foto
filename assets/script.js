const galeriRight = document.querySelector(".galeri-right");
const big = document.querySelector(".big");
const smalls = document.querySelectorAll(".small");

galeriRight.addEventListener("click", function (e) {
  // cek apakah yang di klik small
  if (e.target.className == "small") {
    big.src = e.target.src;
    big.classList.add("fade");
    setTimeout(function () {
      big.classList.remove("fade");
    }, 500);

    smalls.forEach(function (small) {
      if (small.classList.contains("active")) {
        small.classList.remove("active");
      }

      //   small.className = "small";
    });

    e.target.classList.add("active");
  }
});
