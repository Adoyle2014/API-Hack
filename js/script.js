$(document).ready(function() {

	SlideEffect();

	GetSearchTerms();

	

});




/*----------Get user input---------------*/
function GetSearchTerms() {
	$("#search-find").on("click", function(event) {
		event.preventDefault();
		terms = $("#search").val();
		GetRequest(terms);
	});
}

/*----------------Get API Data------------------------*/
var GetRequest = function(searchTerms){
	var params = {
		q: searchTerms,
		info: 1		
	};
	url = "http://www.tastekid.com/api/similar";

	var result = $.ajax({
      		url: url,
      		data: params,
      		dataType: 'jsonp'
    	})

    	.done(function(result) {
		//console.log(result);
		$.each(result.Similar.Results, function(i, item) {
			var resultItem = ShowResults(item);
			$('#results').append(resultItem);
			//console.log(resultItem);
		});
	})

	
}

function ShowResults(results) {
	//console.log(results);
	// clone our result template code
	var result = $('.templates #suggested-media').clone();

	var resultTitle = result.find('.result-item-title');
	resultTitle.html('<p>' + results.Name + '</p>')
	console.log(result);
	//return result;
};






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
