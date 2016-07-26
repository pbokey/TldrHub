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
  } else  if ($(document).scrollTop() > 89) {
  $('.navbar-fixed-top').removeClass('shrink');
  }
});

$(document).ready(function(){
    $(".search-button").click(function(){
        $(".search-bar").toggleClass("search-on");
    $(".search-button").toggleClass("search-on");
    });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
  $('.bigpic-heading').css('background','rgba(0,0,0,.85)');
  } else if ($(document).scrollTop() < 200) {
    $('.bigpic-heading').css('background', 'rgba(0,0,0,.6)');
  }
});

