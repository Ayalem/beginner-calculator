let num1=8
let num2=2
document.getElementById("num1").textContent=num1
document.getElementById("num2").textContent=num2
let sum=document.getElementById("sum-el")
function add(){
    sum.textContent=num1+num2

}
function subtract(){
   sum.textContent=num1-num2
}
function divide(){
    sum.textContent= num1/num2
}
function multiply(){
    sum.textContent=num1*num2
}