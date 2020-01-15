$(document).ready(function() {
    /*$("#stream1_btn").mouseenter(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });*/
    $("p").mouseenter(function() {
        $(".card_para").addClass("highlight_stream")
    });
    $("p").mouseleave(function() {
        $(".card_para").removeClass("highlight_stream")
    });
    $("#hl_html").hover(function() {
        $("#hl_mysql").removeClass("highlight_blue")
        $("#hl_python").removeClass("highlight_blue")
        $("#hl_css").removeClass("highlight_blue")
        $("#hl_django").removeClass("highlight_blue")
        $("#hl_jquery").removeClass("highlight_blue")
        $("#hl_html").addClass("highlight_blue")
    });
    $("#hl_mysql").hover(function() {
        $("#hl_html").removeClass("highlight_blue")
        $("#hl_python").removeClass("highlight_blue")
        $("#hl_css").removeClass("highlight_blue")
        $("#hl_django").removeClass("highlight_blue")
        $("#hl_jquery").removeClass("highlight_blue")
        $("#hl_mysql").addClass("highlight_blue")
    });
    $("#hl_python").hover(function() {
        $("#hl_html").removeClass("highlight_blue")
        $("#hl_mysql").removeClass("highlight_blue")
        $("#hl_css").removeClass("highlight_blue")
        $("#hl_django").removeClass("highlight_blue")
        $("#hl_jquery").removeClass("highlight_blue")
        $("#hl_python").addClass("highlight_blue")
    });
    $("#hl_css").hover(function() {
        $("#hl_html").removeClass("highlight_blue")
        $("#hl_mysql").removeClass("highlight_blue")
        $("#hl_python").removeClass("highlight_blue")
        $("#hl_django").removeClass("highlight_blue")
        $("#hl_jquery").removeClass("highlight_blue")
        $("#hl_css").addClass("highlight_blue")
    });
    $("#hl_django").hover(function() {
        $("#hl_html").removeClass("highlight_blue")
        $("#hl_mysql").removeClass("highlight_blue")
        $("#hl_python").removeClass("highlight_blue")
        $("#hl_css").removeClass("highlight_blue")
        $("#hl_jquery").removeClass("highlight_blue")
        $("#hl_django").addClass("highlight_blue")
    });
    $("#hl_jquery").hover(function() {
        $("#hl_html").removeClass("highlight_blue")
        $("#hl_mysql").removeClass("highlight_blue")
        $("#hl_python").removeClass("highlight_blue")
        $("#hl_css").removeClass("highlight_blue")
        $("#hl_django").removeClass("highlight_blue")
        $("#hl_jquery").addClass("highlight_blue")
    });
    $(".bottom_button").mouseenter(function() {
        $("body").css("background-color", "black")
    });
    $(".bottom_button").mouseleave(function() {
        $("body").css("background-color", "#eee123")
    });
    $("#first_button").click(function() {
        $("#first_button").hide("slow");
    });
    $("#second_button").click(function() {
        $("#second_para").toggle("slow");
    });
    $("#third_button").click(function() {
        $("#third_para").slideToggle("slow");
    });
    $("#fourth_button").mouseenter(function() {
        $("#fourth_button").fadeTo(1000, 0.5);
    });
    $("#fourth_button").mouseleave(function() {
        $("#fourth_button").fadeTo(1000, 1);
    });


    $(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});
    $("p").on("click", function(){
	$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are
		within this paragraph*/
	});
});
