var tmp = document.getElementById("temp");
var reponse = document.getElementById("resultat");
var printe = document.getElementById("afficher");
var x1 = getOutPut();
var x2 = getOutPut(tmp.innerText);
var resultat

function getOutPut() {
    return reponse.innerText;
}

function afficheur(nbre) {
    reponse.innerText += nbre;
    tmp.innerText += nbre;
    printe.innerText += nbre;
}

function calcul() {
    return reponse.innerText = resultat;
}

function division() {
    resultat = parseFloat(x1) / parseFloat(x2);
}


function sign() {
    reponse.innerHTML = reponse.textContent * -1;
}

function percent() {
    reponse.innerHTML = reponse.textContent / 100;
}

function initialiseur() {
    reponse.textContent = "";
    printe.innerText = "0";
}