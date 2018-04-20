import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Sy - Sub-Components

class UserItem extends React.Component {
    render() {
        const user = this.props.user;
        return (<tr>
            <td><Link to={'/my-organization/users/' + user.id}>{user.name}</Link></td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <div className="actions">
                    <div className="button" role="button"><img className="icon" src="/assets/images/delete.svg" /></div>
                    <div className="button" role="button"><img className="icon" src="/assets/images/edit.svg" /></div>
                    <div className="button" role="button"><img className="icon" src="/assets/images/unlock.svg" /></div>
                </div>
            </td>
        </tr>);
    }
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
