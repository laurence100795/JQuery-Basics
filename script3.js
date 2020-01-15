//waits until page is ready
$(document).ready(function() {
    $("button").on("click", function() {
        $(this).prev().slideDown("slow")
    });
    $(".card").click(function() {
        $(this).toggleClass("pink")
    });
    $("#select_btn").click(function(){
        $(".card:not(.pink)").hide()
    })
    $("#all_btn").click(function() {
        $(".card").show()
    })
});
