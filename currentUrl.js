//grab the current url
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
    
		var tabId = tab.id;
		tabUrl = tab.url;
		
		window.open("http://localhost/mini/phish.html");
			document.getElementById('demo').value = "lol";
	});
  }, false);
}, false);


//document.getElementById("demo").value = "Hello JavaScript!";
 
