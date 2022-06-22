
var logmodal = document.getElementById("warmlog");

var span = document.getElementsByClassName("close")[0];

function giris() {
  logmodal.style.display = "block";
  
span.onclick = function() {
  logmodal.style.display = "none";
}
  window.onclick = function(event) {
    if (event.target == logmodal) {
      logmodal.style.display = "none";
    }
  }
}