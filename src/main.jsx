import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
// import Test from './Test.jsx'
// import Test2 from './Test2.jsx'
import Test3 from './Test3.jsx'
import Test4 from './Test4.jsx'
import Landing from './Landing.jsx'
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Dashboard from './Dashboard.jsx'
import './index.css'

import { ContextProvider } from './contexts/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    {/* <App /> */}
    {/* <Test />
    <Test2 />
    <Landing /> 
    <Login />
    <Dashboard />
    <Test3 /> 
    <Test4 /> */}
    
    <Profile />
  </ContextProvider>,
)
