$(document).ready(function() {
  //preloader
  $('.preloader').fadeOut();
  // navBtn
  $('.navBtn').click(function() {
    $('.nav').toggleClass('nav__show');
  });
  //Video Switch
  $('.video__switch-container').click(function() {
    const value = $('.video__switch-btn').hasClass('btnSlide');
    if (value) {
      $('.video__switch-btn').removeClass('btnSlide');
      $('#video')
        .get(0)
        .play();
    } else {
      $('.video__switch-btn').addClass('btnSlide');
      $('#video')
        .get(0)
        .pause();
    }
  });

  // magnific popup
  $('#projects__modal').magnificPopup({
    delegate: 'a', //child items selector, by clicking it popup will open
    type: 'image',
    gallery: {
      //options for gallery
      enabled: true
    }
    //other options
  });
});
// accordion
$('.accordion__btn').click(function () {
  $('.accordion__btn').not(this).removeClass('rotate');
  $('.accordion__btn').not(this).parent().next().slideUp();
  $(this).toggleClass('rotate');
  $(this).parent().next().slideToggle();
})
