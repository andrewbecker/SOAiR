$(document).ready(function(){

	$.datepicker.setDefaults({
		changeMonth: true,
		changeYear: true,
		minDate: 0,
		maxDate: "+1y",
		defaultDate: "+1d"
	})

	$('#depart_date').datepicker({
		onClose: function( selectedDate ) {
        $( "#return_date" ).datepicker( "option", "minDate", selectedDate );
      }
	});
	$('#return_date').datepicker({
		onClose: function( selectedDate ) {
        $( "#depart_date" ).datepicker( "option", "maxDate", selectedDate );
      }
	});

});