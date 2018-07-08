import React from 'react'


class GoogleMap extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount = () => {
            console.log("mounted");
            console.log(this.refs.map);
            new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }

            });
        }

    render(){
        return <div id="map" ref="map"></div>;
    }
}



export default GoogleMap;