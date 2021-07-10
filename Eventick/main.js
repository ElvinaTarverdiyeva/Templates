document.querySelectorAll(".weekdays")[0].style.backgroundColor = "#E71B37";
document.querySelectorAll(".weekdays")[0].style.color = "white";
document.querySelectorAll(".fadrop")[0].style.display = "block";
for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".weekdays")[i].addEventListener("click", boxJsIn);

    function boxJsIn() {
        document.querySelectorAll(".weekdays")[i].style.backgroundColor = "#E71B37";
        document.querySelectorAll(".weekdays")[i].style.color = "white";
        document.querySelectorAll(".fadrop")[i].style.display = "block";
        document.querySelectorAll(".cardimg1")[0].src = cars[i][1];
        document.querySelectorAll(".name1")[0].innerHTML = cars[i][0];

        for (let j = 0; j < 4; j++) {
            if (j != i) {
                document.querySelectorAll(".weekdays")[j].style.backgroundColor = "transparent";
                document.querySelectorAll(".weekdays")[j].style.color = "black";
                document.querySelectorAll(".fadrop")[j].style.display = "none";
            }
        }
    }
}
var cars = [
    ["JOHN SMITH", "https://images-ext-2.discordapp.net/external/MjM2ywZKS0n0YBHWfnEyARPxovRh5wvzF9qtnLRqlvY/https/preview.templatehouse.net/eventick/demo/images/team-02.jpg"],
    ["ANGELINA BROWN", "https://images-ext-1.discordapp.net/external/-FHrOHWRQ3_km1e7TRbHBDgNHtbZHltYjmLVd0gRvqg/https/preview.templatehouse.net/eventick/demo/images/team-03.jpg"],
    ["LUNA SMITH", "https://images-ext-2.discordapp.net/external/ZvWPWIznkTj4ho6JGsnMzA_vzwqrv4AvAWr0WYC6n6U/https/preview.templatehouse.net/eventick/demo/images/team-01.jpg"],
    ["Lila BROWN", "https://images-ext-1.discordapp.net/external/cELaGdm_ixodDuHn3yJ6ZwAFScArRIIE-Vc93xvdvn8/https/preview.templatehouse.net/eventick/demo/images/team-04.jpg"]

];

$(document).ready(function() {
    $("#menuikon").click(function() {
        $("#navbar-nav").toggle();
    });

});

$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});
$(document).ready(function() {
    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
    });
});
$(document).ready(function() {
    $("#flip2").click(function() {
        $("#panel2").slideToggle("slow");
    });

});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    },
})