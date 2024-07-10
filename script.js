const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["red","blue","green","yellow","orange","white","#514e8f","#dd303f"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});