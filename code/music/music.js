// 主题：仿网易云音乐js
// 作者：陈昭雨
// 完成时间：20171208
// 20171209更新内容：增加歌单显示、隐藏、点击歌单播放、播放中歌曲颜色功能 
// 20171210更新内容：增加进度条拖动功能，修复歌单在底部滑动BUG 
// 20171211更新内容：增加title显示播放状态
// 20171212更新内容：增加搜索歌单功能、页面初始随机歌曲
// 20171213更新内容：修复ios safari下animation-play-state失效、初始第一首歌播放时歌单中不变为红色等问题
// 20171215更新内容：增加打开歌单显示正在播放歌曲的位置的功能
// 20171219更新内容：修复ipad打开歌单位置显示不正常的问题
// 20171229更新内容：增加搜索歌单时的回车搜索功能
// 20180723更新内容：修复歌曲url无效时的报错、样式优化
window.onload = function(){
	var disc = document.querySelector(".disc");
	var citou = document.querySelector(".citou");
	var play = document.querySelector(".control_play");
	var pause = document.querySelector(".control_pause");
	var obj=document.getElementById("player");
	var cover = document.querySelector(".cover");
	var playBoard = document.querySelector(".play-board");
	var fengmian = document.querySelector(".fengmian");
	var intro_name = document.querySelector(".intro_name");
	var intro_artist = document.querySelector(".intro_artist");
	var next = document.querySelector(".control_next");
	var pre = document.querySelector(".control_pre");
	var mode = document.querySelector(".mode");
	var shouListBtn = document.querySelector(".music_list_btn");
	var hideBtn = document.querySelector(".music_list_hide");
	var s = 0;
	var i=randomMode();
	var n=0;
	var c = 0;
	//获取数据
	getData(obj, cover, fengmian, intro_name, intro_artist, i);	
	//播放模式选择
	mode.onclick = function(){
		console.log(n, i);
		n=playMode(n, n, mode);		
	}
	//点击播放
	play.onclick = function(){
		playing(disc, citou, play, pause, obj, i, aMusic);
	}
	//点击磁头播放或暂停
	citou.onclick = function(){
		if(c==0){
			playing(disc, citou, play, pause, obj, i, aMusic);
			c=1;
		}else if(c==1){
			pausing(disc, citou, play, pause, obj);
			c=0;
		}
	}
	//点击暂停
	pause.onclick = function(){
		pausing(disc, citou, play, pause, obj);
	}
	//音乐更新
	obj.ontimeupdate = function(){
		scrolling(obj, next);
	}
	//下一首
	next.onclick = function(){
		switch(n){
			case 0:
				i++;
				if(i>List.length-1){
					i = 0;
				}
			break;
			case 1:
				i=i;
			break;
			case 2:
				i = randomMode();
			break;
		}
		console.log(n, i);
		getData(obj, cover, fengmian, intro_name, intro_artist, i);
		playing(disc, citou, play, pause, obj, i, aMusic);
	}
	//上一首
	pre.onclick = function(){
		switch(n){
			case 0:
				i--;
				if(i<0){
					i=List.length-1;
				}
			break;
			case 1:
				i=i;
			break;
			case 2:
				i = randomMode();
			break;
		}
		console.log(n, i);
		getData(obj, cover, fengmian, intro_name, intro_artist, i);
		playing(disc, citou, play, pause, obj, i, aMusic);
	}
	// 显示歌单
	shouListBtn.onclick = function(){
		showList(hideBtn,i);
	}
	// 隐藏歌单
	hideBtn.onclick = function(){
		hideList(hideBtn);
	}
    //点击收起歌单
    playBoard.onclick= function () {
        hideList(hideBtn);
    }
	//加载歌单
	getList();
	//点击歌单播放
	var aMusic = document.querySelectorAll(".listMusic");
	for(var j=0; j<aMusic.length;j++){
		aMusic[j].index = j;
		aMusic[j].onclick = function(){
			i=this.index;
			getData(obj, cover, fengmian, intro_name, intro_artist, i);
			playing(disc, citou, play, pause, obj, i, aMusic);
		}
	}
	//PC端拖动进度条
	var point = document.querySelector(".point");
	point.onmousedown =function(ev){
		ev.preventDefault();
		ev =event || window.event;
		drag(ev);
		document.onmouseup = function(){
			document.onmousemove= null;
		}
	}
	//移动端拖动进度条
	point.addEventListener("touchstart", function(ev){
		ev =ev.touches[0];
		var oldLeft = ev.pageX-point.offsetLeft;	
		var fn = function(event){mobileMove(ev, oldLeft);}
		document.addEventListener("touchmove", fn, false);	
		document.addEventListener("touchend", function(){
			document.removeEventListener("touchmove", fn, false);
		}, false); 	
	}, false);
	//搜索歌单
	var searchBtn = document.querySelector(".search_btn");
	searchBtn.onclick = function(){
		searchMusic(i);
	}
	var searchText = document.querySelector(".search_text");
	searchText.onfocus = function(ev){
		searchText.value = "";
	}
	searchText.addEventListener("keydown",function(ev){
		if(ev.keyCode==13){
			searchMusic(i);
		};
	});
}

