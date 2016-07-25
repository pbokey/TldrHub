$(window).scroll(function() {
  if ($(document).scrollTop() > 89) {
	$('.info').css('margin-top','0');
  } else {
	$('.info').css('margin-top','-52px');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 89) {
	$('.navbar-fixed-top').addClass('shrink');
  } else {
	$('.navbar-fixed-top').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 400) {
  $('.bigpic-heading').css('background','rgba(0,0,0,.9)');
  } else if ($(document).scrollTop() < 400) {
    $('.bigpic-heading').css('background', 'rgba(0,0,0,.7)');
  }
  else {

  }
});

$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-bar").toggleClass("search-on");
		$(".search-button").toggleClass("search-on");
    });
});

