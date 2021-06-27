
import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/Cards';
import App from './App'
import {Auth0Provider} from '@auth0/auth0-react'
import useGlobalState from './store/useGlobalState'
import Context from './store/context'

const Index=()=>{
  const store = useGlobalState();
  return(
    <Context.Provider value={store}>
      <App/>
    </Context.Provider>
  )

}



ReactDOM.render(
<Auth0Provider
  domain="srthsps-dev.us.auth0.com"
  clientId="iefj6hhaUjvE82FJwobVa6AqznfY8A8K"
  redirectUri={window.location.origin}
  > 
  
<Index />



</Auth0Provider>
,
  document.getElementById('root')
)