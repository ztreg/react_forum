const ROOT_URL = 'https://lab.willandskill.eu/'
const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries/`
const TEST_URL = `${ROOT_URL}/api/v1/`
// eslint-disable-next-line import/no-anonymous-default-export
export default class {
  fetchAllData() {
    return fetch(TEST_URL , this.getPublicHeaders())
  }

  fetchCountries() {
    return fetch(COUNTRIES_URL, this.getPublicHeaders())
  }

  getPublicHeaders () {
    return  {
      "Content-Type": "application/json"
    }
  }
}