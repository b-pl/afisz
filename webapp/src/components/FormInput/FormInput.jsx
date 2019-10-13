import React from 'react'

function FormInput(props) {
  return (
    <div className={props.divClass}>
      <label className={props.labelClass}>{props.labelText} </label>
      <input className={props.inputClass} type='text' name={props.labelText} id={props.labelText} />
    </div>
  )
}

export default FormInput