$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
	$('nav').addClass('shrink');
  } else {
	$('nav').removeClass('shrink');
  }
});

$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-bar").toggleClass("search-on");
		$(".search-button").toggleClass("search-on");
    });
});

