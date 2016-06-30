$(document).ready( 

	function() {

		$(".showmore-button").click(

			function(clickEvent) {

				console.log ("clicked");

			    var showmore = document.getElementById('product-showmore');
			    var showmorebtn = document.getElementById('showmore-button');

			    if ( $("#product-showmore").is(":visible")) {
			    	//is visible do stuff
			    } else {
			    	$("#showmore-button").hide();	
			    	$("#product-showmore").fadeIn(1500);
			    }

			}

	
		);

	}
	);