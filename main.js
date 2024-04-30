let griglia = document.getElementById("griglia");
let avvia = document.getElementById("avvia");
let gameMode = document.getElementById("gameMode");

avvia.addEventListener("click",function(){
    console.log("Reset");
    griglia.innerHTML="";
    if(gameMode.value=="Easy"){
        console.log("La modalità selezionata è: Easy");
        for(let i = 1; i <= 100; i++){
            // creo elemento e lo metto all'interno della griglia
            let elemento = createSquare100();
            griglia.append(elemento);
            //al click fa cose...
            clickPulsante(elemento,i);
        }
    }else if(gameMode.value=="Medium"){
        console.log("La modalità selezionata è: Medium");
        for(let i = 1; i <= 81; i++){
            // creo elemento e lo metto all'interno della griglia
            let elemento = createSquare81();
            griglia.append(elemento);
            //al click fa cose...
            clickPulsante(elemento,i);
        }
    }else if(gameMode.value=="Hard"){
        console.log("La modalità selezionata è: Hard");
        for(let i = 1; i <= 49; i++){
            // creo elemento e lo metto all'interno della griglia
            let elemento = createSquare49();
            griglia.append(elemento);
            //al click fa cose...
            clickPulsante(elemento,i);
        }
    }

})

function createSquare100(){
    let element = document.createElement("div");
    element.classList.add("square100");
    return element;
}

function createSquare81(){
    let element = document.createElement("div");
    element.classList.add("square81");
    return element;
}

function createSquare49(){
    let element = document.createElement("div");
    element.classList.add("square49");
    return element;
}

function clickPulsante(element,nIterazione){
    element.addEventListener("click",function(){
        element.classList.toggle("bkg_azzurro");
        console.log(nIterazione);
    })
}