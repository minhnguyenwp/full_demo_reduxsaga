import React from 'react';
import PropTypes from 'prop-types';

// Sy - Sub-Components

class UserItem extends React.Component {
    render() {
        const user = this.props.user;
        return (<tr>
            <td><a>{user.name}</a></td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <div className="actions">
                    <div className="button" role="button"><img className="icon" src="/assets/images/delete.svg" /></div>
                </div>
            </td>
        </tr>);
    }
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
