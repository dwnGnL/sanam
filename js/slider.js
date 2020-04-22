var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  effect: "fade",
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
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
    nextEl: '.next',
    prevEl: '.prev',
  },
});




window.onresize = () => {
  var slideItem = document.querySelectorAll('.circle-swiper-slide');
  for (let i = 0; i < slideItem.length; i++) {
    slideItem[i].style.height = `${slideItem[i].clientWidth}px`;
  };  
}