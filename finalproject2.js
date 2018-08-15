var question = '<h1> Hello, is anything bothering you today? </h1>';
var output = document.getElementById('output');
var yes = ["yes","yeah","ye","yup","ya","yah","yas","yea"];
var no = ["no","nah","na","nope","noo"];
output.innerHTML = question;

function bot() {
  var input = document.getElementById("input").value;
  
  if (yes.includes(input.toLowerCase())) {
    input ="";
    output.innerHTML = "<h1> Really, what's wrong?</h1>";
    pause(2000);
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
  // // if (questionNum == 0) {
  // //   output.innerHTML = '<h1> Why do you feel that way? </h1>';
  // //   document.getElementById("input").value = "";
  // //   question = '<h1> Do you want to talk about it? </h1>';
  // //   setTimeout(timedQuestion, 2000);
  // // }
  // else if (questionNum==1) {
  //   output.innerHTML = '<h1> Do you want to keep talking about it? </h1>';
  //   document.getElementById("input").value = "";
  //   question = "<h1>What's wrong?</h1>"
  //   setTimeout(timedQuestion, 2000);
  // }
//
// function timedQuestion() {
//   output.innerHTML = question;
//   }

$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();
    // questionNum++;
  }
});

function pause(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            break;
          }
        }
