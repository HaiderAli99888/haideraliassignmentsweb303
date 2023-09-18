/*
	WEB 303 Assignment 1 - jQuery
	{Haider Ali}
*/

$(document).ready(function () {
	$('#yearly-salary, #percent').on('keyup', function () {
		var salary = parseFloat($('#yearly-salary').val());
		var percent = parseFloat($('#percent').val());
		var amount = (salary * percent) / 100;
		$('#amount').text('$' + amount.toFixed(2));
	});
});

