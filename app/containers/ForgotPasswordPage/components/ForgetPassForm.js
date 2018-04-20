import React from 'react';
import { connect } from 'react-redux'

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { required, 
  alphaNumeric, 
  minLength3,
  renderTxtField,
  emailSyn,  
  } from 'utils/formHelper';

/**
 * Sy - Form
 */
let ForgetPassForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">

        <Field component={renderTxtField} type="text"
          className="form-control txt"
          placeholder="Your email / username"
          name="userName" 
          label="Please input your email/username below"
          validate={[required, minLength3]}
          warn={[alphaNumeric, emailSyn]}
          />
      </div>
      
      <button 
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary sign-in-btn">Continue</button>
    </form>
  )
}

// Sy - regis form
ForgetPassForm = reduxForm({
  // a unique name for the form
  form: 'forget-pass-frm'
})(ForgetPassForm)

export default ForgetPassForm;
