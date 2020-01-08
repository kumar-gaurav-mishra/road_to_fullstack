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
  // accordion
  $('.accordion__btn').click(function() {
    $('.accordion__btn')
      .not(this)
      .removeClass('rotate');
    $('.accordion__btn')
      .not(this)
      .parent()
      .next()
      .slideUp();
    $(this).toggleClass('rotate');
    $(this)
      .parent()
      .next()
      .slideToggle();
  });
  // team members
  // iif
  (() => {
    const data = [
      {
        id: 0,
        name: 'john doe',
        job: 'developer',
        text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['eat', 'drink', 'sleep'],
        img: 'img/team-1.jpg'
      },
      {
        id: 1,
        name: 'tom orange',
        job: 'designer',
        text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['paint', 'draw', 'run'],
        img: 'img/team-2.jpg'
      },
      {
        id: 2,
        name: 'albert cupid',
        job: 'accountant',
        text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['math', 'physics', 'more math'],
        img: 'img/team-3.jpg'
      },
      {
        id: 3,
        name: 'dog hugo',
        job: 'intern',
        text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
        favorites: ['bark', 'run', 'bite'],
        img: 'img/team-4.jpg'
      }
    ];
    $('.team-img__item').click(function() {
      $('.team-img__item')
        .not(this)
        .removeClass('active');
      $(this).addClass('active');
      //change/add data
      let id = $(this).attr('data-id');
      let userData = data[id];
      $('.team-info__member-name').text(userData.name);
      $('.team-info__member-job').text(userData.job);
      $('.team-info__member-text').text(userData.text);
      $('.team-info__img').attr('src', userData.img);
      $('.team-info__member-single-favorite-text').each(function(index) {
        $(this).text(userData.favorites[index]);
      });
    });
  })();
});