$(function(){
	var minMax=0;
	$(".artical li").mouseover(function(){
		$(this).find(".hidden").css("display", "inline");
	});
	$(".artical li").mouseout(function(){
		if(minMax==0){
			$(this).find(".hidden").css("display", "none");
		}
	});

	//显示全文的方法
	var see=document.documentElement.clientHeight;
	function showAll(fn){
		fn.parents().children(".text-min").css("display", "none");
		fn.parents().children(".text-max").css("display", "inline-block");
		fn.parents().children().children(".wrap").css("display", "inline-block");
		fn.parents().children(".attention").css("display", "inline-block");
		
		// $(document).scroll(function(){
		// 	var oTop=$("p.text-max").offset().top-$(window).scrollTop();
		// 	var oBotton=oTop+$("p.text-max").height();
		// 	var s=$(".head").height();
		// 	alert(oTop);
		// 	if(oTop<s && oBotton<0){
		// 		alert(oTop);
		// 		$(".view").css("position","fixed");
		// 	}else{
		// 		$(".view").css("position","absolute");
		// 	}	
		// });
		
	}
	//折叠全文的方法
	function hiddenAll(fn){
		fn.parents().children(".text-min").css("display", "inline-block");
		fn.parents().children(".text-max").css("display", "none");
	}
	//显示全文
	$(".show-all").click(function(){
		minMax=1;
		showAll($(this));
	});
	$(".number").click(function(){
		minMax=1;
		showAll($(this));
	});
	$(".artical-text").click(function(){
		minMax=1;
		showAll($(this));
	});
	//折叠全部
	$(".wrap").click(function(){
		minMax=0;
		hiddenAll($(this));
	});
	

		

	
	
})
