import React from 'react';
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

import SelectCIMForm from './../Chooser/SelectCIMForm';
/**
 * Sy - Form
 */
let CreateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
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
						<input className="form-check-input" type="radio" name="appType" value="tool" checked />
						Browse by tools
					</label>
				 </div>
				 <div className="form-check">
					<label className="form-check-label">
						<input className="form-check-input" type="radio" name="appType" value="app-info" />
						Search by application information
					</label>
				 </div>
			</div>
			<div className="form-group">
				<label>Chooser</label>
				<select className="form-control" type="textbox" name="chooser">
					<option value="">Select Tool</option>
					<option value="">CIM</option>
					<option value="">Protecode</option>
					<option value="">MS Portal</option>
				</select>
			</div>
		</div>
		</div>

		<SelectCIMForm />

        <div className="frm-footer mt-5">
          <button
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-primary blue-btn mr-4">Create</button>
          <button
            type="button"
            disabled={submitting}
            className="btn btn-sm btn-danger">Cancel</button>

        </div>

    </form>
  )
}

// Sy - regis form
CreateForm = reduxForm({
  // a unique name for the form
  form: 'create-frm'
})(CreateForm)

export default CreateForm;
