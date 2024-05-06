function navigation(id) {
  if (id === "profile") {
    document.getElementById("profile").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("contac me").style.display = "none";
  } else if (id === "education") {
    document.getElementById("education").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("contac me").style.display = "none";
  } else if (id === "experience") {
    document.getElementById("experience").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("contac me").style.display = "none";
  } else if (id === "skills") {
    document.getElementById("skills").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("contac me").style.display = "none";
  } else if (id === "contac me") {
    document.getElementById("contac me").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
  }
  document.getElementById('logoutButton').addEventListener('click',function(){
    window.location.href = '/Travel.html';
    alert('Anda telah logout.');
  })
}
