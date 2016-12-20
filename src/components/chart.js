import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length);
}
function max(data){
    return _.max(data);
}
function min(data){
    return _.min(data);
}

export default (props) => {
    return (
        <div>
             <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color}/>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>Average temp: {average(props.data)}&deg;C</div>
                <div>Max temp: {max(props.data)}&deg;C</div>
                <div>Min temp: {min(props.data)}&deg;C</div>
        </div>
    );
}