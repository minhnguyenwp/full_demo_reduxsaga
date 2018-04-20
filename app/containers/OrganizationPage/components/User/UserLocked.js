import React from 'react';

// Sy - Sub-Components

class UserLocked extends React.Component {
    render() {
        return (<div className="user-locked">
            <span>This user is locked</span>
            <button className="btn btn-unlock">Unlock User</button>
        </div>);
    }
}

export default UserLocked;
