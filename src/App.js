import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx/Navbar';
import { UserContext } from './contexts/UserContext';
import forumKit from './data/forumKit';
import Home from './pages/Home';
import Signup from './pages/Signup';
import GlobalStyle from './theme/globalStyles';
import { MainContainer } from './theme/StyledComponents';

function App() {
  const ForumKit = new forumKit()
  // const [allData, setAllData] = useState(null)
  const [countries, setCountries] = useState(null)
  const [userData, setUserData] = useState(null)

  function fetchAllData() {
    if(!countries) {
      ForumKit.fetchCountries()
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCountries(data)
      })
      .catch(e => console.log(e))
    } else {
      console.log('has data already');
    }
  }

  useEffect(() => {
    fetchAllData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <GlobalStyle />

      <MainContainer>
        <UserContext.Provider value={{userData, setUserData}}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={Signup}></Route>
          </Switch>
        </UserContext.Provider>
      </MainContainer>

    </>
  );
}

export default App;
