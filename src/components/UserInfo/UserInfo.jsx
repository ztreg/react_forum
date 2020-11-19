import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
          {/* <div>{userData.email}</div> */}
        </>
      )}

    </div>
  )
}
