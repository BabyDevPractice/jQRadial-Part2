$(document).ready(function() {



$('.circle').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     // odd clicks
        $(".circle").css({
          "background-color":"rgb(92, 34, 58)",
          "-webkit-transition": "background-color 2s",
        });
       $(".bar").css({"background-color":"white", "-webkit-transition":"background-color 2s"});
       $(".top").css({
         "-webkit-transform":" rotateZ(-45deg)",
         "-ms-transform": "rotateZ(-45deg)",
         "transform": "rotateZ(-45deg)",
         "margin-top":"70px",
         "-webkit-transition": ".5s",
         "-moz-transition":".5s",
         "-o-transition":" .5s",
         "transition": ".5s"
       });
       $(".bottom").css({
         "margin-top":"-25px",
         "-webkit-transform":" rotateZ(45deg)",
         "-ms-transform": "rotateZ(45deg)",
         "transform": "rotateZ(45deg)",
         "-webkit-transition": ".5s",
         "-moz-transition":".5s",
         "-o-transition":" .5s",
         "transition": ".5s"
       });
       $("#center").css({
         "visibility":"hidden",
         "width":"0px",
         "height": "0px"
       });
  } else {
     // even clicks
     $(".circle").css({
       "background-color":"rgb(164, 100, 127)",
       "-webkit-transition": "background-color 2s",
       "border-box":"none"
     });
         $(".bar").css({"background-color":"black", "-webkit-transition":"background-color 2s"});
         $(".bar").css({
           "-webkit-transform":" rotateZ(0deg)",
           "-ms-transform": "rotateZ(0deg)",
           "transform": "rotateZ(0deg)",
           "transition-duration":"4s"
         });
         $(".top").css({
           "margin-top":"42.5px",
           "-webkit-transition": ".5s",
           "-moz-transition":".5s",
           "-o-transition":" .5s",
           "transition": ".5s"
         });
         $(".bottom").css({
           "margin-top":"10px",
           "-webkit-transition": ".5s",
           "-moz-transition":".5s",
           "-o-transition":" .5s",
           "transition": ".5s"
         });
         $("#center").css({
           "visibility":"visible",
           "width":"75px",
           "height": "15px",
           "-webkit-transition": ".5s",
           "-moz-transition":".5s",
           "-o-transition":" .5s",
           "transition": ".5s"
         });
  }
  $(this).data("clicks", !clicks);
});

});
