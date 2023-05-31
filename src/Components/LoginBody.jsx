import React from 'react'
import LoginForm from './LoginForm'
import FreeTrail from './FreeTrail'
import styles from "./Styles/LoginBody.module.css"

const LoginBody = () => {
 
  return (
    <main className={styles.MainBody}>
        <FreeTrail/>
        <LoginForm/>
    </main>
  )
}

export default LoginBody