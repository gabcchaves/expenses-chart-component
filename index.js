'use strict';

window.addEventListener('load', () => {
	calcBarsHeight();
});

// Calculate graph bars heights
function calcBarsHeight() {
	fetchData('data.json', (data) => {
		for (let i = 0; i < data.length; i++) {
			document.getElementById(data[i].day + "-bar").style.height = "calc(2% * " + data[i].amount + ")";
			console.log(document.getElementById(data[i].day + "-bar"));
		}
	});
}

// Fetch data from JSON
function fetchData(path, callback) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}
