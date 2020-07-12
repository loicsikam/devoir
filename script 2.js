var signed = false
var printe = document.querySelector(".value");


var sign = document.querySelector(".afficheur .sign");



function reset() {
    printe.textContent = '0';
    sign.textContent = '';
}

function signing() {
    if (signed == false) {
        sign.textContent = '-';
        signed = true;
    } else {
        sign.textContent = '';
        signed = false;
    }
    console.log(signed)
}

function percent() {
    printe.innerHTML = printe.textContent / 100
}

var number_boutons = document.querySelectorAll('.left_side .number li');

var temp = 0,
    print_value;

var add = sign.textContent;

function calcul(signe, add) {
    alert(add);
    print_value = document.querySelector(".resultat").textContent;


}
printe.textContent = "je veux";
sign.textContent = "je suis";

function addition() {
    add = parseFloat(document.querySelector(".value").textContent);
    alert(add);
    printe.textContent = "";

    sign.textContent = add;

    document.querySelector('.resultat').textContent = ""
    signe = '+';

    sign.textContent = add;
    return signe;

}

function soustraction(val1, val2) {
    var sous = val1 - val2;
    return sous;
}

function multiplication(val1, val2) {
    var mult = val1 * val2;
    return mult;
}

function division(val1, val2) {
    var div = val1 / val2;
    return div;
}
if (document.querySelector(".sign").textContent == "") {
    function number(value) {
        printe.textContent += value;
    }
} else {
    function number(value, add, signe) {
        alert(add);
        var signes = signe;
        alert(signes);
        document.querySelector(".resultat").textContent = "";

        printe.textContent += value;
    }
}

function reverseNumberFormat(nbre) {
    return Number(nbre.replace(/,/g, ''));
}
var number = document.getElementsByClassName("btn");
for (i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        var affiche = reverseNumberFormat(getOutPut());
        if (affiche != NaN) {
            affiche += affiche + this.id;
            afficheur(affiche);
        }
    });


    function getFormattedNumber(nbre) {
        var n = Number(nbre);
        var value = n.toLocaleString("en");
        return value;
    }