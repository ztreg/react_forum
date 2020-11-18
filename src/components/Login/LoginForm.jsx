import React from 'react'
import { StyledInputLogin } from '../../theme/StyledComponents'

export default function LoginInput(props) {
  return (
    <StyledInputLogin>
			<label htmlFor="Email">Email</label>
      <input
				type='Email'
				name='Email'
				value={props.emailInput}
				onChange={e => props.setEmailInput(e.target.value)}
				placeholder='Email'
			/>
			<label htmlFor="password">Password</label>
			<input
				type='password'
				name='password'
				value={props.passwordInput}
				onChange={e => props.setPasswordInput(e.target.value)}
				placeholder='Password'
			/>
			{props.loginStatus}
    </StyledInputLogin>
  )
}