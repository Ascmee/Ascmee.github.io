const topbar_div_more = document.getElementById("topbar-div-more-id");
const topbar_div = document.getElementById("topbar-div-id");
const topbar_div_blogger = document.getElementById("topbar-div-blogger-id");
const topbar_div_img_articles = document.getElementById("topbar-div-img-articles-id");
const topbar_div_img_classification = document.getElementById("topbar-div-img-classification-id");
const topbar_div_img_projects = document.getElementById("topbar-div-img-projects-id");
const topbar_div_img_about = document.getElementById("topbar-div-img-about-id");
const topbar_div_a_articles = document.getElementById("topbar-div-a-articles-id");
const topbar_div_a_classification = document.getElementById("topbar-div-a-classification-id");
const topbar_div_a_projects = document.getElementById("topbar-div-a-projects-id");
const topbar_div_a_about = document.getElementById("topbar-div-a-about-id");
const topbar_div_outer_show = document.getElementById("topbar-div-outer-show-id");
const bottom_a_information = document.getElementById("bottom-a-information-id");
const head_element = document.querySelector("head");
// width
var screen_width = screen.width;
var time_over_hundred = true;

function body_init() {
  if (isMobile()) {
  }
  var window_width = window.outerWidth;
  if (window_width / screen_width >= 0.5 && !isMobile()) {
    topbar_div_blogger.style.left = (window_width / screen_width - 0.5) * 50 + 2 + "%";
    topbar_div.style.visibility = "visible";
    topbar_div_more.style.visibility = "hidden";
  } else {
    topbar_div_blogger.style.left = "2%";
    topbar_div_more.style.visibility = "visible";
    topbar_div.style.right = "100%";
    topbar_div.style.visibility = "hidden";
  }
}

function browser_resize() {
  var window_width = window.outerWidth;
  if (!time_over_hundred) return;
  time_over_hundred = false;
  if (window_width / screen_width >= 0.5 && screen_width >= 500) {
    topbar_div_blogger.style.left = (window_width / screen_width - 0.5) * 50 + 2 + "%";
    topbar_div.style.visibility = "visible";
    topbar_div_more.style.visibility = "hidden";
    topbar_div.style.right = "40%";
    topbar_div.style.top = "0px";
    topbar_div_outer_show.style.visibility = "hidden";
  } else {
    topbar_div_blogger.style.left = "2%";
    topbar_div_more.style.visibility = "visible";
    if (topbar_div_outer_show.style.visibility != "visible") {
      topbar_div.style.visibility = "hidden";
      topbar_div.style.right = "100%";
    }
  }
  setTimeout(set_time_over_hundred, 100);
}

function set_time_over_hundred() {
  time_over_hundred = true;
}

function set_topbar_color(topbar_div_img_id, topbar_div_img_path, topbar_div_a_id, topbar_div_a_color) {
  document.getElementById(topbar_div_img_id).src = topbar_div_img_path;
  document.getElementById(topbar_div_a_id).style.color = topbar_div_a_color;
}

function set_topbar_articles_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-articles-id", rootPath + "image/articles_over.png", "topbar-div-a-articles-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-articles-id", rootPath + "image/articles.png", "topbar-div-a-articles-id", "black");
  }
}

function set_topbar_classification_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-classification-id", rootPath + "image/classification_over.png", "topbar-div-a-classify-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-classification-id", rootPath + "image/classification.png", "topbar-div-a-classify-id", "black");
  }
}

function set_topbar_projects_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-projects-id", rootPath + "image/projects_over.png", "topbar-div-a-projects-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-projects-id", rootPath + "image/projects.png", "topbar-div-a-projects-id", "black");
  }
}

function set_topbar_about_color(over, articles) {
  var rootPath = "";
  if (articles) rootPath = "../";
  if (over) {
    set_topbar_color("topbar-div-img-about-id", rootPath + "image/about_over.png", "topbar-div-a-about-id", "#2a6df4");
  } else {
    set_topbar_color("topbar-div-img-about-id", rootPath + "image/about.png", "topbar-div-a-about-id", "black");
  }
}

function div_more_click() {
  if (topbar_div_outer_show.style.visibility == "visible") {
    topbar_div.style.visibility = "hidden";
    topbar_div.style.right = "40%";
    topbar_div.style.top = "0px";
    topbar_div_outer_show.style.visibility = "hidden";
  } else {
    topbar_div.style.visibility = "visible";
    topbar_div.style.right = "calc(50vw + 9em)";
    topbar_div.style.top = "50px";
    topbar_div_outer_show.style.visibility = "visible";
  }
}

function isMobile() {
  if (navigator.userAgent.match(/Mobi/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
    return true;
  } else return false;
}

window.addEventListener("mousedown", function (e) {
  if (topbar_div_outer_show.style.visibility == "visible" && e.clientY > 100) {
    topbar_div.style.visibility = "hidden";
    topbar_div.style.right = "40%";
    topbar_div.style.top = "0px";
    topbar_div_outer_show.style.visibility = "hidden";
  }
});

bottom_a_information.addEventListener("mouseenter", function () {
  this.style.color = "#2a6df4";
});

bottom_a_information.addEventListener("mouseleave", function () {
  this.style.color = "gray";
});
