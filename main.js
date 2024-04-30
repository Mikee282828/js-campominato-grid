let griglia = document.getElementById("griglia");

for(let i = 1; i <= 100; i++){
    let element = document.createElement("div");
    element.classList.add("square");
    element.append(i);
    griglia.append(element);
    element.addEventListener("click",function(){
        element.classList.toggle("bkg_azzurro");
        console.log(i);
    })
}