$( document ).ready(function() {
var $grid =  $('.images').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-width',
    percentPosition: true
  })
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
