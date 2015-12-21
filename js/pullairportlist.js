var search5 = "US";
var search1 = "NA";
var search2 = "airport";
var search3 = "large";
var search4 = "medium";
var myExp = new RegExp(search1, "i");
var myExp2 = new RegExp(search2, "i");
var myExp3 = new RegExp(search3, "i");
var myExp4 = new RegExp(search4, "i");
var myExp5 = new RegExp(search5, "i");
$.getJSON('airports.json', function(data){

	var output = '[<br>';

	$.each(data, function(key, val){

		//if((val.continent.search(myExp) != -1) && (val.type.search(myExp2) != -1) && ((val.size.search(myExp3) != -1) || (val.size.search(myExp4) != -1)) ){

		//if((val.continent.search(myExp) != -1) && (val.type.search(myExp2) != -1) && (val.size.search(myExp4) != -1) && (val.lat > 18) && (val.lat < 49) ){

		if((val.iso.search(myExp5) != -1) && ((val.size.search(myExp3) != -1)  || (val.size.search(myExp4) != -1)) ){
			
			console.log("insearch");
			output += '{<br>';
			output += '"iata": "' + val.iata +'",<br>';
			output += '"name": "' + val.name +'"<br>';

			output += '},<br>';
		}


	});
	output += ']';
	$('div').html(output);
});