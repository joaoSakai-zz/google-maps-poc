
var map;

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};

	map = new google.maps.Map(document.getElementById('map'), {
	  center: uluru,
	  zoom: 8
	});

	var infoWindow = new google.maps.InfoWindow();
	infoWindow.setContent('<h1>Funcionou</h1>');

	var marker = new google.maps.Marker({
		position: uluru,
	    map: map,
	    title: 'Uluru (Ayers Rock)'
	});

	marker.addListener('click', function() {
    	infoWindow.open(map, marker);
  	});
}