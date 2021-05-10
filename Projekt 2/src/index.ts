let clapSound : HTMLAudioElement;
let boomSound : HTMLAudioElement;
let hihatSound : HTMLAudioElement;
let kickSound : HTMLAudioElement;
let openhatSound : HTMLAudioElement;
let rideSound : HTMLAudioElement;
let snareSound : HTMLAudioElement;
let tinkSound : HTMLAudioElement;
let tomSound : HTMLAudioElement;
const btnRecordChannel1 : HTMLButtonElement = document.querySelector("#recordChannel1");

const channel1: any[] = [];
let recordTime: any;
appStart();

function appStart(): void {
    btnRecordChannel1.addEventListener("click", recordChannel1);
    btnRecordChannel1.addEventListener("click", record)
    getAudioTags();
}

function onPlayChannel1(): void{
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function record(ev: MouseEvent) : void{
    console.log(ev.timeStamp)
    recordTime = ev.timeStamp;
    channel1.length = 0;
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

function onKeyDown(ev: KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp - recordTime;
    channel1.push({key,time});
    playSound(key);
    console.log(ev);
    console.log(channel1)
}

function recordChannel1(){
    window.addEventListener("keypress", onKeyDown);
    const btnPlayChannel1 = document.querySelector("#playChannel1");
    btnPlayChannel1.addEventListener("click", onPlayChannel1);
}

function playSound(key: string){
    switch (key){
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