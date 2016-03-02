 $(document).ready(function(){
 
 var sections = $('#catalog')
       
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 76
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
          
               $('#menu').addClass('fixed-menu');
               $('.main-nav a[href="#catalog"]').css('color', '#dd4040');
            }
            else {
            	$('#menu').removeClass('fixed-menu');
              $('.main-nav a[href="#catalog"]').css('color', '#bcbaba');
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

$('#catalog-classic .catalog__item img, #catalog-classic .catalog__item-name').click(function(){
    location.href = 'classic.html';
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


$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    speed: 600,
  
  });




function sliderSwitch(){
if ($("#slider-swith-blue").prop("checked")){
    document.getElementById('slider-blue').style.display='block';
    document.getElementById('slider-black').style.display='none'; 
    document.getElementById('slider-red').style.display='none'; 
    document.getElementById('slider-yellow').style.display='none'; 

}
else if ($("#slider-swith-black").prop("checked")) {
     document.getElementById('slider-blue').style.display='none';
    document.getElementById('slider-black').style.display='block'; 
    document.getElementById('slider-red').style.display='none'; 
    document.getElementById('slider-yellow').style.display='none'; 
}
else if ($("#slider-swith-red").prop("checked")) {
     document.getElementById('slider-blue').style.display='none';
    document.getElementById('slider-black').style.display='none'; 
    document.getElementById('slider-red').style.display='block'; 
    document.getElementById('slider-yellow').style.display='none';  
}
else {
     document.getElementById('slider-blue').style.display='none';
    document.getElementById('slider-black').style.display='none'; 
    document.getElementById('slider-red').style.display='none'; 
    document.getElementById('slider-yellow').style.display='block'; 
}
};


$('.radio-class').change(function(){
  sliderSwitch();
});


$("#ajaxform").submit(function(){ // пeрeхвaтывaeм всe при сoбытии oтпрaвки
        var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
        var error = false; // прeдвaритeльнo oшибoк нeт
        form.find('input').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
            if ($(this).val() == '') { // eсли нaхoдим пустoe
                $(this).addClass("error");
                error = true; // oшибкa
            } else { // если пол ене пустое
                $(this).removeClass("error"); // снимаем класс
                error = false; // сбрасываем ошибку
            }
        });
        if (!error) { // eсли oшибки нeт
            var data = form.serialize(); // пoдгoтaвливaeм дaнныe
            $.ajax({ // инициaлизируeм ajax зaпрoс
                type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
                url: 'mail.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
                dataType: 'json', // oтвeт ждeм в json фoрмaтe
                data: data, // дaнныe для oтпрaвки
                beforeSend: function(data) { // сoбытиe дo oтпрaвки
                    form.find('button').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
                },
                success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    //if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
                    //    alert(data['error']); // пoкaжeм eё тeкст
                    //} else { // eсли всe прoшлo oк
                    //    console.log('Письмo oтврaвлeнo! Чeкaйтe пoчту! =)'); // пишeм чтo всe oк
                    //}
                    form.addClass("sended");
                    $(".form_send-ok").addClass("sended");
                    console.log('sended ok');
                },
                error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                    console.log(xhr.status); // пoкaжeм oтвeт сeрвeрa
                    console.log(thrownError); // и тeкст oшибки
                },
                complete: function(data) { // сoбытиe пoслe любoгo исхoдa
                    form.addClass("sended");
                    form.siblings(".form-send-ok").addClass("sended");
                    //$(".form-send-ok").addClass("sended");
                    console.log('sended ok');
                    form.find('button').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
                }

            });
        }
      });
       // вырубaeм стaндaртную oтпрaвку фoрмы
   
