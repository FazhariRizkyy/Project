$(document).ready(function () {
  function generateCaptcha() {
    var firstNumber = Math.floor(Math.random() * 10);
    var secondNumber = Math.floor(Math.random() * 10);
    $("#firstNumber").text(firstNumber);
    $("#secondNumber").text(secondNumber);
  }

  function showLoadingScreen() {
    $("body").append('<div id="loadingScreen"></div>');
    $("#loadingScreen").fadeIn();
  }

  function hideLoadingScreen() {
    $("#loadingScreen").remove();
  }

  $("#loginButton").click(function () {
    var dbemail = "admin@mail.com";
    var dbpass = "admin";
    var email = $("#inputEmail").val();
    var pass = $("#inputPassword").val();
    var captchaResult = parseInt($("#captchaResult").val());
    var firstNumber = parseInt($("#firstNumber").text());
    var secondNumber = parseInt($("#secondNumber").text());

    if ( dbemail === email && dbpass === pass && captchaResult === firstNumber + secondNumber ) {
      showLoadingScreen(); 
      setTimeout(function () {
        window.location.href = "/CV.html";
        hideLoadingScreen(); 
      }, 3000);
    } else {
      alert("Invalid Email, Password, or Captcha");
    }
  });

  $("#captchaResult").focus();
  generateCaptcha();
});