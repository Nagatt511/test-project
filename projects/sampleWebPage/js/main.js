$(".top-menu a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
 
        $('html').animate({ scrollTop: destination }, 300);
        showmenu()
        console.log(menu.classList[0])
    return false;
});

function showmenu(){
    if ($(".top-menu").is(':visible')){
        $(".top-menu").hide(300)
    } else{
        $(".top-menu").show(300)
       
    }
    console.log($(".top-menu").is(':visible'))


}