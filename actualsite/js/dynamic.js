$(document).ready(



	function() {
		$(".big-radio").click(

			function(clickEvent) {

				var map = $(this).attr("value");
				var kimauttison = document.getElementById('kim-auttison');
				var ccc = document.getElementById('ccc');
				var petropolis = document.getElementById('petropolis');
				
				if (map == 'surrey') {
					kimauttison.style.display="block";
					ccc.style.display="none";
					petropolis.style.display="none";
				}

				if (map == 'coquitlam') {
					kimauttison.style.display="none";
					ccc.style.display="block";
					petropolis.style.display="none";
				}

				if (map == 'burnaby') {
					kimauttison.style.display="none";
					ccc.style.display="none";
					petropolis.style.display="block";
				}

			}
			);
	}

	


	);



