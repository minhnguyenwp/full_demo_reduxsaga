import React from 'react';
import update from 'react/lib/update';
import _ from 'lodash'
// Sy - Sub-Components
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FileItem from './FileItem';
import {getIdsInObj} from '../../../utils/helper'
// API
import {SY_API} from '../../../utils/api'
import {replaceByStr} from '../../../utils/helper'

const getAlltxtA = ['Get all', 'None']
class DownloadReport extends React.Component {

    state = {
        sData: null,
        selectedFiles: [],
        getAllTxt : getAlltxtA[0]
    }
    renderUser(files) {
        if (files.length > 0) {
            return files.map((file) => (<FileItem key={file.id} file={file}/>));
        }
        return [];
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nProps) {
        //console.log('Modal',nProps.data);
        if (nProps.data) { 
            this.setState({
                selectedFiles: [],
                getAllTxt : getAlltxtA[0],
                sData: nProps.data
            })
        }
    }

    // Actions : Downloading
    downloadPDF(e) {
        e.preventDefault();
        if (this.state.selectedFiles.length <= 0) {return;}
        let requestURL = replaceByStr(SY_API.Rep_DownloadFiles, 'val_1', this.props.appId)
        requestURL = requestURL + '/download?reportids=' + this.state.selectedFiles.join()
        // console.log('requestURL', requestURL);
        window.open(requestURL, '_blank');
        this.setState({
            selectedFiles: [],
            getAllTxt : getAlltxtA[0]
        })
        return;
    }

    async getEachFile(reportId) {
        //console.log(this.state);
        let idx 		= -1;
		if (this.state.selectedFiles.length > 0) {
            idx = this.state.selectedFiles.indexOf(reportId)
        }
        // Push more
        //console.log('num', this.state.selectedFiles.length + ' = ' + this.state.sData.reports.length)
        let useTxt = 0;
        if (idx < 0 
            && (this.state.selectedFiles.length + 1) == this.state.sData.reports.length ) {
            useTxt = 1
        } 

        // Assign State
        await this.setState(update(this.state, {
            selectedFiles: (idx >= 0) 
                        ? {$splice: [[idx,1]]} 
                        : {$push: [reportId]},
            getAllTxt: { $set: getAlltxtA[useTxt] }
		}));
    }

    getAllfiles(e) {
        e.preventDefault();

        if (this.state.selectedFiles.length > 0) {
            this.setState({
                selectedFiles: [],
                getAllTxt: getAlltxtA[0]
            })
        } else {
            let ids = getIdsInObj(this.props.data.reports, 'reportId')
            //console.log(ids);
            this.setState({
                selectedFiles: ids,
                getAllTxt: getAlltxtA[1]
            })
        }
        return;
    }

    render() {
        const {isOpen, className, data} = this.props
        const {sData, selectedFiles, getAllTxt} = this.state
        return (
            <Modal 
                isOpen={isOpen} 
                toggle={this.props.toggle} 
                className={className}>
                <ModalHeader toggle={this.props.toggle}>Download reports</ModalHeader>
                <ModalBody>
                    {sData &&
                    <div className="dl-tbl">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="10%" scope="col">
                                    <a 
                                        onClick={(e) => this.getAllfiles(e) }
                                        href="#" className="txt-cmd cblue">
                                    {getAllTxt}
                                    </a>
                                </th>
                                <th width='50%' scope="col">Report Name</th>
                                <th scope="col">Tool</th>
                                <th width="20%" scope="col">Date Generate</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="tbl-scroll">
                    <table className="table">
                        <tbody>
                            {sData.reports.length > 0 && 
                                sData.reports.map((row, i) => {
                                    let checkedRow = false 
                                    if (selectedFiles.indexOf(row.reportId) >= 0) {
                                        checkedRow = true
                                    }
                                    return (
                                        <FileItem 
                                        key={'down-f-'+i} 
                                        file={row}
                                        checkedRow={checkedRow}
                                        appId={this.props.appId}
                                        getEachFile={(reportId) => this.getEachFile(reportId)}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    </div>}
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-default" onClick={this.props.toggle}>Cancel</button>
                    {(selectedFiles.length > 0) &&
                    <button
                        onClick={(e) => {this.downloadPDF(e)}} 
                        className="btn btn-primary">Download {(selectedFiles.length > 0) ? '(' + selectedFiles.length + ')': ''}</button>}
                    {(selectedFiles.length == 0) &&
                    <button
                    disabled
                    onClick={(e) => {this.downloadPDF(e)}} 
                    className="btn btn-primary">Download</button>}
                </ModalFooter>
            </Modal>
        );
    }
}

export default DownloadReport;

{/* <div id="downloadReportModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Download Reports</h3>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
									<th scope="col"></th>
                                    <th scope="col">Report Name</th>
                                    <th scope="col">Tool</th>
                                    <th scope="col">Date Generate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary" data-dismiss="modal">Download(3)</button>
                    </div>
                </div>
            </div>
        </div> */}