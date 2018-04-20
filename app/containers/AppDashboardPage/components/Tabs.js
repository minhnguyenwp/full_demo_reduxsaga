import React from 'react';
import {Link} from 'react-router-dom';


export default class Tabs extends React.Component {
    changeType(e, type) {
        e.preventDefault()
        if (this.props.activeType == type) {return}
        this.props.changeType(type)
        return
    }
    render() {
        const {data, activeType} = this.props
        return(
            <ul className="list-inline text-center">
                <li className={"list-inline-item " + (activeType == 'all' ? 'active' : '')}>
                    <a 
                        onClick={(e) => this.changeType(e, 'all')}
                        className="btn btn-default" href="#">All</a></li>
                {data.statistics.coverity &&
                <li className={"list-inline-item " + (activeType == 'coverity' ? 'active' : '')}>
                    <a 
                        onClick={(e) => this.changeType(e, 'coverity')}
                        className="btn btn-default" href="#">Coverity</a></li>
                }

                {data.statistics.protecode &&
                <li className={"list-inline-item "+ (activeType == 'protecode' ? 'active' : '')} >
                    <a 
                        onClick={(e) => this.changeType(e, 'protecode')}
                        className="btn btn-default" href="#">Protecode</a></li>
                }

                {data.statistics.msportal &&
                <li className={"list-inline-item " + (activeType == 'msportal' ? 'active' : '')}>
                    <a 
                        onClick={(e) => this.changeType(e, 'msportal')}
                        className="btn btn-default" href="#">MS-Portal</a></li>
                }
            </ul>
        )
    }
}