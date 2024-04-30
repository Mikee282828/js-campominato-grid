let griglia = document.getElementById("griglia");

for(let i = 1; i <= 100; i++){

    // creo elemento e lo metto all'interno della griglia
    let elemento = createSquare();
    griglia.append(elemento);

    //al click fa cose...
    clickPulsante(elemento,i);

}

function createSquare(){
    let element = document.createElement("div");
    element.classList.add("square");
    return element;
}

function clickPulsante(element,nIterazione){
    element.addEventListener("click",function(){
        element.classList.toggle("bkg_azzurro");
        console.log(nIterazione);
    })
}