document.addEventListener("DOMContentLoaded", function(event) { 
	var location;
	getlocation = new XMLHttpRequest();
	getlocation.onreadystatechange = function(){ 
		location = getlocation.responseText;
	}
	getlocation.open('GET', '//freegeoip.net/json/', 'false'); //ugh just because I don't want to spin up some Promises
	getlocation.send();

	var package = {};
	package.message = JSON.stringify(location);
	sendlocation = new XMLHttpRequest();
	sendlocation.setRequestHeader('Accept', 'application/json');
	sendlocation.open('POST', 'https://formspree.io/neil@kymainternational.com');
	sendlocation.send(package);
});