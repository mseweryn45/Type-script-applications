var clapSound;
var boomSound;
var hihatSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var channel1 = [];
appStart();
function appStart() {
    window.addEventListener("keypress", onKeyDown);
    var btnPlayChannel1 = document.querySelector("#playChannel1");
    btnPlayChannel1.addEventListener("click", onPlayChannel1);
    getAudioTags();
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioTags() {
    clapSound = document.querySelector('[data-audio="clap"]');
    boomSound = document.querySelector('[data-audio="boom"]');
    hihatSound = document.querySelector('[data-audio="hihat"]');
    kickSound = document.querySelector('[data-audio="kick"]');
    openhatSound = document.querySelector('[data-audio="openhat"]');
    snareSound = document.querySelector('[data-audio="snare"]');
    rideSound = document.querySelector('[data-audio="ride"]');
    tinkSound = document.querySelector('[data-audio="tink"]');
    tomSound = document.querySelector('[data-audio="tom"]');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(ev);
}
function playSound(key) {
    switch (key) {
        case "a":
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case "s":
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case "d":
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case "f":
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case "g":
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case "h":
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case "j":
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case "k":
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
}