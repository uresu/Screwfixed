javascript: (function() {
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
})();
