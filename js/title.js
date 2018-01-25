$(document).on('keydown', function(event){
	if(event.keyCode == 37) { 
		event.preventDefault();
    }
    else if(event.keyCode == 39) { 
    	event.preventDefault();
    }
});


$(document).on('keyup', function(event){
	if(event.keyCode == 37) { 
		event.preventDefault();
		// if (storyNum < stories.length) {
    		// goPrevStory(); 
    	// }
    }
    else if(event.keyCode == 39) { 
    	event.preventDefault();
    	// if (storyNum < stories.length) {
    		window.location.href = "title2.html";
    	// }
    }
});