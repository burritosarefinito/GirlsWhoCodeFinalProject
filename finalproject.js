function send(){
  var user = document.getElementById("answer").value;
  document.getElementById("anon").innerHTML = user;
  document.getElementById("response").style.display = "block";
  respond(user);
}

function respond(response){
  var input = response;
  var yes = ["yes","yeah","ye","yup","ya","yah","yas","yea"];
  var no = ["no","nah","na","nope","noo"];
  if (yes.includes(input.toLowerCase())) {
    input = "";
    output.innerHTML = "<h1> Really, what's wrong?</h1>";
    document.getElementById("input").value = "";
    input = document.getElementById("input").value;
    output.innerHTML = "<h1> Would you like to tell me more about it?</h1>";
      if (yes.includes(input.toLowerCase())) {
        output.innerHTML = "<h1> I'm here to listen.</h1>";
        document.getElementById("input").value = "";
      } else if (no.includes(input.toLowerCase())){
          output.innerHTML= "<h1> Well if you need me, I'm always here.";
          document.getElementById("input").value = "";
      }
  } else if (no.includes(input.toLowerCase())){
    output.innerHTML = "<h1> That's good to hear! </h1>";
    document.getElementById("input").value = "";
    }
}
