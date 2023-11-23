const div_a_blogger = document.getElementById("div-a-blogger");
const div_a_articles = document.getElementById("div-a-articles");
const div_a_classify = document.getElementById("div-a-classify");
const div_a_projects = document.getElementById("div-a-projects");
const div_a_about = document.getElementById("div-a-about");
const div_more = document.getElementById("div-more");

// width
var blogger_width = div_a_blogger.offsetWidth;
var articles_width = div_a_articles.offsetWidth;
var classify_width = div_a_classify.offsetWidth;
var projects_width = div_a_projects.offsetWidth;
var about_width = div_a_about.offsetWidth;
var screen_width = screen.width;
var time_over_hundred = true;

function body_init() {
  browser_resize();
}

function browser_resize() {
  var window_width = window.outerWidth;
  if (!time_over_hundred) return;
  time_over_hundred = false;
  if (window_width / screen_width >= 0.54 && screen_width >= 500) {
    if (div_a_about.style.visibility == "hidden") {
      set_div_topbar_a_visibility("visible");
    }
  } else {
    set_div_topbar_a_visibility("hidden");
  }
  setTimeout(set_time_over_hundred, 100);
}

function set_div_topbar_a_visibility(propority) {
  div_a_articles.style.visibility = propority;
  div_a_classify.style.visibility = propority;
  div_a_projects.style.visibility = propority;
  div_a_about.style.visibility = propority;
  if (propority == "hidden") {
    div_more.style.visibility = "visible";
  } else {
    div_more.style.visibility = "hidden";
  }
}

function set_time_over_hundred() {
  time_over_hundred = true;
}

function div_more_click() {}
