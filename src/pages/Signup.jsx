import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import GeneralisedForm from '../components/Forms/GeneralisedForm'
import userKit from '../data/userKit'
import formDataKit from '../data/formDataKit'

export default function Signup() {
  const UserKit = new userKit()
  const [signupProgress, setSignupProgress] = useState(null)
  const [signupFormData, setSignupFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
  })

  const formArray = formDataKit.createSignupFormData(signupFormData)
  const history = useHistory()

  function handlOnClickSignup () {
    UserKit.signup(signupFormData)
    .then(res => res.json())
    .then(data => {
      if(data.hasOwnProperty('firstName')){
        alert("You are now signed up")
        history.push('/login')
      } else {
        for (const [key, value] of Object.entries(data)) {
          setSignupProgress(`${value}`)
        }
      }
    })
  }

  function handleInputOnChange(e) {
    setSignupFormData({...signupFormData, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h4>Signup page</h4>
      {formArray && (
        <GeneralisedForm 
          formArray={formArray}
          buttonText='Create Account'
          onChange={handleInputOnChange}
          handleOnClick={handlOnClickSignup}
          createStatus={signupProgress}
          selectedProps='countries'
      />
      )}

    </div>
  )
}
