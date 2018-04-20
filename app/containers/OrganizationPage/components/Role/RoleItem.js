import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Sy - Sub-Components

class RoleItem extends React.Component {
    render() {
        const role = this.props.role;
        return (<tr>
            <td><Link to={'/my-organization/roles/' + role.id}>{role.name}</Link></td>
            <td>{role.user}</td>
        </tr>);
    }
}

RoleItem.propTypes = {
    role: PropTypes.object.isRequired
};

export default RoleItem;
