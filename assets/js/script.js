$( function() {
    $( "#inputChackIn" ).datepicker();
    $( "#inputChackOut" ).datepicker();

    $('.reserve-slider').slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
    });

    function videoToggle(){
      video = $(".reserve-video").get(0)

      if (video.paused) {
        video.play()
        $('.video-control-play').hide();
        $('.video-control-pause').show();
      } else {
        video.pause();
        $('.video-control-play').show();
        $('.video-control-pause').hide();
      }
    }

    $('.video-control-play').click(function(){
      videoToggle();
    })

    $('.video-control-pause').click(function(){
      videoToggle();
    })

  });
