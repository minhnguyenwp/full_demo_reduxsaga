import React from 'react';
import PropTypes from 'prop-types';

// Sy - Sub-Components
import RoleDetailForm from './RoleDetailForm';

class RoleDetail extends React.Component {
    render() {
        const data = [
            {
                id: 1,
                name: 'Organization Admin',
                permisions: [{
                    name: 'Manager Users (Add/Remove/Assign)'
                }, {
                    name: 'Manager Tools (Add/Remove)'
                }],
                user: 3
            }, {
                id: 2,
                name: 'Tech Manager',
                permisions: [{
                    name: 'Manager Users (Add/Remove/Assign)'
                }, {
                    name: 'Manager Tools (Add/Remove)'
                }],
                user: 7
            }, {
                id: 3,
                name: 'Excutive',
                permisions: [{
                    name: 'View Project'
                }],
                user: 10
            }
        ];
        const id = this.props.match.params.id;
        const roleDetailObj = data.find(item => Number(item.id) === Number(id));
        let detail;
        if (roleDetailObj) {
            detail = (<RoleDetailForm role={roleDetailObj}/>);
        } else {
            detail = (<div>Role not found</div>);
        }
        return (<div className="section role-detail-section">
            <div className="section-title">Role Detail</div>
            {detail}
        </div>);
    }
}

RoleDetail.propTypes = {
    match: PropTypes.object.isRequired
};

export default RoleDetail;
