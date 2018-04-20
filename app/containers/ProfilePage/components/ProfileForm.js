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

/**
 * Sy - Form
 */
let ProfileForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'><div className="col-4">

        <div className="form-group">

          <Field component={renderTxtField} type="text"
            className="form-control txt"
            placeholder="John"
            name="firstName"
            label="First name"
            validate={[required, minLength3]}
            warn={[alphaNumeric]}
            />
        </div>
        <div className="form-group">
          <Field component={renderTxtField} type="text"
            className="form-control txt"
            placeholder="Marc"
            name="lastName"
            label="Last name"
            validate={[required, minLength3]}
            warn={[alphaNumeric]}
            />
        </div>
        <div className="form-group">

          <Field component={renderTxtField} type="text"
            className="form-control txt"
            placeholder="Your username"
            name="userName"
            label="Username"
            validate={[required, minLength3]}
            warn={[alphaNumeric]}
            />
        </div>
        <div className="form-group">

          <Field component={renderTxtField} type="text"
            className="form-control txt"
            placeholder="Your email"
            name="userName"
            label="Your email"
            validate={[required, minLength3, email]}
            warn={[alphaNumeric, emailSyn]}
            />
        </div>

        <div className="form-group">
          <label>Password</label>
          <p><Link to="/change-password">Change password</Link></p>
        </div>

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
ProfileForm = reduxForm({
  // a unique name for the form
  form: 'profile-frm'
})(ProfileForm)

export default ProfileForm;
