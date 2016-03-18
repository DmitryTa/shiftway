 $(document).ready(function(){

var mobileButton = document.getElementById('mobileButton');
var mobileNav = document.getElementById('mobile-menu');
mobileButton.onclick = function(openMobileMenu) {
  openMobileMenu.preventDefault();
  mobileButton.classList.toggle('active-icon');
  mobileNav.classList.toggle('mobile-nav'); 
}
$('#mobile-menu a').click(function() {
        $('#mobile-menu').removeClass('mobile-nav');
        mobileButton.classList.toggle('active-icon'); 
    });

function sliderSwitch(){
if ($("#slider-switch-1").prop("checked")){
    document.getElementById('slider-1').style.display='block';
    document.getElementById('slider-2').style.display='none'; 
    document.getElementById('slider-3').style.display='none'; 
    document.getElementById('slider-4').style.display='none'; 
}
else if ($("#slider-switch-2").prop("checked")) {
     document.getElementById('slider-1').style.display='none';
    document.getElementById('slider-2').style.display='block'; 
    document.getElementById('slider-3').style.display='none'; 
    document.getElementById('slider-4').style.display='none'; 
}
else if ($("#slider-switch-3").prop("checked")) {
     document.getElementById('slider-1').style.display='none';
    document.getElementById('slider-2').style.display='none'; 
    document.getElementById('slider-3').style.display='block'; 
    document.getElementById('slider-4').style.display='none';  
}
else {
     document.getElementById('slider-1').style.display='none';
    document.getElementById('slider-2').style.display='none'; 
    document.getElementById('slider-3').style.display='none'; 
    document.getElementById('slider-4').style.display='block'; 
}
};


$('.radio-class').change(function(){
  sliderSwitch();
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
         $('#ajaxform #input-auto').remove(); 
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
        $('#model-price').text('27 900');
   }
    else  { 
    $('#color-select-classic').css('display', 'none');
      $('#color-select-transformer').css('display', 'none'); 
      $('#color-select-xl').css('display', 'none');
      $('#color-select-x').css('display', 'inline-block');
          $('#model-price').text('29 900');
   }
  };
function changeParam(model, color, price){
   $('#model-select').css('display', 'none');
   document.getElementById('model-name').innerHTML = model;
   document.getElementById('model-color').innerHTML = color;
   document.getElementById('model-price').innerHTML = price;
   $('#ajaxform').append('<input type="text" id="input-auto" name="modal-no-select">');
   $('#input-auto').css('display', 'none');
   $('#input-auto').val(model + ", " + color + ", " + price);
 }

 $('.buy-classic-white').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Classic', 'Белый', 22+' '+900);
 });

 $('.buy-classic-black').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Classic', 'Черный', 22+' '+900);
 });
 $('.buy-classic-blue').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Classic', 'Синий', 22+' '+900);
 });
 $('.buy-classic-red').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Classic', 'Красный', 22+' '+900);
 });
 $('.buy-classic-yellow').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Classic', 'Желтый', 22+' '+900);
 });
 $('.buy-classic-chrome_gold').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Classic', 'Хром золотой', 24+' '+500);
 });
 $('.buy-classic-chrome_blue').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Classic', 'Хром голубой', 24+' '+500);
 });
 $('.buy-transformer-white').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Transformer', 'Белый', 24+' '+900);
 });
 $('.buy-transformer-red').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Transformer', 'Красный', 24+' '+900);
 });
 $('.buy-transformer-grey').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Transformer', 'Серый', 24+' '+900);
 });
 $('.buy-transformer-black').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance Transformer', 'Черный', 24+' '+900);
 });
$('.buy-xl-graffity-1').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance XL', 'Граффити желтый', 27+' '+900);
 });
$('.buy-xl-black').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance XL', 'Карбон', 27+' '+900);
 });
$('.buy-xl-fire').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance XL', 'Огонь', 27+' '+900);
 });
$('.buy-xl-graffity-2').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance XL', 'Граффити белый', 27+' '+900);
 });
