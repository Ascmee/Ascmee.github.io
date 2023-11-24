const enter_color = "#2a6df4";
var doms = document.querySelectorAll(".content-a-class");
Array.from(doms).forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    this.style.color = enter_color;
  });
  val.addEventListener("mouseleave", function () {
    this.style.color = "black";
  });
});

if (isMobile()) {
  document.getElementById("content-about-me-id").style.fontSize = "25px";
  document.getElementById("content-time-id").style.fontSize = "14px";
  document.getElementById("content-time-id").style.top = "70px";
  document.getElementById("content-about-me-content-id").style.fontSize = "18px";
  document.getElementById("content-about-me-content-id").style.top = "100px";
  document.querySelector("#content-id").style.height = "530px";
}
