$(document).ready(function() {
    /*    
    //hides only the panel that was clicked
      $(".theButton").click(function(){
      $(this).hide();
       })

    //adds  a fadeTo to all panels when a panel is clicked
    $(".theButton").click(function(){
    	$  ("#panel .container").siblings().fadeTo(1000, .5);
       });
    */
    //when button clicked all fade to 50% opacity
    $(".theButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, 0.5)
    })
    //when button clicked all return to 100% opacity
    $(".superButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, 1)
    })
    /*
    //mouse enter button turns black
    $(".theButton").mouseover(function() {
        $(this).addClass("makeBlack")
    })
    
    //mouse leaves button reverts from black
    $(".theButton").mouseleave(function() {
        $(this).removeClass("makeBlack")
    })
 */
    //changes text in super button to rgb color code
    $(".theButton").click(function() {
        var panelcolor = $(this).css("background-color")
        $(".superButton").text(panelcolor)
    })

});
