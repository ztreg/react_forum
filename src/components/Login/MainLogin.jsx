import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import LoginInput from './LoginForm'
import { UserContext } from '../../contexts/UserContext';
import userKit from '../../data/userKit';
import { StyledLoginBox, StyledPrimaryButton } from '../../theme/StyledComponents'
import { FaSignInAlt } from 'react-icons/fa';

export default function MainLogin() {
  const [emailInput, setEmailInput] = useState('Jonas6@hotmail.com');
	const [passwordInput, setPasswordInput] = useState('Pelle123');
	const [loginStatus, setLoginStatus] = useState('')

	let history = useHistory()
	const {setUserData} = useContext(UserContext)
	const UserKit = new userKit();

	const handleOnClick = () => {
    handleLogin(emailInput, passwordInput);
	};

	function handleLogin (email, password) {
    setLoginStatus('Loading...')
		UserKit.login(email, password)
			.then(res => res.json())
			.then(data => {
				if(!data.token) {
          for (const [key, value] of Object.entries(data)) {
            setLoginStatus(`${value}`)
          }
				} else {
          setLoginStatus('ALL GOOD')
					UserKit.setToken(data.token);
					UserKit.fetchMe()
					.then(res => res.json())
					.then(data =>  {
            console.log(data);
            setUserData(data)
						UserKit.setUserInfo(data)
            history.push('/')
					})
				}
			})
	};
  return (
    <div>
      {UserKit.checkToken() && (
        <p>Loggeed in already</p>
      )}
      {!UserKit.checkToken() && (
        <>
      <StyledLoginBox>
        <LoginInput 
          emailInput={emailInput}
          passwordInput={passwordInput}
          setEmailInput={setEmailInput}
          setPasswordInput={setPasswordInput}
          loginStatus={loginStatus}
        ></LoginInput>
        <StyledPrimaryButton onClick={handleOnClick}><FaSignInAlt /> Login </StyledPrimaryButton>
        </StyledLoginBox>
         
      </>
      )}


    </div>
  )
}
