import React from 'react';
import PropTypes from 'prop-types';

// Sy - Sub-Components
import UserDetailForm from './UserDetailForm';

class UserDetail extends React.Component {
    render() {
        const data = [
            {
                id: 1,
                name: 'Kenneth Sellers',
                username: 'ksellers',
                email: 'ksellers@synopsys.com',
                firstName: 'Sellers',
                lastName: 'Kenneth',
                roles: [{
                    name: 'Organization Admin'
                }],
                userAvailability: [{
                    name: 'Disable User'
                }],
                locked: false
            }, {
                id: 2,
                name: 'Micheal',
                username: 'mjardine',
                email: 'mjardine@synopsys.com',
                firstName: 'Micheal',
                lastName: 'Micheal',
                roles: [{
                    name: 'Organization Admin'
                }],
                userAvailability: [{
                    name: 'Disable User'
                }],
                locked: true
            }, {
                id: 3,
                name: 'Khuyen Vo',
                username: 'khuyenvo',
                email: 'khuyenvo@synopsys.com',
                firstName: 'Vo',
                lastName: 'Khuyen',
                roles: [{
                    name: 'Organization Admin'
                }],
                userAvailability: [{
                    name: 'Disable User'
                }],
                locked: false
            }
        ];
        const id = this.props.match.params.id;
        let detail;
        let userDetailObj = {
            roles: [{
                name: 'Organization Admin'
            }]
        };
        if (id === 'new') {
            detail = (<UserDetailForm user={userDetailObj}/>);
        } else {
            userDetailObj = data.find(item => Number(item.id) === Number(id));
            if (userDetailObj) {
                detail = (<UserDetailForm user={userDetailObj}/>);
            } else {
                detail = (<div>User not found</div>);
            }
        }
        return (<div className="section user-detail-section">
            <div className="section-title">User Detail</div>
            {detail}
        </div>);
    }
}

UserDetail.propTypes = {
    match: PropTypes.object.isRequired
};

export default UserDetail;
