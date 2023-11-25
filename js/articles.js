var name_arr = { "C++的学习之路": "2023/09/13", Java的学习之路: "2022/09/09" };
var content_page_content = document.querySelector("#content-page-content-id");
var now_element = null;
for (val in name_arr) {
  if (now_element == null) {
    now_element = document.createElement("ul");
    now_element.id = name_arr[val].split("/")[0];
    content_page_content.appendChild(now_element);
    now_element.appendChild(document.createElement("div"));
    now_element.lastElementChild.className = "content-page-date-class";
    now_element.lastElementChild.innerHTML = now_element.id;
  } else if (now_element.id != name_arr[val].split("/")[0]) {
    now_element = document.createElement("ul");
    content_page_content.appendChild(now_element);
    now_element.id = name_arr[val].split("/")[0];
    content_page_content.appendChild(now_element);
    now_element.appendChild(document.createElement("div"));
    now_element.lastElementChild.className = "content-page-date-class";
    now_element.lastElementChild.innerHTML = now_element.id;
  }
  now_element.appendChild(document.createElement("div"));
  now_element.lastElementChild.className = "content-page-box-class";
  now_element.lastElementChild.appendChild(document.createElement("li"));
  now_element.lastElementChild.lastElementChild.appendChild(document.createElement("div"));
  now_element.lastElementChild.lastElementChild.lastElementChild.className = "content-page-content-title-class";
  now_element.lastElementChild.lastElementChild.lastElementChild.appendChild(document.createElement("a"));
  now_element.lastElementChild.lastElementChild.lastElementChild.lastElementChild.href = "articles/" + val + ".html";
  now_element.lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = val;
  now_element.lastElementChild.appendChild(document.createElement("div"));
  now_element.lastElementChild.lastElementChild.className = "content-page-content-date-class";
  now_element.lastElementChild.lastElementChild.innerHTML = name_arr[val].split("/")[1] + "/" + name_arr[val].split("/")[2];
}

var content_page_box = document.querySelectorAll(".content-page-box-class");
Array.from(content_page_box).forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.firstElementChild.style.color = "#2a6df4";
    val.firstElementChild.firstElementChild.firstElementChild.style.color = "#2a6df4";
    val.style.borderBottomColor = "#2a6df4";
  });
  val.addEventListener("mouseleave", function () {
    val.firstElementChild.style.color = "#dedede";
    val.firstElementChild.firstElementChild.firstElementChild.style.color = "#000000";
    val.style.borderBottomColor = "#dedede";
  });
  val.addEventListener("mouseup", function () {
    location.href = val.firstElementChild.firstElementChild.firstElementChild.href;
  });
});

if (isMobile()) {
  document.querySelector("#content-id").style.height = "530px";
}
