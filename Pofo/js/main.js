function mouser() {
    document.getElementById("mouse6-2").style.display = "block";
    document.getElementById("mouse6-4").style.display = "block";
    document.getElementById("mouse6-6").style.display = "block";
}

function mouserout() {
    document.getElementById("mouse6-2").style.display = "none";
    document.getElementById("mouse6-4").style.display = "none";
    document.getElementById("mouse6-6").style.display = "none";
}

function mousel() {
    document.getElementById("mouse6-1").style.display = "block";
    document.getElementById("mouse6-3").style.display = "block";
    document.getElementById("mouse6-5").style.display = "block";
}

function mouselout() {
    document.getElementById("mouse6-1").style.display = "none";
    document.getElementById("mouse6-3").style.display = "none";
    document.getElementById("mouse6-5").style.display = "none";
}

function homenav() { document.getElementById("homehover").style.display = "block"; }

function homeover() { document.getElementById("homehover").style.display = "block"; }

function homeout() {
    document.getElementById("homehover").style.display = "none";
}

function searchClick() {
    document.getElementById("headersearch").style.display = "block";
    document.getElementById("body1").style.overflow = "hidden";
}

function headersearchX() {
    document.getElementById("headersearch").style.display = "none";
    document.getElementById("body1").style.overflowY = "scroll";
}