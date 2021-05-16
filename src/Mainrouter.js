import React from 'react'
import './App.css'
import Imageurl from './components/Imageurl'
import tachyons from 'tachyons'
import Clarifai from 'clarifai';
import Navbar from './components/Navbar'
import Recognition from './components/Recognition'
import App from './App'
import Appfood from './components/components2/Appfood'
import Appcolor from './components/components2/Appcolor'
import {Route,Redirect,Switch} from 'react-router-dom'
import "./components/Navbar.css";

function Mainrouter() {
  return (
    <div className="tc pa3">
       {/*<h2 className="logo">Detection</h2>*/}
      <Navbar />
      <Switch>
          <Route path='/detectface' exact component={App}/>
          <Route path='/detectfoodname' exact component={Appfood}/>
          <Route path='/detectcolour' exact component={Appcolor}/>
          <Redirect from='/' exact to='/detectface' />
      </Switch>
    </div>
  );
}

export default Mainrouter;
