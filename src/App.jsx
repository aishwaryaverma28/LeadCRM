import React from 'react'
import LoginBody from './Components/LoginBody'
import LoginHeader from './Components/LoginHeader'
import LoginFooter from './Components/LoginFooter'

function App() {

  return (
    <div className="dashboard">
    <LoginHeader/>
    <LoginBody/>
    <LoginFooter/>
    </div>
  )
}

export default App
