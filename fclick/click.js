/* FermionClick*/
var delayTime=400;/*双击延时时间*/
/*
 *@method typeObj
 *@description 判断对象类型
 *@param {any} obj 判断的对象
 *@return {boolean}
*/
function typeObj(obj){
    var type=Object.prototype.toString.call(obj);
    if(type=='[object HTMLDivElement]'){
      return "HTMLDivElement";

    }else if("[object HTMLCollection]"){
        return "HTMLCollection";
    }else{
        console.log("您初始化的参数类型为："+type+"，这种类型暂时不支持。");
        return false;
    }

}
/*
 *@method fclick
 *@description 初始化一个fclick对象
 *@param {element} elementx 想要监听的元素，可以是元素组
 *@return {fclick}
*/
function fclick(elementx){
    var singleEv;/*单击事件*/
    var doubleEv;/*双击事件*/
    var longPressEv;/*长按事件*/
    var ele=[];
    var state=0;/*点击状态*/
    var sc=1;/*是否单击*/
    this.single=function(func){
        singleEv=func;
    }
    this.double=function(func){
        doubleEv=func;
    }
    this.longPress=function(func){
        longPressEv=func;
    }
    /*初始化对象*/
    if(typeObj(ele)=="HTMLDivElement"){
        ele[0]=elementx;
    }else if(typeObj(ele)=="HTMLCollection"){
        ele=elementx;
    }
    for(var i=0;i<ele.length;i++){
        ele[i].setAttribute('onselectstart','return false');/*防止双击选中文本*/
        ele[i].style.cursor="pointer";/*手型鼠标*/
    
        ele[i].onmousedown = function(e){
            var e=e||enent;
            if(state==0){
                state=1;
                setTimeout(function(){state=0;},delayTime);
            }else if(state==1){
                sc=0; 
            }
        }
        ele[i].onmouseup=function(e){
            if(state==1){
                setTimeout(function(){if(sc==1){singleEv(e)}},200); 
            }else if(state==0){
                longPressEv(e);
            }
            if(sc==0){
                doubleEv(e);
                setTimeout(function(){sc=1;},delayTime);
            }
        }
    }
    
}