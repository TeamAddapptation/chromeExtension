'use strict';

chrome.runtime.onInstalled.addListener(function() {
	const store_apps = [{url: 'https://addapptation.com', id: '', name: 'test app 1'}, {url: 'https://addapptation.com/admins', id: '', name: 'test app 2'}];
	console.log("before_apps_set: " + store_apps);
	chrome.storage.local.set({apps: store_apps}, function(){
	  chrome.storage.local.get("apps", function(results){
		var i = 0;
		for (i = 0; i < results.apps.length; i++) {
			console.log("app_set: " + results.apps[i].name);
		}
	  });
	});

	//chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	//  chrome.declarativeContent.onPageChanged.addRules([{
	//    conditions: [new chrome.declarativeContent.PageStateMatcher({
		  //pageUrl: {hostEquals: 'developer.chrome.com'},
	//    })
	//    ],
	//        actions: [new chrome.declarativeContent.ShowPageAction()]
	//  }]);
	//});
});