$('.buy-x-red').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance X', 'Красный', 29+' '+900);
 });
$('.buy-x-white').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance X', 'Белый', 29+' '+900);
 });
$('.buy-x-blue').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance X', 'Синий', 29+' '+900);
 });
$('.buy-x-black').click(function(openProduct){
  openProduct.preventDefault();
  openModal();
    changeParam('Smart Balance X', 'Черный', 29+' '+900);
 });

$('#buy-classic').click(function(openProduct){
  openProduct.preventDefault();
  $('.modal-overlay').fadeIn(200, function(){
    $('.modal-window')
      .css('display', 'block')
      .animate({opacity: "1", top: "50%"}, 300);
    $('body').css('overflow', 'hidden')
        });
      $('#color-select-classic').css('display', 'inline-block');
      $('#color-select-transformer').css('display', 'none'); 
      $('#color-select-xl').css('display', 'none');
      $('#color-select-x').css('display', 'none');
   changeParam('Smart Balance Classic', '', 22+' '+900);
    
 });
$('#buy-transformer').click(function(openProduct){
  openProduct.preventDefault();
  $('.modal-overlay').fadeIn(200, function(){
    $('.modal-window')
      .css('display', 'block')
      .animate({opacity: "1", top: "50%"}, 300);
    $('body').css('overflow', 'hidden')
        });
      $('#color-select-classic').css('display', 'none');
      $('#color-select-transformer').css('display', 'inline-block'); 
      $('#color-select-xl').css('display', 'none');
      $('#color-select-x').css('display', 'none');
   changeParam('Smart Balance Transformer', '', 24+' '+900);
    
 });
$('#buy-x').click(function(openProduct){
  openProduct.preventDefault();
  $('.modal-overlay').fadeIn(200, function(){
    $('.modal-window')
      .css('display', 'block')
      .animate({opacity: "1", top: "50%"}, 300);
    $('body').css('overflow', 'hidden')
        });
      $('#color-select-classic').css('display', 'none');
      $('#color-select-transformer').css('display', 'none'); 
      $('#color-select-xl').css('display', 'none');
      $('#color-select-x').css('display', 'inline-block');
   changeParam('Smart Balance EVO', '', 29+' '+900);
    
 });
$('#buy-xl').click(function(openProduct){
  openProduct.preventDefault();
  $('.modal-overlay').fadeIn(200, function(){
    $('.modal-window')
      .css('display', 'block')
      .animate({opacity: "1", top: "50%"}, 300);
    $('body').css('overflow', 'hidden')
        });
      $('#color-select-classic').css('display', 'none');
      $('#color-select-transformer').css('display', 'none'); 
      $('#color-select-xl').css('display', 'inline-block');
      $('#color-select-x').css('display', 'none');
   changeParam('Smart Balance XL', '', 27+' '+900);
    
 });
 $('.modal-overlay, .modal-window__close-btn').click(function(closeModal){
    $('.modal-window')
      .animate({opacity: 0, top: '0%'}, 200,
        function(){ 
          $(this).css('display', 'none')
          $('.modal-overlay').fadeOut(200);
        $('body').css('overflow', 'auto')
        changeParam('', '', '');
         $('#ajaxform #input-auto').remove(); 
        });
  })

});

 $(document).ready(function(){
 
 var sections = $('#catalog')
       if ($('.page-header').css('background-attachment')=='fixed') {

       
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
}
else { };
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
});

$('#catalog-classic .catalog__item img, #catalog-classic .catalog__item-name').click(function(){
    location.href = 'classic.html';
});
$('#catalog-transformer .catalog__item img, #catalog-transformer .catalog__item-name').click(function(){
    location.href = 'transformer.html';
});
$('#catalog-xl .catalog__item img, #catalog-xl .catalog__item-name').click(function(){
    location.href = 'xl.html';
});
$('#catalog-x .catalog__item img, #catalog-x .catalog__item-name').click(function(){
    location.href = 'evo.html';
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




   
