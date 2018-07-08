import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import React from 'react';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }
    onInputChange = (e) =>{
        this.setState({term : e.target.value})
    }
    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
    }

    render(){
        return (
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
            placeholder="Search here with cities for weather"
            className="form-control"
            onChange={this.onInputChange} 
            value={this.state.term}/>
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Search</button>
            </span>
        </form>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({fetchWeather : fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
