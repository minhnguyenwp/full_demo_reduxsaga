import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux'

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import { required, 
  alphaNumeric, 
  minLength3,
  renderTxtField,
  emailSyn,  
  email,
  } from 'utils/formHelper';
  
  import SelectCIMTag from './SelectCIMTag';

/**
 * Sy - Form
 */
let SelectCIMForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  this.state = { selectedOption: '',}
  
  this.handleChange = (selectedOption) => {
	this.state = {selectedOption : selectedOption};
	console.log('state', this.state);
  }
  
  return (
      <div className='row'>
		<div className="col-4">
			<div className="form-group">
			{/*<Select
					multi
					className="form-control"
					name='cim_instance'
					value={this.state.selectedOption.value}
					onChange={this.handleChange}
					options={[
						{value: 'cim_1', label: 'CIM 1'},
						{value: 'cim_2', label: 'CIM 2'},
						{value: 'cim_3', label: 'CIM 3'}
					]}
			/>*/}
			
			<select className="form-control" name="cim_instance" multiple>
					<option value="">CIM 1</option>
					<option value="">CIM 2</option>
					<option value="">CIM 3</option>
				</select>
			</div>
		</div>
		
		<div className="col-4">
			<div className="form-group">
				
				<select className="form-control" name="cim_project" multiple>
					<option value="">Project 1</option>
					<option value="">Project 2</option>
					<option value="">Project 3</option>
					<option value="">Project 4</option>
					<option value="">Project 5</option>
					<option value="">Project 6</option>
				</select>
			</div>
		</div>
		
		<div className="col-4">
			<div className="form-group">
				
				<select className="form-control" name="project_stream" multiple>
					<option value="">Stream 1</option>
					<option value="">Stream 2</option>
					<option value="">Stream 3</option>
					<option value="">Stream 4</option>
					<option value="">Stream 5</option>
					<option value="">Stream 6</option>
				</select>
			</div>
		</div>
			<div className="col-12"><p>Total Selected Projects: 2</p> </div>
		
		<SelectCIMTag />
	</div>
  )
}

export default SelectCIMForm;
