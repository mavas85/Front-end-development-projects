//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction


//1; Hide Spoiler
$(".spoiler span").hide();

//2, Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")
//3, When button pressed
$("button").click(function(){
	//3.1, Show spoiler next to the button clicked
	$(this).prev().show();
	$(".spoiler span").show();
	
	//3.2, Get rid of button
	$(this).remove();
});
	
	