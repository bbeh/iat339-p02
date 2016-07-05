$(document).ready(

    function() {
        console.log("ready");

        if ($("#product-showmore").is(":visible")) {
            $("#product-showmore").hide();
            console.log("products are hidden");
            $("#showmore-button").fadeIn(500).css("display", "inline-block");
        } else {
            //do nothing
        }
    });

$(document).ready(

    function() {

        $(".showmore-button").click(

            function(clickEvent) {

                console.log("clicked");

                if ($("#product-showmore").is(":visible")) {
                    //should already be hidden because of above
                } else {
                    $("#showmore-button").fadeOut(500);
                    $("#product-showmore").fadeIn(500).css("display", "inline-block");
                }

            }


        );

    }


);