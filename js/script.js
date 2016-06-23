$(window).scroll(function() {
  if ($(document).scrollTop() > 89) {
	$('.info').css('margin-top','0');
  } else {
	$('.info').css('margin-top','-52px');
  }
});

$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-bar").toggleClass("search-on");
		$(".search-button").toggleClass("search-on");
    });
});

