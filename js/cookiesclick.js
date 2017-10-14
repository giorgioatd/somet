// Hide cookie-message on click

$(document).ready(function() {
	$('.cookbutton').click(function() {
		$('.cookie-message').toggleClass('close');
	});
});
