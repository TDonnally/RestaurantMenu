/*Controls menu animation through clicked links*/
function onClick(a){
    let menuDiv = document.getElementById(a);
    console.log(a);
    menuDiv.style.left = "0%";
}
function onClose(a){
    let menuDiv = document.getElementById(a);
    console.log(a);
    menuDiv.style.left = "-100%";
}

function openMenu(){
    let menuDiv = document.getElementById("menuFood");
    menuDiv.style.top = "0%";
}
function closeMenu(){
    let menuDiv = document.getElementById("menuFood");
    menuDiv.style.top = "-100%";
}
