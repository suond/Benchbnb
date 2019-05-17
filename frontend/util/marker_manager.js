

export default class MarkerManager{
    constructor(map){
        this.map = map
        this.markers = {}
    }

    updateMarkers(benches){
        let benchObj = {}
        benches.forEach(bench => {
            benchObj[bench.id] = bench
        })

        let markerKeys = Object.keys(this.markers);
        Object.keys(benchObj).forEach(key => {
            if (!markerKeys.includes(key)){
                this.markers[key] =
                this.createMarkerFromBench(benchObj[key]);    
            }
        });
    }

    createMarkerFromBench(bench){
        var myLatLng = {lat: bench.lat, lng: bench.lng};
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'Hello World!'
          });
         return marker
    }

    removeMarker(marker){
        this.markers[marker.benchId].setMap(null)
        delete this.markers[marker.benchId];
    }

}
