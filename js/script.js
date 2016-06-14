$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
	$('nav').addClass('shrink');
  } else {
	$('nav').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
	$('.logo-white').css("display","none");
  } else {
	$('.logo-white').css("display","block");
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
	$('.logo-dark').css("display","block");
  } else {
	$('.logo-dark').css("display","none");
  }
});

$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-bar").toggleClass("search-on");
		$(".search-button").toggleClass("search-on");
    });
});

