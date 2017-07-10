function myFunction() {
    //display current position of video
    document.getElementById('position').innerHTML = vid.currentTime;
}

//Get video element
var vid = document.getElementById('myVideo');

//Assign ontimeupdate event to video element and execute function if playback position changes
vid.ontimeupdate = function(){myFunction()};


/*

const subtitles = document.getElementById('captionArea').getElementsByTagName('span');
let now = video.currentTime;

video.addEventListener('timeupdate', function () {
    for (const i = 0, l = subtitles.length; i < l, i++) {
        if (now >= subtitles[i].getAttribute('data-start') &&
            now <= subtitles[i].getAttribute('data-end')) {
            subtitles[i].className = "highlight";
        } else {
            subtitles[i].className = "";
        }
    }
})
*/

function seek() {
    vid.currentTime = this.getAttribute('data-start');
    if(vid.paused) { video.play(); }
};

track.addEventListener('load', function() {
    var c = vid.textTracks[0].cues;
    for (var i=0; i<c.length; i++) {
        var s = document.createElement("span");
        s.innerHTML = c[i].text;
        s.setAttribute('data-start', c[i].startTime);
        s.addEventListener('click', seek);
    }
});