/*
 * ApplicationSettingPage
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
import GeneralSection from './components/General/GeneralSection';
import UserSection from './components/User/UserSection';

import {makeSelectMenu} from './selectors';
import {selectMenu} from './actions';

export class ApplicationSetting extends React.PureComponent {
    componentWillUnmount() {
        this.props.onSelectMenu('general');
    }

    renderMenu(menu) {
        if (menu.length > 0) {
            return menu.map((item) => (<Link to={item.value} className={'item' + (
                    this.props.menu === item.value
                    ? ' active'
                    : '')} key={item.id} onClick={() => this.props.onSelectMenu(item.value)}>
                {item.name}
            </Link>));
        }
        return [];
    }

    render() {
        // Mock data
        const menu = [
            {
                name: 'Application A',
                path: ''
            }
        ];

        const organizationMenu = [
            {
                id: 1,
                name: 'General',
                value: 'general'
            }, {
                id: 2,
                name: 'Users',
                value: 'users'
            }
        ];
        const oMenu = this.renderMenu(organizationMenu);
        const selectedMenu = organizationMenu.find(item => item.value === this.props.menu);
        if (selectedMenu) {
            selectedMenu.path = this.props.match.path + '/' + this.props.menu;
            menu.push(selectedMenu);
        }
        return (<section className="main-wrapper">
            <Helmet>
                <title>Application Setting Page</title>
                <meta name="description" content="This is Application Setting page"/>
            </Helmet>
            <div>
                <LeftSideBar/>
                <div className="content-wrapper">
                    <Breadcrumb menu={menu}></Breadcrumb>
                    <div className="main-content">
                        <div className="page application-page">
                            <div className="row">
                                <div className="col-2">
                                    <div className="aside">
                                        {oMenu}
                                    </div>
                                </div>
                                <div className="col-10">
                                    <Route exact="exact" path={'/risk-portfolio/:id/general'} component={GeneralSection}/>
                                    <Route exact="exact" path={'/risk-portfolio/:id/users'} component={UserSection}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Sy - End: Page main content */}
        </section>);
    }
}

ApplicationSetting.propTypes = {
    menu: PropTypes.string.isRequired,
    onSelectMenu: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = createSelector(
    makeSelectMenu(),
    (menu) => ({menu}),
);

function mapDispatchToProps(dispatch) {
    return {
        onSelectMenu: (menu) => dispatch(selectMenu(menu)),
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationSetting);
