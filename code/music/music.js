// 主题：仿网易云音乐js
// 作者：陈昭雨
// 更新时间：20171209
// 20171209更新内容：增加歌单显示、隐藏、点击歌单播放、播放中歌曲颜色功能 
window.onload = function(){
	var disc = document.querySelector(".disc");
	var citou = document.querySelector(".citou");
	var play = document.querySelector(".control_play");
	var pause = document.querySelector(".control_pause");
	var obj=document.getElementById("player");
	var cover = document.querySelector(".cover");
	var fengmian = document.querySelector(".fengmian");
	var intro_name = document.querySelector(".intro_name");
	var intro_artist = document.querySelector(".intro_artist");
	var next = document.querySelector(".control_next");
	var pre = document.querySelector(".control_pre");
	var mode = document.querySelector(".mode");
	var shouListBtn = document.querySelector(".music_list_btn");
	var hideBtn = document.querySelector(".music_list_hide");

	var s = 0;
	var i=0;
	var n=0;
	mode.onclick = function(){
		console.log(n, i);
		n=playMode(n, n, mode);		
	}
	getData(obj, cover, fengmian, intro_name, intro_artist, i);	
	play.onclick = function(){
		playing(disc, citou, play, pause, obj);
	}
	pause.onclick = function(){
		pausing(disc, citou, play, pause, obj);
	}
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
		listColor(aMusic, i);
		getData(obj, cover, fengmian, intro_name, intro_artist, i);
		playing(disc, citou, play, pause, obj);
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
		listColor(aMusic, i);
		getData(obj, cover, fengmian, intro_name, intro_artist, i);
		playing(disc, citou, play, pause, obj);
	}
	// 显示歌单
	shouListBtn.onclick = function(){
		showList(hideBtn);
	}
	// 隐藏歌单
	hideBtn.onclick = function(){
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
			playing(disc, citou, play, pause, obj);
			listColor(aMusic, i);
		}
	}
}

