import React, { useContext } from 'react'
import {  FaSignOutAlt } from 'react-icons/fa';
import { ForumContext } from '../../contexts/ForumContext';
import { StyledPrimaryButton } from '../../theme/StyledComponents';
import { StyledForm } from '../../theme/StyledFormComponents';
import BeforeForm from './BeforeForm';

export default function GeneralisedForm(props) {
  const {categories} = useContext(ForumContext)
  const {countries} = useContext(ForumContext)

  //Check if the error is more then 1, then split
  let {errorType, status, successStatus} = props
  let statusArray = []
  if(status) {
    if(status.includes(',')) {
      statusArray = status.split(',')
    } else {
      statusArray.push(status)
    }
  }

  // Check what context to use
  let SelectProps = props.selectedProps;
  if(SelectProps === 'countries') {
    SelectProps = countries
  } else if(SelectProps === 'categories') {
    SelectProps = categories
  } else {
    SelectProps = null
  }
  let array = props.formArray

  return (
    <BeforeForm>
      <StyledForm>
        <ul>
          {SelectProps && (
            // Loop everything the form wants, check for select
            array.map((formRow, index) => {
              return (
              <div key={index}>
                <li>
                  <label htmlFor={formRow.label}>{formRow.label}</label>
                  {formRow.select && SelectProps && (
                    <select id={formRow.select.id} name={formRow.select.name} onChange={props.onChange}  >
                      <option defaultValue value="0">Choose {formRow.label}</option>
                      {SelectProps.map((item, index) => {
                        return (
                          <option key={index} value={item.id} >{item.title}</option>
                        )
                      })}
                    </select>
                  )}
                  {!formRow.select && ( 
                    <input 
                      type={formRow.input.type}
                      name={formRow.input.name}
                      onChange={props.onChange}
                      value={formRow.input.value}
                      placeholder={formRow.input.placeholder}
                    >
                    </input>
                  )}
                </li>
                {formRow.input && statusArray && (
                  // Display errors in correct position
                 <span className="errorMessage">{formRow.input.name === errorType ? 
                  statusArray.map((status, index3) => {
                    return (
                      <div key={index3}>
                        {status}
                      </div>
                    )
                  })
                  : ''} </span>
                )}
                {formRow.select && (
                  <p className="errorMessage">{formRow.select.name === errorType ? status: ''}</p>
                )}
                </div>               
              )
            })  
        )}
        </ul>
      <StyledPrimaryButton onClick={props.handleOnClick}><FaSignOutAlt />{props.buttonText}</StyledPrimaryButton>
        {successStatus && successStatus}
      </StyledForm>
    </BeforeForm>
  )
}
