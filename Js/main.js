$(".icon-menu").click(function (e) { 
  console.log($('.menu').css('width'));
  if ($('.menu').css('width') == '0px') {
    $('.menu').css('width', '100vw');
  } else {
    $('.menu').css('width', '0');
  }
});