$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
	$('.logo-img').addClass('logo-on');
	$('.logo-img').css('padding','10px 15px');
  } else {
	$('.logo-img').removeClass('logo-on');
	$('.logo-img').css('padding','0');
  }
});

$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-bar").toggleClass("search-on");
		$(".search-button").toggleClass("search-on");
    });
});

