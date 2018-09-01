$(document).ready(function(){
	
	$("#option-container i").click(function(){
		$("#option").toggle();
	})	
	var lis= $("#option ul li")
	lis.eq(0).css('backgroundColor','yellow');
	lis.eq(1).css('backgroundColor','black');
	lis.eq(2).css('backgroundColor','gray');
	lis.eq(3).css('backgroundColor','blue');
	lis.eq(4).css('backgroundColor','#09c');
	
	lis.click(function(){
		var bgColor = $(this).css('backgroundColor');
		$("*").css('color', bgColor);
		
	});
	
	$("#option img").click(function(){
		var imgSrc=$(this).attr('src');
		$(".cover").css("backgroundImage","url("+imgSrc+")")
	})
	
});