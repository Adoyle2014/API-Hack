$(document).ready(function() {

$("#left-title").on('click', function(event) {
	event.preventDefault();
	$("#slide-selectors").css({
		'text-align': 'right'
	});	
	$("#youtube-results").css({
		display: 'none'
	});
	$("#suggested-media").css({
		display: '-webkit-box',
		display: '-moz-box',
		display: '-ms-flexbox',
		display: '-webkit-flex',
		display: 'flex'
	});


});

$("#right-title").on('click', function(event) {
	event.preventDefault();	
	$("#slide-selectors").css({
		'text-align': 'left'
	});
	$("#suggested-media").css({
		display: 'none'
	});
	$("#youtube-results").css({
		display: '-webkit-box',
		display: '-moz-box',
		display: '-ms-flexbox',
		display: '-webkit-flex',
		display: 'flex'
	});


});
	
});