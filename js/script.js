 var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      effect:"fade",
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	 		loop: true,
			loopedSlides: 4
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 3,
      touchRatio: 0.2,
      slideToClickedSlide: true,
			loop: true,
			loopedSlides: 4
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


    var swiper = new Swiper('.fade-gallery', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
    });

    $(document).ready(function(){
      $("#header").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 700);
      });
  });