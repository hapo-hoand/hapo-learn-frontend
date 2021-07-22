$(".item-menu").click(function (e) { 
    e.preventDefault();
    $(".item-menu").removeClass("item-active");
    $(this).addClass("item-active")
});

$(".btn-menu").click(function(){
    $(this).toggleClass("rotate");
})

$(document).on('ready', function() {
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            },
        }]
    });
})

$(function () {
    $('.example-popover').popover({
      container: 'body'
    })
})
