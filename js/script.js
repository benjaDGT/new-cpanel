(function($) {

	/*----------------------------------------------------------------------------------*/
	/* Sub menú
	/*----------------------------------------------------------------------------------*/
	$(document).on('click', '.ib-child-menu a', function(){
		if ($(this).parent().hasClass('ib-active')) {
			$(this).parent().removeClass('ib-active');
		}else{
			$('.ib-child-menu').removeClass('ib-active');
			$(this).parent().addClass('ib-active');
		}
	});

}(jQuery));