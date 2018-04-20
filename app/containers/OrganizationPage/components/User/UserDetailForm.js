import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Sy - Sub-Components
import AvailabilityItem from './AvailabilityItem';
import UserRoleItem from './UserRoleItem';
import UserLocked from './UserLocked';

class RoleDetailForm extends React.Component {
    renderAvailability(userAvailability) {
        if (userAvailability.length > 0) {
            return userAvailability.map((availbility, index) => (<AvailabilityItem key={index} availbility={availbility}/>));
        }
        return [];
    }

    renderRole(userRoles) {
        if (userRoles.length > 0) {
            return userRoles.map((role, index) => (<UserRoleItem key={index} role={role}/>));
        }
        return [];
    }

    render() {
        const user = this.props.user;
        const userAvailability = user.userAvailability ? this.renderAvailability(user.userAvailability) : '';
        const userRoles = user.roles ? this.renderRole(user.roles) : '';
        let userLocked;
        if (user.locked) {
            userLocked = (<UserLocked />);
        }

        return (<div className="detail-content">
            <div className="user-info">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" defaultValue={user.firstName}/>
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" defaultValue={user.username}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" defaultValue={user.email}/>
                </div>
            </div>
            {user.id ?
                <div className="user-availability">
                    <div className="form-group">
                        <label className="title">User Availability</label>
                        {userAvailability}
                    </div>
                </div>
                :
                ''
            }
            <div className="user-roles">
                <div className="form-group">
                    <label className="title">Roles</label>
                    {userRoles}
                </div>
            </div>
            {userLocked}
            <div className="action">
                <button className="btn btn-primary">Save</button>
                {user.id ? <button className="btn btn-danger">Delete</button>: ''}
                <Link to={'/my-organization/users/'}><button className="btn">Cancel</button></Link>
            </div>
        </div>);
    }
}

RoleDetailForm.propTypes = {
    user: PropTypes.object.isRequired
};

export default RoleDetailForm;
