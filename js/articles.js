var name_arr = [
  { date: "2022/01/09/09:31:33", title: "C++的学习之路2" },
  { date: "2022/07/12/09:31:33", title: "C++的学习之路6" },
  { date: "2022/02/12/09:31:33", title: "C++的学习之路4" },
  { date: "2023/01/09/09:31:33", title: "C++的学习之路1" },
  { date: "2023/01/09/09:31:34", title: "Template" },
];

name_arr.sort(function (val1, val2) {
  var result = val2.date.split("/")[0] - val1.date.split("/")[0];
  if (result != 0) return result;
  result = val2.date.split("/")[1] - val1.date.split("/")[1];
  if (result != 0) return result;
  result = val2.date.split("/")[2] - val1.date.split("/")[2];
  if (result != 0) return result;
  result = val2.date.split("/")[3].split(":")[0] - val1.date.split("/")[3].split(":")[0];
  if (result != 0) return result;
  result = val2.date.split("/")[3].split(":")[1] - val1.date.split("/")[3].split(":")[1];
  if (result != 0) return result;
  return val2.date.split("/")[3].split(":")[2] - val1.date.split("/")[3].split(":")[2];
});

var content_page_content = document.querySelector("#content-page-content-id");
var now_element = null;
for (var i = 0; i < name_arr.length; i++) {
  if (now_element == null) {
    now_element = document.createElement("ul");
    now_element.id = name_arr[i].date.split("/")[0];
    content_page_content.appendChild(now_element);
    now_element.appendChild(document.createElement("div"));
    now_element.lastElementChild.className = "content-page-date-class";
    now_element.lastElementChild.innerHTML = now_element.id;
  } else if (now_element.id != name_arr[i].date.split("/")[0]) {
    now_element = document.createElement("ul");
    content_page_content.appendChild(now_element);
    now_element.id = name_arr[i].date.split("/")[0];
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
  now_element.lastElementChild.lastElementChild.lastElementChild.lastElementChild.href = "articles/" + name_arr[i].title + ".html";
  now_element.lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = name_arr[i].title;
  now_element.lastElementChild.appendChild(document.createElement("div"));
  now_element.lastElementChild.lastElementChild.className = "content-page-content-date-class";
  now_element.lastElementChild.lastElementChild.innerHTML = name_arr[i].date.split("/")[1] + "/" + name_arr[i].date.split("/")[2];
}

var content_page_box = document.querySelectorAll(".content-page-box-class");
Array.from(content_page_box).forEach(function (val) {
  val.addEventListener("mouseup", function () {
    location.href = val.firstElementChild.firstElementChild.firstElementChild.href;
  });
});

if (isMobile()) {
  document.querySelector("#content-id").style.height = "530px";
}
