import React from 'react';
import PropTypes from 'prop-types';

// API
import {SY_API} from '../../../utils/api'
import {replaceByStr} from '../../../utils/helper'

class FileItem extends React.Component {
    checkBox(e, reportId) {
        e.preventDefault()
        console.log('HRE', reportId);
        this.props.getEachFile(reportId)
        return
    }

    render() {
        const {file, checkedRow} = this.props;
        return (<tr>
            <td width="10%">
                {!checkedRow &&
                <i className="far fa-square"
                    onClick={(e) => this.checkBox(e, file.reportId)}></i>}
                {checkedRow &&
                <i className=" fa fa-check-square"
                    onClick={(e) => this.checkBox(e, file.reportId)}></i>}
            </td>
            <td width='50%'>
                {/* <a href={replaceByStr(replaceByStr(SY_API.Rep_DownloadOneFile,'val_1', this.props.appId), 'val_2',file.reportId)} target="_blank"> */}
                {file.reportName}
                {/* </a> */}
            </td>
            <td>{file.type}</td>
            <td width="20%">{file.createdDate}</td>
        </tr>);
    }
}

FileItem.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileItem;
