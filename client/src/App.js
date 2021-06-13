import React from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Cards from "./Cards";
import ChatList from "./ChatList";
import ChatScreen from "./ChatScreen";
import Register from "./Register";
import Login from "./Login";
import useLoginToken from "./useLoginToken";

function App() {
  const { token, setToken } = useLoginToken();

  if (!token) {
    // if user is not login, redirect to login page
    return (
      <Router>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/register">
          <Register setToken={setToken} />
        </Route>
      </Router>
    );
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <ChatList />
          </Route>
          <Route path="/swipe">
            <Cards />
          </Route>
          <Route exact path="/login">
            <Redirect to="/" />
          </Route>
          <Route exact path="/register">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Header />
      </Router>
    </div>
  );
}

export default App;
