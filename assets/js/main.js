$(document).foundation();

$(document).ready(function () {
  
  $("body").fadeIn(1000);  


  $("#about").on("click", function () {
    $("body").fadeOut(1000, function () {
      document.location.assign("./about.html")
    });
  });
  $("#home").on("click", function () {
    $("body").fadeOut(1000, function () {
      document.location.assign("./index.html")
    });
  });
  $("#portfolio").on("click", function () {
    $("body").fadeOut(1000, function () {
      document.location.assign("./portfolio.html")
    });
  });
});