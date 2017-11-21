
browser.tabs.onActivated.addListener(() => { showPageAction(); });

browser.tabs.onUpdated.addListener(() => { showPageAction(); });

function showPageAction() {
	
	var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
	
	gettingActiveTab.then((tabs) => {
		browser.pageAction.show(tabs[0].id);
	});
	
}

browser.pageAction.onClicked.addListener(() => {
	
	var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
	
	gettingActiveTab.then((tabs) => {
		currentUrl = tabs[0].url;
		browser.tabs.update(tabs[0].id, {url: currentUrl});
	});
	
});




