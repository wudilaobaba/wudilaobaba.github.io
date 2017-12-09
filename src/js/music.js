$(function() {
  var play = 1;
  $(".MusicPicButton").click(function() {
    if (play == 0) {
      //$(this).attr("src","image/music/pause.png")
      $(".MusicPlayProcess").removeClass("pause")
      $(".MusicPicName").removeClass("pause")
      $("audio").get(0).play();
      play = 1;
    } else {
      //$(this).attr("src","image/music/play.png")
      $(".MusicPlayProcess").addClass("pause")
      $(".MusicPicName").addClass("pause")
      play = 0;
      $("audio").get(0).pause();
    }
  })
})
