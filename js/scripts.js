 $(document).ready(function(){

 var sections = $('#catalog')
       
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 76
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
          
               $('#menu').addClass('fixed-menu');
            }
            else {
            	$('#menu').removeClass('fixed-menu');
            }
        });
    });

   $('.feature-animation').waypoint(function() {
        $('.feature-animation').addClass('show-feature');
        
    }, {
        offset: '70%'
    });

	$('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 1200);
      
    });

 

function openModal(){
	$('.modal-overlay').fadeIn(200, function(){
 		$('.modal-window')
 			.css('display', 'block')
 			.animate({opacity: "1", top: "50%"}, 300);
 		$('body').css('overflow', 'hidden')
 		$('.color-select').css('display', 'none');
        });
 	$('.modal-overlay, .modal-window__close-btn').click(function(closeModal){
 		$('.modal-window')
 			.animate({opacity: 0, top: '0%'}, 200,
				function(){ 
					$(this).css('display', 'none')
					$('.modal-overlay').fadeOut(200);
				$('body').css('overflow', 'auto')
				changeParam('', '', '');
				$('.gyro-1').css('display', 'none');
  		        $('.gyro-2').css('display', 'none'); 
 				});
 	});
}


 	$('.btn-order-now').click(function(e){
 		e.preventDefault();
	    openModal();
	    $('#model-select').css('display', 'inline-block');
 	});





 var modelSelect = document.getElementById('model-select');
    modelSelect.onchange = changingColorSelect;

 function changingColorSelect() {
 	var modelIndex = document.getElementById("model-select").options.selectedIndex;
  if (modelIndex == 1) { 
  	$('#color-select-classic').css('display', 'inline-block');
  		$('#color-select-transformer').css('display', 'none'); 
  		$('#color-select-xl').css('display', 'none');
  		$('#color-select-x').css('display', 'none'); 
  			$('#model-price').text('22 900');
  }  
  else if(modelIndex == 0) { 
  	$('#color-select-classic').css('display', 'none');
  	$('#color-select-transformer').css('display', 'none'); 
  	$('#color-select-xl').css('display', 'none');
  	$('#color-select-x').css('display', 'none'); 
  		$('#model-price').text('Товар не выбран');
  }  
  else if(modelIndex == 2) { 
  	$('#color-select-classic').css('display', 'none');
  		$('#color-select-transformer').css('display', 'inline-block'); 
  		$('#color-select-xl').css('display', 'none');
  		$('#color-select-x').css('display', 'none');
  			$('#model-price').text('24 600');
   }
   else if(modelIndex == 3) { 
  	$('#color-select-classic').css('display', 'none');
  		$('#color-select-transformer').css('display', 'none'); 
  		$('#color-select-xl').css('display', 'inline-block');
  		$('#color-select-x').css('display', 'none');
  			$('#model-price').text('28 000');
   }
    else  { 
  	$('#color-select-classic').css('display', 'none');
  		$('#color-select-transformer').css('display', 'none'); 
  		$('#color-select-xl').css('display', 'none');
  		$('#color-select-x').css('display', 'inline-block');
  	    	$('#model-price').text('31 000');
   }
  };

 
function changeParam(model, color, price){
	 $('#model-select').css('display', 'none');
	 $('#color-select').css('display', 'none');
	 document.getElementById('model-name').innerHTML = model;
	 document.getElementById('model-color').innerHTML = color;
	 document.getElementById('model-price').innerHTML = price;
 }

 $('.buy-1').click(function(openProduct){
 	openProduct.preventDefault();
 	openModal();
    changeParam('Smart Balance Classic', 'Желтый', 22+' '+900);
 });

 $('.buy-2').click(function(openProduct){
 	openProduct.preventDefault();
 	openModal();
    changeParam('Smart Balance Classic', 'Черный', 22+' '+900);
 });
 $('.buy-3').click(function(openProduct){
 	openProduct.preventDefault();
 	openModal();
    changeParam('Smart Balance Classic', 'Синий', 22+' '+900);
 });
 $('.buy-4').click(function(openProduct){
 	openProduct.preventDefault();
 	openModal();
    changeParam('Smart Balance Classic', 'Красный', 22+' '+900);
 });
 $('.buy-5').click(function(openProduct){
 	openProduct.preventDefault();
 	openModal();
    changeParam('Smart Balance Classic', 'Белый', 22+' '+900);
 });
 $('.buy-6').click(function(openProduct){
 	openProduct.preventDefault();
 	openModal();
    changeParam('Smart Balance Classic', 'Черный', 23+' '+200);
 });
 $('.buy-7').click(function(openProduct){
 	openProduct.preventDefault();
 	openModal();
    changeParam('Smart Balance Classic', 'Черный', 23+' '+200);
 });

});


$('.product-description__slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    speed: 600,
  
  });


