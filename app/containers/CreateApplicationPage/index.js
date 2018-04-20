/*
 * OrganizationPage
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

// Sy - Sub-Components
import LeftSideBar from 'components/LeftSideBar';
import Breadcrumb from 'components/Breadcrumb';

import CreateForm from './components/Application/CreateForm';


import {makeSelectMenu} from './selectors';
import {selectMenu} from './actions';

export class CreateApplicationPage extends React.PureComponent {
    componentWillUnmount() {
        this.props.onSelectMenu('roles');
    }

    renderMenu(menu) {
        if (menu.length > 0) {
            return menu.map((item) => (
                <Link to={this.props.match.path + '/' + item.value}
                    className={'item' + (this.props.menu === item.value ? ' active' : '')}
                    key={item.id}
                    onClick={() => this.props.onSelectMenu(item.value)}>
                    {item.name}
                </Link>)
            );
        }
        return [];
    }

    // Sy - action submit
    submitForm = (values) => {
        // print the form values to the console

        let frmVals = JSON.parse(JSON.stringify(values));
        console.log('sss', frmVals);
    }

    render() {
        // Mock data
        const menu = [
            {
                id: 1,
                name: 'RISK PORTFOLIO'
            }
        ];
        return (<section className="main-wrapper">
            <Helmet>
                <title>Application Page</title>
                <meta name="description" content="Application page"/>
            </Helmet>
            <div>
                <LeftSideBar/>
                <div className="content-wrapper">
                    <Breadcrumb menu={menu}></Breadcrumb>
                    <section className="main-content">
                    <div className="application-page r-page">
                      <h1 className="r-page-ttl">Create Application</h1>
                      <div className="r-page-ct">
                        <CreateForm onSubmit={this.submitForm}/>
                      </div>
                    </div>
                  </section>
                </div>

            </div>
            {/* Sy - End: Page main content */}
        </section>);
    }
}

CreateApplicationPage.propTypes = {
    menu: PropTypes.string.isRequired,
    onSelectMenu: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = createSelector(
    makeSelectMenu(),
    (menu) => ({menu})
);

export function mapDispatchToProps(dispatch) {
    return {
        onSelectMenu: (menu) => dispatch(selectMenu(menu)),
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateApplicationPage);
