import React from 'react'
import MainLogin from '../components/Login/MainLogin';
import userKit from '../data/userKit';

export default function Home(props) {

	const UserKit = new userKit();

	
  return (
    <div>
      {UserKit.checkToken() && (
        //Show ForumPage
        <p>Loggeed in already</p>
      )}

      {!UserKit.checkToken() && (
        //Show loginPage
        <>
        
        <MainLogin />
      </> 
      )}


    </div>
  )
}