//功能模块
//数据读取
function getData(obj, cover, fengmian, intro_name, intro_artist, i){
	try{
        obj.src = "http://music.163.com/song/media/outer/url?id="+List[i].id+".mp3";
    }catch (e) {
		console.log(window.onerror);
    }
	cover.style.backgroundImage = "url("+List[i].img+")";
	cover.style.opacity = 0.5;
	fengmian.src = List[i].img;
	intro_name.innerHTML = List[i].name;
	intro_artist.innerHTML = List[i].artist;
}
// 播放
function playing(disc, citou, play, pause, obj, i, aMusic){
	disc.classList.add("running");
	disc.classList.remove("stop");
	citou.style.transform = "rotate(0)";
	play.style.display = "none";
	pause.style.display = "inline";
	listColor(aMusic, i);
	obj.play();
	document.title =List[i].name+" 播放中";
}
//暂停
function pausing(disc, citou, play, pause, obj){
	//ios Safari不兼容animation-play-state的其他方法
	var discBox = document.querySelector(".disc_box");
	var discDeg = eval("get"+getComputedStyle(disc).transform);
	var boxDeg = getComputedStyle(discBox).transform=="none"?0:eval("get"+getComputedStyle(discBox).transform);
	boxDeg = discDeg+boxDeg;
	discBox.style.transform = "rotate("+(boxDeg)+"deg)";
	//否则下面两条即可实现
	disc.classList.add("stop");
	disc.classList.remove("running");
	citou.style.transform = "rotate(-25deg)";
	play.style.display = "inline";
	pause.style.display = "none";
	obj.pause();	
	document.title =" 陈昭雨的云音乐";
}
//播放时滚动条的变化
function scrolling(obj, next){
	var progress = document.querySelector(".progress");
	var bar = document.querySelector(".bar");
	var point = document.querySelector(".point");
	var musicTime = document.querySelector(".music_time");
	var ratio = (obj.currentTime/obj.duration);
	musicTime.firstChild.innerHTML = setTime(obj.currentTime);
	if(setTime(obj.duration)=="NaN:NaN"){
		musicTime.lastChild.innerHTML ="00:00";
	}else{
		musicTime.lastChild.innerHTML = setTime(obj.duration);		
	}
	bar.style.width = (progress.offsetWidth*ratio)+"px";
	point.style.left = (progress.offsetWidth*ratio)+"px";
	if(obj.ended){
		next.click();
	}
}
//播放模式
function playMode(t, n, mode){
	if(t<2){
		t++;
	}else{
		t=0;
	}
	imgMode(n, mode);
	return t;
}
//播放模式图标
function imgMode(n, mode){
	switch(n){
		case 0:
			mode.classList.remove("mode_random");
			mode.classList.remove("mode_circle");
			mode.classList.add("mode_single");
		break;
		case 1:
			mode.classList.remove("mode_single");
			mode.classList.remove("mode_circle");
			mode.classList.add("mode_random");
		break;
		case 2:
			mode.classList.remove("mode_single");
			mode.classList.remove("mode_random");
			mode.classList.add("mode_circle");
		break;
	}
	console.log(n, mode);
}
//随机歌单
function randomMode(){
	var x = Math.floor(Math.random()*(List.length));		
	return x;
}
//显示歌单
function showList(hideBtn,i){
	var musicList = document.querySelector(".music_list");
	var search = document.querySelector(".search_box");
	var aMusic = document.querySelectorAll(".listMusic");
	musicList.style.top = "45%";
	musicList.style.height = "55%";
	hideBtn.style.display = "block";
	musicList.onscroll = function(){
		hideBtn.style.top = musicList.scrollTop+"px";	
	}
	musicList.style.overflow = "auto";
	search.style.display = "block";
	musicList.scrollTop = aMusic[i].offsetTop-110;	
}
//隐藏歌单
function hideList(hideBtn){
	var musicList = document.querySelector(".music_list");
	var search = document.querySelector(".search_box");
	var searchText = document.querySelector(".search_text");
	musicList.style.top = "96%";
	musicList.style.height = "25px";
	hideBtn.style.display = "none";
	musicList.scrollTop = "0";
	musicList.style.overflow = "hidden";
	search.style.display = "none";
	searchText.value = "";
}
//创建歌单列表
function getList(){
	var listUl = document.querySelector(".music_list_ul");
	for(var j=0; j<List.length; j++){
		var content = document.createTextNode(List[j].name+"——"+List[j].artist+"——"+List[j].album);
		var newSpan = document.createElement("span");
		newSpan.className = "listMusic";
		var newLi = document.createElement("li");
		newSpan.appendChild(content);
		newLi.appendChild(newSpan);
		listUl.appendChild(newLi);
	}
	// console.log(listUl);
}
//播放中歌曲颜色
function  listColor(aMusic, i){
	for(var k=0; k<aMusic.length; k++){
		aMusic[k].style.color = "#333";			
	}
	aMusic[i].style.color = "#E22319";
}
//搜索歌单
function searchMusic(i){
	var musicList = document.querySelector(".music_list");
	var searchText = document.querySelector(".search_text");
	var aMusic = document.querySelectorAll(".listMusic");
	var text = searchText.value;
	for(var j=0;j<List.length;j++){
		aMusic[j].style.color = "#333";	
		listColor(aMusic, i);
		if(List[j].name.indexOf(text)>=0){
			musicList.scrollTop = aMusic[j].offsetTop-10;
			aMusic[j].style.color = "blue";
			searchText.value = text;
			break;
		}else{
			searchText.value = "抱歉，此歌曲暂未收录歌单，我们会尽快录入";
		}	
	}
}
//PC端拖动
function drag(ev){
	var progress = document.querySelector(".progress");
	var bar = document.querySelector(".bar");
	var point = document.querySelector(".point");
		ev =event || window.event;
		var oldLeft = ev.clientX-point.offsetLeft;
		document.onmousemove = function(ev){
			ev.preventDefault();
			var obj=document.getElementById("player");	
			var curLeft = ev.clientX-oldLeft;
			if(curLeft<0){
				point.style.left = 0;
			}else if(curLeft>progress.offsetWidth){
				point.style.left = progress.offsetWidth+"px";
			}else{
				point.style.left = curLeft+"px";
			}
			console.log(point.offsetLeft/progress.offsetWidth);
			obj.currentTime=obj.duration*(point.offsetLeft/progress.offsetWidth);
		}
}

