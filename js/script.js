$(document).ready(function() {

	toggle = 1;

$("#left-title").on('click', function(event) {
	event.preventDefault();

	if (toggle === 1) {
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
	$("#curtain").show("slide", 1000);
	toggle = 0;
}

});

$("#right-title").on('click', function(event) {
	event.preventDefault();	

	if (toggle === 0) {
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
	$("#curtain").show("slide", 1000);
	toggle = 1;
}

});


	
});