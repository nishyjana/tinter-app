import React from 'react';
import Header from './Header';
import TinderCards from './Tindercards';
import SwipeButtons from './SwipeButtons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    //code
    <div className="App">
   
   <Router>
   
   <Switch>
   <Route path="/chat">
   <Header backButton="/" />
     <h1>im in caht page</h1>
   </Route>
   <Route path="/">
   <Header />
   <TinderCards/>
    <SwipeButtons/>
   </Route>

   </Switch>
   
   </Router>
   
   
    
    </div>
  );
}

export default App;
