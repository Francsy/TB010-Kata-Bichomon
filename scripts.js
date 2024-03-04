console.log(document.title);

//CAMBIAR EL NOMBRE A LA PRIMERA GENERACIÓN:

document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

//CAMBIAR EL FONDO A LA PRIMERA GENERACIÓN:

genList = document.querySelectorAll("main>div.infocard-list")
genList[0].style.backgroundColor = "blue";

// Mismo método sin declarar variable:
//document.querySelectorAll("main>div.infocard-list")[0]].style.backgroundColor = "red";
// Otra forma:
//document.querySelector("main>div.infocard-list").style.backgroundColor = "red";

//IMPRIME POR CONSOLA LA URL DE LA PAGINA:

console.log(document.URL);

//IMPRIME POR CONSOLA EL DOMINIO DE LA PAGINA:

console.log(document.domain);

//IMPRIME TODOS LOS NODOS DE IMAGEN

console.log(document.images)

//SUSTITUYE EL ATRIBUTO "SRC" DE TODAS LAS IMAGENES POR ESTE "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let imgAll = document.querySelectorAll("img")
for (i = 0; i < imgAll.length; i++) {
    imgAll[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itipe flying

// Seleccionando directamente a los elemento parent que tiene dicho elemento hijo:

let infoCards = document.querySelectorAll("span:has(.itype.flying)")
for (i = 0; i < infoCards.length; i++) {
    infoCards[i].style.backgroundColor = "red";
}

// Haciendo una selección más genérica y poniendo la condición de que lo incluyan:

// let infoCards = document.querySelectorAll(".infocard-lg-data.text-muted")
// for (i = 0 ; i < infoCards.length ; i++){
//     if (infoCards[i].innerHTML.includes("flying")){
//         infoCards[i].style.backgroundColor = "red";
//     }
// }