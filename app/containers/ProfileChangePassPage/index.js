/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import { Helmet } from 'react-helmet';

// Sy - Sub-Components
import { Link } from 'react-router-dom';
import LeftSideBar from 'components/LeftSideBar';
import Breadcrumb from 'components/Breadcrumb';
import ResetPassForm from './components/ResetPassForm';

export class ProfileChangePassPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props); 
    this.state = {
      menu : [
        { id: 1, name: 'Profile'},
        { id: 2, name: 'Change password'},
      ]
    }  
  }

  componentDidMount() {
    console.log(this.state.menu) 
  }

  render() {
    const {menu} = this.state;

    return (
      <section className="main-wrapper">
        <Helmet>
          <title>Profile - change password Page</title>
          <meta name="description" content="This is profile page, change password " />
        </Helmet>
        <div>
          <LeftSideBar />
          <div className='content-wrapper'>
            <Breadcrumb menu={menu}></Breadcrumb>
            <section className="main-content">
              <div className="profile-page r-page">
                <h1 className="r-page-ttl">
                  Change password
                </h1>
                <div className="r-page-ct">
                  <ResetPassForm />
                </div>
              </div>
            </section>
            
          </div>

        </div> {/* Sy - End: Page main content */}
      </section>
    );
  }
}

export default ProfileChangePassPage;