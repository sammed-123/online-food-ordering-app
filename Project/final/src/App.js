import React,{useEffect,createContext,useReducer,useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import MainNavigation from './heading/MainNavigation';
import Basic from './home/Basic';
import Foodlist from './menu/Foodlist';
import Form from './order/Form';
import SignIn from './auth1/SignIn';
import Feedback from './feedback/Feedback';
import Signup from './auth1/Signup';
import {reducer,initialState} from './reducers/userReducer';

export const UserContext = createContext()

const Routing = () =>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext) 
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user)
    {
      dispatch({type:"USER",payload:user})
      history.push('/')
    }
    else
    {history.push('/signin')}
  },[])
  return (
    <main>
    <Switch>
      <Route path="/" exact>
        <Basic/>
      </Route>
      <Route path="/menu" exact>
        <Foodlist/>
      </Route>
      <Route path="/order" exact>
        <Form/>
      </Route>
      <Route path="/feedback" exact>
        <Feedback/>
      </Route>
      <Route path="/signin" exact>
        <SignIn/>
      </Route>
      <Route path="/signup" exact>
        <Signup/>
      </Route>
    </Switch>
  </main>
  )
}

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <Router>
          <MainNavigation/>
          <Routing/>
      </Router>
  </UserContext.Provider>
  );
};

export default App;
