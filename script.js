$(document).ready(async () => {
    $('.navContainer').on('click', () => {
        $(".navContainer").toggleClass("active-nav");
        $(".harmburger").toggleClass("close");
        $(".harmburger1").toggleClass("off");
        $(".harmburger2").toggleClass("close1");
        $(".menu-container").toggleClass("active");
    })
})
$(document).ready(async () => {
    $(".current-page").click(function () {
        $(".navContainer").removeClass("active-nav");
        $(".harmburger").removeClass("close");
        $(".harmburger1").removeClass("off");
        $(".harmburger2").removeClass("close1");
        $(".menu-container").removeClass("active");
    });
})

const navBar = $('.center').offset().top
$(window).scroll(function () {
    if (window.pageYOffset > navBar) {
        $('.center').addClass('sticky')
    }
    else {
        console.log('remove color', navBar)
        $('.center').removeClass('sticky')
    }
});

AOS.init();
