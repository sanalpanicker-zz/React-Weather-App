import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component{
    constructor(props){
        super(props);
    }
    renderCityData = (cityData) => {
        let tempArr = cityData.list.map((deatils)=>{return deatils.main.temp});
        let pressureArr = cityData.list.map((deatils)=>{return deatils.main.pressure});
        let humidityArr = cityData.list.map((deatils)=>{return deatils.main.humidity});
        let {lat,lon} = cityData.city.coord;
        console.log(`${lat}${lon}`);


    return (
        <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={tempArr} color='red' /></td>
        <td><Chart data={pressureArr} color='orange' /></td>
        <td><Chart data={humidityArr} color='blue' /></td>
        </tr>
    )
    };

    render(){
        return (
<table className="table table-hover">
    <thead>
        <tr>
        <th>City</th>
        <th>Temprature(K)</th>
        <th>Pressure(hPa)</th>
        <th>Humidity(%)</th>
        </tr>
    </thead>
    <tbody>
        {this.props.citiDetails.map(this.renderCityData)}
    </tbody>
</table>
       );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        citiDetails: state.cityDetails
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(WeatherList)
