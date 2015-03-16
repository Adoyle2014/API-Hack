$(document).ready(function() {
	
	
	Main();
	

	

});

function Main() {
	ytThumb = [];
	tkItemCount = 0;
    resultYtItem = [];


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
	});
	
}

/*----------------Get API Data------------------------*/
var GetTkRequest = function(searchTerms, selectedType){
	var params = {
		q: searchTerms,
		type: selectedType,
		info: 1,
        k: "126767-TheMedia-0C0RD6J9"
	};
	url = "http://www.tastekid.com/api/similar";
	
	var result = $.ajax({
      		url: url,
      		data: params,
      		dataType: 'jsonp'
    	})

    	.done(function(result) {
            $.each(result.Similar.Results, function(i, item) {

			resultYtItem.push(item.yID) ;
			var resultTkItem = ShowResults(item);
			$('#suggested-media').append(resultTkItem);
			tkItemCount++			
		});
        SlideEffect();
            GetYtRequest();
	});

};

function ShowResults(results) {	

	return $("<div/>").addClass("flex-item").addClass("result-item").attr('data-id', tkItemCount).append(
		 $("<p/>").addClass("result-item-title").html(results.Name),
		 $("<p/>").addClass("result-item-type").html(results.Type)
	);
	
}

//match the title to the result-item-title?

function GetYtRequest() {
    $.each(resultYtItem, function (index, value) {

        var videoId = value;
        var params = {
            part: 'snippet',
            key: 'AIzaSyDM9phtsd2BSBMrzDcwTDy-AE51tZO-qr8',
            q: videoId,
            maxResults: '1'
        };
        url = 'https://www.googleapis.com/youtube/v3/search';

        $.getJSON(url, params, function (data) {
            console.log(data);
            ytThumb.push(data.items.snippet.thumbnails.default.url);

        });

        //ShowYtResults();
    });
    console.log("ytThumb - " + ytThumb);

}

function ShowYtResults() {

    $.each(ytThumb, function(index, value) {
        $(".result-item").append($("<img/>").attr('src', value));
    });

}


    /*-----------------------Slide Animations----------------------*/
    function SlideEffect() {

        $("#suggested-media").show("slide", {direction: 'left', easing: 'easeInCirc'}, 1000);
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

	
