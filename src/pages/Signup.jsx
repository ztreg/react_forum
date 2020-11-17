import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SignupForm from '../components/Forms/SignupForm'
import userKit from '../data/userKit'

export default function Signup() {
  const UserKit = new userKit()

  const [signupFormData, setSignupFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
  })

  const [signupProgress, setSignupProgress] = useState('')
  const history = useHistory()

  function handlOnClickSignup () {
    UserKit.signup(signupFormData)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.hasOwnProperty('firstName')){
        alert("You are now signed up")
        history.push('/login')
      } else {
        console.log('failed');
        setSignupProgress('Signup failed')
      }
    })
  }

  function handleInputOnChange(e) {
    setSignupFormData({...signupFormData, [e.target.name]: e.target.value})
  }


  return (
    <div>
      <h4>Signup page</h4>
      <SignupForm
        onChange={handleInputOnChange}
        setFirstName={signupFormData["firstName"]}
        setLastName={signupFormData["lastName"]}
        setEmail={signupFormData["email"]}
        setCounty={signupFormData["country"]}
        setPassword={signupFormData["password"]}
        handlOnClickSignup={handlOnClickSignup}
        progress={signupProgress}
      />
    </div>
  )
}
