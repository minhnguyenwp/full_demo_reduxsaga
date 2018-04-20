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
import {getUserData} from '../../redux/actions';

// Sy - Sub-Components
import UserItem from './UserItem';

class UserSection extends React.Component {
    componentDidMount() {
        console.log('get Users');
        this.props.getUserData();
    }

    renderUser(users) {
        if (users.length > 0) {
            return users.map((user) => (<UserItem key={user.id} user={user}/>));
        }
        return [];
    }

    render() {
        console.log('users', this.props.users);
        const userTable = this.props.users.data ? this.renderUser(this.props.users.data) : [];
        const usersData = this.props.users.data || [];
        const techUsers = usersData.filter(item => item.role === 'Tech Manager');
        const techUserTable = this.renderUser(techUsers);
        const executiveUsers = usersData.filter(item => item.role === 'Executive');
        const executiveUserTable = this.renderUser(executiveUsers);
        return (<div className="section user-section">
            <div className="section-title">Users ({usersData.length})
                <button className="btn btn-primary float-right"><i className="fa fa-plus"></i> Add User</button>
            </div>
            <div className="users">
                <h5 className="table-title">Tech Manager ({techUsers.length})</h5>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {techUserTable}
                    </tbody>
                </table>
                <br />
                <h5 className="table-title">Excutive ({executiveUsers.length})</h5>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {executiveUserTable}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

UserSection.propTypes = {
    getUserData: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getUserData: () => {
            dispatch(getUserData());
        }
    };
}

function mapStateToProps(state) {
    const users = state.get('users');
    return {users};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'users', reducer});
const withSaga = injectSaga({key: 'users', saga});

export default compose(withReducer, withSaga, withConnect)(UserSection);
