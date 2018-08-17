function quote(){
  var quotes = ["“Anxiety is love’s greatest killer. It makes others feel as you might when a drowning man holds on to you. You want to save him, but you know he will strangle you with his panic.” <p>~Anais Nin</p>",
  "“Anxiety’s like a rocking chair. It gives you something to do, but it doesn’t get you very far.” <p>~Jodi Picoult</p>",
  "“Life is ten percent what you experience and ninety percent how you respond to it.” <p>~Dorothy M. Neddermeyer</p>",
  "“Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.” <p>~Deepak Chopra</p>",
  "“If you trade your authenticity for safety, you may experience the following: anxiety, depression, eating disorders, addiction, rage, blame, resentment, and inexplicable grief.” <p>~Brene Brown</p>",
  "“The largest part of what we call ‘personality’ is determined by how we’ve opted to defend ourselves against anxiety and sadness.” <p>~Alain de Botton</p>",
  "“Smile, breathe, and go slowly.” <p>~Thich Nhat Hanh</p>",
  "“People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.” <p>~Thich Nhat Hanh</p>",
  "“You don’t have to control your thoughts. You just have to stop letting them control you.” <p>~Dan Millman</p>",
  "“If you always do what you’ve always done, you’ll always get what you’ve always got.” <p>~Steven Hayes</p>",
  "“The only thing that could spoil a day was people. People were always the limiters of happiness except for the very few that were as good as spring itself.” <p>~Ernest Hemingway</p>",
  "“People become attached to their burdens sometimes more than the burdens are attached to them.” <p>~George Bernard Shaw</p>",
  "“Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained.” <p>~Arthur Somers Roche</p>",
  "“Nothing diminishes anxiety faster than action.” <p>~Walter Anderson</p>",
  "“Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.” <p>~Charles Spurgeon</p>",
  "“Good humor is a tonic for mind and body. It is the best antidote for anxiety and depression. It is a business asset. It attracts and keeps friends. It lightens human burdens. It is the direct route to serenity and contentment.” <p>~Grenville Kleiser</p>",
  "“People tend to dwell more on negative things than on good things. So the mind then becomes obsessed with negative things, with judgments, guilt and anxiety produced by thoughts about the future and so on.” <p>~Eckhart Tolle</p>",
  "“The other thing is that if you rely solely on medication to manage depression or anxiety, for example, you have done nothing to train the mind, so that when you come off the medication, you are just as vulnerable to a relapse as though you had never taken the medication.” <p>~Daniel Goleman</p>",
  "“You wouldn’t worry so much about what others think of you if you realized how seldom they do.” <p>~Eleanor Roosevelt</p>",
  "“You can’t always control what goes on outside. But you can always control what goes on inside.” <p>~Wayne Dyer</p>",
  "“Nothing can bring you peace but yourself.” <p>~Ralph Waldo Emerson</p>"];
  var quotesLength = quotes.length;
  for (var i = 0; i < quotesLength; i++){
    var randomItem = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById("quote").innerHTML = randomItem;
  }
}
