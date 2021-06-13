import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Cards from './Cards';
import ChatList from './ChatList';
import ChatScreen from './ChatScreen';
import Login from './Login'
import useLoginToken from './useLoginToken'

function App() {
  
  const { token, setToken } = useLoginToken();

  if(!token) { // if user is not login, redirect to login page
    return <Login setToken={setToken} />
  }

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/chats/:person'>
            <ChatScreen />
          </Route>
          <Route path='/chats'>
            <ChatList />
          </Route>
          <Route path='/swipe'>
            <Cards />
          </Route>
        </Switch>
        <Header />
      </Router>

    </div>
  );
}

export default App;
