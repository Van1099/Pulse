$(document).ready(function (){
    $(".carousel__inner").slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow:
        '<button type="button" class="slick-prev"><img src="../../slide/chevron-left-solid.svg"></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="../../slide/chevron-right-solid.svg"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false,
          },
        },
      ],
    })

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

/*     function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back'); */


   //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modalNew__close').on('click', function(){
       $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    });

    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modalNew__descr').text($('.catalog-item__subtitle').eq(i).text())
        $('.overlay, #order').fadeIn();
      })
    })   

  function valideForms(form){
    $(form).validate({
      rules:{
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Погремуху вбей",
        phone: "Мобильник намба",
        email: {
          required: "Мыло запихни",
          email: "Не так"
        }
      }
    });  
  }

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("(999) +888");

  //Smoothscroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });
  //сам скрипт плавной прокрутки до секции, на которую ведет локальная ссылка, работает для всех ссылок, начинающихся на #
  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();

});

/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
}); */
/* 
document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};   */


