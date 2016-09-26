document.addEventListener("DOMContentLoaded", function(event) { 
	var location = {};
	getlocation = new XMLHttpRequest();
	getlocation.onreadystatechange = function(){ 
		console.log(getlocation.responseText);
	}
	getlocation.open('GET', 'https://geoip-db.com/json/geoip.php?jsonp=callback');
	getlocation.send();

	var package = {};
	package.location = JSON.stringify()
});