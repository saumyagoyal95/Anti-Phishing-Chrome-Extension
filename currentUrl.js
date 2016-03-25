//grab the current url
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
    
		var tabId = tab.id;
		tabUrl = tab.url;

		var xhr = new XMLHttpRequest();
		//xhr.onreadystatechange = function() {
		//if (xhr.readyState==4 && xhr.status==200) {
		//  document.getElementById("disp").innerHTML=xhr.responseText;
		//	}
		//} 
		xhr.open("GET", chrome.extension.getURL('http://localhost/insertdb.php'), true);
		xhr.send();
		   
	});
  }, false);
}, false);
