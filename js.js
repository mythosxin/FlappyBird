var bigTimer=null;
function random(min,max){
    //Math.random()产生0-1随机一个数字，但不包括0和1
    //parseInt()是下取整，所以取不到max这个值，用max-min后的+1是为了产生max这个数字
    return parseInt(Math.random()*(max-min+1)+min);//返回min至max中间随机一个数
}

//碰撞
function setBoom(objA,objB){
    //var objA=document.getElementById('objA');
    //var objB=document.getElementById('objB');
    var objAt=objA.offsetTop+objA.offsetHeight;
    var objAl=objA.offsetLeft+objA.offsetWidth;
    var objAr=objA.offsetLeft;
    var objAb=objA.offsetTop;
    var objBl=objB.offsetLeft;
    var objBt=objB.offsetTop;
    var objBr=objB.offsetLeft+objB.offsetWidth;
    var objBb=objB.offsetTop+objB.offsetHeight;
    if (objAt>objBt && objAl>objBl && objAr<objBr && objAb<objBb){
        return true;
    }else{
        return false;
    }
}

//柱子循环
function addZz(){
    var oDiv=document.createElement('div');
    oDiv.className='topG';
    oDiv.leftData='105';

    var oDiv2=document.createElement('div');
    oDiv2.className='bottomG';
    oDiv2.leftData='100';

    var h=random(100,500);
    oDiv.style.height=h+'px';
    oDiv2.style.height=innerHeight-h-150+'px';
    oDiv2.style.top=h+150+'px';
    document.body.appendChild(oDiv);
    document.body.appendChild(oDiv2);
}
addZz();
setInterval(addZz,1000);
clearInterval(bigTimer);

//柱子移动
bigTimer=setInterval(()=>{
    var allTopG=document.querySelectorAll('.topG');
    var allBottomG=document.querySelectorAll('.bottomG');
    for (var i=0;i<allTopG.length;i++){

        if(setBoom(bird,allTopG[i]) || setBoom(bird,allBottomG[i])){
            die=true;
            clearInterval(bigTimer);
        }
        if(allTopG[i].leftData=='-20'){
            document.body.removeChild(allTopG[i]);
            document.body.removeChild(allBottomG[i]);
            continue;
        }
        allBottomG[i].style.left=allTopG[i].style.left=allTopG[i].leftData-1+'%';
        allTopG[i].leftData=allTopG[i].leftData-1;
    }
},30);

var timer =null;
var iSpeedY=0;
var die=false;
clearInterval(timer);
timer=setInterval(()=>{
    iSpeedY+=1.5;
    var t=bird.offsetTop+iSpeedY;

    if(t<0){
        die=true;
        t=0;
        iSpeedY=0;
        clearInterval(bigTimer);
    }
    if (t>innerHeight-bird.offsetHeight){
        die=true;
        iSpeedY=0;
        clearInterval(bigTimer);
        clearInterval(timer);
    }
    bird.style.top=t+'px';
},30);
onkeydown = event=>{
    if(die) return;
    iSpeedY-=28;
}