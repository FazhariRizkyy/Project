function showLoadingScreen() {
  $("body").append('<div id="loadingScreen"></div>');
  $("#loadingScreen").fadeIn();
}

function hideLoadingScreen() {
  $("#loadingScreen").remove();
}

$("#loginButton").click(function () {
  var dbemail = "fazhari@yahoo.co.id";
  var dbpass = "123";
  var email = $("#inputEmail").val();
  var pass = $("#inputPassword").val();

  if (dbemail === email && dbpass === pass) {
    showLoadingScreen(); setTimeout(function () { window.location.href = "dashboard.html"; hideLoadingScreen(); }, 3000);
  } else { alert("Invalid Email, Password, or Captcha"); }
});