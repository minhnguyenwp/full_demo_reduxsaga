import React from 'react';

// Sy - Redux extensions
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {connect} from 'react-redux';
import {compose} from 'redux';

// Sy -- Call actions and reducer in Comp
import reducer from '../../redux/reducer';
import saga from '../../redux/saga';
import {getRoleData} from '../../redux/actions';

// Sy - Sub-Components
import RoleItem from './RoleItem';

class RoleSection extends React.Component {
    componentDidMount() {
        console.log('get Roles');
        this.props.getRoleData();
    }

    renderRole(roles) {
        if (roles.length > 0) {
            return roles.map((role) => (<RoleItem key={role.id} role={role}/>));
        }
        return [];
    }

    render() {
        console.log('roles', this.props.roles);
        const roles = this.props.roles.data ? this.renderRole(this.props.roles.data) : [];
        return (<div className="section role-section">
            <div className="section-title">Roles</div>
            <div className="roles">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Role Name</th>
                            <th scope="col">Assigned to user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

RoleSection.propTypes = {
    getRoleData: PropTypes.func.isRequired,
    roles: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getRoleData: () => {
            dispatch(getRoleData());
        }
    };
}

function mapStateToProps(state) {
    const roles = state.get('roles');
    return {roles};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'roles', reducer});
const withSaga = injectSaga({key: 'roles', saga});

export default compose(withReducer, withSaga, withConnect)(RoleSection);
