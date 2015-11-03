$(document).ready(function(){

	window.onscroll = function(e){
		var doc = document.documentElement, body = document.body;
		var top = (doc && doc.scrollTop || body && body.scrollTop || 0);

		if(top > 140) {
			$('.scroll').fadeIn('slow');
		} else {
			$('.scroll').fadeOut('fast');
		}
	}
})