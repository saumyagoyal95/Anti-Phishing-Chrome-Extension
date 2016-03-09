	
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('b1').addEventListener('click');
});
