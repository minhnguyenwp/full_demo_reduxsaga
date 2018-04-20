import React from 'react';
import PropTypes from 'prop-types';

// Sy - Sub-Components

class UserRoleItem extends React.Component {
    render() {
        const role = this.props.role;
        return (<div className="form-check">
            <label className="form-check-label">
                <input className="form-check-input" type="checkbox" value="" />
                {role.name}
            </label>
        </div>);
    }
}

UserRoleItem.propTypes = {
    role: PropTypes.object.isRequired
};

export default UserRoleItem;
