import React from 'react';
import { Timeline } from 'react-chartkick';
window.Chart = require('chart.js');
window.Highcharts = require('highcharts');

const Time_line = () => {

    return(

        <div>

            <Timeline data={[["vicky", "2018-03-01", "2018-03-05"], ["babu", "2018-03-07", "2018-03-08"]]} />

        </div>

    );

}
export default Time_line;