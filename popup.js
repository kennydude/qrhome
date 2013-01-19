chrome.runtime.getBackgroundPage(function(page){
	page.getCurrentURL(function(url) {
		qr.image({
			"value" : url,
			"size" : 10,
			"canvas" : document.getElementById("c")
		});
		qr.toDataURL(url, function(error, url){
			if(url != undefined){
				document.getElementById("save").setAttribute("href", url);
			}
		});
	});
});