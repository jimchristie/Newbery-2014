jQuery( document ).ready(function($) {

	//global vars
	var siteTitleHeight = $(".brand").height(),
		imageHeight,
		imageWidth;

	function createCookie(name, value, days) {
		var expires,
	        date = new Date();
	    if (days) {
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
		} else {
	        expires = "";
	        document.cookie = name + "=" + value + expires + "; path=/";
	    }
	}// createCookie

	function readCookie(name) {
		var nameEQ = name + "=",
	        ca = document.cookie.split(';'),
	        c,
	        i;
		for (i = 0; i < ca.length; i++) {
			c = ca[i];
			while (c.charAt(0) == ' ') {
	            c = c.substring(1, c.length);
	        }
			if (c.indexOf(nameEQ) == 0) {
	            return c.substring(nameEQ.length, c.length);
	        }
		}
		return null;
	}

	//set titleHeight based on cookie if it exists
	var titleHeight = readCookie("Title Height");
	if ( titleHeight ){
		$("#logo").height(titleHeight);
	}


	//make background image clickable
	$("#logo").click(function(){
		location.href = "http://newbery.dbrl.org";
	})
	
	function getImageSize(){
		var siteTitleHeight = $(".brand").height(),
			image_url = $('#logo').css('background-image'),
	    	image;
	    	
	    siteTitleHeight = $(".brand").height();

		// Remove url() or in case of Chrome url("")
		image_url = image_url.match(/^url\("?(.+?)"?\)$/);

		if (image_url) {
		    image_url = image_url[1];
		    image = new Image();

		    // just in case it is not already loaded
		    $(image).load(function () {
		    	imageHeight = image.height;
		    	imageWidth = image.width;
		        //console.log(image.width + ' x ' + image.height);
		        //console.log(imageWidth + ' x ' + imageHeight);
		        setLogoHeight();
		    });

		    image.src = image_url;

		    
		} else {
			$("#logo").height(siteTitleHeight);
		}// end if

	}// end getImageSize
	getImageSize();

    function setLogoHeight(){
    	
    	var logoWidth = $("#logo").width(),
    		logoHeight = Math.floor(logoWidth * (imageHeight / imageWidth) );

    	if (siteTitleHeight > logoHeight){
    		$("#logo").height(siteTitleHeight);
    		createCookie("Title Height", siteTitleHeight, 0);
    	} else if (siteTitleHeight <= logoHeight) {
    		$("#logo").height(logoHeight);
    		createCookie("Title Height", logoHeight, 0);
    	} else {
    		console.log("something goes wrong");
    	}// end if/else


    	function logs(){
    		console.log("imageHeight " + imageHeight);
    		console.log("imageWidth " + imageWidth);
    		console.log("siteTitleHeight = " + siteTitleHeight);
    		console.log("logoWidth = " + logoWidth);
    		console.log("logoHeight = " + logoHeight);
    		
	    	
    	}// end logs

    	//logs();
    	
    }// end setLogoHeight

    //setLogoHeight();

    $(window).resize(function(){
    	//setLogoHeight() 
    	getImageSize();
    }) ;



});