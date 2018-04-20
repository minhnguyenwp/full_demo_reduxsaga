/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import { Helmet } from 'react-helmet';

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import LeftSideBar from 'components/LeftSideBar';
import Breadcrumb from 'components/Breadcrumb';
import ApplicationHeader from './components/ApplicationHeader';
import ApplicationScore from './components/ApplicationScore';
import ApplicationScoreComplete from './components/ApplicationScoreComplete';
import ApplicationIssueSeverity from './components/ApplicationIssueSeverity';
import ApplicationIssueCategory from './components/ApplicationIssueCategory';
import ApplicationIssueTool from './components/ApplicationIssueTool';
import DownloadReport from './components/DownloadReport';
import Tabs from './components/Tabs'


/** REDUX */
// Sy - Redux extensions (library)
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
// REDUX Store for this Page. 1 page / 1 Store
// Sy -- Call actions and reducer in Comp
import ReportReducer from './redux/DownloadReducer';
import DownloadSaga from './redux/DownloadSaga';

import ReportPReducer from './redux/ReportPReducer';
import ReportPSaga from './redux/ReportPSaga';

import DownloadPDFReducer from './redux/DownloadPDFReducer';
import DownloadPDFSaga from './redux/DownloadPDFSaga';

import { getDataDL, getAppById, downloadPDF } from './redux/actions';
// END: Redux coding block

// MAIN COMP
class AppDashboardPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

	constructor (props) {
		super(props);

		// init STATE
        this.state = {
			modalDownLoadAll : false,
			typeOfDownload : 'none',
			typeOfTab      : 'all',
			types:['coverity', 'protecode', 'msportal']
		}

		// Toggle Modal
		this.toggleDownAll = this.toggleDownAll.bind(this)
    }

    componentDidMount() {
		// console.log('this.props.params', this.props.match.params)
		if (this.props.match.params) {
			this.props.getAppById(this.props.match.params.id);
		} // else redirect to list page
    }

	/** Change Type on Tabs */
	changeType(type) {
		console.log(type)
		this.setState({
			typeOfTab: type
		})
	}

	/** MODAL BOX Actions */
	async toggleDownAll() {
		if (this.state.typeOfDownload != 'all') {
			await this.props.getDataDL(this.props.match.params.id, '')
		}
		await this.setState({
			modalDownLoadAll: !this.state.modalDownLoadAll,
			typeOfDownload: 'all'
		})
	}
	async toggleDownType(type) {
		if (this.state.typeOfDownload != type) {
			await this.props.getDataDL(this.props.match.params.id, type)
		}
		await this.setState({
			modalDownLoadAll: !this.state.modalDownLoadAll,
			typeOfDownload: type
		})
	}

	// Render page
	render() {
	// get STATE
	const { appInfo,
			pieChart,
			stackBarChart,
			types,
			typeOfTab
		  } = this.state;
	const {reposReportP}    = this.props
	const scoreData = reposReportP.data && reposReportP.data.statistics ? reposReportP.data.statistics : {};

    return (
    <section className="main-wrapper">
        {/* This is Meta header */}
        <Helmet>
          <title>Dashboard Page {reposReportP.data ? reposReportP.data.applicationName : ''}</title>
          <meta name="description" content="This is dashboard page" />
        </Helmet>

        <div>
          <LeftSideBar />
          <div className="content-wrapper">

          {reposReportP && !reposReportP.loading && reposReportP.data &&
          <Breadcrumb menu={[
            {
                id: 1,
                name: 'ALL APPS',
                path: '/risk-portfolio'
            },
            {
                id: reposReportP.data.applicationId,
                name: reposReportP.data.applicationName
            }
            ]}></Breadcrumb>
          }

          {reposReportP && !reposReportP.loading && reposReportP.data &&
          <div className="main-content">
              <div className="page application-page">
				{reposReportP && !reposReportP.loading &&
					<ApplicationHeader
						appInfo={reposReportP.data}
						toggleModal={() => {this.toggleDownAll()}} />}
				{reposReportP && !reposReportP.loading &&
					<section className="section score-section">
						<div className="title">Score</div>
						<ApplicationScore
							appInfo={reposReportP.data.statistics}
							toggleDownType={(type) => this.toggleDownType(type)} />
						<ApplicationScoreComplete scoreData={scoreData} />
					</section>
				}
				{reposReportP && reposReportP.loading &&
					<section className="section score-section">
						Loading
						{/* Will put loading div in here */}
					</section>
				}

				{reposReportP &&
            	<section className="section issue-severity-section">
					<Tabs
						data={reposReportP.data}
						changeType={(type) => this.changeType(type)}
						activeType={typeOfTab} />
					{reposReportP.data.statistics &&
					<div className="is-sev-block tab-sblk">
                  		<div className="title">Issues by severities</div>
					  	<ApplicationIssueSeverity
						  data={reposReportP.data.statistics}
						  types={types}
						  activeType={typeOfTab}
						   />
					</div>}
                </section>}

				{reposReportP &&
                <section className="section issue-category-section">
					{reposReportP.data.statistics &&
					<div className="is-cate-block tab-sblk">
						<div className="title">Issues by categories (OWASP Top 10)</div>
						<ApplicationIssueCategory
							types={types}
							data={reposReportP.data.statistics}
							activeType={typeOfTab} />
					</div>}
                </section>}

                <section className="section issue-tool-section">
                  	<div className="title">Issues by tool</div>
	              	<ApplicationIssueTool
	              		data={reposReportP.data.statistics} />
                </section>
              </div>
          </div>
		  }
      </div>


		</div> {/* Sy - End: Page main content */}

		{/* MODAL BOX */}
		<DownloadReport
			className={'sy-modal download-modal'}
			isOpen={this.state.modalDownLoadAll}
			toggle={this.toggleDownAll}
			data={this.props.downloadData}
			appId={this.props.match.params.id}/>
    </section>
    );
  }
}

// Sy - prepare for Connect Redux and comp
export function mapDispatchToProps(dispatch) {
	return {
		getDataDL: (val, type) => {
			//if (evt !== undefined && evt.preventDefault) evt.preventDefault();
			dispatch(getDataDL({
				app_id: val,
				type
			}));
		},
		getAppById: (val) => {
			dispatch(getAppById({
				app_id: val
			}));
		},
		downloadPDF: (params) => {
			dispatch(downloadPDF(params));
		}
	};
}

function mapStateToProps (state) {
	//console.log('inComp', state.get('feature').data);
	const repos = state.get('report');
	const reposReportP = state.get('ReportP')
	console.log('reposReportP', reposReportP.data)
	return {
		downloadData : repos.data,
		reposReportP
	};
};


const withConnect = connect(mapStateToProps, mapDispatchToProps);
// 1. Download list
const withReducer = injectReducer({ key: 'report', reducer: ReportReducer });
const withSaga    = injectSaga({ key: 'report', saga: DownloadSaga });

// 2. Dashboard list
const withReportPReducer = injectReducer({ key: 'ReportP', reducer: ReportPReducer });
const withReportPSaga    = injectSaga({ key: 'ReportP', saga: ReportPSaga });
// 3. Download PDF
const withDownloadPDFReducer = injectReducer({ key: 'DownloadPDF', reducer: DownloadPDFReducer });
const withDownloadPDFSaga    = injectSaga({ key: 'DownloadPDF', saga: DownloadPDFSaga });

export default compose(
withReducer,
withSaga,
withReportPReducer,
withReportPSaga,
withDownloadPDFReducer,
withDownloadPDFSaga,
withConnect,
)(AppDashboardPage);
