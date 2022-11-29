$('.slider').slick({
	dots: true,
	arrows: false,
	fade: true,
	autoplay: false,
	
  
	// dotsClass: 'slick-dots'
  });
  
  $('.slider').on('mouseenter', '.slick-dots button', function(event) {
	$(this).parents('.slider').slick('slickGoTo', $(this).parent().index());
  });