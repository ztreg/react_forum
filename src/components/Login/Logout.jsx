import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import userKit from '../../data/userKit'
import { useHistory } from "react-router-dom";
import { StyledPrimaryButton } from '../../theme/StyledComponents';

export default function LogOut() {
  const {userData, setUserData} = useContext(UserContext)
  const UserKit = new userKit()
  const history = useHistory()

  function handleOnClickLogout() {
    UserKit.logOut()
    setUserData(null)
    history.push('/')
  }

  return (
    <>
      {userData && (
       <StyledPrimaryButton onClick={handleOnClickLogout}>Logout</StyledPrimaryButton>
      )}
   </>
  )
}
