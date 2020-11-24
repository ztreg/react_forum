const ROOT_URL = 'https://lab.willandskill.eu/'
const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries/`
// const TEST_URL = `${ROOT_URL}/api/v1/`
const POSTS_URL = `${ROOT_URL}/api/v1/forum/posts/`
const CATEGORIES_URL = `${ROOT_URL}api/v1/forum/categories`

// eslint-disable-next-line import/no-anonymous-default-export
export default class {

  fetchCountries() {
    return fetch(COUNTRIES_URL, this.getPublicHeaders())
  }
  fetchCategories() {
    return fetch(CATEGORIES_URL, {headers: this.getPrivateHeaders()})
  }

  fetchPosts() {
    return fetch( POSTS_URL, {headers: this.getPrivateHeaders()})
  }

  fetchMorePosts(URL){
    return fetch(URL, {headers: this.getPrivateHeaders()})
  }
  
  fetchSinglePost(id) {
    const SINGLEPOST_URL = `${ROOT_URL}/api/v1/forum/posts/${id}/`
    return fetch( SINGLEPOST_URL, {headers: this.getPrivateHeaders()})
  }

  publishPost(payload){
    return fetch(POSTS_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: this.getPrivateHeaders()
    })
  }
  // 
  replyToPost(payload) {
    return fetch(POSTS_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: this.getPrivateHeaders()
    })
  }

  fetchReplyList(id){
    const REPLIES_URL = `${ROOT_URL}/api/v1/forum/posts/${id}/replies`;
    return fetch(REPLIES_URL, {headers: this.getPrivateHeaders()})
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