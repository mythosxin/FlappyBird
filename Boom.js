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
div1.onmousedown=function(e){
    var ev=e||event;
    var l=ev.clientX-this.offsetLeft;//鼠标点击位置到div左边的距离
    var t=ev.clientY-this.offsetTop;//鼠标点击位置到div上边的距离
    document.onmousemove=function(e){
        var ev=e||event;
        this.style.left=ev.clientX-l+'px';//鼠标最终x坐标-鼠标到左边框的距离，即为position的left
        this.style.top=ev.clientY-t+'px';
        if (setBoom(div1,div2)){
            div2.style.backgroundColor='red';
        } else{
            div2.style.backgroundColor='green';
        }
    }.bind(this);
    document.onmouseup=function(){
        this.onmousemove= this.onmouseup=null;
    };
    return false;
};
/*var div1=document.getElementById('div1');
var div2=document.getElementById('div2');
var div2l=div2.offsetLeft;
var div2t=div2.offsetTop;
var div2r=div2.offsetLeft+div2.offsetWidth;
var div2b=div2.offsetTop+div2.offsetHeight;
div1.onmousedown=function(e){
    var ev=e||event;
    var l=ev.clientX-this.offsetLeft;//鼠标点击位置到div左边的距离
    var t=ev.clientY-this.offsetTop;//鼠标点击位置到div上边的距离
    document.onmousemove=function(e){
        var ev=e||event;
        this.style.left=ev.clientX-l+'px';//鼠标最终x坐标-鼠标到左边框的距离，即为position的left
        this.style.top=ev.clientY-t+'px';
        var div1t=div1.offsetTop+div1.offsetHeight;
        var div1l=div1.offsetLeft+div1.offsetWidth;
        var div1r=div1.offsetLeft;
        var div1b=div1.offsetTop;
        if (div1t>div2t && div1l>div2l && div1r<div2r && div1b<div2b){
            div2.style.backgroundColor='red';
        }else{
            div2.style.backgroundColor='green';
        }
    }.bind(this);
    document.onmouseup=function(){
        this.onmousemove= this.onmouseup=null;
    };
    return false;
    //alert("X:"+e.clientX+" Y:"+e.clientY);
}*/
