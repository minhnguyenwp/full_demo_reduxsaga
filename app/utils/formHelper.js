/**
 * Sy - Form Helper.
 */
import React from 'react';

export const alphaNumeric = value =>
value && /[^a-zA-Z0-9]@/i.test(value)
  ? 'Only lowercase alphanumeric characters'
  : undefined

export const required = value => (value ? undefined : 'Enter your text.')

export const minLength = min => value =>
value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength3 = minLength(3)
export const minLeng8 =  minLength(8)

export const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined
export const emailSyn = value =>
  value && !/^[A-Z0-9._%+-]+@synopsys.com/i.test(value)
    ? 'Invalid email address, Must be company email.'
    : undefined
export const passWordSyn_UpLow = value =>
  value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/i.test(value)
    ? 'Must contain uppercase and lowercase characters, at least 1 number, 1 special character (@,#,$...)'
    : undefined
// --------------
export const renderTxtField = ({
  input,
  label,
  type,
  className,
  placeholder,
  valueField,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} 
        placeholder={placeholder} type={type}
        className={className} />
      {touched &&
        ((error && <p className="frm-msg text-danger">{error}</p>) ||
          (warning && <p className="frm-msg text-warning">{warning}</p>))}
    </div>
  </div>
)

export const renderCBoxField = ({
  input,
  label,
  type,
  className,
  valueField,
  inputId,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} 
        type={type}
        className={className}
        id={inputId}
        key={inputId} />
      
      <label htmlFor={inputId}>{label}</label>
    </div>
    {touched &&
      ((error && <p className="frm-msg text-danger">{error}</p>) ||
        (warning && <p className="frm-msg text-warning">{warning}</p>))}
  </div>
)


export const renderRadioField = ({
  input,
  label,
  type,
  className,
  valueField,
  inputId,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} 
        type={type}
        className={className}
        id={inputId}
        key={inputId} 
        value={valueField}/>
      
      <label htmlFor={inputId}>{label}</label>
    </div>
    {touched &&
      ((error && <p className="frm-msg text-danger">{error}</p>) ||
        (warning && <p className="frm-msg text-warning">{warning}</p>))}
  </div>
)

export const validateRadio = (value) => {
  if(!value) {
    return false;
  }
}

export const SelectMultiList = props => {
	const { list, classE, nameE, onChange } = props

	return(
    <select className={classE} 
      name={nameE} 
      onChange={onChange}
      multiple>
			{list.map(function(item, i){
				return <option 
						key={"s-"+i}
						value={item.value}>{item.name}</option>;
    		})}
		</select>
	)
}