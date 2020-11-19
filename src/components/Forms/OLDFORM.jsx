import React, { useContext} from "react";
import { ForumContext } from "../../contexts/ForumContext";
import { StyledPrimaryButton } from "../../theme/StyledComponents";
import { StyledForm } from "../../theme/StyledFormComponents";

export default function SignupForm(props) {

  const {countries} = useContext(ForumContext)

  return (
    <StyledForm>
      {countries && (
        <ul>
          <li>
            <label htmlFor="firstName">Firstname</label>
            <input
              type="text"
              name="firstName"
              value={props.setFirstName}
              onChange={props.onChange}
              placeholder="Enter your first name"
            />
          </li>
          <li>
            <label htmlFor="lastName">lastName</label>
            <input
              type="text"
              name="lastName"
              value={props.setLastName}
              onChange={props.onChange}
              placeholder="Enter lastname"
            />
          </li>
          <li>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={props.setPassword}
              onChange={props.onChange}
              placeholder="Enter password"
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={props.setEmail}
              onChange={props.onChange}
              placeholder="Enter email"
            />
          </li>
          <li>
            <>
            <label htmlFor="country">country</label>
              <select id="country" name="country" onChange={props.onChange}>
                <option defaultValue value="0">Choose counry</option>
                {countries.map((item, index) => {
                  return (
                    <option key={index} value={item.id} >{item.title}</option>
                  )
                })}
              </select>
            </>
          </li>
          <li>
            <StyledPrimaryButton onClick={props.handlOnClickSignup}>
              Signup
            </StyledPrimaryButton>
          </li>
          {props.progress}
        </ul>
     
      )}
      {!countries && (
        'Loading...'
      )}
    </StyledForm>

  );
}
