function scrollToId(id){
    $("html, body").animate({ scrollTop: $(id).offset().top }, 500);
}


$(document).ready(function (){
    AOS.init({
        easing: 'ease-in-sine',
    });
})
