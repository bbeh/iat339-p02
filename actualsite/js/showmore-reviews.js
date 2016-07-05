$(document).ready(

    function() {
        console.log("ready");

        if ($("#more-reviews").is(":visible")) {
            $("#more-reviews").hide();
            console.log("reviews are hidden");
            $("#showmore-button").fadeIn(500).css("display", "inline-block");
        } else {
            //do nothing
        }

        if ($("#add-review").is(":visible")) {
            $("#add-review").hide();
            console.log("add review hidden");
            $("#addmore-button").fadeIn(500).css("display", "inline-block");
        } else {
            //do nothing
        }
    });

$(document).ready(

    function() {

        $(".showmore-button").click(

            function(clickEvent) {

                console.log("show more clicked");

                if ($("#more-reviews").is(":visible")) {
                    //should already be hidden because of above
                } else {
                    $("#showmore-button").fadeOut(500);
                    $("#more-reviews").fadeIn(1500);
                }

            }


        );

        $(".addmore-button").click(

            function(clickEvent) {

                console.log("add more clicked");

                if ($("#add-review").is(":visible")) {
                    //should already be hidden because of above
                } else {
                    $("#addmore-button").fadeOut(500);
                    $("#showmore-button").fadeOut(500);
                    $("#add-review").slideDown(1500);
                }

            }


        );

    }


);