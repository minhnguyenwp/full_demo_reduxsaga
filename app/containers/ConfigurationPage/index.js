/*
 * ConfigurationPage
 *
 */
import React from 'react';
import {Helmet} from 'react-helmet';

// Sy - Sub-Components
import LeftSideBar from 'components/LeftSideBar';
import Breadcrumb from 'components/Breadcrumb';

export class Organization extends React.PureComponent {

    render() {
        // Mock data
        const menu = [
            {
                name: 'Qamera',
                path: ''
            }
        ];
        return (<section className="main-wrapper">
            <Helmet>
                <title>Configuration Page</title>
                <meta name="description" content="This is Configuration page"/>
            </Helmet>
            <div>
                <LeftSideBar/>
                <div className="content-wrapper">
                    <Breadcrumb menu={menu}></Breadcrumb>
                    <div className="main-content">
                        <div className="page help-page">
                            Configuration Page
                        </div>
                    </div>
                </div>

            </div>
            {/* Sy - End: Page main content */}
        </section>);
    }
}

export default Organization;
