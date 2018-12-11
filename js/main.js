$('.welcome-slider').slick({
	infinite: true,
	dots : true,
	arrows : false,
	customPaging: function (slider, index) {
		return ''
	}
});

$('.grid').masonry({
  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 0,
});

new WOW().init();