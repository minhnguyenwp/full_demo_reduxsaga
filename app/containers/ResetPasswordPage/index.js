/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import { Helmet } from 'react-helmet';

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import Header from './components/header';
import ResetPassFormRender from './components/ResetPassForm';

export class ResetPasswordPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  submitFrm = values => {
    // print the form values to the console
    
    let frmVals = JSON.parse(JSON.stringify(values));
    console.log(frmVals);
  }

  render() {
    return (
      <section className="main-wrapper">
        <Helmet>
          <title>Reset password Page</title>
          <meta name="description" content="Reset your password" />
        </Helmet>
        <div>
          {/* Sy - Start: Header */}
          <Header />

          {/* Sy - Start: Main Content */}
          <section className="main-component">
            <div className="contain-960">
              <div className="row">
                <div className="col">
                  <h2 className="m-ttl">
                    Reset your password
                  </h2><br />
                  <p>
                    If the email address you provided is valid, you should shortly receive an email containing a reset code. Do not close you browser. Enter the reset code below then enter your new password.
                  </p>
                  <br />
                  <div className="fr-frm-block reset-password-frm ">
                    <ResetPassFormRender onSubmit={this.submitFrm} />
                  </div>
                  <br />
                  <div className="help-text row">
                    <div className="col">
                      <a href="/">Back to sign in page</a>
                    </div>
                    <div className="col text-right">
                      <a href="/">Didn't receive the email?</a>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </section>

          {/* Sy - FOOTER */}
          <footer className="footer">
            <p className="text-center">
              Synopsys.com &copy; 2017. 
            </p>
          </footer>

        </div> {/* Sy - End: Page main content */}
      </section>
    );
  }
}

export default ResetPasswordPage;