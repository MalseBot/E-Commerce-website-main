
    let Pp1 =document.getElementById("Pp1");
    let Pp2 =document.getElementById("Pp2");
    let P1 =document.getElementById("page1");
    let P2 =document.getElementById("page2");
function pages2() {
    // let Ppn=Pp[Pp.length-1]
    Pp2.classList.add("disabled")
    Pp1.classList.remove("disabled")
    P2.classList.add("visually-hidden")
    P1.classList.remove("visually-hidden")
}
function pages1() {
    Pp1.classList.add("disabled")
    Pp2.classList.remove("disabled") 
    P1.classList.add("visually-hidden")
    P2.classList.remove("visually-hidden")
}

