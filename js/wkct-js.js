﻿

$(document).ready(function($){
	var windowWidth = $(window).width();
	$(".ct-fimglist").width(windowWidth * 6); 
	$(".ct-fimglist li").width(windowWidth);
	$(".ct-ftoollist li").mouseover(function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		var preNumber=$(this).prevAll().size();
		$(".ct-fimglist li").removeClass("onpre");
		$(".ct-fimglist li:nth-child("+preNumber+")").addClass("onpre");
		var margin = windowWidth;
		margin = margin *preNumber; 
		margin = margin * -1;
		$(".ct-fimglist").stop().animate({marginLeft: margin + "px"}, {duration: 500});
	});
});