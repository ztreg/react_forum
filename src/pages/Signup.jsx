import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import GeneralisedForm from '../components/Forms/GeneralisedForm'
import userKit from '../data/userKit'
import formDataKit from '../data/formDataKit'
import { StyledHero } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'

export default function Signup() {
  const UserKit = new userKit()
  const [signupProgress, setSignupProgress] = useState(null)
  const [errorType, setErrorType] = useState('')
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
      if(data.hasOwnProperty('id')){
        console.log(data);
        alert("You are now signed up")
        history.push('/login')
      } else {
        for (const [key, value] of Object.entries(data)) {
          
          setErrorType(`${key}`)
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
      <StyledHero image={image}> SIGNUP</StyledHero>
      {formArray && (
        <GeneralisedForm 
          formArray={formArray}
          buttonText='Create Account'
          onChange={handleInputOnChange}
          handleOnClick={handlOnClickSignup}
          status={signupProgress}
          errorType={errorType}
          selectedProps='countries'
      />
      )}

    </div>
  )
}
