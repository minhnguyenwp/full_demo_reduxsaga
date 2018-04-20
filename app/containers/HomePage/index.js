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
import Description from './components/description';
import LoginForm from './components/LoginForm';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);    
  }

  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    
  }

  render() {
    return (
      <section className="main-wrapper">
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="Welcome to Reporting System" />
        </Helmet>
        <div>
          {/* Sy - Start: Header */}
          <Header />

          {/* Sy - Start: Main Content */}
          <section className="main-component">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <Description />
                </div>
                <div className="col">
                  <LoginForm />
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

export default HomePage;