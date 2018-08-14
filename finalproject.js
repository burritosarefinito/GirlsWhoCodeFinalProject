function send() {
  var response = document.getElementById("reply").value;
  document.getElementById("response").style.display.block;
  document.getElementById("anon").innerHTML = response
}
