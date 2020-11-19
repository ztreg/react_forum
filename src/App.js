import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx/Navbar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ForumContext } from './contexts/ForumContext';
import { UserContext } from './contexts/UserContext';
import forumKit from './data/forumKit';
import userKit from './data/userKit';
import Home from './pages/Home';
import Login from './pages/Login';
import PostCreate from './pages/PostCreate';
import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts';
import Signup from './pages/Signup';
import GlobalStyle from './theme/globalStyles';
import { MainContainer } from './theme/StyledComponents';

function App() {
  const ForumKit = new forumKit()
  const UserKit = new userKit()
  const [countries, setCountries] = useState(null)
  const [categories, setCategories] = useState(null)
  const [userData, setUserData] = useState(null)
  const [postData, setPostData] = useState(null)
  const [repliesData, setRepliesData] = useState(null)

  function fetchCountries() {

    if(!countries) {
      ForumKit.fetchCountries()
      .then(res => res.json())
      .then(data => {
        setCountries(data.results)
        console.log(data.results);
      })
      .catch(e => console.log(e))
    } 
  }

  useEffect(() => {
    fetchCountries()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <GlobalStyle />
      <MainContainer>
        {/* <Alert /> */}
        <UserContext.Provider value={{userData, setUserData}}>
          <ForumContext.Provider value={{countries, categories, setCategories, postData, setPostData, repliesData, setRepliesData}}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/signup" component={Signup}></Route>
              <Route exact path="/login" component={Login}></Route>
              <ProtectedRoute exact path="/posts/create" component={PostCreate} auth={UserKit.checkToken()}></ProtectedRoute>
              <ProtectedRoute exact path="/posts/:id" component={PostDetails}  auth={UserKit.checkToken()}></ProtectedRoute>
              <ProtectedRoute exact path="/posts" component={Posts} auth={UserKit.checkToken()}></ProtectedRoute>
            </Switch>
          </ForumContext.Provider>
        </UserContext.Provider>
      </MainContainer>

    </>
  );
}

export default App;
