<<<<<<< HEAD
function getParameterByName(name, url) {

	if(!url) url = window.location.href;

	name = name.replace(/[\[\]]/g, '\\$&');

	var regrex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	results = regrex.exe(url); // We studied that is difficult 

	if(!results) return null;
	if(!results[2]) return '';

	return decodeURIComponent(result[2].replace(/\+/g, ' '));

 }

 function updateQueryStringParameter(uri, key, value) {

 	var re = new RegExp("([?&])" + key + "=.?(&|$)", "i");

 	var separator = uri.indexOf('?') !== -1 ? "&" : "?";

 	if(uri.match(re)) {

 		return uri.replace(re, '$1' + key + "=" + value + '$2');
 	} else {

 		return uri + separator + key + "=" + value;
 	}
 }

function removeURLParameter(url, parameter ) {

	var urlparts = url.split('?');

	if(urlparts.length >= 2) {

		var prefix = encodeURIComponent(parameter)+'=';
		var parts = urlparts[1].split(/[&;]/g);

		for(var i = pars.length; i-- > 0;) {

			if(pars[i].lastIndexOf(prefix, 0) !== -1) {

				pars.splice(i, 1);
			}
		}

return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&'): '');

	}
}


Array.prototype.remvoe = function () {

	var what , a = arguments, L = a.length, ax;

	while(L && this.length) {

		what = a[--L];
		while((ax = this.indexOf(what)) !== -1) {

			this.splice(ax, 1);
		}
	}

	return this;
}
=======
function arr_diff(a1, a2) {

	var a = [], diff = [];

	for( var i = 0; i < a1.length; i++){

		a[a1[i]] = true;
	}


	for( var i = 0; i < a2.length; i++) {

		if(a[a2[i]]) {

			delete a[a2[i]];
		} else {

			a[a2[i]] = true;
		}
	}

	for(var k in a) {

		diff.push(k);
	}

	return diff;
}


// Subtract array from array 
Array.prototype.subtract = function (array ) {

	array = array.slice();

	return this.filter( function (e) {

		var p = array.indexOf(e);

		if(p === -1) {

			return true;
		}

		array.splice(p, 1);
	})
}


var a = [1, 2, 2, 3, 3, 3],
    b = [1, 2, 3];

console.log(a.subtract(b));

>>>>>>> 5d8c4809778abca623285086c9c8e91046f04d18
