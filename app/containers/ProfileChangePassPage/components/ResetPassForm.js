import React from 'react';
import { connect } from 'react-redux'

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import { required, 
  minLeng8,
  renderTxtField,
  passWordSyn_UpLow
  } from 'utils/formHelper';

/**
 * Sy - Form
 */
let ResetPassForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='row'><div className="col-4">
          <div className="form-group">

            <Field component={renderTxtField} type="text"
              className="form-control txt"
              placeholder="Current password"
              name="curPassword" 
              label="Enter current password"
              validate={[required, minLeng8, passWordSyn_UpLow]}
             
              />
          </div>
          <div className="form-group">

            <Field component={renderTxtField} type="text"
              className="form-control txt"
              placeholder="New password"
              name="newPassword" 
              label="Enter new password"
              validate={[required, minLeng8, passWordSyn_UpLow]}
             
              />
          </div>
          <div className="form-group">

            <Field component={renderTxtField} type="text"
              className="form-control txt"
              placeholder="New password again"
              name="newPassword_2" 
              label="Enter new password again"
              validate={[required, minLeng8, passWordSyn_UpLow]}
              />
          </div>
        
        <br />
        <div className="frm-footer">
          <button 
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-primary blue-btn mr-4">Save</button>
          <button 
            type="button"
            disabled={submitting}
            className="btn grey-btn">Cancel</button>

        </div>
      </div></div>
    </form>
  )
}

// Sy - regis form
ResetPassForm = reduxForm({
  // a unique name for the form
  form: 'change-pass-frm'
})(ResetPassForm)

export default ResetPassForm;
