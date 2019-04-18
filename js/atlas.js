$(document).ready(function(){
//right chuxian
    $("#bz").click(function(){
        $(".right").css('display','inline');
        $("video").css('position','relative');
        $("video").css('height','100%');
        $("video").css('width','100%');
        $("#bz").css('display','none');
    })



    $(".countrytopleftimg,.countrytopright1img,.countrytopright2img").click(function(){
        $("video").css('z-index','-1');
        var cssValue = $(this).css('backgroundImage');
        $(".left").css('backgroundImage',cssValue);
    })

    $(".countrytopleft").mouseenter(function(){
        $(".countrytopleftimg:not(:animated)",this).animate({opacity:'0.5'},500);
        $(".lefttext:not(:animated)",this).animate({opacity:'1',fontSize:'30px'},500);
    })
    $(".countrytopleft").mouseleave(function(){
        $(".countrytopleftimg",this).animate({opacity:'1'},500);
        $(".lefttext",this).animate({opacity:'0',fontSize:'24px'},500);
    })
//left img

    $(".countrytopright1").mouseenter(function(){
        $(".countrytopright1img:not(:animated)",this).animate({opacity:'0.5'},500);
        $(".right1text:not(:animated)",this).animate({opacity:'1',fontSize:'26px'},500);
    })
    $(".countrytopright1").mouseleave(function(){
        $(".countrytopright1img",this).animate({opacity:'1'},500);
        $(".right1text",this).animate({opacity:'0',fontSize:'22px'},500);
    })
//righttop img
    $(".countrytopright2").mouseenter(function(){
        $(".countrytopright2img:not(:animated)",this).animate({opacity:'0.5'},500);
        $(".right2text:not(:animated)",this).animate({opacity:'1',fontSize:'26px'},500);
    })
    $(".countrytopright2").mouseleave(function(){
        $(".countrytopright2img",this).animate({opacity:'1'},500);
        $(".right2text",this).animate({opacity:'0',fontSize:'22px'},500);
    })
//right down img


//return


})
