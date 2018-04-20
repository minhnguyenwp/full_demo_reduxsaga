import React from 'react';
import PropTypes from 'prop-types';
// Sy - Sub-Components

const StackChart = require('react-chartjs-2').HorizontalBar;

class ApplicationChart extends React.Component {

    render() {
        const stackBarChart = this.props.stackBarChart;
        const divStyle = {
            width: this.props.application.widthPercent + '%'
        };
        const width = 600 * this.props.application.widthPercent / 100;
        return <div id={'chart' + this.props.application.id} style={divStyle}><StackChart data={stackBarChart.data} options={stackBarChart.options} width={width} height={70} /></div>;
    }
}

ApplicationChart.propTypes = {
    stackBarChart: PropTypes.object.isRequired,
    application: PropTypes.object.isRequired
};

export default ApplicationChart;
