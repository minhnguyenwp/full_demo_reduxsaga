import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Sy - Sub-Components
import ApplicationChart from './ApplicationChart';

class ApplicationItem extends React.Component {
    render() {
        const application = this.props.application;
        const applications = this.props.applications;
        const stackBarChartData = {
            labels: [
                'Injection'
            ],
            datasets: [
                {
                    label: 'High',
                    data: [application.issuesBySeverity.high || 0],
                    backgroundColor: '#CC2A15'
                }, {
                    label: 'Medium',
                    data: [application.issuesBySeverity.medium || 0],
                    backgroundColor: '#F29200'
                }, {
                    label: 'Low',
                    data: [application.issuesBySeverity.low || 0],
                    backgroundColor: '#009BDE'
                }
            ]
        };
        const stackBarChartConfig = {
            data: stackBarChartData,
            options: {
                legend: {
                    display: false
                },
                barThickness: 0.4,
                barMaxWidth: 50,
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            display: false,
                            ticks: {
                                beginAtZero: true,
                                display: false
                            },
                            gridLines: {
                                display: false
                            }
                        }
                    ],
                    yAxes: [
                        {
                            barPercentage: 0.3,
                            stacked: true,
                            display: false,
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                },
                responsive: true,
                animation: {
                    animateScale: true
                }
            }
        };

        return (<li className="application-item">
            <div className="item-body">
                <div className="title">
                    <Link to={this.props.path + '/' + application.id}>{application.name}</Link>
                </div>
                <div className="risk">
                    <div className="number red-text">{application.issuesBySeverity.total}</div>
                    <div className="desc">Vulnerabilities</div>
                </div>
                <div className="score">
                    <div className="number grey-text">{application.riskIndex}</div>
                    <div className="desc">Risk Index</div>
                </div>
                <div className="actions">
                    <span className="icon">
                        <img alt="" className="icon" src="/assets/images/delete.svg" onClick={() => this.props.deleteApplication(application.id, applications)} />
                    </span>
                    <span className="icon">
                        <Link to={this.props.path + '/' + application.id + '/general'}>
                            <img alt="" className="icon" src="/assets/images/setting-icon.svg" />
                        </Link>
                    </span>
                </div>
            </div>
            <div className="stack-chart">
                <ApplicationChart stackBarChart={stackBarChartConfig} application={application} />
            </div>
        </li>);
    }
}

ApplicationItem.propTypes = {
    application: PropTypes.object.isRequired,
    applications: PropTypes.array.isRequired,
    deleteApplication: PropTypes.func.isRequired,
    path: PropTypes.string
};

export default ApplicationItem;
