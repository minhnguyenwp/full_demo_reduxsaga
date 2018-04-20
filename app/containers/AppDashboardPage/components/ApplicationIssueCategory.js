import React from 'react';
import update from 'react/lib/update';
import _ from 'lodash'
import {convertObjToArr} from '../../../utils/helper'
// Sy - Sub-Components

// JS client lib
var StackChart = require("react-chartjs-2").HorizontalBar;
// Chart Config
const stackBarChartConfig = {
	data: null,
	options: {
		barThickness: 0.4,
		tooltips: {
			mode: 'index',
			intersect: false
		},
		scales: {
			xAxes: [{
				stacked: true,
				ticks: {
					beginAtZero: true,
					/*steps: 1,
					stepValue: 10,
					max: 100*/
				}
			}],
			yAxes: [{
				stacked: true
			}]
		},
		responsive: true,
		animation: {
			animateScale: true
		}
	}
}
const stackBarChartData = {
	labels: [],
	datasets: [
		 {
			 label: 'High',
			 data:[],
			 backgroundColor: '#CC2A15'
		 },
		 {
			 label: 'Medium',
			 data:[],
			 backgroundColor: '#F29200'
		 },
		 {
			 label: 'Low',
			 data:[],
			 backgroundColor: '#009BDE'
		 }
	 ],
};
/**
 * calValue 
 * get data and find: {coverity, protecode, msportal}
 * return all number
 */
const calValue = (data, types)=> {
	if (!data) {return}
	let re = {
		total: 0,
		high: 0,
		medium:0,
		low: 0
	}
	types.map((type, i) => {
		if (data[type]) {
			re.total  += data[type].issuesBySeverity.total
			re.high   += data[type].issuesBySeverity.high
			re.medium += data[type].issuesBySeverity.medium
			re.low    += data[type].issuesBySeverity.low
		}
	})

	//console.log(re)
	return re
}

function getLabelInData(data, types) {
	let labels = []
	types.map((type, i) => {
		if (data[type] ) {
			if (data[type].issuesByCategory && labels.length == 0) {
				let arr = convertObjToArr(data[type].issuesByCategory)
				//console.log('arr', arr);
				labels = _.map(arr, 'categoryName')
			}
		}
	})

	return labels
} 
function findMostLength(arr) {
	let len = arr[0].length
	let idx = 0
	arr.map((item,i) => {
		if (item.length > len) {
			len = item.length
			idx = i
		}
	})
	return idx
}

function mixValArr(arr) {
	if (arr.length == 0) {return []}
	let re  = []
	let idx = findMostLength(arr)
	// console.log('arr[idx]', arr[idx].length)
	if (arr[idx].length) {
		arr[idx].map((item, i) => {
			re.push(0)
		})
		arr[idx].map((item, i) => {
			arr.map((pa, j) => {
				//console.log('pa', pa)
				re[i] = parseInt(re[i]) + parseInt(pa[i] ? pa[i] : 0)
				// console.log(re[i])
			}) 
		})
	}	
	return re
}
function getValInData(data, types, level) {
	let vals = []
	types.map((type, i) => {
		if (data[type] ) {
			if (data[type].issuesByCategory && vals.length == 0) {
				let arr = convertObjToArr(data[type].issuesByCategory)
				//console.log('arr', arr);
				vals.push(_.map(arr, level))
			}
		}
	})

	// this is demo data, remove it!
	// vals = [
	// 	[1,135,322,81,132,135,322,81,5,1],
	// 	[1,0,143,23,81,132,135,322,81,5,1],
	// 	[0,145,563,3343,81,132,135,322,81,5,1]
	// ]
	// END: remove
	
	return mixValArr(vals)
} 
function getValType(data, type, level) {
	let vals = []
	if (data[type].issuesByCategory) {
		let arr = convertObjToArr(data[type].issuesByCategory)
		//console.log('arr', arr);
		vals = _.map(arr, level)
	}
	//console.log('vals', vals)
	return vals
}

class ApplicationIssueCategory extends React.Component {

	state = {
		show: 0,
		chartConfigData : stackBarChartConfig
	}

	componentDidMount() {
		//console.log('Chart', this.props.data);
		if (this.props.data) {
			let charTempData    = stackBarChartData
			let chartTempConfig = stackBarChartConfig
			let labels = getLabelInData(this.props.data, this.props.types)
			let vals   = {
				high  : getValInData(this.props.data, this.props.types, 'high'),
				medium: getValInData(this.props.data, this.props.types, 'medium'),
				low   : getValInData(this.props.data, this.props.types, 'low') 
			}
			//console.log('vals com', vals)
			charTempData.labels = labels
			charTempData.datasets[0].data = vals.high
			charTempData.datasets[1].data = vals.medium
			charTempData.datasets[2].data = vals.low
			chartTempConfig.data          = charTempData
			this.setState({
				chartConfigData: chartTempConfig,
				show: 1
			})
		}		
	}

	async componentWillReceiveProps(nProps) {
		if (nProps.activeType) {
			//console.log('Chart', nProps.activeType);
			const {activeType} = nProps
			let vals = null
			if (activeType == 'all') {
				vals   = {
					high  : getValInData(this.props.data, this.props.types, 'high'),
					medium: getValInData(this.props.data, this.props.types, 'medium'),
					low   : getValInData(this.props.data, this.props.types, 'low') 
				}
			} else {
				vals   = {
					high  : getValType(nProps.data, activeType, 'high'),
					medium: getValType(nProps.data, activeType, 'medium'),
					low   : getValType(nProps.data, activeType, 'low')
				}
				// this.setState(update(this.state, {
				// 	chartConfigData: chartTempConfig
				// }))
			}
			await this.setState(update(this.state, {
				chartConfigData: {
					data: {
						datasets: {
							[0]: { data: {$set: vals.high} },
							[1]: { data: {$set: vals.medium} },
							[2]: { data: {$set: vals.low} }
						}
					}
				},
				show: {$set: 1} 
			}))
			console.log('valssss', this.state.chartConfigData);
		}
	}


	render() {
		const {data, stackBarChart} = this.props;
		const {chartConfigData, show}     = this.state
		return (
			<div>
				{show &&
					<StackChart 
						data={chartConfigData.data} 
						options={chartConfigData.options} 
						width={600} 
						height={250}
					/>
				}
			</div>
		)
	}
}
export default ApplicationIssueCategory;
