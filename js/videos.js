const videos = document.querySelectorAll(".fastVid");
console.log("working")
videos.forEach(video => {
    console.log(video)
    video.playbackRate = 2.0;
    video.play()
})