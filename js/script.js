$(document).ready(function() {

	toggle = 2;

	
	

$("#left-title").on('click', function(event) {
	event.preventDefault();

	if (toggle != 1) {
	
	$("#youtube-results").css({
		display: 'none'
	});
	$(".border-left").show("slide", { direction: 'left', easing: 'easeInCirc' }, 1000);
	$("#suggested-media").show("slide", { direction: 'left', easing: 'easeInCirc' }, 1000);
	$("#suggested-media").css({
		display: '-webkit-box',
		display: '-moz-box',
		display: '-ms-flexbox',
		display: '-webkit-flex',
		display: 'flex'
	});
	$(".more").css({
		display: 'block'
	});
	
	toggle = 1;
}

});

$("#right-title").on('click', function(event) {
	event.preventDefault();	

	if (toggle != 0) {
	
	$(".border-right").show("slide", { direction: 'left', easing: 'easeInCirc' }, 1000);
	$("#suggested-media").css({
		display: 'none'
	});
	$("#youtube-results").show("slide", { direction: 'right', easing: 'easeInCirc'}, 1000);
	$("#youtube-results").css({
		display: '-webkit-box',
		display: '-moz-box',
		display: '-ms-flexbox',
		display: '-webkit-flex',
		display: 'flex'
	});
	$(".more").css({
		display: 'block'
	});

	
	toggle = 0;
}

});


	
});