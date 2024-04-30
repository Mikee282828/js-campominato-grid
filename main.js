let griglia = document.getElementById("griglia");

for(let i = 1; i <= 100; i++){

    // creo elemento e lo metto all'interno della griglia
    let elemento = createSquare(i);
    griglia.append(elemento);

    //al click fa cose...
    clickPulsante(elemento)

}

function createSquare(nIterazione){
    let element = document.createElement("div");
    element.classList.add("square");
    element.append(nIterazione);
    return element;
}

function clickPulsante(element){
    element.addEventListener("click",function(){
        element.classList.toggle("bkg_azzurro");
        console.log(element.innerHTML);
    })
}