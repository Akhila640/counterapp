let countValue=document.getElementById("count");
let incre=document.getElementById("inc")
let decre=document.getElementById("dec")
let resets=document.getElementById("reset")
function display(){
    countValue.textContent=count
}
 count=0
 display()
incre.addEventListener("click",function(){
    count++
    display();
})
decre.addEventListener("click",function(){
    count--
    display();
})
resets.addEventListener("click",function(){
    count=0
    display();
})