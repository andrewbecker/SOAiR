// ***** Arriving ***** //

$('#arrivingAirport').focus(function(){
	$('#arrivingAirport').keydown(function(){
		var searchField = $(this).val();
		var myExp = new RegExp(searchField, "i");
		var counter = 0;
		var maxCount = 5;
		$.getJSON( 'airport.json', function(data) { 
			var output = '<ul class="searchResults">';
				$.each(data, function(key, val){
					if((val.name.search(myExp) != -1) || (val.iata.search(myExp) != -1)){
						counter++;
						output += '<li>';
						output += val.iata + " - " + val.name;
						output += '</li>';
					} // if
					if(counter === maxCount){ return false; }
				}); //each
			output += '</ul>';
			//output += '<div><span class="close">close</span></div>';
			$('#arrivalresults').html(output);

			
		if($('#arrivalresults').has('li').length === 0){
				$('#arrivalresults').hide();
			} else {
				$('#arrivalresults').show();
			}
			
		}); //get JSON
	}); //keyup
}); //mouseenter
$('#arrivalresults').on( "mousedown", "li", function(){
	var airportVal = $(this).html();
	$('#arrivingAirport').val(airportVal);
	$('#arrivingAirport').unbind('keyup');
	$('#arrivalresults').hide();
	// $('#arrivingAirport').html($(this).html());
});

$('#arrivingAirport').blur(function(){
	$('#arrivingAirport').unbind('keyup');
	$('#arrivalresults').hide();
})



// $('#arrivalresults').on("click", ".close", function(){
// 	$('#arrivingAirport').unbind('keyup');
// 	$('#arrivalresults').hide();
// })


// ******   DEPARTING   ****** //

$('#departingAirport').focus(function(){
	$('#departingAirport').keydown(function(){
		var searchField = $(this).val();
		var myExp = new RegExp(searchField, "i");
		var counter = 0;
		var maxCount = 5;
		$.getJSON( 'airport.json', function(data) { 
			var output = '<ul class="searchResults">';
				$.each(data, function(key, val){
					if((val.name.search(myExp) != -1) || (val.iata.search(myExp) != -1)){
						counter++;
						output += '<li>';
						output += val.iata + " - " + val.name;
						output += '</li>';
					} // if
					if(counter === maxCount){ return false; }
				}); //each
			output += '</ul>';
			//output += '<div><span class="close">close</span></div>';
			$('#departingresults').html(output);
			
			if($('#departingresults').has('li').length === 0){
				$('#departingresults').hide();
			} else {
				$('#departingresults').show();
			}

		}); //get JSON
	}); //keyup
}); //mouseenter
$('#departingresults').on( "mousedown", "li", function(){
	var airportVal = $(this).html();
	$('#departingAirport').val(airportVal);
	$('#departingAirport').unbind('keyup');
	$('#departingresults').hide();
});

// $('#departingresults').on("click", ".close", function(){
// 	$('#departingAirport').unbind('keyup');
// 	$('#departing').hide();
// })

$('#departingAirport').blur(function(){
	$('#departingAirport').unbind('keyup');
	$('#departingresults').hide();
})