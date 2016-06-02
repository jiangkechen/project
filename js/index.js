//banner图片的隐藏
$(".shut").mousedown(function(){
	$(".shut").add($(".logo")).animate({"opacity":"0","height":"0"},1000)
});
$(".city").mouseover(function(){
	$(".city").css({"border":"1px solid black","background":"white"});
	$(".hidden_city").css("display","block");
	$(".blank").css("display","block");
}).mouseout(function(){
	$(".city").css({"border":"none","background":"#F1F1F1"});
	$(".hidden_city").css("display","none");
	$(".blank").css("display","none");
});

//城市列表的操作
var arr=$(".hidden_city ul li");
console.log(arr);

arr.mouseover(function(){
	$(this).css("background","#F1F1F1");
}).mouseout(function(){
	$(this).css("background","white");
})

arr.click(function(){
	// console.log(this.children[0].innerHTML);
	// console.log($("#change")[0].innerHTML)
	$(this).css("background","red")
	// $(this).siblings().mouseover().css("background","#F1F1F1");
	$("#change").text(this.children[0].innerHTML);
});

