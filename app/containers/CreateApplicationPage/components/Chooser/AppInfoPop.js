import React from 'react';

const subOpts = [
    {
        name: 'Instance',
        val: '1'
    },
    {
        name: 'Project',
        val: '2'
    },
    {
        name: 'Stream',
        val: '3'
    }

]

class AppInfoPop extends React.Component {

    state = {
        mode: null,
        subMode:null,
        subOpt: [],
        data: [{
            id: 1,
            name: 'Fresno'
        }, {
            id: 2,
            name: 'Gilroy'
        }, {
            id: 3,
            name: 'Harmony'
        }, {
            id: 4,
            name: 'Indio'
        }, {
            id: 5,
            name: 'Jasper'
        }, {
            id: 6,
            name: 'Cedar'
        }, {
            id: 7,
            name: 'TWB'
        }]
    }

    // Event Click
    clickOption (e, opt) {
        e.preventDefault()
        this.setState({
            mode: opt
        });
        let data = [];
        if (opt === 'CIM') {
            this.setState({
                data: [{
                    id: 1,
                    name: 'Fresno'
                }, {
                    id: 2,
                    name: 'Gilroy'
                }, {
                    id: 3,
                    name: 'Harmony'
                }, {
                    id: 4,
                    name: 'Indio'
                }, {
                    id: 5,
                    name: 'Jasper'
                }, {
                    id: 6,
                    name: 'Cedar'
                }, {
                    id: 7,
                    name: 'TWB'
                }]
            });
        } else {
            this.setState({
                data: [{
                    id: 1,
                    name: 'SIG R&D'
                }]
            });
        }
        return false
    }

    clickChoose (e) {
        e.preventDefault();
        return false;
    }

    renderProjects(projects) {
        if (projects.length > 0) {
            return projects.map((project) => (
                <tr key={project.id}>
                    <td className="w10">
                        <span className="uncheck-box" onClick={(e) => this.clickChoose(e)}>&nbsp;</span>
                    </td>
                    <td>
                        {project.name}
                    </td>
                    <td>
                        Tool
                    </td>
                    <td>
                        Tool Instance
                    </td>
                </tr>
            ));
        }
        return '';
    }

    render() {
        const {mode} = this.state;
        console.log(this.state)
        const projectList = this.renderProjects(this.state.data);
        return (
            <div className="app-info-blk">
                <div className="app-info-ct">
                    <div className="app-src-blk">
                        <div className="row">
                            <div className="col-2">
                                <label className="lbl">Tools</label>
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-4">
                                        <label
                                            onClick={(e) => this.clickOption(e, 'CIM')}
                                            className={"src-opt" + ((mode == 'CIM') ? ' active' : '')}>CIM</label>
                                    </div>
                                    <div className="col-4">
                                        <label
                                            onClick={(e) => this.clickOption(e, 'PRO')}
                                            className={"src-opt" + ((mode == 'PRO') ? ' active' : '')}>Protecode</label>
                                    </div>
                                    {/*<div className="col-4">
                                        <label
                                             onClick={(e) => this.clickOption(e, 'MSP')}
                                            className={"src-opt" + ((mode == 'MSP') ? ' active' : '')}>MS Protal</label>
                                    </div>*/}
                                </div>
                                {/*<div className="row">
                                    {(mode == 'CIM' || mode == 'PRO') &&
                                        <div className="col-4">
                                            <label className="src-opt">Instance</label>
                                        </div>
                                    }
                                    {(mode == 'CIM' || mode == 'PRO') &&
                                    <div className="col-4">
                                        <label className="src-opt">Project</label>
                                    </div>
                                    }
                                    {(mode == 'CIM') &&
                                    <div className="col-4">
                                        <label className="src-opt">Stream</label>
                                    </div>
                                    }
                                </div>*/}
                            </div>
                        </div>
                    </div>
                    {/* END: Tools */}
                    <div className="record-tbl">
                        <table className="tbl">
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    Project Name
                                </th>
                                <th className="w20">
                                    Tool
                                </th>
                                <th className="w20">
                                    Tool Instance
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectList}
                        </tbody>
                        </table>
                    </div>
                    {/* END: TABLE RECORD */}
                </div>
                <div className="app-info-footer clearfix">
                    <a href="#" className="btn blue-btn s-sm float-right">
                        Add ({this.state.data.length})
                    </a>
                    <a href="#" className="btn s-sm float-right">
                        Clear
                    </a>
                </div>
            </div>
        )
    }
}

export default AppInfoPop;
