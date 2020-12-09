function show(shown, hidden) {
  var page2 = document.getElementById(shown);
  var page1 = document.getElementById(hidden);
  var blob = document.getElementById("blob");
  blob.style.transform = "scale(10,10)";

  setTimeout(() => {
    page1.style.display = "none";
    blob.style.transition = "all 1s";
    blob.style.transform = "scale(.2)";
    page2.style.display = "block";

    setTimeout(() => {
      blob.style.display = "none";
    }, 1000);
  }, 1000);

  return false;
}

var nav;
document.addEventListener("DOMContentLoaded", function () {
  nav = document.getElementById("nav");
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 0) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});
