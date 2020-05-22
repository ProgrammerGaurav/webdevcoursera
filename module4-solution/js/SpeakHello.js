var speakhello = "Hello";


var helloSpeaker = new Object();
helloSpeaker.speak = function speak(name) {
    console.log(speakhello + " " + name);
}