var speakBye = "Good Bye";


var byeSpeaker = new Object();
byeSpeaker.speak = function speak(name) {
    console.log(speakBye + " " + name);
}