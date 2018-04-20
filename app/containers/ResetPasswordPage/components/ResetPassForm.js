import React from 'react';
import { connect } from 'react-redux'

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { required, 
  alphaNumeric, 
  minLength3,
  minLeng8,
  renderTxtField,
  passWordSyn_UpLow,
  emailSyn,  
  } from 'utils/formHelper';

/**
 * Sy - Form
 */
let ResetPassForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  return (
    
    <form onSubmit={handleSubmit}>
      
      <div className="row">
        <div className="col-6">
          <div className="form-group">

            <Field component={renderTxtField} type="text"
              className="form-control txt"
              placeholder="Your username/email "
              name="userName" 
              label="Enter username/email address"
              validate={[required, minLength3]}
              warn={[alphaNumeric, emailSyn]}
              />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <Field component={renderTxtField} type="text"
              className="form-control txt"
              placeholder="Reset code"
              name="resetPass" 
              label="Enter your password reset code"
              validate={[required, minLength3]}
              />
          </div>
        </div>
      </div>{/* Sy - End Row */}
      <br />
      <div className="row">
        <div className="col-6">
          <div className="form-group">

            <Field component={renderTxtField} type="text"
              className="form-control txt"
              placeholder="New password"
              name="newPassword" 
              label="Enter new password"
              validate={[required, minLeng8, passWordSyn_UpLow]}
              warn={alphaNumeric}
              />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">

            <Field component={renderTxtField} type="text"
              className="form-control txt"
              placeholder="New password again"
              name="newPassword_2" 
              label="Enter new password again"
              validate={[required, minLeng8, passWordSyn_UpLow]}
              warn={alphaNumeric}
              />
          </div>
        </div>
      </div>{/* Sy - End Row */}
      <br />
      
      <button 
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary sign-in-btn">Reset Password</button>
    </form>
  )
}

// Sy - regis form
ResetPassForm = reduxForm({
  // a unique name for the form
  form: 'reset-pass-frm'
})(ResetPassForm)

export default ResetPassForm;
