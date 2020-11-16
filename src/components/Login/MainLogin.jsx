import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import LoginInput from './LoginForm'
import { UserContext } from '../../contexts/UserContext';
import userKit from '../../data/userKit';
import { StyledLoginBox, StyledPrimaryButton } from '../../theme/StyledComponents'

export default function MainLogin(props) {
  const [emailInput, setEmailInput] = useState('jonas2@jonas.com');
	const [passwordInput, setPasswordInput] = useState('Pelle123');
	const [loginStatus, setLoginStatus] = useState('')

	let history = useHistory()
	const {setUserData} = useContext(UserContext)
	const UserKit = new userKit();

	const handleOnClick = () => {
    handleLogin(emailInput, passwordInput);
    console.log('logging in with ' + emailInput, passwordInput);
	};

	function handleLogin (email, password) {
		UserKit.login(email, password)
			.then(res => res.json())
			.then(data => {
        console.log(data);
				if(!data.token) {
					setLoginStatus('Invalid login info')
				} else {
          setLoginStatus('HALFWAY THERE')
					UserKit.setToken(data.token);
					UserKit.fetchMe()
					.then(res => res.json())
					.then(data =>  {
            setLoginStatus('ALL GOOD')
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
        ></LoginInput>
        <StyledPrimaryButton onClick={handleOnClick}> Login </StyledPrimaryButton>
      </StyledLoginBox>
          <p>{loginStatus}</p>
      </>
      )}


    </div>
  )
}
