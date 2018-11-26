$(function(){
	// $(".agreement i").click(function(){
	//     if ($(this).hasClass("am_active"))  {
	//         $(this).removeClass("am_active");
	//     }
	//     else{
	//         $(this).addClass("am_active");
	//     }
	//  });
	// $(".login_form ul li a").click(function(){
	//    	$(".login_form ul li a").hide();
	//    	$(".login_form ul li span").show();
	//  })
	// $(".register_form ul li a").click(function(){
	//    	$(".register_form ul li a").hide();
	//    	$(".register_form ul li span").show();
	//  })
	// $(".edit").click(function(){
	// 	if ($(this).hasClass("am_active")) {
	// 		$(this).removeClass("am_active");
	// 		$(".edit").html("编辑");
	// 		$(".enclosure_bottom ul li b").hide();
	// 	}else{
	// 		$(this).addClass("am_active");
	// 		$(".edit").html("完成");
	// 	}
	// })
	$(".edit").click(function(){
		var hasClass = $(this).hasClass("am_active");
		var text = hasClass ? '编辑' : '完成';
		$(this).toggleClass("am_active");
		$(".enclosure_bottom ul li b").toggle();
		$(".edit").html(text);
	})
	
	$(".enclosure_bottom ul li b").click(function(){
		$(this).parent("li").remove();
	})
	$(".order_button a.one").click(function(){
		$(this).parent().parent("li").addClass("am_active");
		$(".order_popup").show();
	})
	$(".order_anniu a.two").click(function(){
		$(".order_popup").hide();
	})
	$(".order_anniu a.one").click(function(){
		$(this).parent().parent("li").addClass("am_active");
		$(".order_popup").hide();
		$(".my_order ul li.am_active").hide();
	})
	$(".problem_other a.three").click(function(){
		$(".problem_popup").fadeIn("slow");
	})
	$(".problem_popup").click(function(){
		$(".problem_popup").fadeOut();
		window.location.assign("http://www.baidu.com");
	})

	$(".modify").click(function(){
		if ($(this).hasClass("am_active")) {
			$(this).removeClass("am_active");
			$(".modify").html("修改");
			$(".subject_inform ul li p").attr("contentEditable","false");
			$(".subject_inform ul li p").css("color","#333");
			$(".subject_inform ul li.last b").show();
			$(".subject_inform ul li.last a").hide();
		}else{
			$(this).addClass("am_active");
			$(".modify").html("完成");
			$(".subject_inform ul li p").attr("contentEditable","true");
			$(".subject_inform ul li p").css("color","#999");			
			$(".subject_inform ul li.last b").hide();
			$(".subject_inform ul li.last a").show()

		}
	})
	/*个人资料*/
	$(".personal_edit").click(function(){
		if ($(this).hasClass("am_active")) {
			$(this).removeClass("am_active");
			$(".personal_edit").html("编辑");
			$(".personal ul li.first>img").show();
			$(".personal ul li.first label").hide();
			$(".personal ul li.second span").show();
			$(".personal ul li.second input").hide();
			var have1 = $(".personal ul li.second span.one").text();
			var have2 = $(".personal ul li.second span.two").text();
			var have3 = $(".personal ul li.second span.three").text();
			var text1 = $(".personal ul li.second input.one").val();
			var text2 = $(".personal ul li.second input.two").val();
			var text3 = $(".personal ul li.second input.three").val();
			if (text1 == "") {
				$(".personal ul li.second span.one").html(have1);
			}else{
				$(".personal ul li.second span.one").html(text1);
			}
			if (text2 == "") {
				$(".personal ul li.second span.two").html(have2);
			}else{
				$(".personal ul li.second span.two").html(text2);
			}
			if (text3 == "") {
				$(".personal ul li.second span.three").html(have3);
			}else{
				$(".personal ul li.second span.three").html(text3);
			}
		}else{
			$(this).addClass("am_active");
			$(".personal_edit").html("完成");
			$(".personal ul li.first>img").hide();
			$(".personal ul li.first label").show();
			$(".personal ul li.second span").hide();
			$(".personal ul li.second input").show();
		}
	})



})