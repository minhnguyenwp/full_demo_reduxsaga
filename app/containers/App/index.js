/**
 *
 * App : Syn Created
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import {Helmet} from 'react-helmet'; // sy - this is meta tag
import 'styled-components';
import {Switch, Route} from 'react-router-dom'; // sy - Router plugin
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Sy - Pages
import HomePage from 'containers/HomePage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import ResetPasswordPage from 'containers/ResetPasswordPage/Loadable';

// Sy -- Admin Pages
import FeaturePage from 'containers/FeaturePage/Loadable';
import AppDashboardPage from 'containers/AppDashboardPage/Loadable';
import ApplicationSettingPage from 'containers/ApplicationSettingPage/Loadable';

import HelpPage from 'containers/HelpPage/Loadable';
import ConfigurationPage from 'containers/ConfigurationPage/Loadable';

import CreateApplicationPage from 'containers/CreateApplicationPage/Loadable';
import EditApplicationPage from 'containers/EditApplicationPage/Loadable';

import RiskPortfolioPage from 'containers/RiskPortfolioPage/Loadable';
import OrganizationPage from 'containers/OrganizationPage/Loadable';

// Sy --- Profile Pages
import ProfilePage from 'containers/ProfilePage/Loadable';
import ProfileChangePassPage from 'containers/ProfileChangePassPage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Sy - App Class - Comp
export default function App() {
    function checkAuth() {
        const isLogged = localStorage.getItem('username');
        const isHasPermission = localStorage.getItem('permission');
        return isLogged && isHasPermission;
    }

    const PrivateRoute = ({component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            checkAuth() ? (
                <Component {...props}/>
            ) : (
                <NotFoundPage />
            ))}
        />
    );

    return (<div>
        <Helmet titleTemplate="%s - Synopsys Internal Sys" defaultTitle="Synopsys Internal Sys">
            <meta name="description" content="Reporting system of Synopsys.com"/>
        </Helmet>
        <Switch>
            {/* Public */}
            <Route exact path="/" component={HomePage}/>
            <Route path="/forgot-password" component={ForgotPasswordPage}/>
            <Route path="/reset-password" component={ResetPasswordPage}/>

            {/* Private */}
            <PrivateRoute path="/features" component={FeaturePage}/>
            <PrivateRoute path="/help" component={HelpPage}/>
            <PrivateRoute path="/configuration" component={ConfigurationPage}/>
            <PrivateRoute path="/create-application" component={CreateApplicationPage}/>
            <PrivateRoute path="/edit-application" component={EditApplicationPage}/>
            <PrivateRoute exact path="/risk-portfolio" component={RiskPortfolioPage}/>
            <PrivateRoute exact path="/risk-portfolio/:id" component={AppDashboardPage}/>
            <PrivateRoute exact path="/risk-portfolio/:id/:type" component={ApplicationSettingPage}/>
            <PrivateRoute path="/my-organization" component={OrganizationPage}/>
            <PrivateRoute path="/profile" component={ProfilePage}/>
            <PrivateRoute path="/change-password" component={ProfileChangePassPage}/>

            <Route path="" component={NotFoundPage}/>
        </Switch>
    </div>);
}
