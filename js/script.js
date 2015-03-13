$(document).ready(function() {
	
	
	Main();
	

	

});

function Main() {
	ytThumb = ''
	tkItemCount = 0;


	GetSearchTerms();


}


/*----------------Get user input-----------------------*/
function GetSearchTerms() {
	$("#search-find").on("click", function(event) {
		event.preventDefault();
		$("#suggested-media").empty();
		type = $("#select-type option:selected").text();
		terms = $("#search").val();
		GetTkRequest(terms, type);
		$("#search").val('');
		console.log(type + '-' + terms);
		
	});
	
}

/*----------------Get API Data------------------------*/
var GetTkRequest = function(searchTerms, selectedType){
	var params = {
		q: searchTerms,
		type: selectedType,
		info: 1		
	};
	url = "http://www.tastekid.com/api/similar";
	
	var result = $.ajax({
      		url: url,
      		data: params,
      		dataType: 'jsonp'
    	})

    	.done(function(result) {
    				
		$.each(result.Similar.Results, function(i, item) {

			var resultYtItem = GetYtRequest(item);
			var resultTkItem = ShowResults(item);
			//console.log("TK - " + resultTkItem);			
			//console.log("YT - " + resultYtItem);
			$('#suggested-media').append(resultTkItem);
			tkItemCount++			
		});		
		SlideEffect();		
	});	
    	
};

function ShowResults(results) {	
	console.log(ytThumb);
	return $("<div/>").addClass("flex-item").addClass("result-item").attr('data-id', tkItemCount).append(
		 $("<img/>").attr('src', ytThumb),	
		 $("<p/>").addClass("result-item-title").html(results.Name),
		 $("<p/>").addClass("result-item-type").html(results.Type)
		

	);
	
};

//match the title to the result-item-title?

function GetYtRequest(tkData) {
	var videoId = tkData.yID
	var params = {
    		part: 'snippet',
    		key: 'AIzaSyDM9phtsd2BSBMrzDcwTDy-AE51tZO-qr8',
    		q: videoId,
    		maxResults:'1'
    		};
  		url = 'https://www.googleapis.com/youtube/v3/search';

		$.getJSON(url, params, function(data){
			dataReturn = data;
			FormatYtResults(data);
			

		});
	}



function FormatYtResults(results) {
	//console.log(results);
	ytThumb = (results.items[0]).snippet.thumbnails.default.url;
	//ytThumb = ((results.items[0]).snippet.thumbnails.default.url);
	console.log(ytThumb);
	 

}

/*-----------------------Slide Animations----------------------*/
function SlideEffect() {			
	
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
};		

	
