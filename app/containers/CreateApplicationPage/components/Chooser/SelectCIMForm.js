import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux'
import update from 'react/lib/update';
import _ from 'lodash';

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import { SelectCIMItem, SelectMultiItem } from './SelectCIMItem';

// Sy - Helper
import { SelectMultiList } from 'utils/formHelper';

//** This is sample data Tool, REMOVE it when using API DATA
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const tools = [
	'',
	[
		{name: 'CIM 1', value: 'c1'},
		{name: 'CIM 2', value: 'c2'},
		{name: 'CIM 3', value: 'c3'},
		{name: 'CIM 4', value: 'c4'},
		{name: 'CIM 5', value: 'c5'},
	],
	[
		{name: 'Protecode 1', value: 'pro1'},
		{name: 'Protecode 2', value: 'pro2'},
		{name: 'Protecode 3', value: 'pro3'},
		{name: 'Protecode 4', value: 'pro4'},
		{name: 'Protecode 5', value: 'pro5'},
	],
	[
		{name: 'MD Portal 1', value: 'msp1'},
		{name: 'MD Portal 2', value: 'msp2'},
		{name: 'MD Portal 3', value: 'msp3'},
		{name: 'MD Portal 4', value: 'msp4'},
		{name: 'MD Portal 5', value: 'msp5'},
	]
];

const Projects = [
	{name: 'fresno', value: 'msp1'},
	{name: 'gilroy', value: 'msp2'},
	{name: 'harmony', value: 'msp3'},
	{name: 'indio', value: 'msp4'},
	{name: 'jasper', value: 'msp5'},
	{name: 'Cedar', value: 'msp6'},
	{name: 'TWB', value: 'msp7'},
]

const Streams = [
	{name: 'Stream 1', value: 's1'},
	{name: 'Stream 2', value: 's2'},
	{name: 'Stream 3', value: 's3'},
	{name: 'Stream 4', value: 's4'},
	{name: 'Stream 5', value: 's5'},
]
const Groups = [
	{name: 'Group 1', value: 'g1'},
	{name: 'Group 2', value: 'g2'},
	{name: 'Group 3', value: 'g3'},
	{name: 'Group 4', value: 'g4'},
	{name: 'Group 5', value: 'g5'},
	{name: 'Group 6', value: 'g6'},
	{name: 'Group 7', value: 'g7'},
	{name: 'Group 8', value: 'g8'},
	{name: 'Group 9', value: 'g9'},
	{name: 'Group 10', value: 'g10'},
]
const Components = [
	{name: 'Component 1', value: 'cp1'},
	{name: 'Component 2', value: 'cp2'},
	{name: 'Component 3', value: 'cp3'},
	{name: 'Component 4', value: 'cp4'},
	{name: 'Component 5', value: 'cp5'},
	{name: 'Component 6', value: 'cp6'},
	{name: 'Component 7', value: 'cp7'},
	{name: 'Component 8', value: 'cp8'},
	{name: 'Component 9', value: 'cp9'},
	{name: 'Component 10', value: 'cp10'},
	{name: 'Component 11', value: 'cp11'},
	{name: 'Component 12', value: 'cp12'},
]

// MAIN COMP of this PAGE.
class SelectCIMForm extends React.Component {

	// Register State in this Comp.
	state = {
		tool: null,
		data_list_1: null,
		data_list_2: null,
		data_list_multi: null,
		activeIds: {
			list_1: null,
			list_2: null,
			list_3: [] // Multi choices
		},
		loading: false,
		chosenTags : [],
		itemTagGroup: null,
		mode: ''
	};

	componentWillReceiveProps(nxtProp) {
		console.log('this.props', nxtProp.selectedTags);
	}

	// Step 1: choose Tool
	handleChgChooser = async (e) => {
		//console.log("Chooser", e.target.value);
		let mode = '';
		this.setState({loading: true})
		let num = parseInt(e.target.value);

		//console.log(tools[num]);
		await sleep(200);
		// Detect MODE
		if (num == 1) {
			mode = 'CIM'

		} else if (num == 2) {
			mode = 'PRO'
		} else if (num == 3) {
			mode = 'MSP'
		}
		this.setState({
			tool: num,
			data_list_1: (mode != 'MSP') ? tools[num] : null,
			data_list_2: null,
			data_list_multi: (mode == 'MSP') ? Streams : null,
			activeIds: {
				list_1: null,
				list_2: null,
				list_3: [] // Multi choices
			},
			loading: false,
			mode: mode
		})
	}

