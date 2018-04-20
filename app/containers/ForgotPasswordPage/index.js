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
import ForgetPassFormRender from './components/ForgetPassForm';

export class ForgotPasswordPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  submitFrm = values => {
    // print the form values to the console
    
    let frmVals = JSON.parse(JSON.stringify(values));
    console.log(frmVals);
  }

  render() {
    return (
      <section className="main-wrapper">
        <Helmet>
          <title>Forgot password Page</title>
          <meta name="description" content="Reset my password" />
        </Helmet>
        <div>
          {/* Sy - Start: Header */}
          <Header />

          {/* Sy - Start: Main Content */}
          <section className="main-component">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="m-ttl">
                    Reset your password
                  </h2><br />
                  <div className="fr-frm-block forgot-password-frm row">
                    <div className="col-4">
                      <ForgetPassFormRender  
                      onSubmit={this.submitFrm} />
                    </div>
                  </div><br />
                  <div className="help-text">
                    <a href="/">Back to sign in page</a>
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

export default ForgotPasswordPage;