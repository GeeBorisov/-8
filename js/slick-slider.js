$('.style__card-slider').slick({
	dots: true,
	arrows: false,
	fade: true,
	autoplay: false,
	
  
	// dotsClass: 'slick-dots'
  });
  
  $('.style__card-slider').on('mouseenter', '.slick-dots button', function(event) {
	$(this).parents('.style__card-slider').slick('slickGoTo', $(this).parent().index());
  });