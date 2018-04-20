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
let SelectCIMTag = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  return (
	<div className='col-12 tag-block'>
		<div className="tag-title py-2">
			<h5>CIM 2</h5>
			<a className='text-info'>Remove</a>
		</div>
		
		<div className='tag-item'>
			<a className="btn btn-sm btn-warning" href="#">Project 1_Stream1.1<i className="far fa-times"></i></a>
			<a className="btn btn-sm btn-warning" href="#">Project 1_Stream1.1<i className="far fa-times"></i></a>
			<a className="btn btn-sm btn-warning" href="#">Project 1_Stream1.1<i className="far fa-times"></i></a>
			<a className="btn btn-sm btn-warning" href="#">Project 1_Stream1.1<i className="far fa-times"></i></a>
			<a className="btn btn-sm btn-warning" href="#">Project 1_Stream1.1<i className="far fa-times"></i></a>
		</div>
		
		
	</div>
  )
}

export default SelectCIMTag;
