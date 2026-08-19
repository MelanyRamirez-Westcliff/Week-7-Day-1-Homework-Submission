// User interaction with activity table
$(document).ready(function() {

    $("tbody td").click(function() {

        var content = $(this).text();

        // Do not select the activity-name column
        if ($(this).index() == 0) {
            return;
        }

        // Do not allow unavailable activities
        if (content != "Not Available") {

            // Find which cliff column was clicked
            var columnIndex = $(this).index();

            // Get the cliff name from the heading
            var cliffName = $("thead th").eq(columnIndex).text();

            // Select or deselect the cell
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")) {

                // Show the display box
                $("#displaySelected").css("visibility", "visible");
                $("#displaySelected").css("margin-top", "2em");

                // Add activity and cliff to the list
                $("#result").append(
                    "<p>" + content + " at " + cliffName + "</p>"
                );

            } else {

                // Remove the activity from the list
                $("#result p").filter(function() {
                    return $(this).text() == content + " at " + cliffName;
                }).remove();

                // Hide box if there are no selected activities
                if ($("#result p").length == 0) {
                    $("#displaySelected").css("visibility", "hidden");
                    $("#displaySelected").css("margin-top", "0");
                }
            }
        }
    });

});