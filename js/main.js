var $banner = $('.banner');
var $whitenurses = $('.whitenurses');
var $bluenurses = $('.bluenurses');
var $icons = $('.icons');
var $bottom = $('.bottom');

$banner.waypoint(function (direction) {
  if (direction == 'down') {
    $banner.addClass('js-banner-animate');
  } else {
  $banner.removeClass('js-banner-animate');
}
}, { offset: '50%' });

$whitenurses.waypoint(function (direction) {
  if (direction == 'down') {
    $whitenurses.addClass('js-whitenurses-animate');
  } else {
  $whitenurses.removeClass('js-whitenurses-animate');
}
}, { offset: '30%' });

$bluenurses.waypoint(function (direction) {
  if (direction == 'down') {
    $bluenurses.addClass('js-bluenurses-animate');
  } else {
  $bluenurses.removeClass('js-bluenurses-animate');
}
}, { offset: '30%' });

$icons.waypoint(function (direction) {
  if (direction == 'down') {
    $icons.addClass('js-icons-animate');
  } else {
  $icons.removeClass('js-icons-animate');
}
}, { offset: '50%' });

$bottom.waypoint(function (direction) {
  if (direction == 'down') {
    $bottom.addClass('js-bottom-animate');
  } else {
  $bottom.removeClass('js-bottom-animate');
}
}, { offset: '80%' });
