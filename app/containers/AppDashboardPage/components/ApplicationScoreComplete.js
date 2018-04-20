import React from 'react';
import PropTypes from 'prop-types';
// Sy - Sub-Components

class ApplicationScoreComplete extends React.Component {

    render() {
        let successTools = 0;

        const scoreData = this.props.scoreData;
        const totalTools = Object.keys(scoreData).length;
        Object.keys(scoreData).forEach(key => {
            if (scoreData[key].score != 0) {
                successTools += 1;
            }
        });
        let scorePercent = (successTools * 100 / totalTools).toFixed();

        return (<div className="row">
            <div className="col">
                <div className="summary">Score Completeness&nbsp;
                    <span className="blue-text font-weight-bold">{scorePercent}%</span>
                    ({successTools} out of {totalTools} tools generate report)
                </div>
            </div>
        </div>);
    }
}

ApplicationScoreComplete.propTypes = {
    scoreData: PropTypes.object.isRequired
};

export default ApplicationScoreComplete;
