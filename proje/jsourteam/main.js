jQuery(document).ready(function() {
    "use strict";
    $('#slidr-carousel').carouFredSel({
        responsive: true,
        width: '100 %',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pouseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }
    });
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("header").addClass('secondary');
        } else if ($("header").hasClass('secondary')) {
            $("header").removeClass('secondary');
        }
    });
    // $("#search").on("keyup", function() {
    //     var value = $(this).val().toLowerCase();
    //     $("#mytablo tr").filter(function() {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    //     });

    // });
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });

    });



});