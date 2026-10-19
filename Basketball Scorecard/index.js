let countHome=document.getElementById("count-home")
let countGuest=document.getElementById("count-guest")
let countG=0
let countH=0

function home1(){
    countH +=1
    countHome.textContent =countH
}
function home2(){
    countH +=2
    countHome.textContent =countH
}
function home3(){
    countH +=3
    countHome.textContent =countH
}
function guest1(){
    countG +=1
    countGuest.textContent =countG
}
function guest2(){
    countG +=2
    countGuest.textContent =countG
}
function guest3(){
    countG +=3
    countGuest.textContent =countG
}