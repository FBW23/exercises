$(document).ready(function() {		
	$(".showList").click(function() {		
		$(".full_list").slideToggle(400, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});		
	});	
});