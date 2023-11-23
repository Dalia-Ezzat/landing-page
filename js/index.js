//  <reference types="../@types/jquery" />

// ======== AOS ===========
 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

// --------------loading-page
$(function() {
  $('.loading' ).fadeToggle(700,function(){
    $('body').css('overflow','auto')
  });
  });

// --------------loading-page



// ========button up======================

$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
   
    let section = $('#home').offset().top;
    if (windowScroll > section){
       $('#btn-up').show(800);
    }
    else{
       $('#btn-up').hide(800);
    }
   
   })
   
   
   $('#btn-up').on('click',function(){
       $('body,html').animate({ scrollTop:0},100)
})
   