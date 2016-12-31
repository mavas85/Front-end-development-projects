//Problem: User when clicking on image gos to a dead end
//Solution: Create an overlay with the large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// An image to overlay
$overlay.append($image);


// Add overlay
$("body").append($overlay);
	
	// Add a caption to overlay
	$overlay.append($caption);


//1: Capture the click event on a link to an image
$("imageGallery a").click(function(event) {
	event.preventDefault();
	var imagelocation = $(this).attr("href");
	//1.2 Update overlay with image linked in the link
	$image.attr("src", imagelocation);
	
	//1.1 Show the overlay
	$overlay.show();
	
	
	//1.3 Get child's alt attribute and set caption
	var captiontext = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

// When overlay is clicked 
$overlay.click(function() {
	// Hide the overlay
	$overlay.hide();
});
	













	

