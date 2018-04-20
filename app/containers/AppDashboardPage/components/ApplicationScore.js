import React from 'react';
import PropTypes from 'prop-types';
// Sy - Sub-Components

class ApplicationScore extends React.Component {
	
    render() {
    	const appInfo = this.props.appInfo;

        return (<div className="row">
                {appInfo.coverity &&
		        <div className="col-4 score-block">
		          
		          <div className="score-item">
		            <div className="text">Coverity</div>
		            <div className="value">
		              <div className="number green-text green-br">{appInfo.coverity.score}</div>
		            </div>
		          </div>
		          <div className="pt-2">
								<i className="far fa-file-pdf h5">&nbsp;</i>
								<span 
									className="text-primary" 
									onClick={(e) => this.props.toggleDownType('coverity')}
									>Download Report</span></div>
		          <div className="time">Last run: {appInfo.coverity.lastRun}</div>
		        </div>
		        }
 
                {appInfo.protecode &&
		        <div className="col-4 score-block">
		          <div className="score-item">
		            <div className="text">Protecode</div>
		            <div className="value">
		              <div className="number blue-text blue-br">{appInfo.protecode.score}</div>
		            </div>
		          </div>
		          <div className="pt-2">
								<i className="far fa-file-pdf h5">&nbsp;</i>
								<span className="text-primary"
									onClick={(e) => this.props.toggleDownType('protecode')}>Download Report</span></div>
		          <div className="time">Last run: {appInfo.protecode.lastRun}</div>
		        </div>
                }

                {appInfo.ms_portal &&
		        <div className="col-4 score-block">
		          <div className="score-item">
		            <div className="text">MS Portal</div>
		            <div className="value">
		              <div className="number yellow-text yellow-br">{appInfo.ms_portal.score}</div>
		            </div>
		          </div>
		          <div className="pt-2"><i className="far fa-file-pdf h5">&nbsp;</i><span className="text-primary" data-toggle="modal" data-target="#downloadReportModal">Download Report</span></div>
		          <div className="time">Last run: {appInfo.ms_portal.lastRun}</div>
		        </div>
                }

		      </div>);
    }
}

/*ApplicationScore.propTypes = {
	appInfo: PropTypes.object.isRequired
};*/

export default ApplicationScore;
