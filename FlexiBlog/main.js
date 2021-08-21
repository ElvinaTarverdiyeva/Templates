$(document).ready(function() {
    $(".page1").addClass('page1add');
    $(".tpage1 ").addClass('tpage1add');
    $(".contactpage").addClass('contactpageadd');

    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if (top >= 450) {
            $(".page3").addClass('page3add');
        }

        if (top >= 1200) {
            $(".page4").addClass('page4add');
            
        }
        if (top >= 4000) {
            $(".page5").addClass('page5add');
        }

    });
    var x = 0;
    $("#circClick").click(function() {
        x++;
        if (x % 2 == 0) {
            $(this).css({ "left": "1px", "top": "2px" });
            $("header").css("background-color", "white");
            $("header a").css("color", "#718096");
            $("#mod2").css("background", " radial-gradient(circle, rgba(241,195,125,1) 0%, rgba(237,155,31,1) 100%)");
            $("body").css("background-color", "#f8f8f8");
            $(".page1").css({
                "background-color": "white",
                "color": "black"
            });
            $(".imghover").css("background-color", "white");
            $("#btn1").css("color", "black");
            $("#btn2").css("color", "rgb(182, 179, 179)");
            $(".page3").css("background-color", "white");
            $(".page3 p").css("color", "black");
            $(".page3 h5").css("color", "black");
            $(".page4 h2").css("color", "black");
            $(".card1").css("background-color", "white");
            $(".card1 h6").css("color", "black");
            $(".card1 h4").css("color", "black");
            $(".page5").css("background-color", "white");
            $(".page5 h1").css("color", "black");
            $(".page5 p").css("color", "#8491a4");
            $("footer").css("background-color", "white");
            $("footer a").css("color", "#7e8a9d");
            $("footer h5").css("color", "black");
            $("footer p").css("color", "#7e8a9d");
            $("footer h6 a").css("color", "black");
            $(".basliq2").css("color", "black");
            $(".tpage1 h1,h5").css("color", "black");
            $(".h4txt").css("color", "black");
            $(".inputs, .txtp , .txtadv").css("background-color", "white");
            $(".inputs input,textarea").css("background-color", "#e2e8f0");
            $(".contactpage h5").css("color", "#c6c6c8");



        } else if (x % 2 == 1) {
            $(this).css({ "left": "31px" });
            $("header").css("background-color", "#485460");
            $("header a").css("color", "white");
            $("#mod2").css("background", "radial-gradient(circle, rgba(170, 70, 252, 1) 0%, rgba(63, 86, 251, 1) 100%)");
            $("body").css("background-color", "#1e272e");
            $(".page1").css({
                "background-color": "#485460",
                "color": "white"
            });
            $(".imghover").css("background-color", "#485460");
            $("#btn1").css("color", "white");
            $("#btn2").css("color", "white");
            $(".page3").css("background-color", "#485460");
            $(".page3 p").css("color", "white");
            $(".page3 h5").css("color", "white");
            $(".page4 h2").css("color", "white");
            $(".card1").css("background-color", "#485460");
            $(".card1 h6").css("color", "white");
            $(".card1 h4").css("color", "white");
            $(".page5").css("background-color", "#485460");
            $(".page5 h1").css("color", "white");
            $(".page5 p").css("color", "#8491a4");
            $("footer").css("background-color", "#485460");
            $("footer a").css("color", "rgb(207, 204, 204)");
            $("footer h5").css("color", "white");
            $("footer p").css("color", "rgb(207, 204, 204)");
            $("footer h6 a").css("color", "white");
            $(".basliq2").css("color", "white");
            $(".basliq2").css("color", "white");
            $(".tpage1 h1,h5").css("color", "white");
            $(".card1txth2").css("color", "#806de7");
            $(".contactpage h1").css("color", " #2d3748");
            $(".h4txt").css("color", "white");
            $(".inputs, .txtp , .txtadv").css("background-color", "#2d3748");
            $(".inputs input,textarea").css("background-color", "#718096");

        }
    });
    $("#moon").click(function() {


        $(this).css({ "left": "1px", "top": "2px" });
        $("header").css("background-color", "white");
        $("header a").css("color", "#718096");
        $("#mod2").css("background", " radial-gradient(circle, rgba(241,195,125,1) 0%, rgba(237,155,31,1) 100%)");
        $("body").css("background-color", "#f8f8f8");
        $(".page1").css({
            "background-color": "white",
            "color": "black"
        });

        $(".imghover").css("background-color", "white");
        $("#btn1").css("color", "black");
        $("#btn2").css("color", "rgb(182, 179, 179)");
        $(".page3").css("background-color", "white");
        $(".page3 p").css("color", "black");
        $(".page3 h5").css("color", "black");
        $(".page4 h2").css("color", "black");
        $(".card1").css("background-color", "white");
        $(".card1 h6").css("color", "black");
        $(".card1 h4").css("color", "black");
        $(".page5").css("background-color", "white");
        $(".page5 h1").css("color", "black");
        $(".page5 p").css("color", "#8491a4");
        $("footer").css("background-color", "white");
        $("footer a").css("color", "#7e8a9d");
        $("footer h5").css("color", "black");
        $("footer p").css("color", "#7e8a9d");
        $("footer h6 a").css("color", "black");
        $(".basliq2").css("color", "black");
        $(this).css("display", "none");
        $("#sun").css("display", "block");
        $(".tpage1 h1,h5").css("color", "black");
        $(".h4txt").css("color", "white");
        $(".inputs, .txtp , .txtadv").css("background-color", "white");
        $(".inputs input,textarea").css("background-color", "#e2e8f0");
        $(".contactpage h5").css("color", "#c6c6c8");





    });
    $("#sun").click(function() {
        $(this).css({ "left": "31px" });
        $("header").css("background-color", "#485460");
        $("header a").css("color", "white");
        $("#mod2").css("background", "radial-gradient(circle, rgba(170, 70, 252, 1) 0%, rgba(63, 86, 251, 1) 100%)");
        $("body").css("background-color", "#1e272e");
        $(".page1").css({
            "background-color": "#485460",
            "color": "white"
        });
        $(".imghover").css("background-color", "#485460");
        $("#btn1").css("color", "white");
        $("#btn2").css("color", "white");
        $(".page3").css("background-color", "#485460");
        $(".page3 p").css("color", "white");
        $(".page3 h5").css("color", "white");
        $(".page4 h2").css("color", "white");
        $(".card1").css("background-color", "#485460");
        $(".card1 h6").css("color", "white");
        $(".card1 h4").css("color", "white");
        $(".page5").css("background-color", "#485460");
        $(".page5 h1").css("color", "white");
        $(".page5 p").css("color", "#8491a4");
        $("footer").css("background-color", "#485460");
        $("footer a").css("color", "rgb(207, 204, 204)");
        $("footer h5").css("color", "white");
        $("footer p").css("color", "rgb(207, 204, 204)");
        $("footer h6 a").css("color", "white");
        $(".basliq2").css("color", "white");
        $(this).css("display", "none");
        $("#moon").css("display", "block");
        $(".tpage1 h1,h5").css("color", "white");
        $(".h4txt").css("color", "black");

        $(".inputs, .txtp , .txtadv").css("background-color", "#2d3748");
        $(".inputs input,textarea").css("background-color", "#718096");

    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 1
            },
            1000: {
                items: 2
            },
            1024: {
                items: 3
            },
            1500: {
                items: 4
            }

        }
    });
    $(".closeX").click(function() {
        $(".menutel").css("display", "none");
        $(".search1").css("display", "none");

    });
    $("#bars").click(function() {
        $(".menutel").css("display", "block");

    });
    $("#search").click(function() {
        $(".search1").css("display", "block");

    });


});