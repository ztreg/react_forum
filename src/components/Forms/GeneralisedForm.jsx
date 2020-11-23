import React, { useContext } from 'react'
import {  FaSignOutAlt } from 'react-icons/fa';
import { ForumContext } from '../../contexts/ForumContext';
import { StyledPrimaryButton } from '../../theme/StyledComponents';
import { StyledForm } from '../../theme/StyledFormComponents';
import BeforeForm from './BeforeForm';


export default function GeneralisedForm(props) {
  const {categories} = useContext(ForumContext)
  const {countries} = useContext(ForumContext)
  const {errorType, status} = props
  let SelectProps = props.selectedProps;
  console.log(SelectProps);
  
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
                            <option key={index} value={item.country} >{item.title}</option>
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
                  <p className="errorMessage">{formRow.input && (
                    formRow.input.name &&formRow.input.name === errorType ? status : ''
                    )}
                  </p>
                    </div>               
              )
            })  
        )}
        </ul>
      <StyledPrimaryButton onClick={props.handleOnClick}><FaSignOutAlt />{props.buttonText}</StyledPrimaryButton>
      </StyledForm>
    </BeforeForm>
  )
}
