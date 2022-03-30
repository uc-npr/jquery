$(document).ready(function(){
    // It run when document ready
    $("button.hide_p").click(function(){
        $(".hide_me").hide();
    });
    // selectors same as CSS


    // Jquary Events
    $(".event1").click(function(){
        $(this).css("background-color","red");
    });

    $(".event2").dblclick(function(){
        $(this).css("background-color","red");
    });

    $(".event3").mouseenter(function(){
        $(this).css("background-color","red");
    });

    $(".event4").mouseleave(function(){
        $(this).css("background-color","red");
    });

    $("event5").mousedown(function(){
        $(this).css("background-color","red");
    });

    $(".event6").mouseup(function(){
        $(this).css("background-color","red");
    });

    $(".event7").hover(function(){
        $(this).css("background-color","red");
    });

    $(".event8").focus(function(){
        $(this).css("background-color","red");
    });

    $(".event9").blur(function(){
        $(this).css("background-color","red");
    });

    // hide and show
    // $("button.hide_p").click(function(){
    //     $(".hide_me").hide();
    // })

    $(".hide_me").hide();
    $("button.hide_p").click(function(){
        $(".hide_me").show();
    })
});