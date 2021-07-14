
// $(window).resize(function() {
//     var width = $(window).width();
//     if (width > 414){
//         $(".collapse").addClass('show');
//     }
//   });

$(".item").click(function (e) { 
    e.preventDefault();
    $(".item").removeClass("item-active");
    $(this).addClass("item-active")
});
