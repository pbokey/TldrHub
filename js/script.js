$(window).scroll(function() {
  if ($(document).scrollTop() > 89) {
	$('.info').css('padding-top','82px');
  } else {
	$('.info').css('padding-top','30px');
  }
});

$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-bar").toggleClass("search-on");
		$(".search-button").toggleClass("search-on");
    });
});

