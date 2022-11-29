const owl = $('.slide-one');
owl.owlCarousel({
        center: true,
        loop: true,
        startPosition: 0,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        mouseDrag: false
  });


$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


const owl2 = $('.slide-two');
owl2.owlCarousel({
        center: true,
        loop: true,
        startPosition: 0,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        mouseDrag: true
  });


$('.slider__btn--prev2').click(function() {
    owl2.trigger('prev.owl.carousel');
})

$('.slider__btn--next2').click(function() {
    owl2.trigger('next.owl.carousel');
})


const owl3= $('.slide-three');
owl3.owlCarousel({
        center: true,
        loop: true,
        startPosition: 0,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        mouseDrag: true
  });


$('.slider__btn--prev3').click(function() {
    owl3.trigger('prev.owl.carousel');
})

$('.slider__btn--next3').click(function() {
    owl3.trigger('next.owl.carousel');
})
