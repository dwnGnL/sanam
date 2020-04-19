$(document).ready(function () {
  $("#header").on("click", ".anchor", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 700);
  });
});