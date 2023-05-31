import React, { useEffect } from 'react';
import styles from './Styles/LoginBody.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LoginForm = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <div className={styles.trailForm} data-aos="fade-left">
      <h2 className={styles.formHead}>Sign Up Now To Start Your Free Sales Trial.</h2>
      <p className={styles.formTxt}>Complete the form to start your free trial. Our team will be in touch to help you make the most of your trial.</p>
      <form>
        
        <input type='text' placeholder='First Name*' className={styles.loginFormInput}/>
        <input type='text' placeholder='Last Name*' className={styles.loginFormInput}/>
        <input type='email' placeholder='Work Email*' required className={styles.loginFormInput}/>
        <input type='number' placeholder='Phone Number*'  className={styles.loginFormInput}/>
        <select name='Job Title' className={styles.loginFormInput}>
          <option>Job Title</option>
          <option>Sales Manager</option>
          <option>Marketing/PR Managaer</option>
          <option>Customer Service Manager</option>
          <option>CxO/ General Manager</option>
        </select>
        <input type='text' placeholder='Company' className={styles.loginFormInput}/>
        <select name='Employee' className={styles.loginFormInput}>
          <option>Employee</option>
          <option>1 - 15 Employees</option>
          <option>16 - 50 Employees</option>
          <option>51 - 200 Employees</option>
          <option>201 - 500 Employees</option>
        </select>
        <select name='Country/Region' className={styles.loginFormInput}>
          <option>Country/Region</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Australia</option>
        </select>
        <label className={styles.loginFormCheckbox}>
          <input type="checkbox" name="Agreement" value="Agreement" />
          I agree to the <span className={styles.expertNum}> Main service Agreement</span>
        </label>
        <p>By registering, you confirm that you agree to the storing and processing of your personal data by LeadPlaner as described in the <span className={styles.expertNum}>Privacy Statement.</span></p>
        <input type='submit' value='Create Account' className={styles.loginFormSubmit}/>
      </form>
    </div>
  )
}

export default LoginForm
