var bother = false;
var wrong = false;
var talk = false;
var understanding = false;
var reminder = false;

document.getElementById("answer")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});

function send(){
  var user = document.getElementById("answer").value;
  var div = document.createElement("div");
  document.getElementById("chatlog").appendChild(div);
  div.setAttribute("class", "chat response");
  var paragraph = document.createElement("p");
  var text = document.createTextNode(user);
  paragraph.setAttribute("class", "message user");
  paragraph.appendChild(text);
  div.appendChild(paragraph);
  var scroll=document.getElementById("chatlog");
  scroll.scrollTop = scroll.scrollHeight;
  if(reminder){
    friendlyReminder(user);
 } else if(understanding){
    respond5(user);
  } else if(talk){
    respond4(user);
  } else if(wrong){
    respond3(user);
  } else if(bother){
    respond2(user);
  } else {
    respond(user);
  }
}

function botAnswer(computer){
  var bot = document.createElement("bot");
  document.getElementById("chatlog").appendChild(bot);
  bot.setAttribute("class", "chat");
  var para = document.createElement("p");
  var txt = document.createTextNode(computer);
  para.setAttribute("class", "message bot");
  para.appendChild(txt);
  bot.appendChild(para);
  var scroll=document.getElementById("chatlog");
  scroll.scrollTop = scroll.scrollHeight;
}

function respond(response){
  var input = response;
  var yes = ["yes","yeah","ye","yup","ya","yah","yas","yea"];
  var no = ["no","nah","na","nope","noo"];
  if (yes.includes(input.toLowerCase())) {
    bother = true;
    input = "";
    document.getElementById("answer").value = "";
    var computer = "Really? What's wrong?"
    setTimeout(botAnswer, 1000, computer);
    } else if (no.includes(input.toLowerCase())){
      bother = false;
      input = "";
      document.getElementById("answer").value = "";
      var computer = "That's good to hear!";
      understanding = true;
      setTimeout(botAnswer, 1000, computer);
      var computer = "Do you want to keep talking?";
      setTimeout(botAnswer, 2000, computer);
    }
  }

function respond2(response){
  var input = response;
  if (document.getElementById("answer").value !== ""){
    wrong = true;
    input = "";
    document.getElementById("answer").value = "";
    var computer = "Would you like to tell me more about it?"
    setTimeout(botAnswer, 1000, computer);
    }
  }

function respond3(response){
  var input = response;
  var yes = ["yes","yeah","ye","yup","ya","yah","yas","yea","sure","ok","okay","mhm","fine","alright"];
  var no = ["no","nah","na","nope","noo","never","not at all","not really"];
  if (yes.includes(input.toLowerCase())) {
    talk = true;
    input = "";
    document.getElementById("answer").value = "";
    var computer = "I'm here to listen.";
    setTimeout(botAnswer, 1000, computer);
  } else if (no.includes(input.toLowerCase())) {
    talk = false;
    input = "";
    document.getElementById("answer").value = "";
    var computer = "Well, if you need me, I'm always here."
    reminder = true;
    setTimeout(botAnswer, 1000, computer);
  }
}

function respond4(response){
  var input = response;
  if (document.getElementById("answer").value !== ""){
    understanding = true;
    input = "";
    document.getElementById("answer").value = "";
    var computer = "I understand how you feel, but remember everything will be okay :) ";
    setTimeout(botAnswer, 1000, computer);
    understanding = true;
    var computer = "Do you want to keep talking?";
    setTimeout(botAnswer, 2000, computer);
  }
}

function respond5(response){
  var input = response;
  var yes = ["yes","yeah","ye","yup","ya","yah","yas","yea","sure","ok","okay","mhm","fine","alright"];
  var no = ["no","nah","na","nope","noo","never","not at all","not really"];
  if (yes.includes(input.toLowerCase())) {
    reminder = true;
    input = "";
    document.getElementById("answer").value = "";
    var computer = "Great, let's talk about whatever you want.";
    setTimeout(botAnswer, 1000, computer);
  } else if (no.includes(input.toLowerCase())) {
    reminder = true;
    input = "";
    document.getElementById("answer").value = "";
    var computer = "Alright, thanks for taking your time out to talk to me."
    setTimeout(botAnswer, 1000, computer);
  }
}

function friendlyReminder(response){
  var input = response;
  if (document.getElementById("answer").value !== ""){
    input = "";
    document.getElementById("answer").value = "";
    var computer = "It was nice talking to you. Friendly reminder: you're never alone:)";
    setTimeout(botAnswer, 1000, computer);
  }
}
