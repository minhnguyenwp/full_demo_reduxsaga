
import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux'
import update from 'react/lib/update';

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import AppInfoPop from './AppInfoPop';

// This is sample data Tool
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



class SelectByApp extends React.Component {
    state = {
        loading: false,
        showPop: false,
        numberChosenTag: 0
    }

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    // Open PopUp
    focusSearchIpt(e) {
        this.setState({
            showPop: true
        })
    }

     /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    
    /**
     * ClickOut Close PopUp
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                showPop: false
            })
        }
    }

    render () {
        const {loading, showPop, numberChosenTag} = this.state
        return (
            <div className={'chooser-blk by-app-info-blk' + (loading ? ' loading' : '')}>
                <div className="row">
					<div className="col-6">
                        <div
                            ref={this.setWrapperRef} 
                            className="form-group main-ipt">
							<label>Chooser</label>
                            <input
                                onFocus={(e) => this.focusSearchIpt(e)}
                                type="text" 
                                placeholder="Browse projects/Groups ..."
                                className="form-control txt"
                                name="chooser-by-app" />
                            {showPop &&
                                <AppInfoPop />
                            }
                            
						</div>
					</div>
                    <div className="col-12 py-2"><p>Total Selected Projects: {numberChosenTag}</p> </div>
				</div>
                <br />
                <br /> 
            </div>
        )
    }
}

export default SelectByApp;