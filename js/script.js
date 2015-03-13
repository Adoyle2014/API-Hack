$(document).ready(function() {

	
	Main();
	

	

});

function Main() {
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
    		console.log(result);		
		$.each(result.Similar.Results, function(i, item) {
			var resultTkItem = ShowTkResults(item);
			var resultYtItem = GetYtRequest(item);
			$('#suggested-media').append(resultTkItem);			
		});		
		SlideEffect();		
	});	
    	console.log(url);
};

function ShowTkResults(results) {	
	// clone our result template code
	var result = $('.templates .flex-item').clone();

	var resultItemImage = result.find('img');


	var resultItemTitle = result.find('p.result-item-title');
	resultItemTitle.html(results.Name)

	var resultItemType = result.find('p.result-item-type');
	resultItemType.html(results.Type)

	return result;

};

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
			console.log(data);
			dataReturn = data;
			ShowYtResults(data);

		});
	}



function ShowYtResults() {


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

	
