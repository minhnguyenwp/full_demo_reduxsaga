/*
 * RiskPortfolioPage
 *
 */
import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {connect} from 'react-redux';
import {compose} from 'redux';

// Sy -- Call actions and reducer in Comp
import reducer from './redux/reducer';
import saga from './redux/saga';
import {getApplicationData, deleteApplication, goPage} from './redux/actions';

// Sy - Sub-Components
import LeftSideBar from 'components/LeftSideBar';
import Breadcrumb from 'components/Breadcrumb';
import ApplicationItem from './components/ApplicationItem';
import ApplicationPaging from './components/ApplicationPaging';

const itemPerPage = 3;
export class RiskPortfolioPage extends React.PureComponent {
    componentDidMount() {
        this.props.getApplicationData(itemPerPage);
    }

    renderApplications(applications) {
        if (applications.length > 0) {
            const end = this.props.applications.currentPage * itemPerPage;
            const start = end - itemPerPage;
            const applicationsWithPaging = applications.filter((item, index) => index >= start && index < end);
            const totalNumbers = applicationsWithPaging.map(item => item.issuesBySeverity.total).sort();
            const maxNumber = totalNumbers[totalNumbers.length - 1];
            const maxWidthChart = 600;
            applicationsWithPaging.forEach(application => {
                const per = application.issuesBySeverity.total / maxNumber;
                application.widthPercent = Math.ceil(per * 100);
            });
            return applicationsWithPaging.map((application) => (<ApplicationItem key={application.id} path={this.props.match.path} applications={applications} application={application} deleteApplication={this.props.deleteApplication} />));
        }
        return '';
    }

    render() {
        const applicationsData = this.props.applications.data && this.props.applications.data.applications ? this.props.applications.data.applications : [];
        const applicationList = this.renderApplications(applicationsData);
        const totalPage = this.props.applications.totalPage || 0;
        const currentPage = this.props.applications.currentPage;
        const menu = [
            {
                id: 1,
                name: 'Risk Portfolio'
            }
        ];
        return (<section className="main-wrapper">
            <Helmet>
                <title>Risk Portfolio Page</title>
                <meta name="description" content="This is Risk Portfolio page"/>
            </Helmet>
            <div>
                <LeftSideBar/>
                <div className="content-wrapper">
                    <Breadcrumb menu={menu}></Breadcrumb>
                    <div className="main-content">
                        <div className="page risk-page application-page">
                            <Link to="/create-application">
                                <button type="button" className="btn btn-primary float-right">
                                    <i className="fa fa-plus"></i>&nbsp;&nbsp;Create Application
                                </button>
                            </Link>
                            <br />
                            <br />
                            <ul className="applications">
                                {applicationList}
                            </ul>
                            <ApplicationPaging totalPage={totalPage} currentPage={currentPage} goPage={this.props.goPage}></ApplicationPaging>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sy - End: Page main content */}
        </section>);
    }
}

RiskPortfolioPage.propTypes = {
    getApplicationData: PropTypes.func.isRequired,
    deleteApplication: PropTypes.func.isRequired,
    applications: PropTypes.object.isRequired,
    match: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        getApplicationData: (itemPerPage) => {
            dispatch(getApplicationData(itemPerPage));
        },
        deleteApplication: (id, data) => {
            dispatch(deleteApplication(id, data));
        },
        goPage: (page) => {
            dispatch(goPage(page));
        }
    };
}

function mapStateToProps(state) {
    const applications = state.get('applications');
    return {applications};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'applications', reducer});
const withSaga = injectSaga({key: 'applications', saga});

export default compose(withReducer, withSaga, withConnect)(RiskPortfolioPage);
