//Mapa de fondo 
	var Thunderforest_Pioneer = L.tileLayer('https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=45d2630d5e6c400caad9897e25633ccd', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '<45d2630d5e6c400caad9897e25633ccd>',
	maxZoom: 22,
	});
	 map.addLayer(Thunderforest_Pioneer);
	 
	var sat_view = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	});
	
	var terrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
	maxZoom: 13
	});
	
var baseMapIndex = {
				"Thunderforest": Thunderforest_Pioneer,
				"Satellite": sat_view,
				"Terrain": terrain
			};
var layerControl = L.control.layers(baseMapIndex, null, {position: 'bottomleft'});
layerControl.addTo(map);
layerControl.setOptions
