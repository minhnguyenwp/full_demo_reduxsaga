import React from 'react';
import { connect } from 'react-redux'

// Sy - Sub-Components
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { required,
  alphaNumeric,
  minLeng8,
  minLength3,
  passWordSyn_UpLow,
  renderTxtField,
  emailSyn,
  } from 'utils/formHelper';

/**
 * Sy - Form
 */

// Sy - Validate rules

let LoginFormRender = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field component={renderTxtField} type="text"
          className="form-control txt"
          placeholder="Your email or username"
          name="userName"
          label="Username"
          validate={[required, minLength3]}
          warn={[alphaNumeric, emailSyn]}
          />
      </div>
      <div className="form-group">
        <Field component={renderTxtField} type="password"
          className="form-control txt"
          placeholder="Your password"
          name="passWord"
          label="Password"
          validate={[required, minLeng8, passWordSyn_UpLow]}
          warn={alphaNumeric}
          />
      </div>
      {/* <p className="help-text">By continuing, you agree to&nbsp;
        <Link to="/">the terms of use</Link>
      .</p> */}
      <div className="help-text ">
        <Link to="/forgot-password">Forgot password?</Link>

        {/* <div className="col-6">

        </div>
        <div className="col-6 text-right">
          <Link to="/create-new-user">Create new user</Link>
        </div> */}
      </div>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary sign-in-btn">Sign in</button>
    </form>
  )
}

// Sy - regis form
LoginFormRender = reduxForm({
  // a unique name for the form
  form: 'login-frm'
})(LoginFormRender)
const selector = formValueSelector('login-frm')
LoginFormRender = connect(
  state => {
    return {
      loginFrmVals : selector(state, 'userName', 'passWord')
    }
  }
)(LoginFormRender)

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  submit = values => {
    // print the form values to the console

    let frmVals = JSON.parse(JSON.stringify(values));
    localStorage.setItem('username', frmVals.userName);
    localStorage.setItem('permission', 'admin');
    this.props.history.push('/risk-portfolio');
    console.log(frmVals.userName);
  }

  render() {
    return (
      <div className="login-block">
        <h4 className="title">Sign in</h4>
        <LoginFormRender
          className="sign-in-form"
          onSubmit={this.submit} />
      </div>
    );
  }
}

export default withRouter(LoginForm);
