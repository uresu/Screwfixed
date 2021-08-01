(function(){

	// the minimum version of jQuery we want
	var v = "1.8.3";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			
////
          'use strict';

    console.log("Screwfix Fix 0.1");

    var dataLoadCallback = function(data)
    {
        console.log(this);
        $('.targetStockValue').find('p:contains("in stock in")').parents("[id^=productID_]").css("background", "#cfc");
    }

    $("[id^=productID_]").each
    (
        function(i)
        {
            var counter = i.toString();
            var url = $(this).find('a').attr('href');
            var liTag = '<li class="targetStockValue" id="targetStockValue_' + counter + '"><img src="https://i.imgur.com/UQ4XQlI.gif"></li>';
            $(this).find('ul').append(liTag);
            $('#targetStockValue_' + counter).load(url + ' [id^=branch_collection_]', dataLoadCallback);
        }
    );

      
      /////
      
		})();
	}

})();
