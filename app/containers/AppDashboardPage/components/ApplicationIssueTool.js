import React from 'react';
import update from 'react/lib/update';
import PropTypes from 'prop-types';
// Sy - Sub-Components

var PieChart = require("react-chartjs-2").Pie;

const pieChartConfig = {
        data: pieChartData,
        options: {
            responsive: true,
            animation: {
            	animateScale: true
            }
        }
    }

const countTotalIssues = 0;

const pieChartData = {
	 datasets: [{
		 data:[],
		 backgroundColor: []
	 }],
	labels: []
};

function calculateTotalIssuesAllTool(data) {
	let countTotalIssues = 0;

	Object.keys(data).forEach(function(key, index) {
		countTotalIssues = countTotalIssues + data[key].issuesBySeverity.total;
	}, this);

	return countTotalIssues
}

function getChartData(data, countTotalIssues) {
	Object.keys(data).forEach(function(key, index) {
		pieChartData.datasets[0].data[index] = (data[key].issuesBySeverity.total * 100 / countTotalIssues).toFixed();

		if (key == 'coverity') {
			pieChartData.labels[index] = 'Coverity';
			pieChartData.datasets[0].backgroundColor[index] = '#88B428';
		} else if (key == 'protecode') {
			pieChartData.labels[index] = 'Protecode';
			pieChartData.datasets[0].backgroundColor[index] = '#4886B3';
		} else if (key == 'ms_portal') {
			pieChartData.labels[index] = 'Ms Portal';
			pieChartData.datasets[0].backgroundColor[index] = '#F29200';
		}

	}, this);
}

class ApplicationIssueTool extends React.Component {

	state = {
		show: 0,
		chartConfigData : pieChartConfig
	}

	componentDidMount() {

		if (this.props.data) {
			let countTotalIssues = 0;
			countTotalIssues = calculateTotalIssuesAllTool(this.props.data)

			getChartData(this.props.data, countTotalIssues);

			this.setState({
				chartConfigData: {
					data: pieChartData,
					show: 1
				}
			})
		}
	}

	 render() {

		const {data, stackBarChart} = this.props;
		const {chartConfigData, show} = this.state

	    return <PieChart data={chartConfigData.data} options={chartConfigData.options} width={600} height={250} />
	 }
}
export default ApplicationIssueTool;
