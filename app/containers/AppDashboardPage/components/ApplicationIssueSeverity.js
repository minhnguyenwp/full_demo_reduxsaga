import React from 'react';

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

const getTypeValue = (data, type) => {
	return {
		total : data[type].issuesBySeverity.total,
		high  : data[type].issuesBySeverity.high,
		medium: data[type].issuesBySeverity.medium,
		low   : data[type].issuesBySeverity.low
	}
}

class ApplicationIssueSeverity extends React.Component {
	state = {
		severity: null
	}
	componentDidMount() {
		//console.log('Severity', this.props.data);
		this.setState({
			severity: calValue(this.props.data, this.props.types)
		})
		
	}
	// When receive new Props or Props is updated
	componentWillReceiveProps(nProps) {
		console.log('activeType',nProps.activeType);
		let {activeType} = nProps
		if (activeType == 'all' || !activeType ) {
			this.setState({
				severity: calValue(this.props.data, this.props.types)
			})
		} else {
			this.setState({
				severity: getTypeValue(this.props.data, activeType)
			})
		}
    }
	
    render() {
		const {data} = this.props;
		const {severity} = this.state;
		
        return (
		<div className="show-severity">
			{severity && 
			<div className="row">

				<div className="col">
					<div className="issue-item">
						<div className={"number grey-text"}>{severity.total}</div>
						<div className="desc">VULNERABILITIES</div>
					</div>
				</div>
				<div className="col">
					<div className="issue-item">
						<div className={"number red-text"}>{severity.high}</div>
						<div className="desc">HIGH</div>
					</div>
				</div>
				<div className="col">
					<div className="issue-item">
						<div className={"number orange-text"}>{severity.medium}</div>
						<div className="desc">MEDIUM</div>
					</div>
				</div>
				<div className="col">
					<div className="issue-item">
						<div className={"number blue-text"}>{severity.low}</div>
						<div className="desc">LOW</div>
					</div>
				</div>
			</div>
			}
		
		</div>
		)
    }
}

export default ApplicationIssueSeverity;