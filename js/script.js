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
  else {
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
  $('.bigpic-about').css('background','rgba(61, 118, 64, 1)');
  } else if ($(document).scrollTop() < 50) {
    $('.bigpic-about').css('background', 'rgba(61, 118, 64, .85)');
  }
  else {
  }

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 120) {
  $('.bigpic-politics').css('background','rgba(0,0,0,.9)');
  } else if ($(document).scrollTop() < 120) {
    $('.bigpic-politics').css('background', 'rgba(0,0,0,.7)');
  }
  else {
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 70) {
  $('.bigpic-social').css('background','rgba(0,0,0,.9)');
  } else if ($(document).scrollTop() < 70) {
    $('.bigpic-social').css('background', 'rgba(0,0,0,.7)');
  }
  else {
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
  $('.bigpic-money').css('background','rgba(0,0,0,.9)');
  } else if ($(document).scrollTop() < 100) {
    $('.bigpic-money').css('background', 'rgba(0,0,0,.7)');
  }
  else {
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
  $('.bigpic-science').css('background','rgba(0,0,0,.9)');
  } else if ($(document).scrollTop() < 100) {
    $('.bigpic-science').css('background', 'rgba(0,0,0,.7)');
  }
  else {
  }
});

