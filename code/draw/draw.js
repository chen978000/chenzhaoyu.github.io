	window.onload = function(){
	var can = document.getElementById("canvas");//画布1
	var ctx = can.getContext("2d");//画笔1
	var can2 = document.getElementById("canvas2");//画布2
	var ctx2 = can2.getContext("2d");//画笔2
	var oLineWidth = document.getElementById("lineWidth");//获取线宽对象(select)
	var oStrokeColor = document.getElementById("stroke_color");//获取边框色对象
	var oFillColor = document.getElementById("fill_color");//获取填充色对象
	var oMain = document.getElementById("main");//获取main DIV对象

	//画色块	
	var can3 = document.getElementById("canvas3");//画布3
	var ctx3 = can3.getContext("2d");//画笔3
	var aColor = ["#000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFF"];//简单颜色色块数组
	for(i=0;i<aColor.length;i++){
		for(j=0;j<2;j++){
			ctx3.fillStyle = aColor[i];
			ctx3.fillRect(35*j, 28*i, 24,24);//画出简单颜色色块
		}
	}

	var  easyStrokeColor;//声明简单边框色
	var  easyFillColor;//声明简单填充色
	var easeAble = 0;//声明简单色有效值为0；
	can3.onmousedown = function(ev){//点下画布3
		easeAble = 1;//简单色有效值变为1
		var ev =event || window.event;
		x = ev.clientX-can3.offsetLeft-oMain.offsetLeft;
		y = ev.clientY-can3.offsetTop-oMain.offsetTop;//获取鼠标位置
		var colorDate = ctx3.getImageData(x, y, 1, 1);	//获取当前1像素的图像
		var pixel = colorDate.data;//获取图像的像素颜色值
		if(x<30){//判断是左
			easyStrokeColor = "rgb("+pixel[0]+","+pixel[1]+","+pixel[2]+")";//将像素颜色值赋值给简单边框色
		}else if(x>30){//判断是右
			easyFillColor = "rgb("+pixel[0]+","+pixel[1]+","+pixel[2]+")";//将像素颜色值赋值给简单填充色
		}
	}

	function clear(){//清屏函数
		ctx.clearRect(0, 0, can.width, can.height);
	}

	var mx1=0, my1=0, mx2=0, my2=0;//声明主画布鼠标位置变量
	var type=0;
	var drawAble = 0;
	var fillAble = 0;
	can2.onmousedown = function(ev){
		var ev = event || window.event;
		drawAble = 1;
		mx1 = ev.clientX-can.offsetLeft-oMain.offsetLeft;
		my1 = ev.clientY-can.offsetTop-oMain.offsetTop;	
	}
	document.onmouseup = function(ev){
		var ev = event || window.event;
		if((type==0 || type==1 || type==2 ||type==3 ||type==8)&&drawAble==1){
			drawAble = 0;
			ctx2.clearRect(0, 0, can.width, can.height);
			mx2 = ev.clientX-can.offsetLeft-oMain.offsetLeft;
			my2 = ev.clientY-can.offsetTop-oMain.offsetTop;	
			draw(ctx);
		}else{
			drawAble = 0;
		}
	}

	document.onmousemove = function(ev){
		var ev = event || window.event;	
		if(drawAble==0) return;
		if(type==0 || type==8){
			mx2 = ev.clientX-can.offsetLeft-oMain.offsetLeft;
			my2 = ev.clientY-can.offsetTop-oMain.offsetTop;
			draw(ctx);
			mx1=mx2;
			my1=my2;			
		}else if(type==1 || type==2 || type==3){
			mx2 = ev.clientX-can.offsetLeft-oMain.offsetLeft;
			my2 = ev.clientY-can.offsetTop-oMain.offsetTop;
			ctx2.clearRect(0, 0, can.width, can.height);
			draw(ctx2);
		}
	}

	function draw(context){
		if(type==8){
			ctx.lineWidth = oLineWidth.value;
			ctx.strokeStyle = "#fff";	
			ctx.beginPath();
			ctx.moveTo(mx1, my1);
			ctx.lineTo(mx2, my2);
			ctx.stroke();
		}else{
			if(easeAble==1){
				context.lineWidth = oLineWidth.value;
				context.strokeStyle = easyStrokeColor;
				context.fillStyle = easyFillColor;
			}else if(easeAble==0){
				context.lineWidth = oLineWidth.value;
				context.strokeStyle = oStrokeColor.value;
				context.fillStyle = oFillColor.value;
			}
			if(type==0 || type==1){
				context.beginPath();
				context.moveTo(mx1, my1);
				context.lineTo(mx2, my2);
				context.stroke();
			}else if(type==2 && fillAble ==1){
				context.beginPath();
				context.fillRect(mx1, my1, (mx2-mx1), (my2-my1));
				context.strokeRect(mx1, my1, (mx2-mx1), (my2-my1));
			}else if(type==2 && fillAble ==0){
				context.beginPath();
				context.strokeRect(mx1, my1, (mx2-mx1), (my2-my1));
			}else if(type==3 && fillAble ==1){
				context.beginPath();
				context.arc(mx1, my1, Math.sqrt((mx2-mx1)*(mx2-mx1)+(my2-my1)*(my2-my1)), 0, Math.PI*2, false);
				context.fill();			
				context.stroke();			
			}else if(type==3 && fillAble ==0){
				context.beginPath();
				context.arc(mx1, my1, Math.sqrt((mx2-mx1)*(mx2-mx1)+(my2-my1)*(my2-my1)), 0, Math.PI*2, false);	
				context.stroke();			
			}								
		}
	}

	//自由画
	var oFree = document.getElementById("free");
	oFree.onclick = function(){
		type = 0;
	}
	//画直线
	var oLine = document.getElementById("line");
	oLine.onclick = function(){
		type = 1;
	}

	//清屏
	var oClear = document.getElementById("clear");
	oClear.onclick = function(){
		clear();
	}

	//画矩形
	var oRect = document.getElementById("rect");
	oRect.onclick = function(){
		type =2;
	}

	//画圆
	var oArc = document.getElementById("arc");
	oArc.onclick = function(){
		type =3;
	}
	//橡皮擦
	var oEraser = document.getElementById("eraser");
	oEraser.onclick = function(){
		type = 8;
	}
	//无填充色
	var oNoFill = document.getElementById("noFill");
	oNoFill.onclick = function(){
		fillAble = 0;
	}
	//有填充色
	var oHaveFill = document.getElementById("haveFill");
	oHaveFill.onclick = function(){
		fillAble = 1;
	}

	//点了颜色选择器，简单色有效值变为0
	oStrokeColor.onclick = function(){
		easeAble=0;
	}
	oFillColor.onclick = function(){
		easeAble=0;
	}

	//保存canvas文件为png到本地
	var oSave = document.getElementById("save");
	var oSaveA = document.getElementById("save_a");
	oSave.onclick = function(){
		var dataUrl = can.toDataURL();
		oSaveA.href = dataUrl;
		oSaveA.click();
	}
}