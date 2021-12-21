const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}


$pause.addEventListener('click', handlePause);

function handlePause(){
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}


$backward.addEventListener('click', handleBackward);

function handleBackward(){
    $video.currentTime -= 10;
}


$forward.addEventListener('click', handleForward);

function handleForward(){
    $video.currentTime += 10;
}

$video.addEventListener('loadedmetadata', handleLoaded);

$progress = document.querySelector('#progress');

function handleLoaded(){
    $progress.max = $video.duration;
}

$video.addEventListener('timeupdate', handleTimeUpdate);

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput(){
    $video.currentTime = $progress.value;
}