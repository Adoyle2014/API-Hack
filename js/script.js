$(document).ready(function() {

	SlideEffect();

	GetSearchTerms();

	

});

function GetSearchTerms() {
	$("#search-find").on("click", function(event) {
		event.preventDefault();
		terms = $("#search").val();
		GetRequest(terms);
	});
}


function GetRequest(searchTerms){
	var params = {
		q: searchTerms,
		
	};
	url = "http://www.tastekid.com/api/similar";

	$.getJSON(url, params, function(data) {
		showResults(data.Search);
	});
}

function ShowResults(results) {

}





/*-----------------------Slide Animations----------------------*/
function SlideEffect() {
	toggle = 2;	

	$("#left-title").on('click', function(event) {
		event.preventDefault();

		if (toggle != 1) {	
			$("#youtube-results").css({
				display: 'none'
			});
			$("#left-title").addClass('sactive');
			$("#right-title").removeClass('sactive')	;			
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
			$("#suggested-media").css({
				display: 'none'
			});	
			$("#right-title").addClass('sactive');
			$("#left-title").removeClass('sactive')				
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
}
