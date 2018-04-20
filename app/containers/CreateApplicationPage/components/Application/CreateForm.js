import React from 'react';
import { connect } from 'react-redux'
import update from 'react/lib/update';
import _ from 'lodash';
// Sy - Sub-Components
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';

import SelectCIMTag from './../Chooser/SelectCIMTag';
import SelectCIMForm from './../Chooser/SelectCIMForm';
import SelectByApp from './../Chooser/SelectByApp';

// Form HELPER 
import { required, 
	alphaNumeric, 
	minLength3,
	renderTxtField,
	  validateRadio,
	} from 'utils/formHelper';

/**
 * Sy - Form
 */
class CreateForm extends React.Component {

	// Sy - register state
	state = {
		searchBy: 'app-info',
		tags: [],
	}

	changeRadio = (e) => {
		if (!e.target.value) {return;}
		this.setState({searchBy: e.target.value});
	}

	getTags = async (val) => {
		let idx = -1;
		
		console.log('val', val)
		idx = _.findIndex(this.state.tags, function(o) { 
			return o.idGroup == val.idGroup; 
		});


		if (idx >= 0) {
			if (!val.nameGroup && val.idGroup) {
				await this.setState(update(this.state, {
					tags: {
						$splice: [[idx,1]]
					}
				}))
			} else {
				await this.setState(update(this.state, {
					tags: {
						[idx] : {$set: val}
					}
				}))
			}
			
		} else {
			await this.setState(update(this.state, {
				tags: {$push: [val]}
			}))
		}
		return;
		//console.log('this.state.tags', this.state.tags);
	}

	handleRemoveTags = (e, tagGroup) => {
		// console.log('tagGroup', tagGroup);
		let idx = -1;
		idx = _.findIndex(this.state.tags, function(o) { 
			return o.idGroup == tagGroup.idGroup; 
		});

		if (idx >= 0) {
			this.setState(update(this.state, {
				tags: { $splice: [[idx,1]]}
			}))
		}
	}

	handleRemoveTag = (e, tag) => {
		e.preventDefault();
		console.log('REMOVE this tag', tag)
		return;
	}

	customSubmit = (vals) => {
		//console.log('Par', this.state);
		this.props.onSubmit(vals);
	}

	render() {
		const {error, handleSubmit, pristine, reset, submitting } = this.props
		const {searchBy, tags} = this.state

		return (
			<form onSubmit={ handleSubmit(this.customSubmit.bind(this)) }>
				<div className='row'>
					<div className="col-4">
						<div className="form-group">
							<Field component={renderTxtField} type="text"
							className="form-control txt"
							placeholder="Application A"
							name="appName" 
							label="Application Name"
							validate={[required, minLength3]}
							warn={[alphaNumeric]}
							/>
						</div>
	
						<div className="form-group">
							<label>Create application by</label>
							<div className="form-check">
									<label className="form-check-label">
										{searchBy == 'tool' &&
										<Field name="appType" 
											component="input" 
											type="radio" 
											value="tool"
											className="form-check-input"
											validate={validateRadio}
											checked
											onChange={(e) => this.changeRadio(e)}
											/>}
										{searchBy != 'tool' &&
										<Field name="appType" 
											component="input" 
											type="radio" 
											value="tool"
											className="form-check-input"
											validate={validateRadio}
											onChange={(e) => this.changeRadio(e)}
											/>}
										Browse by tools
									</label>
							</div>
							<div className="form-check">
									<label className="form-check-label">
									{searchBy == 'app-info' &&
									<Field name="appType" 
											component="input" 
											type="radio" 
											value="app-info"
											className="form-check-input"
											validate={validateRadio}
											checked
											onChange={(e) => this.changeRadio(e)}
											/>}
									{searchBy != 'app-info' &&
									<Field name="appType" 
											component="input" 
											type="radio" 
											value="app-info"
											className="form-check-input"
											validate={validateRadio}
											onChange={(e) => this.changeRadio(e)}
											/>}
									Search by application information
									</label>
							</div>
						</div>
					</div>
				</div>

				{/* Chooser group */}
				{searchBy && (searchBy == 'tool') &&
					<SelectCIMForm 
						onGetTags={this.getTags}
						selectedTags = {tags}
						/>}
				{searchBy && (searchBy == 'app-info') &&
					<SelectByApp />}
				{(searchBy) && (tags.length > 0) &&
					<SelectCIMTag 
						dataItm={tags} 
						clkRemove={this.handleRemoveTags}
						clkRemoveTag={this.handleRemoveTag} />
				}
			
				{/* Buttons group */}
				<div className="frm-footer mt-5">
					<button 
						type="submit"
						disabled={pristine || submitting}
						className="btn blue-btn mr-4">Create</button>
					<button 
						type="button"
						disabled={submitting}
						className="btn">Cancel</button>
				</div>
				
			</form>
		)
	}
}

// Sy - regis form
CreateForm = reduxForm({
  // a unique name for the form
  form: 'create-frm'
})(CreateForm)

export default CreateForm;