//功能模块
//数据读取
function getData(obj, cover, fengmian, intro_name, intro_artist, i){
	obj.src = "http://music.163.com/song/media/outer/url?id="+List[i].id+".mp3";	
	cover.style.backgroundImage = "url("+List[i].img+")";
	fengmian.src = List[i].img;
	intro_name.innerHTML = List[i].name;
	intro_artist.innerHTML = List[i].artist;
}
// 播放
function playing(disc, citou, play, pause, obj){
	disc.classList.add("running");
	disc.classList.remove("stop");
	citou.style.transform = "rotate(0)";
	play.style.display = "none";
	pause.style.display = "inline";
	obj.play();
}
//暂停
function pausing(disc, citou, play, pause, obj){
	disc.classList.add("stop");
	disc.classList.remove("running");
	citou.style.transform = "rotate(-25deg)";
	play.style.display = "inline";
	pause.style.display = "none";
	obj.pause();	
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
function showList(hideBtn){
	var musicList = document.querySelector(".music_list");
	musicList.style.top = "45%";
	musicList.style.height = "360px";
	hideBtn.style.display = "block";
	musicList.onscroll = function(){
		hideBtn.style.top = musicList.scrollTop+"px";	
	}

}
//隐藏歌单
function hideList(hideBtn){
	var musicList = document.querySelector(".music_list");
	musicList.style.top = "96%";
	musicList.style.height = "25px";
	hideBtn.style.display = "none";
	musicList.scrollTop = "0";
}
//创建歌单列表
function getList(){
	var listUl = document.querySelector(".music_list_ul");
	for(var j=0; j<List.length;j++){
		var content = document.createTextNode(List[j].name+"——"+List[j].artist+"——"+List[j].album);
		var newSpan = document.createElement("span");
		newSpan.className = "listMusic";
		var newLi = document.createElement("li");
		newSpan.appendChild(content);
		newLi.appendChild(newSpan);
		listUl.appendChild(newLi);
	}
	console.log(listUl);
}
//播放中歌曲颜色
function  listColor(aMusic, i){
	for(var k=0; k<aMusic.length; k++){
		aMusic[k].style.color = "#333";			
	}
	aMusic[i].style.color = "#E22319";
}
function drag(disc, citou, play, pause, obj){
	var progress = document.querySelector(".progress");
	var bar = document.querySelector(".bar");
	var point = document.querySelector(".point");
	var musicTime = document.querySelector(".musci_time");
	point.onmousedown = function(){
		pausing(disc, citou, play, pause, obj);
	}
	point.onmouseup = function(){
		playing(disc, citou, play, pause, obj);
	}
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

//歌单（更新于20171209）
var List =[ 
	{"name":"成都", 
	"id":"436514312", 
	"img":"http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg", 
	"artist":"赵雷",
	"album":"<成都>"
	},
	{"name":"童话镇", 
	"id":"432506345", 
	"img":"http://p1.music.126.net/tfa811GLreJI_S0h9epqRA==/3394192426154346.jpg", 
	"artist":"陈一发儿",
	"album":"<童话镇>"
	},
	{"name":"理想三旬", 
	"id":"31445772", 
	"img":"http://p1.music.126.net/_msXsY9oMY4MSG3OTN0U1A==/109951162849778878.jpg", 
	"artist":"陈鸿宇",
	"album":"<浓烟下的诗歌电台>"
	},
	{"name":"平凡之路", 
	"id":"28815250", 
	"img":"http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg", 
	"artist":"朴树",
	"album":"<猎户星座>"
	},
	{"name":"追梦赤子心", 
	"id":"355992", 
	"img":"http://p1.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg", 
	"artist":"GALA",
	"album":"<动画《那年那兔那些事儿》第一季片尾曲>"
	},
	{"name":"南方姑娘", 
	"id":"202373", 
	"img":"http://p1.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg", 
	"artist":"赵雷",
	"album":"<赵小雷>"
	},
	{"name":"晴天", 
	"id":"186016", 
	"img":"http://p1.music.126.net/yjVbsgfNeF2h7fIvnxuZDQ==/18894007811887644.jpg", 
	"artist":"周杰伦",
	"album":"<叶惠美>"
	},
	{"name":"理想", 
	"id":"29567189", 
	"img":"http://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg", 
	"artist":"赵雷",
	"album":"<吉姆餐厅>"
	},
	{"name":"秋酿", 
	"id":"30635613", 
	"img":"http://p1.music.126.net/XSCmc9ZbWcpeizDya2g6JQ==/18598239185572641.jpg", 
	"artist":"房东的猫",
	"album":"<房东的猫>"
	},
	{"name":"安和桥", 
	"id":"27646205", 
	"img":"http://p1.music.126.net/mPlr0GoQU2Wl_aZzIgIJ6A==/1984618488161733.jpg", 
	"artist":"宋冬野",
	"album":"<安和桥北>"
	},
	{"name":"光阴的故事", 
	"id":"26361010", 
	"img":"http://p1.music.126.net/3K6W80SyZ0ZIy3btLRlZMw==/7820826208648668.jpg", 
	"artist":"黄晓明 / 邓超 / 佟大为",
	"album":"<电影《中国合伙人》主题曲>"
	},
	{"name":"阴天", 
	"id":"276936", 
	"img":"http://p1.music.126.net/DjyL8sXf9iU0Cik4hzs4RQ==/109951162783381.jpg", 
	"artist":"莫文蔚",
	"album":"<就 i Karen 莫文蔚精选>"
	},
	{"name":"最重要的决定", 
	"id":"229161", 
	"img":"http://p1.music.126.net/N9fWHLChdjpcGa1QbCbhDg==/19014954090943253.jpg", 
	"artist":"范玮琪",
	"album":"<Love and FanFan>"
	},
	{"name":"有点甜", 
	"id":"165340", 
	"img":"http://p1.music.126.net/2rMIJCU94hXW4pmxayvhPQ==/96757023249983.jpg", 
	"artist":"汪苏泷 / By2",
	"album":"<万有引力>"
	},
	{"name":"Honey", 
	"id":"297829", 
	"img":"http://p1.music.126.net/YiTOLZAw20itRSFsHHBaPw==/18657612813739192.jpg", 
	"artist":"王心凌",
	"album":"<Honey>"
	},
	{"name":"风继续吹", 
	"id":"26620762", 
	"img":"http://p1.music.126.net/AtMpiqgluHefLF6nD_Pcug==/4417837720418086.jpg", 
	"artist":"张国荣",
	"album":"<最红>"
	},
	{"name":"一笑倾城", 
	"id":"426852063", 
	"img":"http://p1.music.126.net/XtQbs_V1OAvtZo9tmJFAJA==/1369991503018202.jpg", 
	"artist":"汪苏泷",
	"album":"<电视剧《微微一笑很倾城》片头曲>"
	},
	{"name":"文科生的一个下午", 
	"id":"5265943", 
	"img":"http://p1.music.126.net/4FY52KxHJezy0lbpEugllw==/102254581400467.jpg", 
	"artist":"赵节",
	"album":"<我的最爱—校园歌谣十周年>"
	},
	{"name":"那些花儿(吉他版)", 
	"id":"139392", 
	"img":"http://p1.music.126.net/QYI8P7bfmwUKxH3Kll95LQ==/18878614649179588.jpg", 
	"artist":"朴树",
	"album":"<我去2000年>"
	},
	{"name":"一腔诗意喂了狗", 
	"id":"460542191", 
	"img":"http://p1.music.126.net/d95pQeIaep9IKy3gI0fKXw==/109951162862111882.jpg", 
	"artist":"花粥",
	"album":"<2017（三）>"
	},
	{"name":"想把我唱给你听", 
	"id":"297612", 
	"img":"http://p1.music.126.net/EmcMtmLwXZaOfCG1454oyQ==/73667279078627.jpg", 
	"artist":"王筝 / 老狼 / 小柯 / 曹方",
	"album":"<我们都是好孩子>"
	},
	{"name":"干杯，朋友", 
	"id":"293721", 
	"img":"http://p1.music.126.net/1Z7Rvewx5xsdBl24doz5fA==/64871186051046.jpg", 
	"artist":"田震",
	"album":"<干杯，田震>"
	},
	{"name":"晴天娃娃", 
	"id":"185846", 
	"img":"http://p1.music.126.net/UAgXkK9Buq7NcFJ2fy0KhA==/84662395351539.jpg", 
	"artist":"江语晨",
	"album":"<电影《不能说的秘密》原声带>"
	},
	{"name":"心愿", 
	"id":"379785", 
	"img":"http://p1.music.126.net/-QgrpnBhavRcLtaBaad5Lw==/52776558150270.jpg", 
	"artist":"四个女生",
	"album":"<心愿>"
	},
	{"name":"蓝莲花", 
	"id":"168091", 
	"img":"http://p1.music.126.net/C6txAWMGlVmAcAD37RVutQ==/122045790684028.jpg", 
	"artist":"许巍",
	"album":"<时光.漫步>"
	},
	{"name":"可惜没如果", 
	"id":"29814898", 
	"img":"http://p1.music.126.net/X0EDfXzxMQJiQ-71JFGdZw==/3238061746556733.jpg", 
	"artist":"林俊杰",
	"album":"<新地球>"
	},
	{"name":"曾经的你", 
	"id":"167975", 
	"img":"http://p1.music.126.net/ievBOR3ZkrDpPoMKrcaSog==/107752139534188.jpg", 
	"artist":"许巍",
	"album":"<每一刻都是崭新的>"
	},
	{"name":"外婆", 
	"id":"186003", 
	"img":"http://p1.music.126.net/P1goeQ7SoxEkFsb4ZDijMw==/7746059418324672.jpg", 
	"artist":"周杰伦",
	"album":"<七里香>"
	},
	{"name":"我也很想他", 
	"id":"287280", 
	"img":"http://p1.music.126.net/pwInkIYzovf72Mqm5T0Kzg==/768558627827557.jpg", 
	"artist":"孙燕姿",
	"album":"<Stefanie>"
	},
	{"name":"Kiss Me", 
	"id":"28188178", 
	"img":"http://p1.music.126.net/kjFVkzzt6BzB9EXr0qB1zA==/2576155743910424.jpg", 
	"artist":"Charlie Puth",
	"album":"<Ego>"
	},
	{"name":"千千阙歌", 
	"id":"212233", 
	"img":"http://p1.music.126.net/tzmGFZ0-DPOulXS97H5rmA==/18712588395102549.jpg", 
	"artist":"陈慧娴",
	"album":"<千千阙歌>"
	},
	{"name":"夜空中最亮的星", 
	"id":"25706282", 
	"img":"http://p1.music.126.net/d541jx7SqoDzVkenhmtg6g==/19193074974743620.jpg", 
	"artist":"逃跑计划",
	"album":"<世界>"
	},
	{"name":"阳光宅男", 
	"id":"185813", 
	"img":"http://p1.music.126.net/8LmuJ7_7MMbubyuF1d0BhA==/19082024300336034.jpg", 
	"artist":"周杰伦",
	"album":"<我很忙>"
	},
	{"name":"我在人民广场吃炸鸡", 
	"id":"27501817", 
	"img":"http://p1.music.126.net/oBXMDspbznSG3XdC0Ck9EA==/5636096604050877.jpg", 
	"artist":"阿肆",
	"album":"<预谋邂逅>"
	},
	{"name":"我的主题曲", 
	"id":"247945", 
	"img":"http://p1.music.126.net/oAUF0c9gCkcVQvrSvvmu2g==/556352883666613.jpg", 
	"artist":"江语晨",
	"album":"<晴天娃娃>"
	},
	{"name":"Naked", 
	"id":"520012673", 
	"img":"http://p1.music.126.net/HLFD7XjxSAgDbaoN1ZhQ0Q==/18220007184446832.jpg", 
	"artist":"James Arthur",
	"album":"<Naked>"
	},
	{"name":"独家记忆", 
	"id":"63650", 
	"img":"http://p1.music.126.net/D_e8zPgwkKCk1uSF-HSgbw==/18806046883327256.jpg", 
	"artist":"陈小春",
	"album":"<独家记忆 (Hong Kong Version)>"
	},
	{"name":"星语心愿", 
	"id":"330706", 
	"img":"http://p1.music.126.net/zRd1sSA2YIQfQUHR9aLFRQ==/30786325592352.jpg", 
	"artist":"张柏芝",
	"album":"<电影《星愿》插曲>"
	}
];
