$(document).ready(function () {
  $("#openPopup").click(function () {
    $("#popup").fadeIn();
  });

  $(".close").click(function () {
    $("#popup").fadeOut();
  });

  $(window).click(function (event) {
    if ($(event.target).is("#popup")) {
      $("#popup").fadeOut();
    }
  });
});
