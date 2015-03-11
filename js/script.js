$(document).ready(function() {

	toggle = 2;

$("#left-title").on('click', function(event) {
	event.preventDefault();

	if (toggle != 1) {
	$("#slide-selectors").css({
		'text-align': 'right'
	});	
	$("#youtube-results").css({
		display: 'none'
	});
	$("#suggested-media").show("slide", 1000);
	$("#suggested-media").css({
		display: '-webkit-box',
		display: '-moz-box',
		display: '-ms-flexbox',
		display: '-webkit-flex',
		display: 'flex'
	});
	
	toggle = 1;
}

});

$("#right-title").on('click', function(event) {
	event.preventDefault();	

	if (toggle != 0) {

	$("#slide-selectors").css({
		'text-align': 'left'
	});
	$("#suggested-media").css({
		display: 'none'
	});
	$("#youtube-results").show("slide", 1000);
	$("#youtube-results").css({
		display: '-webkit-box',
		display: '-moz-box',
		display: '-ms-flexbox',
		display: '-webkit-flex',
		display: 'flex'
	});
	
	toggle = 0;
}

});


	
});