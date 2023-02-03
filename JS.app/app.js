
    let Pp1 =document.getElementById("Pp1");
    let Pp2 =document.getElementById("Pp2");
    let P1 =document.getElementById("page1");
    let P2 =document.getElementById("page2");
    function pages1() {
    Pp1.classList.add("disabled")
    Pp2.classList.remove("disabled") 
    P2.classList.add("visually-hidden")
    P1.classList.remove("visually-hidden")
}
function pages2() {
    Pp2.classList.add("disabled")
    Pp1.classList.remove("disabled")
    P1.classList.add("visually-hidden")
    P2.classList.remove("visually-hidden")
}

// product details images
let mainImg = document.getElementById("mainImg");
let smalling =document.getElementsByClassName("smalling");

smalling[0].onclick= function(){
    mainImg.src=smalling[0].src;
}
smalling[1].onclick= function(){
    mainImg.src=smalling[1].src;
}
smalling[2].onclick= function(){
    mainImg.src=smalling[2].src;
}
smalling[3].onclick= function(){
    mainImg.src=smalling[3].src;
}

let proInfo = document.getElementById("proInfo")
const proDetails =document.getElementsByClassName("prodetails")

function hideDets(){
    proInfo.classList.add("visually-hidden");
}

function revealDets(){
    proInfo.classList.remove("visually-hidden")
}
