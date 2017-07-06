const subtitles = document.getElementById('captionArea').getElementsByTagName('span');
let now = video.currentTime;

video.addEventListener('timeupdate', function (){
    for (const i = 0, l = subtitles.length; i < l, i++) {
        if (now >= subtitles[i].getAttribute('data-start') &&
           now <= subtitles[i].getAttribute('data-end')) {
            subtitles[i].className = "highlight";
        } else {
            subtitles[i].className = "";
        }
    }
})