
$(document).ready(function(){
    var h = ($(window).height());
    $(".menu").height(h*1.5);
    //menu1
    $("#menu1").mouseenter(function(){
        $("#menu1:not(:animated)").animate({width:'18%'},500);
        $("#text1:not(:animated)").animate({
            opacity:'1',
            fontSize:'45',
        },500)
    });
    $("#menu1").mouseleave(function(){
        $("#menu1").animate({width:'15%'},500);
        $("#text1").animate({
            opacity:'',
            fontSize:'30',
        },500)
    });
    //menu2
    $("#menu2").mouseenter(function(){
        $("#menu2:not(:animated)").animate({ width:'18%'},500);
        $("#text2:not(:animated)").animate({
            opacity:'1',
            fontSize:'45',
        },500)
    });
    $("#menu2").mouseleave(function(){
        $("#menu2").animate({width:'15%'},500);
        $("#text2").animate({
            opacity:'',
            fontSize:'30',
        },500)
    });

    //menu3
    $("#menu3").mouseenter(function(){
        $("#menu3:not(:animated)").animate({ width:'18%'},500);
        $("#text3:not(:animated)").animate({
            opacity:'1',
            fontSize:'45',
        },500)
    });
    $("#menu3").mouseleave(function(){
        $("#menu3").animate({width:'15%'},500);
        $("#text3").animate({
            opacity:'',
            fontSize:'30',
        },500)
    });


    //menu4

    $("#menu4").mouseenter(function(){
        $("#menu4:not(:animated)").animate({ width:'18%'},500);
        $("#text4:not(:animated)").animate({
            opacity:'1',
            fontSize:'45',
        },500)
    });
    $("#menu4").mouseleave(function(){
        $("#menu4").animate({width:'15%'},500);
        $("#text4").animate({
            opacity:'',
            fontSize:'30',
        },500)
    });

    $("#menu5").mouseenter(function(){
        $("#text5:not(:animated)").animate({
            opacity:'1',
            fontSize:'45',
        },500)
    });
    $("#menu5").mouseleave(function(){
        $("#text5").animate({
            opacity:'',
            fontSize:'30',
        },500)
    });

});

