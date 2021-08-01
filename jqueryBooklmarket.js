javascript: (() => {
  
  console.log("Screwfix Fix 0.1");
  
   jQuery("[id^=productID_]").each
    (
        function(i)
        {
            var counter = i.toString();
            var url = jQuery(this).find('a').attr('href');
            var liTag = '<li class="targetStockValue" id="targetStockValue_' + counter + '"><img src="https://i.imgur.com/UQ4XQlI.gif"></li>';
            jQuery(this).find('ul').append(liTag);
            jQuery('#targetStockValue_' + counter).load(url + ' [id^=branch_collection_]', function(data)
            {
                console.log(this);
                jQuery('.targetStockValue').find('p:contains("in stock in")').parents("[id^=productID_]").css("background", "#cfc");
            });
        }
    );
})();



