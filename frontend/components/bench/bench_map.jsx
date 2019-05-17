import React from 'react'
import MarkerManager from '../../util/marker_manager'

class BenchMap extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        const mapOptions = {
            center: {lat:37.7758, lng:-122.435 },
            zoom: 13 
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        console.log(this.map)
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches)

        this.map.addListener('idle', () => {
            const {north, south, east, west } = this.map.getBounds().toJSON()
            const bounds = {
                northEast: {lat:north, lng: east},
                southWest: {lat:south, lng: west}
            }
            this.props.updateBounds(bounds)
        })
    }

    render(){
        return (
            <div id="map-container" ref={map => this.mapNode = map}></div>
        )
    }
    componentDidUpdate(prevProps){
        this.MarkerManager.updateMarkers(this.props.benches)
    }
}

export default BenchMap;