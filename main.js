$(document).ready(() => {
  $("#h1").click(function () {
    $("#h1").toggleClass("coral-background");
  })

  $("#h1").mouseleave(function () {
    $("#h1").toggleClass("coral-background");
  });

  $("#h2").hover(function () {
    $("#h2").text("Hello and stay safe!");
  }, function () {
    $("#h2").text("Are you self isolating?");
  })

  $(document).ready(function(){
    $(document).keydown(function(){
        var keyInput = event.key;
      $("body").append('<div id="append"></div>');
      $("#append").append(keyInput);
    });
  });
});