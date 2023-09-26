

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:4,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        767:{
            items:2
        },
        992:{
            items:4
        },
    }

});