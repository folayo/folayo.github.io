$(function() {
	var count = 0;
	$('#profession').hide().fadeIn(3400);
	$('#navbar-btn').click(function() {
		count = count + 1;
		if(count % 2 == 0){
			$('#navbar-list').css({"background": "none"});
		}
		else {
			$('#navbar-list').css({"background": "#2D3139"});
		}
	});
	$(window).on('resize', (function() {
		if($(window).width() > 768){
			$('#navbar-list').css({"background": "none"});
		}
		else{
			$('#navbar-list').css({"background": "#2D3139"});
		}
	}))
});
