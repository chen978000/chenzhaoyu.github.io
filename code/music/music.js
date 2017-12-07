// 主题：仿网易云音乐js
// 作者：陈昭雨
// 更新时间：20171207 
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
	var i=0;
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
	next.onclick = function(){
		i++;
		if(i>List.length-1){
			i = 0;
		}else{
		}
		getData(obj, cover, fengmian, intro_name, intro_artist, i);
		playing(disc, citou, play, pause, obj);
	}
	pre.onclick = function(){
		i--;
		if(i<0){
			i=List.length;
		}else{
		}
		getData(obj, cover, fengmian, intro_name, intro_artist, i);
		playing(disc, citou, play, pause, obj);
	}
	drag();
}
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
	var musicTime = document.querySelector(".musci_time");
	var ratio = (obj.currentTime/obj.duration);
	musicTime.firstChild.innerHTML = setTime(obj.currentTime);
	musicTime.lastChild.innerHTML = setTime(obj.duration);
	bar.style.width = (progress.offsetWidth*ratio)+"px";
	point.style.left = (progress.offsetWidth*ratio)+"px";
	console.log(obj.currentTime);
	if(obj.ended){
		next.click();
	}
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
	m = m<10?"0"+m:m;
	s = s<10?"0"+s:s;
	return m+":"+s;
}

//歌单（更新于20171207）
var List =[ 
	{"name":"成都", 
	"id":"436514312", 
	"img":"http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg", 
	"artist":"赵雷"
	},
	{"name":"童话镇", 
	"id":"432506345", 
	"img":"http://p1.music.126.net/tfa811GLreJI_S0h9epqRA==/3394192426154346.jpg", 
	"artist":"陈一发儿"
	},
	{"name":"理想三旬", 
	"id":"31445772", 
	"img":"http://p1.music.126.net/_msXsY9oMY4MSG3OTN0U1A==/109951162849778878.jpg", 
	"artist":"陈鸿宇"
	},
	{"name":"平凡之路", 
	"id":"28815250", 
	"img":"http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg", 
	"artist":"朴树"
	},
	{"name":"追梦赤子心", 
	"id":"355992", 
	"img":"http://p1.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg", 
	"artist":"GALA"
	},
	{"name":"南方姑娘", 
	"id":"202373", 
	"img":"http://p1.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg", 
	"artist":"赵雷"
	},
	{"name":"晴天", 
	"id":"186016", 
	"img":"http://p1.music.126.net/yjVbsgfNeF2h7fIvnxuZDQ==/18894007811887644.jpg", 
	"artist":"周杰伦"
	},
	{"name":"理想", 
	"id":"29567189", 
	"img":"http://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg", 
	"artist":"赵雷"
	},
	{"name":"秋酿", 
	"id":"30635613", 
	"img":"http://p1.music.126.net/XSCmc9ZbWcpeizDya2g6JQ==/18598239185572641.jpg", 
	"artist":"房东的猫"
	},
	{"name":"安和桥", 
	"id":"27646205", 
	"img":"http://p1.music.126.net/mPlr0GoQU2Wl_aZzIgIJ6A==/1984618488161733.jpg", 
	"artist":"宋冬野"
	},
	{"name":"光阴的故事", 
	"id":"26361010", 
	"img":"http://p1.music.126.net/3K6W80SyZ0ZIy3btLRlZMw==/7820826208648668.jpg", 
	"artist":"黄晓明 / 邓超 / 佟大为"
	},
	{"name":"阴天", 
	"id":"276936", 
	"img":"http://p1.music.126.net/DjyL8sXf9iU0Cik4hzs4RQ==/109951162783381.jpg", 
	"artist":"莫文蔚"
	},
	{"name":"最重要的决定", 
	"id":"229161", 
	"img":"http://p1.music.126.net/N9fWHLChdjpcGa1QbCbhDg==/19014954090943253.jpg", 
	"artist":"范玮琪"
	},
	{"name":"有点甜", 
	"id":"165340", 
	"img":"http://p1.music.126.net/2rMIJCU94hXW4pmxayvhPQ==/96757023249983.jpg", 
	"artist":"汪苏泷 / By2"
	},
	{"name":"Honey", 
	"id":"297829", 
	"img":"http://p1.music.126.net/YiTOLZAw20itRSFsHHBaPw==/18657612813739192.jpg", 
	"artist":"王心凌"
	},
	{"name":"风继续吹", 
	"id":"26620762", 
	"img":"http://p1.music.126.net/AtMpiqgluHefLF6nD_Pcug==/4417837720418086.jpg", 
	"artist":"张国荣"
	},
	{"name":"一笑倾城", 
	"id":"426852063", 
	"img":"http://p1.music.126.net/XtQbs_V1OAvtZo9tmJFAJA==/1369991503018202.jpg", 
	"artist":"汪苏泷"
	},
	{"name":"文科生的一个下午", 
	"id":"5265943", 
	"img":"http://p1.music.126.net/4FY52KxHJezy0lbpEugllw==/102254581400467.jpg", 
	"artist":"赵节"
	},
	{"name":"那些花儿(吉他版)", 
	"id":"139392", 
	"img":"http://p1.music.126.net/QYI8P7bfmwUKxH3Kll95LQ==/18878614649179588.jpg", 
	"artist":"朴树"
	},
	{"name":"一腔诗意喂了狗", 
	"id":"460542191", 
	"img":"http://p1.music.126.net/d95pQeIaep9IKy3gI0fKXw==/109951162862111882.jpg", 
	"artist":"花粥"
	},
	{"name":"想把我唱给你听", 
	"id":"297612", 
	"img":"http://p1.music.126.net/EmcMtmLwXZaOfCG1454oyQ==/73667279078627.jpg", 
	"artist":"王筝 / 老狼 / 小柯 / 曹方"
	},
	{"name":"干杯，朋友", 
	"id":"293721", 
	"img":"http://p1.music.126.net/1Z7Rvewx5xsdBl24doz5fA==/64871186051046.jpg", 
	"artist":"田震"
	},
	{"name":"晴天娃娃", 
	"id":"185846", 
	"img":"http://p1.music.126.net/UAgXkK9Buq7NcFJ2fy0KhA==/84662395351539.jpg", 
	"artist":"江语晨"
	},
	{"name":"心愿", 
	"id":"379785", 
	"img":"http://p1.music.126.net/-QgrpnBhavRcLtaBaad5Lw==/52776558150270.jpg", 
	"artist":"四个女生"
	},
	{"name":"蓝莲花", 
	"id":"168091", 
	"img":"http://p1.music.126.net/C6txAWMGlVmAcAD37RVutQ==/122045790684028.jpg", 
	"artist":"许巍"
	}
];
