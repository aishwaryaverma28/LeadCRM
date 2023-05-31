import React, { useEffect } from 'react'
import styles from"./Styles/LoginBody.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FreeTrail = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles.LoginLeftSection} data-aos="fade-right">
        <h1 className={styles.leftSecHeading}>Start Your Free Trail.</h1>
        <br/>

        <h2>No credit card required, no software to install.</h2>
        
        <p className={styles.listHeading}> With your 30-day trial, you get:</p>
        <ul className={styles.listItems}>
            <li><i className="fa-solid fa-snowflake"></i>Pre-loaded data or upload your own</li>
            <li><i className="fa-solid fa-snowflake"></i>Pre-configured processes, reports, and dashboards</li>
            <li><i className="fa-solid fa-snowflake"></i>Guided experiences for sales reps, leaders, and administrators</li>
            <li><i className="fa-solid fa-snowflake"></i>Online training and live onboarding webinars</li>
        </ul>
        <p>Questions? Talk to an expert: <span className={styles.expertNum}>1800-420-7332</span></p>
        <img src='https://www.leadplaner.com/dashboard/login/images/crm.svg' alt='crm image'/>
    </section>
  )
}

export default FreeTrail