import React, { useContext } from 'react'
import { ForumContext } from '../../contexts/ForumContext';
import { StyledPrimaryButton } from '../../theme/StyledComponents';
import { StyledForm } from '../../theme/StyledFormComponents';


export default function GeneralisedForm(props) {
  const {categories} = useContext(ForumContext)
  const {countries} = useContext(ForumContext)
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
    <StyledForm>
      <ul>
        {array && (
          array.map((formRow, index) => {
            return (
              <li key={index}>
                <label htmlFor={formRow.label}>{formRow.label}</label>
                {formRow.select && SelectProps && (
                  <select id={formRow.select.id} name={formRow.select.name} onChange={props.onChange}  >
                    <option defaultValue value="0">Choose Category</option>
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
            )
          })  
       )}
      </ul>
    <StyledPrimaryButton onClick={props.handleOnClick}>{props.buttonText}</StyledPrimaryButton>
      <p>{props.createStatus}</p>
    </StyledForm>
  )
}