//移动端拖动
function mobileMove(ev, oldLeft){
	ev =event || window.event;
	ev.preventDefault();
	ev = ev.touches[0];
	var progress = document.querySelector(".progress");
	var point = document.querySelector(".point");
	console.log(oldLeft, ev);
	var obj=document.getElementById("player");	
	var curLeft = ev.clientX-oldLeft;
	console.log(ev.clientX);
	if(curLeft<0){
		point.style.left = 0;
	}else if(curLeft>progress.offsetWidth){
		point.style.left = progress.offsetWidth+"px";
	}else{
		point.style.left = curLeft+"px";
	}
	obj.currentTime=obj.duration*(point.offsetLeft/progress.offsetWidth);
}

// 将matrix转换为rotate
// 解析matrix矩阵，0°-360°，返回旋转角度 
// 当a=b||-a=b,0<=deg<=180 
// 当-a+b=180,180<=deg<=270 
// 当a+b=180,270<=deg<=360 
// 当0<=deg<=180,deg=d; 
// 当180<deg<=270,deg=180+c; 
// 当270<deg<=360,deg=360-(c||d); 
function getmatrix(a,b,c,d,e,f){  
    var aa=Math.round(180*Math.asin(a)/ Math.PI);  
    var bb=Math.round(180*Math.acos(b)/ Math.PI);  
    var cc=Math.round(180*Math.asin(c)/ Math.PI);  
    var dd=Math.round(180*Math.acos(d)/ Math.PI);  
    var deg=0;  
    if(aa==bb||-aa==bb){  
        deg=dd;  
    }else if(-aa+bb==180){  
        deg=180+cc;  
    }else if(aa+bb==180){  
        deg=360-cc||360-dd;  
    }  
    return deg>=360?0:deg;   
} 
//毫秒转换00:00
function setTime(x){
	var m = Math.floor(x/60);
	var s = x.toFixed(0)-m*60;
	if(s==60){
		m++;
		s=0;
	}
	m = m<10?"0"+m:m;
	s = s<10?"0"+s:s;
	return m+":"+s;
}
