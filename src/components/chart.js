import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

class Chart extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Sparklines data={this.props.data} height={120} width={180}>
                <SparklinesLine color={this.props.color} />
                <SparklinesSpots />
            </Sparklines>
        );
    }
}

export default Chart;