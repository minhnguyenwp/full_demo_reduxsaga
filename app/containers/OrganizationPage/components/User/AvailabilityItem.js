import React from 'react';
import PropTypes from 'prop-types';

// Sy - Sub-Components

class AvailabilityItem extends React.Component {
    render() {
        const availbility = this.props.availbility;
        return (<div className="form-check">
            <label className="form-check-label">
                <input className="form-check-input" type="checkbox" value="" />
                {availbility.name}
            </label>
        </div>);
    }
}

AvailabilityItem.propTypes = {
    availbility: PropTypes.object.isRequired
};

export default AvailabilityItem;
