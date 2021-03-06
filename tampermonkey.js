// ==UserScript==
// @name         Screwfix Fix
// @version      0.1
// @description  Add the features and fixes to screwfix.com that they should really be doing themselves.
// @author       Wes Thompson
// @include      *://*.screwfix.com/*
// @require https://code.jquery.com/jquery-3.6.0.min.js

// ==/UserScript==

(function() {
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
