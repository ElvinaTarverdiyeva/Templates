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

    $("#bttn").on("click", function() {
        var pass1 = $("#pass1").val();
        var pass2 = $("#pass2").val();
        if (pass1.length < 10) {
            $("#pass1").before("sifre guvensizdir");
        }
        if (pass1 !== pass2) {
            $("#pass2").before("sifre eyni deyil");
        }
        var username = $("#username").val();
        var lastname = $("#lastname").val();
        if (username == "") {
            $("#username").before("bow buraxmayin");
        }
        for (var i = 0; i < username.length; i++) {
            if (username[i] == 0 || username[i] == 1 || username[i] == 2 || username[i] == 3 || username[i] == 4 || username[i] == 5 || username[i] == 6 || username[i] == 7 || username[i] == 8 || username[i] == 9) {
                $("#username").before("reqem daxil etmeyin");
                break;
            }
        }
        for (var i = 0; i < lastname.length; i++) {
            if (lastname[i] == 0 || lastname[i] == 1 || lastname[i] == 2 || lastname[i] == 3 || lastname[i] == 4 || lastname[i] == 5 || lastname[i] == 6 || lastname[i] == 7 || lastname[i] == 8 || lastname[i] == 9) {
                $("#lastname").before("reqem daxil etmeyin");
                break;
            }
        }

    });






});