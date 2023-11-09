var a = GetAllActiveSequenceItems();
$.write(a.length);

function GetAllActiveSequenceItems() {
    var items = [];    
    activeSequence = app.project.activeSequence;

    if(activeSequence == "")
        return items;

    var videoTracks = activeSequence.videoTracks;
    if (videoTracks != "") {
        var num = videoTracks.numTracks;
        for (var i = 0; i < num; i++) {
            var temp = GetAllSelectedTrackItems(videoTracks[i]);
            if(temp.length <= 0)
                continue;

            items.push(temp);
        }
    }

    var audioTracks = activeSequence.audioTracks;
    if (audioTracks != "") {
        var num = audioTracks.numTracks;
        for (var i = 0; i < num; i++) {
            var temp = GetAllSelectedTrackItems(audioTracks[i]);
            if(temp.length <= 0)
                continue;

            items.push(temp);
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

    for(var i = 0; i < num; i++)
    {   
        var clip = clips[i];
        if (clip.isSelected()) {
            items.push(clip);
        }
    }

    return items;
}