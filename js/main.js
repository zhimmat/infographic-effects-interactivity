var $body = $('body');

var $banner = $('.banner');
var $whitenurses = $('.whitenurses');
var $bluenurses = $('.bluenurses');
var $icons = $('.icons');
var $bottom = $('.bottom');

var $btnMove = $('.btn-move');
var $ambulance = $('.ambulance');

$('ul').localScroll();

$banner.waypoint(function (direction) {
  if (direction == 'down') {
    $banner.addClass('js-banner-animate');
  } else {
    $banner.removeClass('js-banner-animate');
  }
}, {offset: 'bottom-in-view'});
$whitenurses.waypoint(function (direction) {
  if (direction == 'down') {
    $whitenurses.addClass('js-whitenurses-animate');
  } else {
    $whitenurses.removeClass('js-whitenurses-animate');
  }
}, {offset: 'bottom-in-view'});

$bluenurses.waypoint(function (direction) {
  if (direction == 'down') {
    $bluenurses.addClass('js-bluenurses-animate');
  } else {
    $bluenurses.removeClass('js-bluenurses-animate');
  }
}, {offset: 'bottom-in-view'});

$icons.waypoint(function (direction) {
  if (direction == 'down') {
    $icons.addClass('js-icons-animate');
  } else {
    $icons.removeClass('js-icons-animate');
  }
}, {offset: 'bottom-in-view'});

$bottom.waypoint(function (direction) {
  if (direction == 'down') {
    $bottom.addClass('js-bottom-animate');
  } else {
    $bottom.removeClass('js-bottom-animate');
  }
}, {offset: 'bottom-in-view'});

$btnMove.on('click', function () {
  $ambulance.toggleClass('btn-slide');
});
