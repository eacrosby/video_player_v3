window.onload = function() {
    // get video element
    const video = document.getElementsByTagName("player-container")[0];
    const transcript = document.getElementById("transcriptBox");
    const transText = document.getElementById("transcriptText");
    let current = -1;
    
    // register events for text clicks
    let cues = document.getElementsByClassName("cue");
    for (var i=0; i<cues.length; i++) {
        cues[i].addEventListener('click', function(evt) {
            var start = parseFloat(this.getAttribute("data-time"));
            video.currentTime = start;
            video.play();
        }, false);
    }
    
    // scroll to text as video time changes
    video.addEventListener("timeupdate", function(evt) {
        if (video.paused || video.ended) {
            return;
        }
        
    // scroll to currently playing time
        for (var i=0; i<cues.length; i++) {
            var cueTime = cues[i].getAttribute("data-time");
            if (cues[i].className.indexOf("current") == -1 &&
               video.currentTime >= parseFloat(cueTime) &&
               video.currentTime < parseFloat(cueTime)) {
                trans_text.scrollTop = cues[i].offsetTop - trans_text.offsetTop;
                if (current >= 0) {
                    cues[current].classList.remove("current");
                }
                cues[i].className += " current";
                current = i;
            }
        }
    })
}, false);

/* 

Testing jwPlayer 

*/
//
//const captions = [];
//const caption = -1;
//const matches = [];
//const query = "";
//const cycle = -1;
//
//const transcript = document.getElementById('transcript');
//const match = document.getElementById('match');
//
//
//// Setup JW Player
//jwplayer("player").setup({
//    file: 'http://content.jwplatform.com/videos/2keHMzPw-XnImRBCl.mp4',
//    tracks: [
//        { file: "https://content.jwplatform.com/tracks/6mLdyQp4.vtt", kind: "captions" },
//    ]
//    displaytitle: false,
//    width: 1280,
//    height: 720,
//});
//
//// Load chapters / captions
//jwplayer().on('ready', function(){
//    var r = new XMLHttpRequest();
//    r.onreadystatechange = function() {
//        if (r.readyState == 4 && r.status == 200) {
//            var t = r.responseText.split("\n\n");
//            t.shift();
//            for(var i=0; i<t.length; i++) {
//                var c = parse(t[i]);
//                chapters.push(c);
//            }
//            loadcaptions();
//        }
//    };
//    r.open('GET', '../mockups/captions.vtt', true);
//    r.send();
//});
//function loadCaptions() {
//    var r = new XMLHttpRequest();
//    r.onreadystatechange = function() {
//        if (r.readyState == 4 && r.status ==200) {
//            var t = r.responseText.split("\n\n");
//            t.shift();
//            var h = "<p>";
//            var s = 0;
//            for(var i=0; i<t.length; i++) {
//                var c = parse(t[i]);
//                if(s < chapters.length && c.begin > chapters[s].begin) {
//                    h += "</p><h4>" + chapters[s].text + "</h4><p>";
//                    s++;
//                }
//                h += "<span id='caption"+i"'>"+c.text+"</span>";
//                captions.push(c);
//            }
//            transcript.innerHTML = h + "</p>";
//        }
//    };
//    r.open('GET', '../mockups/captions.vtt', true);
//    r.send();
//};
//function parse(d) {
//    var a = d.split("\n");
//    var i = a[1].indexOf(' --> ');
//    var t = a[2];
//    if (a[3]) { t += " " + a[3]; }
//    t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//    return {
//        begin: seconds(a[1].substr(0,i));
//        btext: a[1].substr(3, i-7),
//        end: seconds(a[1].substr(i+5));
//        text: t
//    }
//};
//function seconds(s) {
//    var a = s.split(':');
//    var r = Number(a[a.length-1]) + Number(a[a.length-2]) * 60;
//    if(a.length > 2) { r += Number(a[a.length-3]) * 3600; }
//    return r;
//};
//
//// Highlight current caption and chapter
//jwplayer().on('time', function(e){
//    var p = e.position;
//    for(var j=0; j<captions.length; j++) {
//        if(captions[j].begin <p && captions[j].end > p) {
//            if(j != caption) {
//                var c = document.getElementById('caption'+j);
//                if(caption > -1) {
//                    document.getElementById('caption'+caption).className = "";
//                }
//                c.className = "current";
//                if(query == "") {
//                    transcript.scrollTop = c.offsetTop - transcript.offsetTop - 40;
//                }
//                caption = j;
//            }
//            break;
//        }
//    }
//});
//
//// Hook up interactivity
//transcript.addEventListener("click", function(e) {
//    if(e.target.id.indexOf("caption") == 0) {
//        var i = Number(e.target.id.replace("caption", ""));
//        jwplayer().seek(captions[i].begin);
//    }
//});
//search.addEventListener('focus',function(e){
//  setTimeout(function(){search.select();},100);
//});
//search.addEventListener('keydown',function(e) {
//  if(e.keyCode == 27) {
//    resetSearch();
//  } else if (e.keyCode == 13) {
//    var q = this.value.toLowerCase();
//    if(q.length > 0) {
//      if (q == query) {
//        if(cycle >= matches.length - 1) {
//          cycleSearch(0);
//        } else { 
//          cycleSearch(cycle + 1);
//        }
//      } else {
//        resetSearch();
//        searchTranscript(q);
//      }
//    } else {
//      resetSearch();
//    }
//  }
//});




//************* UNUSED CODE ************//
/*
function myFunction() {
    //display current position of video
    document.getElementById('position').innerHTML = vid.currentTime;
}

//Get video element
var vid = document.getElementById('myVideo');

//Assign ontimeupdate event to video element and execute function if playback position changes
vid.ontimeupdate = function(){myFunction()};



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

*/