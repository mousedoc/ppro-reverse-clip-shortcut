activeSequence = app.project.activeSequence;
videoTracks = activeSequence.videoTracks;
audioTracks = activeSequence.audioTracks;

numVideoTrackLog = "Number of Video Tracks: " + videoTracks.numTracks;
$.write(numVideoTrackLog);

numAudioTrackLog = "Number of Audio Tracks: " + audioTracks.numTracks;
$.write(numAudioTrackLog);

var a = GetAllSelectedTrackItems();
$.write(a.length);

function GetAllSelectedTrackItems() {
    items = [];

    if (videoTracks != "") {
        for (var track in videoTracks) {
            items.push(GetAllSelectedTrackItems(track));
        }
    }

    if (audioTracks != "") {
        for (var track in audioTracks) {
            items.push(GetAllSelectedTrackItems(track));
        }
    }

    return items;
}

function GetAllSelectedTrackItems(track) {
    items = [];

    if (track == "")
        return items;

    var clips = track.clips;
    for (var clip in clips) {
        if (clip.isSelected()) {
            items.push(clip);
        }
    }

    return items;
}