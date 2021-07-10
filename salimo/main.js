$(document).ready(function(){
    $(" .menubarikon").click(function(){
        
      $(".hedcont").toggle(1000);
    });
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 100) {
            $("header").addClass('secondary');
            $(".logo2").show();
            $(".logo1").hide();
            $(".navikon").css("color", "black");

        } else if ($("header").hasClass('secondary')) {
            $("header").removeClass('secondary');
            $(".logo1").show();
            $(".logo2").hide();
            $(".navikon").css("color", "white");
        }
    });

    $("#imgbtn" ).click(function() {
        $(".imgbtn").show();
        $(".videobtn").hide();
        $(".linkbtn").hide();
        $("#videobtn").addClass("noactive");
        $("#imgbtn").addClass("btnactive");
        $("#imgbtn").removeClass("noactive");
        $("#linkbtn").addClass("noactive");
        $("#allbtn").addClass("noactive");
        
        
      });
      
    $("#videobtn" ).click(function() {
        $(".imgbtn").hide(1000);
        $(".videobtn").show(1000);
        $(".linkbtn").hide(1000);
        $("#videobtn").addClass("btnactive");
        $("#videobtn").removeClass("noactive");
        $("#imgbtn").addClass("noactive");
        $("#linkbtn").addClass("noactive");
        $("#allbtn").addClass("noactive");

        
      });
      
    $("#linkbtn" ).click(function() {
        $(".imgbtn").hide();
        $(".videobtn").hide();
        $(".linkbtn").show();
        $("#videobtn").addClass("noactive");
        $("#imgbtn").addClass("noactive");
        $("#linkbtn").addClass("btnactive");
        $("#linkbtn").removeClass("noactive");
        $("#allbtn").addClass("noactive");
      });
      $("#allbtn" ).click(function() {
        $(".imgbtn").show();
        $(".videobtn").show();
        $(".linkbtn").show();
        $("#videobtn").addClass("noactive");
        $("#imgbtn").addClass("noactive");
        $("#linkbtn").addClass("noactive");
        $("#allbtn").addClass("btnactive");
        $("#allbtn").removeClass("noactive");
      });
  });
  function mouseInNext()
{
    document.getElementById("box1next").style.display = "block";
    document.getElementById("box2next").style.display = "block";
    document.getElementById("box3next").style.display = "block";
}

function mouseOutNext()
{
    document.getElementById("box1next").style.display = "none";
    document.getElementById("box2next").style.display = "none";
    document.getElementById("box3next").style.display = "none";
}

function mouseInPrev()
{
    document.getElementById("box1prev").style.display = "block";
    document.getElementById("box2prev").style.display = "block";
    document.getElementById("box3prev").style.display = "block";
}

function mouseOutPrev()
{
    document.getElementById("box1prev").style.display = "none";
    document.getElementById("box2prev").style.display = "none";
    document.getElementById("box3prev").style.display = "none";
}
