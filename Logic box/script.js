let e=document.getElementById("enemy");
let p=document.getElementById("player");
let msg=document.getElementById("msg");

document.onmousemove=(m)=>{
    p.style.left=m.clientX+"px";
}

function attack(){
    let x=Math.random()*90+"vw";
    e.style.left=x;
    e.style.top="0";
    let fall=setInterval(()=>{
        e.style.top=(e.offsetTop+8)+"px";
        if(checkHit()){
            msg.innerText="Oopsies, You got hit 😔";
            clearInterval(fall);
            
        }
    },20);
}
function checkHit(){
    let ex=e.offsetLeft; ey=e.offsetTop;
    let px=p.offsetLeft; py=p.offsetTop;
    return Math.abs(ex-px)<40 && Math.abs(ey-py)<40;
}
setInterval(attack,2000);