var name_arr = [
  { date: "2023/09/13/09:31:33", title: "贪吃蛇——Java实现" },
  { date: "2023/09/09/09:31:33", title: "2048——C++实现" },
];
name_arr.sort(function (val1, val2) {
  var result = val1.date.split("/")[0] - val1.date.split("/")[0];
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

var content_page = document.querySelector("#content-page-id");

for (var i = 0; i < name_arr.length; i++) {
  var now_element = document.createElement("div");
  now_element.className = "content-page-item-class";
  content_page.appendChild(now_element);
  now_element.appendChild(document.createElement("a"));
  now_element.lastElementChild.className = "content-page-item-a-class";
  now_element.lastElementChild.href = "../" + name_arr[i].title + ".html";
  now_element.lastElementChild.textContent = name_arr[i].title;
  now_element.appendChild(document.createElement("span"));
  now_element.lastElementChild.className = "content-page-item-span-class";
  now_element.lastElementChild.textContent =
    name_arr[i].date.split("/")[0] + "/" + name_arr[i].date.split("/")[1] + "/" + name_arr[i].date.split("/")[2];
}

if (isMobile()) {
  document.querySelector("#content-id").style.height = "530px";
}
