$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid positive number.");
            return;
        }

        let total = hours * rate;
        $("#total").text(total.toFixed(2));
    });
});
