function switchVideos() {

    let video1 = document.getElementById("video1");
  
    let video2 = document.getElementById("video2");
  
    let activateButton = document.getElementById("activate-button");

    let resumeButton = document.getElementById("resume-button");
  
    video1.style.display = "none"; 
  
    video2.style.display = "block";

    activateButton.style.display = "none"

    resumeButton.style.display = "block"
  
  }


  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

function showButton() {
    document.getElementById('img-full-1')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}

function showButton2() {
    document.getElementById('img-full-2')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}

function showButton3() {
    document.getElementById('img-full-3')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
     document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible"; 
}

function showButton4() {
    document.getElementById('img-full-4')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";    
}

function showButton5() {
    document.getElementById('img-full-5')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";    
}
function showButton6() {
    document.getElementById('img-full-6')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}
function showButton7() {
    document.getElementById('img-full-7')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}
function showButton8() {
    document.getElementById('img-full-8')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}
function showButton9() {
    document.getElementById('img-full-9')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}
function showButton10() {
    document.getElementById('img-full-10')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}
function showButton11() {
    document.getElementById('img-full-11')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
    document.getElementById('dark')
        .style.visibility = "visible";
}

function hideButton() {
    document.getElementById('img-full-1')
        .style.visibility = "hidden";
    document.getElementById('img-full-2')
        .style.visibility = "hidden";
    document.getElementById('img-full-3')
        .style.visibility = "hidden";
    document.getElementById('img-full-4')
        .style.visibility = "hidden";
    document.getElementById('img-full-5')
        .style.visibility = "hidden";
    document.getElementById('img-full-6')
        .style.visibility = "hidden";
    document.getElementById('img-full-7')
        .style.visibility = "hidden";
    document.getElementById('img-full-8')
        .style.visibility = "hidden";
    document.getElementById('img-full-9')
        .style.visibility = "hidden";
    document.getElementById('img-full-10')
        .style.visibility = "hidden";
    document.getElementById('img-full-11')
        .style.visibility = "hidden";
    document.getElementById('hide-button')
    .style.display = "none";
    document.getElementById('switch')
        .style.display = "block";
    document.getElementById('dark')
        .style.visibility = "hidden";
}