	// Step 2: choose CIM instance
	handleClickCIMItem = async (e, slcItm) => {
		e.preventDefault();
		console.log('this.state', this.state);
		this.setState({loading: true})
		// Get ID and Call API to get 2nd List
		// ...
		// End set DATA to View
		await sleep(200);
		let data_list_2 = null
		if (this.state.mode == 'CIM') {
			data_list_2 = Projects
		} else if (this.state.mode == 'PRO') {
			data_list_2 = Groups
		}
		await this.setState(update(this.state, {
			data_list_2:  {$set: data_list_2},
			data_list_multi: {$set: null},
			activeIds: {
				list_1: { $set: slcItm },
				list_2: { $set: [] },
				list_3: { $set: [] } // Multi choices
			},
			loading: {$set: false},

		}))
		console.log('this.State', this.state);
		return false;
	}

	// Step 3: choose Project
	handleClickProjectItem = async (e, slcItm) => {
		e.preventDefault();
		this.setState({loading: true})
		console.log('id', slcItm.value);
		// Get ID and Call API to get 2nd List
		// ...
		// End set DATA to View
		await sleep(300);
		await this.setState(update(this.state, {
			data_list_multi: {
				$set: (this.state.mode == 'PRO') ? Components : Streams
			},
			activeIds: {
				list_2 : {
					$set:  slcItm
				}
			},
			loading: {$set: false}
		}))
		console.log('this.State3', this.state);
		return false;
	}

	// step 4: handleClickStreamItem
	handleClickStreamItem = async (e, slcItm) => {
		let toolMode  = this.state.tool;
		let activeIds = this.state.activeIds;

		e.preventDefault();
		this.setState({loading: true})

		// Get ID and Call API to get 2nd List
		// ...
		// End set DATA to View

		// Detect Add or Update
		let idx 		= -1;
		if (activeIds.list_3.length > 0) {
			idx = _.findIndex(activeIds.list_3, function(o) { return o.value == slcItm.value; });
		}
		await this.setState(update(this.state, {
			activeIds: {
				list_3 : (idx >= 0) ? {
					$splice: [[idx,1]]
				} : {
					$push: [slcItm]
				}
			},
			loading: {$set: false}
		}));
		let addTag = this.setGroupTags(this.state.activeIds, this.state.mode);
		// console.log('addtag', addTag);
		this.props.onGetTags(addTag);
		return false;
	}

	handleAllClick (e) {
		e.preventDefault();
		const {activeIds, data_list_multi, mode} = this.state
		//console.log('data_list_multi', this.state.data_list_multi);
		this.setState({loading: true})
		let listData = data_list_multi.map((item) => {
			let displayName = (this.state.mode == 'CIM') ? (activeIds.list_2.name + '_' + item.name) : item.name
			let itm = {
				displayName: displayName,
				idProject: (this.state.mode == 'CIM') ? activeIds.list_2.value : '',
				id: item.value,
				dataRaw: item
			}
			return itm;
		});

		// Detect MODE
		let nxtGroupId = null;
		let nxtGroup   = null;
		if (mode == 'CIM') {
			nxtGroup   = activeIds.list_1.name + ' / ' +  activeIds.list_2.name
			nxtGroupId = activeIds.list_1.value + '_' + activeIds.list_2.value
		} else if (mode == 'PRO'){
			nxtGroup   = activeIds.list_1.name
			nxtGroupId = activeIds.list_1.value
		} /*else {
			nxtGroup   = 'MS Portal'
			nxtGroupId = 'msp'
		}*/

		let returnR = {
			mode: this.state.mode,
			nameGroup: nxtGroup,
			idGroup: nxtGroupId,
			tags: listData
		}

		this.setState(update(this.state, {
			activeIds: {
				list_3 : {
					$set: data_list_multi
				}
			},
			loading: {$set: false}
		}));

		console.log('returnR', returnR);
		this.props.onGetTags(returnR);

		return false;
	}

