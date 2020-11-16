import React from "react";
import { StyledForm } from "../../theme/StyledComponents";
import { StyledPrimaryButton } from "../../theme/StyledComponents";

export default function SignupForm(props) {
  return (
    <StyledForm>
      <div className="createCustomerForm">
        <ul className="flexOuter">
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
            <label htmlFor="country">country</label>
            <input
              type="text"
              name="country"
              value={props.setCounty}
              onChange={props.onChange}
              placeholder="Enter country"
            />
          </li>
          <li>
            <StyledPrimaryButton onClick={props.handlOnClickSignup}>
              Signup
            </StyledPrimaryButton>
          </li>
          {props.progress}
        </ul>
      </div>
    </StyledForm>
  );
}
