$(document).ready(function() {
    $("#stream1_btn").mouseenter(function() {
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
    });
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
        $("body").css("background-color","black")
    });
    $(".bottom_button").mouseleave(function() {
        $("body").css("background-color","#eee123")
    });
});
