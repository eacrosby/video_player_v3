const vidElement = document.querySelector("video");
const textTracks = vidElement.textTracks; // one for each track element
const textTrack = textTracks[0]; // corresponds to the first track element
const kind = textTrack.kind; // e.g. "subtitles"
const mode = textTrack.mode; // e.g. "disabled", "hidden", or "showing"
const cues = textTrack.cues;
const cue = cues[0]; // corresponds to the first cue in a track src file
const cueId = cue.id; // cue.id corresponds to the cue id set in the VTT file
const cueText = cue.text; // text of the current cue
const trackElements = document.querySelectorAll ('track'); // for each track element

for (const i = 0; i <trackElements.length; i += 1) {
    trackElements[i].addEventListener('load', function() {
        const textTrack = this.track;
        const isSubtitles = textTrack.kind === 'subtitles';
        console.log(textTrack);
        console.log(isSubtitles);
    })
}