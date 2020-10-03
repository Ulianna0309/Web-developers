
$(document).ready(function () {
  $('.header-navigation__btn').click(function () {
    $(this).toggleClass('header-navigation__btn--active ');
    $(".header-navigation__list").toggleClass("header-navigation__list--active");
  });
});

/**/