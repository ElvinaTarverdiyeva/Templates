var card1 = ["C David", "5658 1267 8767 9985", "01/22", "https://media.discordapp.net/attachments/827485050257014826/831808756416643113/discover.png"];
var card2 = ["T Conten", "5432 8976 5674 8875", "05/24", "https://media.discordapp.net/attachments/827485050257014826/831816549282742283/mastercard.png"];
var card3 = ["J Thomson", "1234 7865 9845 1232", "07/19", "https://media.discordapp.net/attachments/827485050257014826/831816551815970816/visa.png"]
var card1table = [
    ["02/02/2020", "01/09/2020", "12/21/2020", "31/05/2021"],
    ["Apple", "Nike", "Addidas", "Converse"],
    ["$80.90", "$90.87", "$120.00", "$98.99"]
]
var card2table = [
    ["05/02/2018", "05/06/2018", "05/07/2019", "01/04/2019"],
    ["Microsoft", "Bill & Gates", "T&V", "Moskovski"],
    ["$400.00", "$45.75", "$21.22", "$720.00"]
];
var card3table = [
    ["01/05/2019", "02/02/2019", "03/07/2019", "22/08/2020"],
    ["Google", "Jony & Billy", "F&Q", "Briliant"],
    ["$305.50", "$50.00", "$40.22", "$465.00"]
];

function cart1() {
    document.getElementById("cart1").style.backgroundColor = "#e44946";
    document.getElementById("cart2").style.backgroundColor = "#1e272e";
    document.getElementById("cart3").style.backgroundColor = "#1e272e";
    document.getElementById("h3text").innerHTML = card1[1];
    document.getElementById("img1").src = card1[3];
    document.getElementById("h4text1").innerHTML = card1[0];
    document.getElementById("h4text2").innerHTML = card1[2];
    document.getElementById("td1").innerHTML = card1table[0][0];
    document.getElementById("td4").innerHTML = card1table[0][1];
    document.getElementById("td7").innerHTML = card1table[0][2];
    document.getElementById("td10").innerHTML = card1table[0][3];
    document.getElementById("td2").innerHTML = card1table[1][0];
    document.getElementById("td5").innerHTML = card1table[1][1];
    document.getElementById("td8").innerHTML = card1table[1][2];
    document.getElementById("td11").innerHTML = card1table[1][3];
    document.getElementById("td3").innerHTML = card1table[2][0];
    document.getElementById("td6").innerHTML = card1table[2][1];
    document.getElementById("td9").innerHTML = card1table[2][2];
    document.getElementById("td12").innerHTML = card1table[2][3];

}

function cart2() {
    document.getElementById("cart1").style.backgroundColor = "#1e272e";
    document.getElementById("cart2").style.backgroundColor = "#e44946";
    document.getElementById("cart3").style.backgroundColor = "#1e272e";
    document.getElementById("h3text").innerHTML = card2[1];
    document.getElementById("img1").src = card2[3];
    document.getElementById("h4text1").innerHTML = card2[0];
    document.getElementById("h4text2").innerHTML = card2[2];
    document.getElementById("td1").innerHTML = card2table[0][0];
    document.getElementById("td4").innerHTML = card2table[0][1];
    document.getElementById("td7").innerHTML = card2table[0][2];
    document.getElementById("td10").innerHTML = card2table[0][3];
    document.getElementById("td2").innerHTML = card2table[1][0];
    document.getElementById("td5").innerHTML = card2table[1][1];
    document.getElementById("td8").innerHTML = card2table[1][2];
    document.getElementById("td11").innerHTML = card2table[1][3];
    document.getElementById("td3").innerHTML = card2table[2][0];
    document.getElementById("td6").innerHTML = card2table[2][1];
    document.getElementById("td9").innerHTML = card2table[2][2];
    document.getElementById("td12").innerHTML = card2table[2][3];

}

function cart3() {
    document.getElementById("cart1").style.backgroundColor = "#1e272e";
    document.getElementById("cart2").style.backgroundColor = "#1e272e";
    document.getElementById("cart3").style.backgroundColor = "#e44946";
    document.getElementById("h3text").innerHTML = card3[1];
    document.getElementById("img1").src = card3[3];
    document.getElementById("h4text1").innerHTML = card3[0];
    document.getElementById("h4text2").innerHTML = card3[2];
    document.getElementById("td1").innerHTML = card3table[0][0];
    document.getElementById("td4").innerHTML = card3table[0][1];
    document.getElementById("td7").innerHTML = card3table[0][2];
    document.getElementById("td10").innerHTML = card3table[0][3];
    document.getElementById("td2").innerHTML = card3table[1][0];
    document.getElementById("td5").innerHTML = card3table[1][1];
    document.getElementById("td8").innerHTML = card3table[1][2];
    document.getElementById("td11").innerHTML = card3table[1][3];
    document.getElementById("td3").innerHTML = card3table[2][0];
    document.getElementById("td6").innerHTML = card3table[2][1];
    document.getElementById("td9").innerHTML = card3table[2][2];
    document.getElementById("td12").innerHTML = card3table[2][3];

}