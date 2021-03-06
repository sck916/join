<<<<<<< Updated upstream

import React from "react";
import './App.css';
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'
import SwipeCards from './components/SwipeCards'
import Login from './components/Login'
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/Header";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserContext from "./components/UserContext";
export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);
>>>>>>> Stashed changes

  return (
<<<<<<< Updated upstream
    <div className="App">
   

    <Login/>
     <RegistrationForm/>
     <h1>HELLO</h1>
     <Header/>
     <SwipeCards/>
     

     
    </div>
  );
}

export default App;
=======
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
            <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
>>>>>>> Stashed changes
