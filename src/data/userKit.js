const jwt = require('jsonwebtoken')

const ROOT_URL = 'https://lab.willandskill.eu'
const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries`
const TEST_URL = `${ROOT_URL}/api/v1/`
const SIGNUPURL = `${ROOT_URL}/api/v1/auth/users/`
const LOGINURL = `${ROOT_URL}/api/v1/auth/api-token-auth/`
const MEURL = `${ROOT_URL}/api/v1/me/`


// eslint-disable-next-line import/no-anonymous-default-export
export default class {

  signup(signupPayload) {
    console.log(signupPayload);
    const payload = {
      email: signupPayload.email,
      firstName: signupPayload.firstName,
      lastName: signupPayload.lastName,
      password: signupPayload.password,
      country: signupPayload.country
    }
    // payload.country = Number(payload.country)
    console.log(payload);
    return fetch(SIGNUPURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: this.getPublicHeaders()
    })
  }

  login(email, password) {
    const payload = {
      email: email,
      password: password
    }
    return fetch(LOGINURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: this.getPublicHeaders()
    })
  }

  fetchMe() {
    return fetch(MEURL, {
      headers: this.getPrivateHeaders()
    })
  }

  checkToken() {
    let decoded = jwt.decode(this.getToken());
    
    if(decoded !== null) {
        if (Date.now() >= decoded.exp * 1000) {
            return false;
          } else {
            return true
          }
    } else {
        return false
    }
   
  }

  logOut() {
    localStorage.removeItem("JWT")
    localStorage.removeItem("userData")
  }


  setUserInfo(userData) {
    localStorage.setItem("userData", JSON.stringify(userData))
  }

  setToken(token) {
    localStorage.setItem("JWT", token)
  }

  getToken() {
    return localStorage.getItem("JWT")
  }

  getPublicHeaders () {
    return  {
      "Content-Type": "application/json"
    }
  }

  getPrivateHeaders () {
    return  {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.getToken()}`
    }
  }
}