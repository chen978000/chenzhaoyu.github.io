/**
 *主题：商城js
 *作者：陈昭雨
 *更新时间：20171225
 *20171224更新内容：Original completed.
 *20171225更新内容：修复滑动浏览器默认事件问题。
 *20171226更新内容：修复resize浏览器大小时不刷新轮播图异常的问题。
 */

window.onload = function () {
    //加载推荐
    getRec();

    //顶部透明度
    // headChange();

    //轮播图
    Banner();
}

// 功能模块
//创建推荐
function getRec() {
    var oRecUl = document.querySelector(".recUl");
    for (var i = 0; i < recList.length; i = i + 2) {
        var eImg1 = document.createElement("img");
        var eImg2 = document.createElement("img");
        eImg1.src = recList[i].src;
        eImg2.src = recList[i + 1].src;
        var eP1 = document.createElement("p");
        var eP2 = document.createElement("p");
        eP1.innerHTML = recList[i].desc;
        eP2.innerHTML = recList[i + 1].desc;
        eP1.className = "desc";
        eP2.className = "desc";
        var eP11 = document.createElement("p");
        eP11.innerHTML = "请登陆查看价格";
        eP11.className = "Hprice";
        var eP21 = document.createElement("p");
        eP21.innerHTML = "请登陆查看价格";
        eP21.className = "Hprice";
        var eA1 = document.createElement("a");
        var eA2 = document.createElement("a");
        eA1.href = recList[i].href;
        eA2.href = recList[i + 1].href;
        var eLi = document.createElement("li");
        eA1.appendChild(eImg1);
        eA1.appendChild(eP1);
        eA1.appendChild(eP11);
        eA2.appendChild(eImg2);
        eA2.appendChild(eP2);
        eA2.appendChild(eP21);
        eLi.appendChild(eA1);
        eLi.appendChild(eA2);
        oRecUl.appendChild(eLi);
    }
}

//顶部透明度
function headChange() {
    var header = document.querySelector(".header_box");
    var banner = document.querySelector(".banner");
    var height = banner.offsetHeight;
    window.onscroll = function () {
        var opacity = 0;
        var top = document.documentElement.scrollTop;
        if (top > height) {
            opacity = 1;
        } else {
            opacity = (top / height);
        }
        header.style.background = "rgba(156,64,25," + opacity + ")";
    }
}

//轮播图
function Banner() {
    var banner = document.querySelector(".banner");
    var width = banner.offsetWidth;
    window.addEventListener("resize",function(){
        width = banner.offsetWidth;
    })
    var banUl = document.querySelector(".bannerUl");
    var pointUl = banner.querySelector("ul:last-child");
    var points = pointUl.querySelectorAll("li");
    var index = 1;
    function imgMove(){
        index++;
        addTransition(banUl);
        setTranslateX(banUl, (-index*width));
    }
    var timer = setInterval(imgMove, 2000);
    banUl.addEventListener("transitionend", function(){
        if(index>=7){
            index=1;
            removeTransition(banUl);
            setTranslateX(banUl,(-index*width));
        }else if(index<=0){
            index=6;
            removeTransition(banUl);
            setTranslateX(banUl,(-index*width));      
        }
        //点的移动
        for(var i=0;i<points.length;i++){
            points[i].classList.remove("now");
        }
        points[index-1].classList.add("now");
    });
    banUl.addEventListener("mouseover", function(){
        clearInterval(timer);
    });
    banUl.addEventListener("mouseout", function(){
        timer = setInterval(imgMove, 2000);
    });
    //点击点
    for(var i=0;i<points.length;i++){
        points[i].index = i;
        points[i].addEventListener("click",function(){
            clearInterval(timer);
            index = this.index+1;
            addTransition(banUl);
            setTranslateX(banUl, (-index*width));
            points[i].addEventListener("mouseout",function(){
                timer = setInterval(imgMove, 2000);
            });
        });

    }

    //移动端滑动
    var startX = 0;
    var distance = 0;
    var translateX = 0;
    var isMove = false;
    banUl.addEventListener("touchstart", function(event){
        startX = event.touches[0].clientX;
        clearInterval(timer);
    });
    banUl.addEventListener("touchmove", function(event){
        event.preventDefault();
        var moveX = event.touches[0].clientX;
        distance = moveX-startX;
        translateX = -index*width+distance;
        removeTransition(banUl);
        setTranslateX(banUl, translateX);
        isMove = true;
    });
    banUl.addEventListener("touchend",function(event){
        if(isMove){
            if(Math.abs(distance)<width/3){
                addTransition(banUl);
                setTranslateX(banUl, (translateX-distance));  
            }else if(distance<0){
                index++;
                addTransition(banUl);
                setTranslateX(banUl,(-index*width));
            }else if(distance>0){
                index--;
                addTransition(banUl);
                setTranslateX(banUl,(-index*width));
            }
        }
        timer = setInterval(imgMove, 2000);
        isMove = false;
    });
}

// 公用
//加过渡
function addTransition(obj) {
    obj.style.transition = "all 0.5s";
    obj.style.webkitTransition = "all 0.5s";
}
//去过渡
function removeTransition(obj) {
    obj.style.transition = "none";
    obj.style.webkitTransition = "none";
}
//设置X位移
function setTranslateX(obj, x) {
    obj.style.transform = "translateX(" + x + "px)";
    obj.style.webkitTransform = "translateX(" + x + "px)";
}
