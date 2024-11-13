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
	console.log("New speed: " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	// increase video speed by 10%
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	// skip 10 seconds
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.play();
	}
	console.log("Current time: " + video.currentTime);
})

