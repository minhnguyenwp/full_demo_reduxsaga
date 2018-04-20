import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// Sy - Sub-Components

class ApplicationHeader extends React.Component {
    render() {
    	const appInfo = this.props.appInfo;
    	
        return (<h3 className="application-title">{appInfo.applicationName}
        			<button type="button" 
        					className="btn btn-sm btn-primary float-right" 
        					onClick={(e) => {this.props.toggleModal()}}>
        				Download Reports
            		</button>
    				<Link to={'/risk-portfolio/1/general'} className="title">
        				<button type="button" className="btn btn-sm btn-default float-right mr-md-3">Settings</button>
        			</Link>
                	<p className="h6 pt-1 pb-3">ID: {appInfo.applicationId}</p>
                	<div className="row">
                		<label className="sub-title grey-text pl-3">Risk Index <span className="green-text">{appInfo.riskIndex}</span></label>
                	</div>
                </h3>);
    }
}

export default ApplicationHeader;
