function createVideo(e) {
    var a = "youtube-api",
        t = document.getElementById(a),
        i = e.getAttribute("data-video-id");
    if (null === t) {
        var o = document.createElement("script"),
            d = document.getElementsByTagName("script")[0];
        o.src = "https://www.youtube.com/iframe_api", o.id = a, d.parentNode.insertBefore(o, d)
    }
    window.onYouTubeIframeAPIReady = function() {
        window.player = new window.YT.Player(e, {
            videoId: i,
            playerVars: {
                autoplay: 0,
                modestbranding: 1,
                rel: 0
            }
        })
    }
}
$(function() {
    $(".carousel").on("slide.bs.carousel", function(e) {
        var a = ($(this).find(".active").index(), $(e.relatedTarget).index()),
            t = $("#video-player")[0],
            i = $("#video-player").closest(".carousel-item").index();
        a === i ? "IFRAME" == t.tagName ? player.playVideo() : createVideo(t) : "undefined" != typeof player && player.pauseVideo()
    })
});