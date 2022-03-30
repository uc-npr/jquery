$(document).ready(function(){
    // It run when document ready
    $("button.hide_p").click(function(){
        $(".hide_me").hide();
    });
    // selectors same as CSS


    // Jquary Events
    // $(".event1").click(function(){
    //     $(this).css("background-color","red");
    // });

    // $(".event2").dblclick(function(){
    //     $(this).css("background-color","red");
    // });

    // $(".event3").mouseenter(function(){
    //     $(this).css("background-color","red");
    // });

    // $(".event4").mouseleave(function(){
    //     $(this).css("background-color","red");
    // });

    // $("event5").mousedown(function(){
    //     $(this).css("background-color","red");
    // });

    // $(".event6").mouseup(function(){
    //     $(this).css("background-color","red");
    // });

    // $(".event7").hover(function(){
    //     $(this).css("background-color","red");
    // });

    // $(".event8").focus(function(){
    //     $(this).css("background-color","red");
    // });

    // $(".event9").blur(function(){
    //     $(this).css("background-color","red");
    // });
    
    // Hide and show

    // hide and show
    // $("button.hide_p").click(function(){
    //     $(".hide_me").hide();
    // })

    // $(".hide_me").hide();
    // $("button.hide_p").click(function(){
    //     $(".hide_me").show(1000);
    // })

    // $(".hide_me").hide();
    // $("button.hide_p").click(function(){
    //     $("p.hide_me").toggle();
    // })


    $("button.ft").click(function(){
        $("p").fadeToggle();
    });

    $("button.fi").click(function(){
        $("p").fadeIn();
    });

    $("button.fo").click(function(){
        $("p").fadeOut();
    });

    $("button.fto").click(function(){
        $("p").fadeTo("slow",0.5);
    });

    // slide down

    $("#sd").click(function(){
        $("#content").slideDown("slow");
    });

    $("#su").click(function(){
        $("#content").slideUp("slow");
    });

    $("#st").click(function(){
        $("#content").slideToggle("slow");
    });

    // animation

    $(".left_animation").click(function(){
    $(".box").animate({
        left: "250px",
        opacity: 0.5,
    });
    });

    $(".animation1").click(function(){
        $(".box1").animate({
            width: "+=150px",
        });
    });

    $(".animation2").click(function(){
        $(".box2").animate({
            width: "+=150px",
        });
        $(".box2").animate({
            height: "+=150px",
        });
        $(".box2").animate({
            width: "-=150px",
        });
        $(".box2").animate({
            height: "-=150px",
        });
    });


    // stop
    $(".stop").click(function(){
        $(".box2").stop();
    });

    $("#st2").click(function(){
        $("#content2").slideToggle(3000);
    });

    $(".stop_slide").click(function(){
        $("#content2").stop();
    });

    //callback

    // $(".callback").click(function(){
    //     $("p.hide_p").hide(2000,function(){
    //         $("p.hide_p").show(1000);
    //     });
    // });

    // chaining

    $(".callback").click(function(){
        $("p.hide_p").hide(2000).show(1000);
    });

    // get content
    $("#btn1").click(function(){
        alert($("#test").text());
    });

    // get html
    $("#btn2").click(function(){
        alert($("#test").html());
    });

    // get attribute
    $("#btn3").click(function(){
        alert($("#test").attr("title"));
    });

    // data Append
    $("#btn4").click(function(){
        $(".add").append("<b>Appended</b>");
    });

    // data prepend
    $("#btn5").click(function(){
        $(".add").prepend("<b>preAppended</b>");
    });
    
    // data add before
    $("#btn6").click(function(){
        $("#test").before("<b>add before</b>");
    });
    
    // data add after
    $("#btn7").click(function(){
        $("#test").after("<b>add after</b>");
    });

    // remove
    $("#btn8").click(function(){
        $("#test").remove();
    });


    // add remove and toggle classes

    $("#btn9").click(function(){
        $(".box3").addClass("red");
    });

    $("#btn10").click(function(){
        $(".box3").removeClass("red");
    });

    $("#btn11").click(function(){
        $(".box3").toggleClass("red");
    });

    // show dimension 
    $("#btn12").click(function(){
        $(".show_dim").text($(".box4").width());
    });

    $("#btn13").click(function(){
        $(".show_dim").text($(".box4").height());
    });

    $("#btn14").click(function(){
        $(".show_dim").text($(".box4").innerWidth());
    });

    $("#btn15").click(function(){
        $(".show_dim").text($(".box4").innerHeight());
    });

    $("#btn16").click(function(){
        $(".show_dim").text($(".box4").outerWidth());
    });

    $("#btn17").click(function(){
        $(".show_dim").text($(".box4").outerHeight());
    });

    // Traversing - Ancestors

    $("#btn18").click(function(){
        $(".child").parent().css({"border": "2px solid red"});
    });

    $("#btn19").click(function(){
        $(".parent").parent().css({"border": "2px solid red"});
    });

    $("#btn20").click(function(){
        $(".grand-parent").parent().css({"border": "2px solid red"});
    });

    $("#btn21").click(function(){
        $(".parent").children().css({"border": "2px solid red"});
    });

    $("#btn22").click(function(){
        $(".grand-parent").children().css({"border": "2px solid red"});
    });

    $("#btn23").click(function(){
        $(".grand-grand-parent").children().css({"border": "2px solid red"});
    });
    
});