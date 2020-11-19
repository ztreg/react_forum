

module.exports = {
  displayCountry: (number) => {
    let country = '';
    switch(number) {
      case 1:
        country = 'Sweden'
        break;
      case 2: 
        country = 'Denmark'
        break;
      case 3:
        country = 'Norway'
        break;
      case 4:
        country = 'Finland'
        break;
      case 5:
        country = 'Germany'
        break;

      default:
        country  = 'Unknown country'
        break;
    }
    return country
  }
}