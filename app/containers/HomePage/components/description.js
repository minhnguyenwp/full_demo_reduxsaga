import React from 'react';
// Sy - Sub-Components
import { Link } from 'react-router-dom';

class Description extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="description-block">
        <h2 className="title">
          Welcome to the Synopsys <br />Reporting & Govermance Platform (RGP)
        </h2>
        <div className="sub-title">
          RGP provides an audit of critical security feature in your software, presenting an overview of risk exposure to the executive for decision making as well as recommendations for minimizing those risks. It helps facilitate an assessment of the overal application security - which is also useful for compliance, policy and architectural reviews.
        </div>
      </div> 
    );
  }
}

export default Description;
