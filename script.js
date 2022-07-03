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
        // const getClass = this;
        $(".menu-container").removeClass("active");
        console.log('CLicker')
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
