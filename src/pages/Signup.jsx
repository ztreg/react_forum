import React, { useState } from 'react'
import SignupForm from '../components/Forms/SignupForm'
import userKit from '../data/userKit'

export default function Signup(props) {
  const UserKit = new userKit()
  const [signupFormData, setSignupFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
  })

  const [signupProgress, setSignupProgress] = useState('')

  function handlOnClickSignup () {
    if(signupFormData.country === 'Sweden') {
      signupFormData.country = 1
    }

    UserKit.signup(signupFormData)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.hasOwnProperty('firstName')){
        setSignupProgress('SIgnup success, you may login')
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
