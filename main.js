window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("header").style.height = "9px";
  } else {
    document.getElementsByClassName("header").style.fontSize = "9px";
  }
}