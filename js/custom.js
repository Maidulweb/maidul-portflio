
  	   $('.portfolio_button').click(function(){
        var value = $(this).attr("data-filter");
          if(value == "all"){
            $('.portfolio_filter').show('1000');
          }else{
             $('.portfolio_filter').not("."+value).hide('1000');
             $('.portfolio_filter').filter("."+value).show('1000');
          }
        });

  $('ul .portfolio_button').click(function(){
	$('.portfolio_button').removeClass('active');
	$(this).addClass('active');
});

  $('.menu ul li').click(function(){
	$('.menu ul li').removeClass('current');
	$(this).addClass('current');
});

  /* .......... preLoader .............. */

  $('body').addClass('preloader_active');

    $(window).on('load', function(){
      $('.preloader').delay(3000).fadeOut();
      $('.preloader_spin').delay(3000).fadeOut('slow');

      $('body').removeClass('preloader_active');
     });

  

