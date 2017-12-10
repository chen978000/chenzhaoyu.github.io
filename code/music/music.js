// 主题：仿网易云音乐js
// 作者：陈昭雨
// 更新时间：20171210
// 20171209更新内容：增加歌单显示、隐藏、点击歌单播放、播放中歌曲颜色功能 
// 20171210更新内容：增加进度条拖动功能，修复歌单在底部滑动BUG 
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
		playing(disc, citou, play, pause, obj);
	}
	//点击磁头播放或暂停
	citou.onclick = function(){
		if(c==0){
			playing(disc, citou, play, pause, obj);
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
	//PC端拖动进度条
	var point = document.querySelector(".point");
	point.onmousedown =function(ev){
		ev.preventDefault();
		ev =event || window.event;
		drag(ev);
	}
	document.onmouseup = function(){
		document.onmousemove= null;
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
	musicList.style.overflow = "auto";
}
//隐藏歌单
function hideList(hideBtn){
	var musicList = document.querySelector(".music_list");
	musicList.style.top = "96%";
	musicList.style.height = "25px";
	hideBtn.style.display = "none";
	musicList.scrollTop = "0";
	musicList.style.overflow = "hidden";
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
	},
	{"name":"麦芽糖", 
	"id":"185918", 
	"img":"http://p1.music.126.net/yEGx5yAd9zaa3l03d30KNw==/18511377767183740.jpg", 
	"artist":"周杰伦",
	"album":"<十一月的萧邦>"
	},
	{"name":"一个像夏天一个像秋天", 
	"id":"229336", 
	"img":"http://p1.music.126.net/UqD44FQrnFw7MzrRICEW8w==/19156791090952699.jpg", 
	"artist":"范玮琪",
	"album":"<我们的纪念日>"
	},
	{"name":"亲爱的你怎么不在我身边", 
	"id":"247536", 
	"img":"http://p1.music.126.net/FDaKFV7wmluPnzb-vxiMJw==/6658642417909860.jpg", 
	"artist":"江美琪",
	"album":"<又寂寞又美丽>"
	},
	{"name":"Lose You Tonight", 
	"id":"18978152", 
	"img":"http://p1.music.126.net/J0TGWgZXxOG0uT2wt426nw==/6642149744081466.jpg", 
	"artist":"Kristina Train",
	"album":"<Dark Black>"
	},
	{"name":"你还欠我一个拥抱", 
	"id":"92255", 
	"img":"http://p1.music.126.net/pXHU8-4j8Gg4WfnBZuxiqA==/59373627905249.jpg", 
	"artist":"后弦 / Sara",
	"album":"<很有爱>"
	},
	{"name":"光辉岁月", 
	"id":"346576", 
	"img":"http://p1.music.126.net/JOJvZc_7SqQjKf8TktQ_bw==/29686813951246.jpg", 
	"artist":"Beyond",
	"album":"<光辉岁月十五年>"
	},
	{"name":"往事只能回味", 
	"id":"242535", 
	"img":"http://p1.music.126.net/msrVHFxp8wiHwNnCWKfPMA==/819136162693411.jpg", 
	"artist":"韩宝仪",
	"album":"<国语点歌集3>"
	},
	{"name":"告白气球", 
	"id":"418603077", 
	"img":"http://p1.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg", 
	"artist":"周杰伦",
	"album":"<周杰伦的床边故事>"
	},
	{"name":"偏爱", 
	"id":"86369", 
	"img":"http://p1.music.126.net/2-_sPmCBnN6VfwFmONRy2Q==/46179488378975.jpg", 
	"artist":"张芸京",
	"album":"<电视剧《仙剑奇侠传三》原声带>"
	},
	{"name":"好久不见", 
	"id":"65538", 
	"img":"http://p1.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg", 
	"artist":"陈奕迅",
	"album":"<认了吧>"
	},
	{"name":"旅行的意义", 
	"id":"209326", 
	"img":"http://p1.music.126.net/BZNpKSKkPTTv5ZnxdYAdUQ==/5850501371402948.jpg", 
	"artist":"陈绮贞",
	"album":"<旅行的意义>"
	},
	{"name":"当我唱起这首歌", 
	"id":"175206", 
	"img":"http://p1.music.126.net/HI8auhf6HL1QIV7s6oxYGQ==/130841883718860.jpg", 
	"artist":"小贱",
	"album":"<我是小贱>"
	},
	{"name":"风中有朵雨做的云", 
	"id":"276711", 
	"img":"http://p1.music.126.net/T2nfeY6OZRuLbC-DMd7bqw==/97856534884127.jpg", 
	"artist":"孟庭苇",
	"album":"<风中有朵雨做的云>"
	},
	{"name":"红色高跟鞋", 
	"id":"208902", 
	"img":"http://p1.music.126.net/6i19OzBdlb43f__SHe4JTw==/93458488373154.jpg", 
	"artist":"蔡健雅",
	"album":"<若你碰到他>"
	},
	{"name":"Panama", 
	"id":"34229976", 
	"img":"http://p1.music.126.net/Fq1Ypau-g86ZtotF4wPEKw==/7867005697927440.jpg", 
	"artist":"Matteo",
	"album":"<Panama>"
	},
	{"name":"济南济南", 
	"id":"425053743", 
	"img":"http://p1.music.126.net/XyAX_pfHW67IUK7R8a17Pg==/739971335700854.jpg", 
	"artist":"陈小熊",
	"album":"<济南济南>"
	},
	{"name":"往事只能回味", 
	"id":"29414460", 
	"img":"http://p1.music.126.net/GCJy3VguiVQIvzfTwResMg==/2535473813700425.jpg", 
	"artist":"好妹妹乐队",
	"album":"<说时依旧>"
	},
	{"name":"八月十五", 
	"id":"430026599", 
	"img":"http://p1.music.126.net/evWGqp3T5lhL55Ijxdl8wA==/18190320370376447.jpg", 
	"artist":"房东的猫",
	"album":"<八月十五>"
	},
	{"name":"贝加尔湖畔", 
	"id":"109998", 
	"img":"http://p1.music.126.net/aSxiiy01L3Q35IqsaAUgvQ==/100055558133714.jpg", 
	"artist":"李健",
	"album":"<依然>"
	},
	{"name":"Havana", 
	"id":"494865824", 
	"img":"http://p1.music.126.net/zUp6BqKPn1lmZINHsVDoew==/18425615858527510.jpg", 
	"artist":"Camila Cabello / Young Thug",
	"album":"<Havana>"
	},
	{"name":"时间一枪打在我身上", 
	"id":"156161", 
	"img":"http://p1.music.126.net/L0iLBhhnmaWkoPIxlyI25Q==/108851651161957.jpg", 
	"artist":"王梵瑞",
	"album":"<青春>"
	},
	{"name":"含笑有白鹭", 
	"id":"468252710", 
	"img":"http://p1.music.126.net/qMiFV8V6zlOSS9D4FLwFMw==/109951162807427178.jpg", 
	"artist":"崔开潮",
	"album":"<急驶的马车>"
	},
	{"name":"春夏秋冬的你", 
	"id":"412175360", 
	"img":"http://p1.music.126.net/Rnh-J6N-AowEhtOgIb7iMA==/1391981729060830.jpg", 
	"artist":"王宇良",
	"album":"<春夏秋冬的你>"
	},
	{"name":"Let It Be Me", 
	"id":"5039981", 
	"img":"http://p1.music.126.net/QMeRbRP6VZ9c0OKnZhZ9Kw==/6644348767350223.jpg", 
	"artist":"Phil Everly",
	"album":"<电影《怦然心动》原声带>"
	},
	{"name":"煎熬", 
	"id":"274686", 
	"img":"http://p1.music.126.net/AvMj5TKzvTgXc4OY5Z62Aw==/113249697678114.jpg", 
	"artist":"李佳薇",
	"album":"<感谢爱人>"
	},
	{"name":"最长的电影", 
	"id":"185821", 
	"img":"http://p1.music.126.net/8LmuJ7_7MMbubyuF1d0BhA==/19082024300336034.jpg", 
	"artist":"周杰伦",
	"album":"<我很忙>"
	},
	{"name":"我怀念的", 
	"id":"287063", 
	"img":"http://p1.music.126.net/PehnaQ-BaAXeQg1d5s7leA==/6635552673699715.jpg", 
	"artist":"孙燕姿",
	"album":"<逆光>"
	},
	{"name":"烟火", 
	"id":"85445", 
	"img":"http://p1.music.126.net/EsPx4aOtnDFewtIXZVH42g==/18625726976227920.jpg", 
	"artist":"光良",
	"album":"<不会分离>"
	},
	{"name":"借我", 
	"id":"408814900", 
	"img":"http://p1.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg", 
	"artist":"谢春花",
	"album":"<算云烟>"
	},
	{"name":"董小姐", 
	"id":"25702068", 
	"img":"http://p1.music.126.net/_f5W3wK95fmZiERRaYawsg==/1803199069572662.jpg", 
	"artist":"宋冬野",
	"album":"<摩登天空7>"
	},
	{"name":"Real Life", 
	"id":"507532195", 
	"img":"http://p1.music.126.net/gJGuRS0MB7AuI3fJCu1WSg==/109951163028393505.jpg", 
	"artist":"Gill Chang / Aviella",
	"album":"<Real Life>"
	},
	{"name":"所以来吧", 
	"id":"451991164", 
	"img":"http://p1.music.126.net/XSCmc9ZbWcpeizDya2g6JQ==/18598239185572641.jpg", 
	"artist":"房东的猫",
	"album":"<房东的猫>"
	},
	{"name":"最熟悉的陌生人", 
	"id":"307684", 
	"img":"http://p1.music.126.net/R0b5i1F0gmb49D-5P-rYWQ==/6665239487632442.jpg", 
	"artist":"萧亚轩",
	"album":"<萧亚轩>"
	},
	{"name":"不能说的秘密", 
	"id":"185868", 
	"img":"http://p1.music.126.net/UAgXkK9Buq7NcFJ2fy0KhA==/84662395351539.jpg", 
	"artist":"周杰伦",
	"album":"<电影《不能说的秘密》原声带>"
	},
	{"name":"那年的情书", 
	"id":"247498", 
	"img":"http://p1.music.126.net/b-zWMjTM9tFnnd2LLEY7iw==/6631154627210807.jpg", 
	"artist":"江美琪",
	"album":"<恋人心中有一首诗>"
	},
	{"name":"都选C", 
	"id":"507795470", 
	"img":"http://p1.music.126.net/FCvXiE-OndiMDYUkaXDK1w==/109951163029337837.jpg", 
	"artist":"大鹏",
	"album":"<电影《缝纫机乐队》推广曲>"
	},
	{"name":"蝶变", 
	"id":"186899", 
	"img":"http://p1.music.126.net/qUYPehXYmT6j4EycBwI3XQ==/92358976738528.jpg", 
	"artist":"张国荣",
	"album":"<一切随风>"
	},
	{"name":"遥不可及的你", 
	"id":"450853439", 
	"img":"http://p1.music.126.net/_d88fVvtP17B-hV7z1lWzg==/109951162835476747.jpg", 
	"artist":"花粥",
	"album":"<2017（一）>"
	},
	{"name":"露天电影院", 
	"id":"175957", 
	"img":"http://p1.music.126.net/dv96dCgWCedrQCTv5z_IRQ==/54975581394186.jpg", 
	"artist":"郁冬",
	"album":"<露天电影院>"
	},
	{"name":"还你门匙", 
	"id":"178993", 
	"img":"http://p1.music.126.net/t0nEmGddokyH_AYH-UNKYg==/555253372038834.jpg", 
	"artist":"余文乐",
	"album":"<Private Room>"
	},
	{"name":"Boys", 
	"id":"493275043", 
	"img":"http://p1.music.126.net/V6dEyAJxy-ehyVfGHS8Zbg==/18331057858539834.jpg", 
	"artist":"Charli XCX",
	"album":"<Boys>"
	},
	{"name":"一生所爱", 
	"id":"32785700", 
	"img":"http://p1.music.126.net/_48Jq9ttf6Hf9VwDBxG6TQ==/7934075906675270.jpg", 
	"artist":"卢冠廷",
	"album":"<电影《西游记大结局之仙履奇缘》插曲>"
	},
	{"name":"让我偷偷看你", 
	"id":"33166602", 
	"img":"http://p1.music.126.net/pksSYxP3e_HkbX7zwPvxjg==/7841716930323893.jpg", 
	"artist":"赵雷",
	"album":"<阿弥陀佛么么哒·一个孩子的心愿>"
	},
	{"name":"我从崖边跌落", 
	"id":"415086030", 
	"img":"http://p1.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg", 
	"artist":"谢春花",
	"album":"<算云烟>"
	},
	{"name":"以父之名", 
	"id":"186014", 
	"img":"http://p1.music.126.net/yjVbsgfNeF2h7fIvnxuZDQ==/18894007811887644.jpg", 
	"artist":"周杰伦",
	"album":"<叶惠美>"
	},
	{"name":"Locked Away", 
	"id":"37169348", 
	"img":"http://p1.music.126.net/Vm9_nhl8CCHPAyul7y8FXA==/3421680187979949.jpg", 
	"artist":"Tiffany Alvord",
	"album":"<Locked Away>"
	},
	{"name":"月球下的人", 
	"id":"407927304", 
	"img":"http://p1.music.126.net/JWWQaWDfb_zbDSxMFhj05Q==/16578436324241322.jpg", 
	"artist":"李幸倪",
	"album":"<月球下的人>"
	},
	{"name":"黄金甲", 
	"id":"185872", 
	"img":"http://p1.music.126.net/kyXutaAns9lcMiVGr9OUqg==/37383395356462.jpg", 
	"artist":"周杰伦",
	"album":"<黄金甲EP>"
	},
	{"name":"一个人的冬天", 
	"id":"66452", 
	"img":"http://p1.music.126.net/FTOwD35SGTnILvlnYKywbw==/95657511628669.jpg", 
	"artist":"陈楚生",
	"album":"<一个人的冬天>"
	},
	{"name":"一把破吉他1999", 
	"id":"32785269", 
	"img":"http://p1.music.126.net/Z1DUj-BY2qMuEz0c-GKaCg==/7950568581073610.jpg", 
	"artist":"赵照",
	"album":"<一把破吉他1999>"
	},
	{"name":"园游会", 
	"id":"186008", 
	"img":"http://p1.music.126.net/P1goeQ7SoxEkFsb4ZDijMw==/7746059418324672.jpg", 
	"artist":"周杰伦",
	"album":"<七里香>"
	},
	{"name":"权御天下", 
	"id":"440239045", 
	"img":"http://p1.music.126.net/gjIv7X2Azo0bABOdZf_xRg==/109951162849412719.jpg", 
	"artist":"伦桑 / 裂天 / 小魂 / 萧忆情Alex / 满汉全席",
	"album":"<【纯男声】满汉全席音乐团队>"
	},
	{"name":"Teenage Life", 
	"id":"1231775", 
	"img":"http://p1.music.126.net/aWHqbfIOSrwSrEuvpx_7WQ==/6643249255247548.jpg", 
	"artist":"Daz Sampson",
	"album":"<Teenage Life>"
	},
	{"name":"将军", 
	"id":"186004", 
	"img":"http://p1.music.126.net/P1goeQ7SoxEkFsb4ZDijMw==/7746059418324672.jpg", 
	"artist":"周杰伦",
	"album":"<七里香>"
	},
	{"name":"We'll Be the Stars", 
	"id":"31421899", 
	"img":"http://p1.music.126.net/CASOmmZMCsFiw1ijbwPDog==/2908208255837234.jpg", 
	"artist":"Sabrina Carpenter",
	"album":"<Eyes Wide Open>"
	},
	{"name":"九九八十一", 
	"id":"440353219", 
	"img":"http://p1.music.126.net/gjIv7X2Azo0bABOdZf_xRg==/109951162849412719.jpg", 
	"artist":"特曼 / 裂天 / 小魂 / 满汉全席",
	"album":"<【纯男声】满汉全席音乐团队>"
	},
	{"name":"上海一九四三", 
	"id":"186128", 
	"img":"http://p1.music.126.net/Wok9fSf1wF2-zFDZTTzlpg==/109951163076302925.jpg", 
	"artist":"周杰伦",
	"album":"<范特西>"
	}
];
