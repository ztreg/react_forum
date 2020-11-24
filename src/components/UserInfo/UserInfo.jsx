/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import LogOut from '../Login/Logout';

export default function UserInfo() {
  const {userData, setUserData} = useContext(UserContext)

  function checkUserInfo(){
    if(!userData) {
      let test = JSON.parse(localStorage.getItem("userData"));
      setUserData(test)
    }
  }
  useEffect(() => {
    checkUserInfo()
  }, [])

  return (
    <div className="userBox">
      {userData && (
        <>
          <div>{userData.firstName} {userData.lastName}</div>
          <LogOut />
        </>
      )}

    </div>
  )
}
