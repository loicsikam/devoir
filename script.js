var tmp = document.getElementById("temp");
var reponse = document.getElementById("resultat");
var printe = document.getElementById("afficher");
printe2 = document.getElementsByClassName("sec");
var signes;
var signe;


function afficheur(nbre) {
    reponse.textContent += nbre;
    var nombre1 = parseFloat(printe.textContent)
    var signes = tmp.textContent;
    printe2.textContent += nbre;
    var nombre2 = nbre;
    switch (signes) {

        case "+":
            var resultat = nombre1 + nombre2;
            reponse.textContent = resultat;
            break;
        case "-":
            var resultat = nombre1 - nombre2;
            reponse.textContent = resultat;
            break;

        case "*":
            var resultat = nombre1 * nombre2;
            reponse.textContent = resultat;
            break;
        case "/":
            var resultat = nombre1 / nombre2;
            reponse.textContent = resultat;
            break;
        case "^":
            var resultat = Math.pow(nombre1, nombre2);
            reponse.textContent = resultat;
        default:
            break;
    }

    printe.textContent = nombre1 + signes + nombre2;

}

function sign() {
    reponse.innerHTML = reponse.textContent * -1;
    printe.innerHTML = printe.textContent * -1;
}

function percent() {
    reponse.innerHTML = reponse.textContent / 100;
    printe.innerText = "";
}

function initialiseur() {
    reponse.textContent = "";
    printe.innerText = "0";
    tmp.innerHTML = "";
}

function addition() {
    var add = reponse.textContent;
    signe = "+";
    tmp.textContent = signe;
    printe.textContent = add;
    reponse.textContent = "";
}

function soustraction() {
    var add = reponse.textContent;
    signe = "-";
    tmp.textContent = signe;
    printe.textContent = add;
    reponse.textContent = "";
}

function multiplication() {
    var add = reponse.textContent;
    signe = "*";
    tmp.textContent = signe;
    printe.textContent = add;
    reponse.textContent = "";
}

function division() {
    var add = reponse.textContent;
    signe = "/";
    tmp.textContent = signe;
    printe.textContent = add;
    reponse.textContent = "";
}

function exposant() {
    var add = reponse.textContent;
    signe = "^";
    tmp.textContent = signe;
    printe.textContent = add;
    reponse.textContent = "";
}

function sinux() {
    var x = reponse.textContent
    x = parseFloat(x);
    var angles = x * Math.PI / 180;
    angles = Math.sin(angles);
    angles = Math.fround(angles);
    reponse.textContent = angles;
    printe.innerHTML = "";
}

function cosinux() {
    var x = reponse.textContent
    x = parseFloat(x);
    var angles = x * Math.PI / 180;
    angles = Math.cos(angles);
    angles = Math.fround(angles);
    reponse.textContent = angles;
    printe.innerHTML = "";
}

function tangent() {
    var x = reponse.textContent
    x = parseFloat(x);
    var angles = x * Math.PI / 180;
    angles = Math.tan(angles);
    angles = Math.fround(angles);
    reponse.textContent = angles;
    printe.innerHTML = "";
}

function arcosinux() {
    var x = reponse.textContent
    x = parseFloat(x);
    //var angles = x * Math.PI / 180;
    var angles = Math.acos(x);
    //angles = Math.fround(angles);
    reponse.textContent = angles;
    printe.textContent = "";
}

function carree() {
    var x = reponse.innerHTML;
    var resultat = x * x;
    reponse.innerHTML = resultat;
    printe.innerHTML = "";
}

function cube() {
    var x = reponse.innerHTML;
    var resultat = x * x * x;
    reponse.innerHTML = resultat;
    printe.innerHTML = "";
}

function inverse() {
    var x = reponse.textContent;
    var resultat = 1 / x;
    reponse.textContent = resultat;
    printe.textContent = "";
}

function dix_exposant() {
    var x = reponse.textContent;
    var resultat = Math.pow(10, x);
    reponse.innerHTML = resultat;
    printe.innerHTML = "";
}