/**
 * Sy - Left Side Bar in Dashboard pages
 */
import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class LeftSideBar extends React.Component {
    signOut() {
        localStorage.removeItem('username');
        localStorage.removeItem('permission');
        this.props.history.push('/');
    }

    render() {
        return (<div>
            <sidebar className="sidebar">
                <div className="sidebar-content">
                    <div className="head-side">
                        <NavLink to="/profile">
                            <div className="logo-name"><span>PA</span></div>
                            <span className="val">Project Admin<i className="fa fa-sign-out float-right sign-out"></i>
                            </span>
                        </NavLink>
                        <div className="log-out">
                            <img className="icon" src="/assets/images/signout.svg" onClick={this.signOut.bind(this)}/>
                        </div>
                    </div>
                    <ul className="list-side">
                        <li className="item">
                            <NavLink to="/risk-portfolio" activeClassName="active">
                                <img className="icon" src="/assets/images/risk.svg" />
                                <span className="val">Risk Portfolio</span>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/help" activeClassName="active">
                                <img className="icon" src="/assets/images/help.svg" />
                                <span className="val">Help</span>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/configuration" activeClassName="active">
                                <img className="icon" src="/assets/images/configuration.svg" />
                                <span className="val">Configuration</span>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/my-organization" activeClassName="active">
                                <img className="icon" src="/assets/images/setting.svg" />
                                <span className="val">My Organization</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </sidebar>
        </div>);
    }
}

LeftSideBar.propTypes = {
    history: PropTypes.object
};

export default withRouter(LeftSideBar);
