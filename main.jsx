activeSequence = app.project.activeSequence;
videoTracks = activeSequence.videoTracks;
audioTracks = activeSequence.audioTracks;

numVideoTrackLog = "Number of Video Tracks: " + videoTracks.numTracks;
$.write(numVideoTrackLog);

numAudioTrackLog = "Number of Audio Tracks: " + audioTracks.numTracks;
$.write(numAudioTrackLog);
