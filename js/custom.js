$(function(){
    'use strict';
    //scroll-spy & Smooth-scrolling
		var scrollLink = $('.scroll-link');
        $(scrollLink).on('click',function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top-80},1000);
        });
        $(window).on('scroll',function(){
            var scrollTop = $(this).scrollTop();
            scrollLink.each(function(){
            var sectionhead = $(this.hash).offset().top-85;
            if(scrollTop >= sectionhead) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
            });
        });
    //Back-to-top js
        $('.back-to-top').on('click',function(){
            $('html,body').animate({scrollTop:0},1000);
         });
    //sticky-menu & Back-to-top visibility
    $(window).on('scroll',function(){
        var main = $(this).scrollTop();
        if(main > 300){
            $('.navbar').addClass('sticky-menu');
        }
        else{
            $('.navbar').removeClass('sticky-menu');
        }
        if(main > 200){
            $('.back-to-top').fadeIn(300);
        }
        else{
            $('.back-to-top').fadeOut(300);
        }
    });
    //phone-banner-slider js
    $('.screen-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false,
    });
    //Counter-up js
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    //Screenshots slider js
     $('.screen-main').owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });

    //Venobox js
        $('.venobox').venobox(); 
    
    //people-slider js
    $('.peoples-image-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        autoplay:true,
        fade: true,
        speed:1500,
        asNavFor: '.peoples-feedback'
      });
      $('.peoples-feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        asNavFor: '.peoples-image-main',
        dots: false,
        fade:true,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        centerMode: true,
        focusOnSelect: true
      });

    //team-slider js
      $('.main-team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
    //preloader-js
    $(window).on('load',function(){
        $('.preloader').delay(300).fadeOut(300);
    });
    //wow-js
    new WOW().init();
});

//form-validation
var username = document.getElementById('fname');
var err_username = document.getElementById('err_name');

var mail = document.getElementById('gmail');
var err_mail = document.getElementById('err_mail');
var mail_regax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


var subject = document.getElementById('sub');
var err_subject = document.getElementById('err_sub');

var comment = document.getElementById('cmmnt');
var err_comment = document.getElementById('err_cmmnt');


function send(){
    if(username.value==''){
        err_username.innerHTML = 'Enter Your Name !';
        username.style.borderBottom = '1px solid red';
        username.focus();
        return false;
    }
    else if( mail.value=='' || !mail_regax.test(mail.value)){
        err_mail.innerHTML = 'Enter Your Valid Email !';
        mail.style.borderBottom = '1px solid red';
        mail.focus();
        return false;
    }
    else if( subject.value==''){
        err_subject.innerHTML = 'Enter Your Subject Here !';
        subject.style.borderBottom = '1px solid red';
        subject.focus();
        return false;
    }
    else if( comment.value==''){
        err_comment.innerHTML = 'Enter Your Message Here !';
        comment.style.border = '1px solid red';
        comment.focus();
        return false;
    }
}

function valid(){
    if(username.value!='' || name_regax.test(username.value)){
        err_username.innerHTML = '';
        username.style.borderBottom = '1px solid green';
    }
    if( mail.value!='' || mail_regax.test(mail.value)){
        err_mail.innerHTML = '';
        mail.style.borderBottom = '1px solid green';
    }
    if( subject.value!=''){
        err_subject.innerHTML = '';
        subject.style.borderBottom = '1px solid green';
    }
    if( comment.value!=''){
        err_comment.innerHTML = '';
        comment.style.border = '1px solid green';
    }
}

username.addEventListener('blur',valid);
mail.addEventListener('blur',valid);
subject.addEventListener('blur',valid);
comment.addEventListener('blur',valid);