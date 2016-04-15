var $grid = $('.grid');
var $plesiosaurs = $('.plesiosaurs');
var $dinosaurs = $('.dinosaurs');
var $pterosaours = $('.pterosaours');

$grid.waypoint(function (direction) {
  if (direction == 'down') {
    $grid.addClass('js-grid-animate');
  } else {
  $grid.removeClass('js-grid-animate');
}
}, { offset: '50%' });

$plesiosaurs.waypoint(function (direction) {
  if (direction == 'down') {
    $plesiosaurs.addClass('js-plesiosaurs-animate');
  } else {
  $plesiosaurs.removeClass('js-plesiosaurs-animate');
}
}, { offset: '50%' });

$dinosaurs.waypoint(function (direction) {
  if (direction == 'down') {
    $dinosaurs.addClass('js-dinosaurs-animate');
  } else {
  $dinosaurs.removeClass('js-dinosaurs-animate');
}
}, { offset: '50%' });

$pterosaours.waypoint(function (direction) {
  if (direction == 'down') {
    $pterosaours.addClass('js-pterosaours-animate');
  } else {
  $pterosaours.removeClass('js-pterosaours-animate');
}
}, { offset: '50%' });
