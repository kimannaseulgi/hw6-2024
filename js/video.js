var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// simplifying the code by using video
	video = document.querySelector("video");
	// turn off autoplay and looping
	video.autoplay = false;
	console.log("Auto play is set to false")
	video.loop = false;
	console.log("Looping is set to false")
});

document.querySelector("#play").addEventListener("click", function() {
	// playing video
	video.play();
	console.log("Play video");
	// update volume info
	var volume = video.volume * 100;
	document.querySelector("#volume").textContent = (volume.toFixed(0) + "%");
	console.log("Volume has been udpated")
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause video");
});

document.querySelector("#slower").addEventListener("click", function() {
	// decrease video speed by 10%
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
	console.log("Slow down video")
});

document.querySelector("#faster").addEventListener("click", function() {
	// increase video speed by 10%
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
	console.log("Speed up video")
});

document.querySelector("#skip").addEventListener("click", function() {
	// skip 10 seconds
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.play();
	}
	console.log("Video current time is " + video.currentTime);
	console.log("Skip ahead");
});

document.querySelector("#mute").addEventListener("click", function() {
	// mute button
    if (video.muted) {
        video.muted = false;  // unmute
        document.querySelector("#mute").textContent = "Mute";
        console.log("Unmute");
    } else {
        video.muted = true;   // mute
        document.querySelector("#mute").textContent = "Unmute";
        console.log("Mute");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
	// volume slider value as a percentage
    var volume = this.value / 100;
    video.volume = volume;
    document.querySelector("#volume").textContent = (this.value + "%");
    console.log("The current value is " + this.value + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	// old school button
    video.classList.add("oldSchool");
    console.log("Old School style applied");
});

document.querySelector("#orig").addEventListener("click", function() {
	// original button
    video.classList.remove("oldSchool");
    console.log("Original style applied");
});