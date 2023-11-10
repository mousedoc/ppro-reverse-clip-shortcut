var selectedItems = GetAllActiveSequenceItems();
var length = selectedItems.length;
for (var i = 0; i < length; i++) {
    var trackItem = selectedItems[i];
    ReverseTrackItem(trackItem);
}


function ReverseTrackItem(trackItem) {
    var orgStart = trackItem.start; // if 10
    var orgEnd = trackItem.end;     // if 20

    // Reverse ?                    // result is
    trackItem.start = orgEnd;       // 20
    trackItem.end = orgStart;       // 20
}

function GetAllActiveSequenceItems() {
    var items = [];
    activeSequence = app.project.activeSequence;

    if (activeSequence == "")
        return items;

    var videoTracks = activeSequence.videoTracks;
    if (videoTracks != "") {
        var num = videoTracks.numTracks;
        for (var i = 0; i < num; i++) {
            var temp = GetAllSelectedTrackItems(videoTracks[i]);
            if (temp.length <= 0)
                continue;

            items = items.concat(temp);
        }
    }

    var audioTracks = activeSequence.audioTracks;
    if (audioTracks != "") {
        var num = audioTracks.numTracks;
        for (var i = 0; i < num; i++) {
            var temp = GetAllSelectedTrackItems(audioTracks[i]);
            if (temp.length <= 0)
                continue;

            items = items.concat(temp);
        }
    }

    return items;
}

function GetAllSelectedTrackItems(track) {
    var items = [];

    if (track == "")
        return items;

    var clips = track.clips;
    var num = clips.numItems;

    for (var i = 0; i < num; i++) {
        var clip = clips[i];
        if (clip.isSelected()) {
            items.push(clip);
        }
    }

    return items;
}