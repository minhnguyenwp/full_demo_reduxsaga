import React from 'react';

// Sy - Redux extensions
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom';

// Sy -- Call actions and reducer in Comp
import reducer from '../../redux/reducer';
import saga from '../../redux/saga';
import {getGeneralData} from '../../redux/actions';

// Sy - Sub-Components

class GeneralSection extends React.Component {
    componentDidMount() {
        console.log('get General');
        this.props.getGeneralData();
    }

    render() {
        console.log('general', this.props.general);
        return (<div className="section general-section">
            <div className="section-title">General</div>
            <div className="row">
                <div className="col-4">
                    <div className="form-group">
                        <label>Application Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Edit application by</label>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                Browse by tools
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                Search by application information
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <p>Total selected Projects: 30</p>
                    <div className="tag-block">
                        <div className="tag-title">CIM 2
                            <a className="float-right">Remove</a>
                        </div>
                        <div className="tag-item">
                            <button className="btn btn-sm btn-warning">fresno_installer-fresno <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">fresno_dynamic-analysis-fresno <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">gilroy_desktop-eclipse-gilroy <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">harmony_desktop-intellij-harmony <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">harmony_dynamic-analysis-harmony <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">indio_desktop-intelliji-indio <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">indio_installer-indio <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">jasper_desktop-eclipse-jasper <i className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="tag-block">
                        <div className="tag-title">SIG R&D
                            <a className="float-right">Remove</a>
                        </div>
                        <div className="tag-item">
                            <button className="btn btn-sm btn-warning">cov-analysis-win64-testbooster.zip <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">cov-analysis-win32-2018.06.zip <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">cov-analysis-solaris-x86-2018.06.tar.gz <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">cov-analysis-linux64-2018.06.tar.gz <i className="fas fa-times"></i></button>
                        </div>
                    </div>
                    {/*<div className="tag-block">
                        <div className="tag-title">Protecode 2
                            <a className="float-right">Remove</a>
                        </div>
                        <div className="tag-item">
                            <button className="btn btn-sm btn-warning">Project 1_Stream 1.1 <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">Project 1_Stream 1.2 <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">Project 1_Stream 1.3 <i className="fas fa-times"></i></button>
                            <button className="btn btn-sm btn-warning">Project 1_Stream 1.4 <i className="fas fa-times"></i></button>
                        </div>
                    </div>*/}
                    <div className="action">
                        <button className="btn btn-primary">Save</button>
                        <button className="btn btn-danger">Delete</button>
                        <Link to={'/risk-portfolio/1'}><button className="btn">Cancel</button></Link>
                    </div>
                </div>
            </div>
        </div>);
    }
}

GeneralSection.propTypes = {
    getGeneralData: PropTypes.func.isRequired,
    general: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getGeneralData: () => {
            dispatch(getGeneralData());
        }
    };
}

function mapStateToProps(state) {
    const general = state.get('general');
    return {general};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'general', reducer});
const withSaga = injectSaga({key: 'general', saga});

export default compose(withReducer, withSaga, withConnect)(GeneralSection);
