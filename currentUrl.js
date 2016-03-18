//grab the current url

   chrome.tabs.getSelected(null, function(tab) {
       var tabId = tab.id;
       tabUrl = tab.url;

       document.write(tabUrl);
   });
