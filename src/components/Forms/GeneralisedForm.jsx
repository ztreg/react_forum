import React, { useContext } from 'react'
import { ForumContext } from '../../contexts/ForumContext';
import { StyledPrimaryButton } from '../../theme/StyledComponents';
import { StyledForm } from '../../theme/StyledFormComponents';


export default function GeneralisedForm(props) {
  const {categories} = useContext(ForumContext)
  // console.log(categories);
  let array = props.formArray
  return (
    <StyledForm>
      <ul>
      {array.map((formRow, index) => {
        return (
          <li key={index}>
            {formRow.select && (
             <>
              {console.log(formRow)}
  
              <label htmlFor={formRow.label}></label>
              <select id={formRow.id} name={formRow.name} onChange={props.onChange}  >
                <option defaultValue value="0">Choose Category</option>
                {categories.map((item, index) => {
                  return (
                    <option key={index} value={item.country} >{item.title}</option>
                  )
                  
                })}
              </select>
              </>
            )}
            
            {!formRow.select && ( 
              <>
              <label htmlFor={formRow.label}></label>
              <input 
                type={formRow.input.type}
                name={formRow.input.name}
                onChange={props.onChange}
                value={formRow.input.value}
                placeholder={formRow.input.placeholder}
              >
              </input>
              
            </>
            )}
          </li>
        )
      })}
      </ul>
      <StyledPrimaryButton onClick={props.handleOnClickCreatePost}>Create Post</StyledPrimaryButton>
    </StyledForm>
  )
}

/**
 * <label htmlFor="country">country</label>
    <select 
      id="country" 
      name="country" 
      onChange={props.onChange}
    >
      <option defaultValue value="0">Choose counry</option>
      {countries.map((item, index) => {
        return (
          <option key={index} value={item.id} >{item.title}</option>
        )
      })}
    </select>
 */