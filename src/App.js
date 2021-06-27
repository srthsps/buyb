import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Data from './components/Data'
import Login from './components/Login'
import Register from './components/Register'


const App = () => {

  const [show, setShow] = useState(false)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")


  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={Cards}/>
          <Route exact path="/data" component={Data} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
