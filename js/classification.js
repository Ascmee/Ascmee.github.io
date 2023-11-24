let articles = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var index = 0;
var content_div_a = document.querySelectorAll(".content-div-a-class");
Array.from(content_div_a).forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.style.color = "#2a6df4";
  });

  val.addEventListener("mouseleave", function () {
    val.style.color = "black";
  });
  if (isMobile()) val.style.fontSize = 18 + articles[index] / 5 + "px";
  else val.style.fontSize = 30 + articles[index] / 2.5 + "px";
  val.innerHTML += "(" + articles[index++] + ")";
});

if (isMobile()) {
  document.querySelector("#content-div-java-id").style.left = "50%";
  document.querySelector("#content-div-java-id").style.top = "0px";
  document.querySelector("#content-div-cocpp-id").style.left = "22%";
  document.querySelector("#content-div-cocpp-id").style.top = "60px";
  document.querySelector("#content-div-asm-id").style.left = "80%";
  document.querySelector("#content-div-asm-id").style.top = "90px";
  document.querySelector("#content-div-python-id").style.left = "67%";
  document.querySelector("#content-div-python-id").style.top = "140px";
  document.querySelector("#content-div-web-id").style.left = "41%";
  document.querySelector("#content-div-web-id").style.top = "190px";
  document.querySelector("#content-div-ds-id").style.left = "33%";
  document.querySelector("#content-div-ds-id").style.top = "260px";
  document.querySelector("#content-div-cs-id").style.left = "67%";
  document.querySelector("#content-div-cs-id").style.top = "290px";
  document.querySelector("#content-div-linux-id").style.left = "82%";
  document.querySelector("#content-div-linux-id").style.top = "340px";
  document.querySelector("#content-div-other-id").style.left = "43%";
  document.querySelector("#content-div-other-id").style.top = "360px";
  document.querySelector("#content-id").style.height = "530px";
}
