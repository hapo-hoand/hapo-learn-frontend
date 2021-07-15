$(".item").click(function (e) { 
    e.preventDefault();
    $(".item").removeClass("item-active");
    $(this).addClass("item-active")
});

$(".btn-menu").click(function(){
    $(this).toggleClass("rotate");
})
