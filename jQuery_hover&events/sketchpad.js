$(document).ready(function(){
	$(".x").on({mouseenter:function(){
		$(this).css("background-color", "brown");
		},
		mouseleave:function(){
			$(this).css("background-color", "lightblue");	
		},
	})
	}
)