	handleNoneClick (e) {
		e.preventDefault();
		const {activeIds, mode} = this.state

		// Detect MODE
		let nxtGroupId = null;
		if (mode == 'CIM') {
			nxtGroupId = activeIds.list_1.value + '_' + activeIds.list_2.value
		} else if (mode == 'PRO'){
			nxtGroupId = activeIds.list_1.value
		} else {
			nxtGroupId = 'msp'
		}
		//this.setState({loading: true})
		this.setState(update(this.state, {
			activeIds: {
				list_3 : {
					$set: []
				}
			},
			loading: {$set: false}
		}));

		let returnR = {
			mode: this.state.mode,
			idGroup: nxtGroupId,
		}

		this.props.onGetTags(returnR);
		return false;
	}

	// HANDLE TAGS ----
	handleDataTags(tags) {

		let returnArr = tags.list_3.map((item) => {
			let displayName = null;
			let idProject   = null;

			if (this.state.mode == 'CIM' || this.state.mode == 'PRO') {
				displayName = tags.list_2.name + '_' + item.name
				idProject   = tags.list_2.value
			} else {
				displayName = item.name
			}

			let itm = {
				displayName: displayName,
				idProject: idProject,
				id: item.value,
				dataRaw: item
			}
			return itm;
		});

		return returnArr;

	}

	setGroupTags (data, mode) {
		// let mode = data.mode;
		let dataItm = data;
		let nxtGroupId = null;
		let nxtGroup   = null;

		if (mode == 'CIM') {
			nxtGroup   = dataItm.list_1.name + ' / ' +  dataItm.list_2.name
			nxtGroupId = dataItm.list_1.value + '_' + dataItm.list_2.value
		} else if (mode == 'PRO'){
			nxtGroup   = dataItm.list_1.name
			nxtGroupId = dataItm.list_1.value
		} /*else {
			nxtGroup   = 'MS Portal'
			nxtGroupId = 'msp'
		}*/
		let dataTags = []
		if (dataItm.list_3.length) {
			dataTags = this.handleDataTags(dataItm);
		}

		let returnR = {
			mode: mode,
			nameGroup: nxtGroup,
			idGroup: nxtGroupId,
			tags: dataTags
		}

		return returnR;
	}
	// ----

	render () {
		const { handleSubmit, pristine, reset, submitting } = this.props
		const { data_list_1,
				data_list_2,
				data_list_multi,
				activeIds,
				loading,
				mode
			} = this.state

		return (
			<div className={'chooser-blk' + (loading ? ' loading' : '')}>
				<div className="row">
					<div className="col-4">
						<div className="form-group">
							<label>Chooser</label>
							<select
								className="form-control"
								type="textbox"
								name="chooser"
								onChange={(e) => this.handleChgChooser(e)}
								>
								<option value="">Select Tool</option>
								<option value="1">CIM</option>
								<option value="2">Protecode</option>
								{/*<option value="3">MS Portal</option>*/}
							</select>
						</div>
					</div>
				</div>
			<div className="row">
				{data_list_1 &&
					<div className="col-4">
						<SelectCIMItem
							list={data_list_1}
							titleBlk={mode}
							activeId={activeIds.list_1 ? activeIds.list_1.value : 0}
							handleClick={this.handleClickCIMItem} />
					</div>
				}

				{data_list_2 &&
					<div className="col-4">
						<SelectCIMItem
							list={data_list_2}
							titleBlk={activeIds.list_1.name}
							activeId={activeIds.list_2 ? activeIds.list_2.value : 0}
							handleClick={this.handleClickProjectItem} />
					</div>
				}

				{data_list_multi &&
					<div className="col-4">
						<SelectMultiItem
							list={data_list_multi}
							titleBlk={(activeIds.list_2) ? activeIds.list_2.name : null}
							activeId={activeIds.list_3}
							allClick={this.handleAllClick.bind(this)}
							noneClick={this.handleNoneClick.bind(this)}
							handleClick={this.handleClickStreamItem} />
					</div>
				}

				<div className="col-12 py-2"><p>Total Selected Projects: {activeIds.list_3.length ? activeIds.list_3.length : 0}</p> </div>
			</div>
		</div>
		)
	}
}


export default SelectCIMForm;
