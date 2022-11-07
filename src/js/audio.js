
function toggleSound() {
    const allAudio = document.querySelectorAll('audio');
    const audioElem = document.getElementById('audio');
    if (audioElem.paused) {
for(i=0; i < allAudio.length; i++) {
    allAudio[i].pause();
}
audioElem.play();
    } else {
audioElem.pause();
    }
}

function toggleSound2() {
    const allAudio = document.querySelectorAll('audio');
    const audioElem = document.getElementById('audio_en');
    if (audioElem.paused) {
for(i=0; i < allAudio.length; i++) {
    allAudio[i].pause();
    }
audioElem.play();
    } else {
audioElem.pause();
    }
}

function toggleSound3() {
    const allAudio = document.querySelectorAll('audio');
    const audioElem = document.getElementById('audio_jp');
    if (audioElem.paused) {
for(i=0; i < allAudio.length; i++) {
    allAudio[i].pause();
}
audioElem.play();
    } else {
audioElem.pause();
    }
}

function toggleSound4() {
    const allAudio = document.querySelectorAll('audio');
    const audioElem = document.getElementById('audio_cn');
    if (audioElem.paused) {
for(i=0; i < allAudio.length; i++) {
    allAudio[i].pause();
}
audioElem.play();
    } else {
audioElem.pause();
    }
}
