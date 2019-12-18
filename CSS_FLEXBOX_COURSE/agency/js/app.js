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
});
