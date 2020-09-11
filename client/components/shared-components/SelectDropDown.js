import React from 'react'

const SelectDropDown = ({className, label, handleChange, options, value}) => {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label>
      <select
        className={className}
        name={label}
        onChange={handleChange}
        value={value}
      >
        {options.map(option => (
          <option value={option} key={`option-${option}`}>
            {option}
          </option>
        ))}
      </select>
    </React.Fragment>
  )
}

export default SelectDropDown
