import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form/immutable';

// Sy - Sub-Components

import {required, renderTxtField, renderCBoxField} from 'utils/formHelper';

// Sy - Form Render
const intiDataFrm = {
    roleName: 'AnyOne Loves'
};

let RoleDetailRenderForm = props => {
    const {handleSubmit, pristine, reset, submitting, role} = props

    return (<form onSubmit={handleSubmit}>
        <h4 className="title">Details</h4>
        <div className="role-name row">
            <div className="col-4">
                <Field component={renderTxtField} type="text" className="form-control txt" placeholder="Type role" name="roleName" label="Role Name" validate={[required]}/>
            </div>
        </div>
        <hr className="line"/>
        <h4 className="title">Permisssons</h4>
        <div className="form-control-group">
            <Field component={renderCBoxField} type="checkbox" className="chbox" name="p_user" label="Manage users (Create / Edit / Delete)" inputId="perm_1"/>
            <Field component={renderCBoxField} type="checkbox" className="chbox" name="p_tool" label="Manage tools (Create / Edit / Delete)" inputId="perm_2"/>

        </div>
        <br/>
        <div className="frm-footer">
            <button type="submit" disabled={pristine || submitting} className="btn btn-primary blue-btn mr-4">Save</button>
        </div>
    </form>);
};

// Sy - regis form
RoleDetailRenderForm = reduxForm({
    // a unique name for the form
    form: 'role-detail-frm'
})(RoleDetailRenderForm);

RoleDetailRenderForm = connect(() => ({
    initialValues: intiDataFrm // pull initial values from account reducer
}))(RoleDetailRenderForm);

class RoleDetailForm extends React.Component {

    // Sy - action submit
    submitForm = (values) => {
        // print the form values to the console

        let frmVals = JSON.parse(JSON.stringify(values));
        console.log('sss', frmVals);
    }

    render() {
        const {role} = this.props;

        return (<div>
            <RoleDetailRenderForm role={role} onSubmit={this.submitForm}/>
        </div>);
    }
}

RoleDetailForm.propTypes = {
    role: PropTypes.object.isRequired
};

export default withRouter(RoleDetailForm);
