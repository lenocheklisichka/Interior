$(document).ready(function () {
  $('.header__burger-menu').click(function () {
    $('.header__modal').animate({
      right: '0px'
    });
  })
  $('.header__btn-close').click(function () {
    $('.header__modal').animate({
      right: '-260px'
    });
  });
});