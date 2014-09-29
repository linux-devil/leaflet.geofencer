$(function() {  

    var totalLatLng = '(24.99539, 121.51033)|(25.02277, 121.53368)|(25.05295, 121.49935)|(25.01624, 121.44579)|(24.99508, 121.48252)';

    var map        = null;
    var polygon    = null;

    initialize();
    
    function initialize() {
        map     = new GeofencingMap('map').map;
        polygon = new Polygon(map);

        var splitLatLng = totalLatLng.split("|");

        
        for(var i=0;i<splitLatLng.length;i++){
            var latlng = splitLatLng[i].substring(1, splitLatLng[i].length-1).split(",");
            polygon.create_marker(L.latLng(latlng[0], latlng[1]));
        }
        
        map.on('click', function (e) {
            if (!polygon.drag && !polygon.override_map_click) {
                polygon.create_marker(e.latlng);
            }
            else {
                polygon.override_map_click = false;
            }
        });

    }
});